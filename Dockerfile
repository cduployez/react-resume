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
ARG PUBLIC_URL
ENV PUBLIC_URL $PUBLIC_URL

# Build application
RUN npm run build

### Run stage
FROM nginx:1.15

# Copy default nginx configuration
COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/default.conf

# Copy build output
COPY --from=build-stage /app/build/ /usr/share/nginx/html
