# Multi-stage
# 1) Node image for building frontend assets
# 2) nginx stage to serve frontend assets

# Name the node stage "builder"
FROM node:14 AS builder
# Set working directory
WORKDIR /app
# Copy all files from current directory to working dir in image
COPY . .
# install node modules and build assets
RUN npm install && npm run build

# nginx state for serving content
FROM nginx:alpine
# Set nginx configuration file
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
# Copy static assets from builder stage
COPY --from=builder /app/build /usr/share/nginx/html
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]

# -> docker build -t xm-exercise .
# -> docker run --name xm-exercise -p 3000:80 xm-exercise