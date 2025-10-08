# FANDBA UK Website

This is the official FANDBA UK website, a Next.js application providing information about IT services, cybersecurity solutions, AI automation, and cloud services.

## Features

- Modern Next.js 13+ application with App Router
- Responsive design with Tailwind CSS
- Security-focused implementation with OWASP Top 10 compliance
- Google Analytics integration
- SEO optimized
- Docker-ready deployment

## Prerequisites

- Node.js 18+ 
- Docker and Docker Compose (for containerized deployment)

## Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Visit `http://localhost:3000` in your browser

## Docker Deployment

### Build and Run with Docker

Build the Docker image:
```bash
docker build -t fandba-website .
```

Run the container:
```bash
docker run -p 3000:3000 -e NEXT_PUBLIC_GA_ID=G-7F1JW29SW7 fandba-website
```

### Build and Run with Docker Compose

Build and start the application with Docker Compose:
```bash
docker-compose up -d --build
```

To stop the application:
```bash
docker-compose down
```

### Environment Variables

The following environment variables can be set:

- `NODE_ENV`: Set to 'production' for production builds (default: 'production' in Docker)
- `NEXT_PUBLIC_GA_ID`: Google Analytics tracking ID (default: G-7F1JW29SW7)

## Production Deployment

For production deployment, it's recommended to use the Docker Compose setup with additional security measures like:

1. A reverse proxy (e.g., Nginx) for SSL termination
2. Proper domain configuration
3. Monitoring and logging solutions

## Security

This application implements security best practices including:
- Security headers via middleware
- Input validation and sanitization
- OWASP Top 10 compliance
- Protection against common vulnerabilities

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.
