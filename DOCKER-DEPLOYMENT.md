# Docker Deployment Guide for FANDBA Website with SEO Optimizations

## Overview
This guide provides detailed instructions for deploying the FANDBA website using Docker and Docker Compose. The website includes comprehensive SEO optimizations including structured data, canonical URLs, enhanced metadata, and optimized content structure for improved Google Search Console performance.

## Prerequisites

- Docker Engine (v20.10.0 or higher)
- Docker Compose (v2.0.0 or higher)
- Git (for cloning the repository)

## Quick Start with Docker Compose

The easiest way to deploy the application is using Docker Compose:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Build and start the application:
   ```bash
   docker-compose up -d --build
   ```

3. Access the application at `http://localhost:3000`

4. Check the logs:
   ```bash
   docker-compose logs -f app
   ```

5. Stop the application:
   ```bash
   docker-compose down
   ```

## Standalone Docker Deployment

### Building the Image

Build the Docker image from the project root directory:

```bash
docker build -t fandba-website .
```

### Running the Container

Run the container with the default configuration:

```bash
docker run -p 3000:3000 fandba-website
```

Run with custom environment variables:

```bash
docker run -p 3000:3000 -e NEXT_PUBLIC_GA_ID=G-7F1JW29SW7 fandba-website
```

Run with detached mode and name:

```bash
docker run -d -p 3000:3000 --name fandba-website fandba-website
```

## Production Deployment Considerations

### Using Reverse Proxy

For production deployments, it's recommended to use a reverse proxy like Nginx. Uncomment and configure the nginx service in `docker-compose.yml`:

1. Create an `nginx.conf` file that proxies requests to the Next.js app
2. Optionally set up SSL certificates
3. Update the docker-compose.yml file

### SSL/HTTPS Configuration

For HTTPS in production, you can:

1. Use a reverse proxy with SSL termination
2. Obtain SSL certificates using Let's Encrypt
3. Configure your domain's DNS to point to your server

### Environment Variables

The application uses the following environment variables:

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| NODE_ENV | Node.js environment | production | No |
| NEXT_PUBLIC_GA_ID | Google Analytics tracking ID | G-7F1JW29SW7 | No |

### Volumes for Persistent Data

The current setup includes a volume mount for Next.js cache:

```yaml
volumes:
  - ./logs:/app/.next/cache
```

For production, you might want to add more persistent volumes for logs, file uploads, etc.

## SEO Features in Docker Deployment

All SEO optimizations are automatically included in the Docker build:

- **Structured Data**: JSON-LD schemas for Organization, LocalBusiness, and Service types
- **Canonical URLs**: Proper canonical URL implementation across all pages
- **OpenGraph & Twitter Cards**: Enhanced metadata for rich previews
- **Heading Hierarchy**: Optimized content structure for better indexing
- **Sitemap**: Automatically generated sitemap.xml
- **Robots.txt**: Properly configured for search engine crawlers

These features are built into the application during the Docker build process and are immediately available when the container starts.

### Verifying SEO Features in Deployment

To verify that SEO features are working in your Docker deployment:

1. Check the site is running: `docker-compose ps`
2. Access the homepage and view source to confirm structured data is present
3. Check the sitemap at `/sitemap.xml`
4. Verify robots.txt at `/robots.txt`
5. Use Google Search Console to verify structured data and sitemap

## Production Deployment Considerations

## Scaling the Application

To scale the application, you can increase the number of replicas:

```bash
docker-compose up -d --scale app=3
```

## Health Checks

To monitor the application's health, you can add health checks to the docker-compose.yml:

```yaml
services:
  app:
    # ... other configuration
    healthcheck:
      test: ["CMD", "wget", "--quiet", "--tries=1", "--spider", "http://localhost:3000"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s
```

## Docker Image Optimization

The Dockerfile is optimized for production with:

- Multi-stage build approach (implicitly through Next.js build process)
- Use of lightweight Alpine image
- Proper caching of dependencies
- Production-only dependency installation

## Troubleshooting

### Common Issues

1. **Port already in use**: If port 3000 is already in use, change the host port in docker-compose.yml:
   ```yaml
   ports:
     - "3001:3000"  # Use port 3001 on the host
   ```

2. **Container won't start**: Check the logs:
   ```bash
   docker logs fandba-website
   ```

3. **Build fails**: Ensure you have enough memory allocated to Docker (at least 4GB recommended).

### Useful Commands

- View container logs: `docker logs fandba-website`
- Execute commands in running container: `docker exec -it fandba-website sh`
- Check container resource usage: `docker stats fandba-website`
- Remove container: `docker rm fandba-website`
- Remove image: `docker rmi fandba-website`

## Security Best Practices

1. **Keep images updated**: Regularly rebuild images with the latest base image
2. **Use non-root user**: Consider running the container as a non-root user
3. **Limit resource usage**: Set resource limits in production
4. **Enable content security policy**: Already configured in middleware
5. **Regular security scanning**: Scan images for vulnerabilities

## Backup and Recovery

For backup strategies in production:

1. Backup persistent volumes regularly
2. Version control for the Docker configuration files
3. Backup environment variables and secrets separately