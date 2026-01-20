.PHONY: help dev dev-docker dev-docker-down build build-docker build-docker-tag push-docker deploy-docker prod-docker prod-docker-down

help: ## Show this help message
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Available targets:'
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  %-20s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

dev: ## Run development server locally
	npm run dev

dev-docker: ## Run development server with Docker
	npm run dev:docker

dev-docker-down: ## Stop development Docker containers
	npm run dev:docker:down

build: ## Build the project
	npm run build

build-docker: ## Build Docker image
	npm run build:docker

build-docker-tag: ## Build Docker image with version tag
	npm run build:docker:tag

push-docker: ## Push Docker image to registry
	npm run push:docker

deploy-docker: ## Build and push Docker image
	npm run deploy:docker

prod-docker: ## Start production Docker containers
	npm run prod:docker

prod-docker-down: ## Stop production Docker containers
	npm run prod:docker:down

