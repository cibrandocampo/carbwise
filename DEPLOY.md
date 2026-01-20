# Deployment Guide

## Development

### Option 1: Simple HTTP server
```bash
make dev
```

### Option 2: Docker Compose (recommended)
```bash
make dev-docker
# Or
cd dev && docker-compose up
```

Access at: http://localhost:8080

## Production

### 1. Build Docker image

```bash
# Build with latest tag
make build-docker

# Build with specific version
docker build -t carbwise:v1.0.0 .
```

### 2. Test image locally

```bash
docker run -d -p 8080:80 --name carbwise-test carbwise:latest
```

### 3. Push to Docker Hub

```bash
# Login
docker login

# Tag with your username
docker tag carbwise:latest cibrandocampo/carbwise:latest
docker tag carbwise:latest cibrandocampo/carbwise:v1.0.0

# Push
docker push cibrandocampo/carbwise:latest
docker push cibrandocampo/carbwise:v1.0.0
```

### 4. Deploy to production

#### Option A: Docker Compose

```bash
# Set environment variables
export DOCKER_IMAGE=cibrandocampo/carbwise
export VERSION=v1.0.0
export NGINX_HTTP_PORT=80

# Start
make prod-docker
# Or
docker-compose up -d
```

#### Option B: Direct Docker run

```bash
docker pull cibrandocampo/carbwise:latest
docker run -d \
  --name carbwise \
  -p 80:80 \
  --restart unless-stopped \
  cibrandocampo/carbwise:latest
```

### 5. Verify deployment

```bash
# Health check
curl http://localhost/health

# View logs
docker logs -f carbwise
```

## Image Size

The final image should be ~20-30 MB (nginx:alpine + code).

## CI/CD

The project includes GitHub Actions workflows for automated builds:
- `.github/workflows/build-push.yml` - Builds and pushes images on push to master/develop or on release
- `.github/workflows/update-dependencies.yml` - Scheduled updates for stable releases
