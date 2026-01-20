# Development with Docker

This directory contains the Docker Compose configuration for local development.

## Quick Start

### Start development server

```bash
# From project root
make dev-docker

# Or directly
cd dev
docker-compose up
```

The application will be available at `http://localhost:8080`.

### Stop server

```bash
# From project root
make dev-docker-down

# Or directly
cd dev
docker-compose down
```

### View logs

```bash
cd dev
docker-compose logs -f
```

## Features

- **Hot reload**: Changes in `src/` are reflected immediately without rebuilding
- **Port**: 8080 (configurable via `.env` file)
- **Volumes**: Source code is mounted as read-only volume
- **Health check**: Automatically verifies server is running

## Environment Variables

Create a `.env` file in the project root (see `.env.example`):

```env
NGINX_VERSION=alpine
NGINX_HTTP_PORT=8080
COMPOSE_PROJECT_NAME=carbwise
```
