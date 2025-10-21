# Use the official Node.js 18 Alpine image
# https://hub.docker.com/_/node
FROM node:18-alpine

# Set environment variables
ENV NODE_ENV=production

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies (including dev dependencies for the build)
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Create a non-root user for better security
RUN addgroup -g 1001 -S nodejs &&\
    adduser -S nextjs -u 1001

# Install only production dependencies for the final image
RUN npm ci --only=production && npm cache clean --force

# Change ownership of the app directory to the nextjs user
RUN chown -R nextjs:nodejs /app
USER nextjs

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]