FROM node:latest

# The official image has verbose logging; change it to npm's default
ENV NPM_CONFIG_LOGLEVEL notice

# Add the remaining project files
ADD . .

RUN yarn

# Set the default host/port
ENV HOST 0.0.0.0
ENV PORT 3016
EXPOSE 3016

# Build distribution
RUN yarn build:prod

# Start the server by default
CMD yarn prod
