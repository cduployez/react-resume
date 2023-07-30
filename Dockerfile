### Build stage
FROM node:18.16.1 as build-stage

# Define working directory
WORKDIR /app

# Install dependencies
COPY package*.json /app/
RUN npm install

# Copy dependencies
COPY ./ /app/

# Set the PUBLIC_URL environment variable containing BASE_HREF
ENV PUBLIC_URL /react-resume

# Build application
RUN npm run build

### Run stage
FROM nginx:1.15

# Copy build output
COPY --from=build-stage /app/build/ /usr/share/nginx/html

# Copy default nginx configuration
COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/default.conf

# Override entrypoint based on:
# - https://github.com/nginxinc/docker-nginx/blob/master/Dockerfile-alpine-slim.template
# - https://stackoverflow.com/questions/40608055/running-a-bash-script-before-startup-in-an-nginx-docker-container
# ENTRYPOINT ["./custom-entrypoint.sh"]
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
