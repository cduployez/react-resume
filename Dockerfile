### Build stage
FROM node:18.16.1 as build-stage

# Define working directory
WORKDIR /app

# Install dependencies
COPY package*.json /app/
RUN npm install -s

# Copy dependencies
COPY ./ /app/

# Set the PUBLIC_URL environment variable containing BASE_HREF
ENV PUBLIC_URL /react-resume

# Name of environment (local, empty for production)
ARG environment=production
# Build application
RUN npm run build:$environment

### Run stage
FROM nginx:1.15

# Copy build output
COPY --from=build-stage /app/build/ /usr/share/nginx/html

# Copy default nginx configuration
COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/default.conf
