# CarbWise - Carbohydrate Calculator

[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/cibrandocampo/carbwise)
[![Docker Hub](https://img.shields.io/badge/Docker%20Hub-Image-blue?logo=docker)](https://hub.docker.com/r/cibrandocampo/carbwise)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/cibrandocampo/carbwise)](https://github.com/cibrandocampo/carbwise/releases)
[![Docker Pulls](https://img.shields.io/docker/pulls/cibrandocampo/carbwise)](https://hub.docker.com/r/cibrandocampo/carbwise)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

CarbWise is a lightweight web application that facilitates the consultation and management of carbohydrates for people with diabetes. It provides an agile way to consult the carbohydrate values of most food products based on official data sources, helping users calculate the necessary insulin dosage by easily accessing accurate carbohydrate information. The application can be easily deployed using Docker.

## Data Sources

The food database is based on official and reliable sources:

- **Fundación para la Diabetes**: [https://www.fundacionparalasalud.org/upload/publicaciones_ficheros/71/TABLAHC.pdf](https://www.fundacionparalasalud.org/upload/publicaciones_ficheros/71/TABLAHC.pdf)
- **Roche**: [https://www.aprendizdediabetes.es/Guia-alimentaria.pdf](https://www.aprendizdediabetes.es/Guia-alimentaria.pdf)
- **Novo Nordisk**: [https://www.fundacionparalasalud.org/upload/publicaciones_ficheros/71/TABLAHC.pdf](https://www.fundacionparalasalud.org/upload/publicaciones_ficheros/71/TABLAHC.pdf)
- **Serafín Murillo, Dietista-Nutricionista. Especialista en Diabetes**: [https://www.fundacionparalasalud.org/sabercomer/materiales/g/22](https://www.fundacionparalasalud.org/sabercomer/materiales/g/22)

## Demo

Check out the live demo at: [https://cibrandocampo.github.io/carbwise](https://cibrandocampo.github.io/carbwise)

## Quick Start

### Using Docker Compose

The easiest way to deploy CarbWise is using Docker Compose:

```bash
make prod-docker
```

The application will be available at `http://localhost:8080` (or the port configured in your `.env` file).

To stop the application:

```bash
make prod-docker-down
```

### Using Docker

You can also run CarbWise directly with Docker:

```bash
docker pull cibrandocampo/carbwise:latest
docker run -d -p 8080:80 --name carbwise cibrandocampo/carbwise:latest
```

The application will be available at `http://localhost:8080`.

For more detailed deployment instructions and all available commands, see the [Installation](#installation) section below or run `make help`.

## Features

- **Quick Carbohydrate Lookup:**  
  Easily search for carbohydrate values across a wide range of food products.

- **Dynamic Filtering:**  
  Fast search functionality with accent-insensitive filtering to enhance usability.

- **Categorized Display:**  
  Products are grouped by category, making it easier to locate specific items.

- **Multi-Language Support:**  
  The application supports multiple languages. The JSON data includes translations for product names and categories, ensuring a localized experience for users.

- **Glycemic Index Display:**  
  Shows the glycemic index for each product with color-coded indicators (green for low, orange for moderate, red for high).

- **Reliable Data Source:**  
  All the information is based on official and reliable sources. The displayed data is derived from the Fundación para la Diabetes, Roche, Novo Nordisk, and Serafín Murillo (Dietista-Nutricionista, Especialista en Diabetes). See the [Data Sources](#data-sources) section above for detailed references.

- **Responsive Design:**  
  Optimized for both desktop and mobile devices, ensuring a smooth user experience on all screen sizes.

- **Easy Deployment:**  
  Deploy the project quickly using Docker and docker-compose.

## Technologies Used

- **HTML5:** Semantic and accessible markup.
- **JavaScript (ES6 and above):** Modern JavaScript with ES6 modules for better code organization and maintainability.
- **CSS:** Styling with Bootstrap and custom styles.
- **Docker:** Containerized deployment using Docker and docker-compose.
- **Nginx:** Web server for production deployment.

## Installation

### Running Locally

```bash
git clone https://github.com/cibrandocampo/carbwise.git
cd carbwise
make dev
```

Open your browser and visit http://localhost:8080

### Development with Docker

For development with hot reload:

1. **Configure Environment (Optional):**

   Copy `.env.example` to `.env` and adjust settings if needed:
   ```bash
   cp .env.example .env
   ```

2. **Start Development Container:**

   ```bash
   make dev-docker
   ```

3. **Access the Application:**  
   Navigate to `http://localhost:8080` (or the port configured in your `.env` file).

### Production Deployment

The project includes Docker configuration for production deployment.

1. **Configure Environment:**

   Copy `.env.example` to `.env` and adjust settings:
   ```bash
   cp .env.example .env
   ```

2. **Build and Run with Docker Compose:**

   ```bash
   make prod-docker
   ```

3. **Or Build Docker Image:**

   ```bash
   make build-docker
   docker run -d -p 8080:80 --name carbwise carbwise:latest
   ```

For detailed deployment instructions, see [DEPLOY.md](DEPLOY.md).

## Development

You can see all available commands with:
```bash
make help
```

### Project Structure

```
carbwise/
├── .github/
│   └── workflows/          # GitHub Actions workflows
├── dev/
│   ├── docker-compose.yaml # Development Docker Compose
│   └── README.md           # Development documentation
├── src/
│   ├── css/
│   │   └── styles.css
│   ├── data/
│   │   └── food.json       # Food data with translations
│   ├── js/
│   │   ├── main.js         # Application entry point
│   │   ├── data.js         # Data loading and processing
│   │   ├── translations.js # Translation management
│   │   ├── ui.js           # UI rendering and interactions
│   │   └── utils.js        # Utility functions
│   ├── index.html
│   └── translations.json
├── .dockerignore
├── .env.example
├── docker-compose.yaml     # Production Docker Compose
├── Dockerfile              # Production Docker image
├── DEPLOY.md               # Deployment guide
├── nginx.conf              # Nginx configuration
├── package.json
└── README.md
```

## Usage

- **Search Bar:**  
  Type in the search input to filter products by name or category. The search function is designed to ignore accents, providing a seamless search experience.

- **Dynamic Table:**  
  The table is dynamically populated from a JSON file containing product data. Products are sorted alphabetically by category and by product name within each category.

- **Multi-Language Interface:**  
  Thanks to the JSON file containing translations, the application automatically displays category and product names in the user's browser language, falling back to Spanish if the preferred language is not available.

- **Fixed Header:**  
  The header—including the title, slogan, search bar, and table header—remains fixed at the top of the page, ensuring key information is always visible.

- **Glycemic Index:**  
  The glycemic index is displayed with color coding: green for low (≤55), orange for moderate (56-69), and red for high (≥70).

## Docker Image

The application is available as a Docker image on Docker Hub:

```bash
docker pull cibrandocampo/carbwise:latest
docker run -d -p 8080:80 --name carbwise cibrandocampo/carbwise:latest
```

## Support

- **Issues**: Open an issue in the GitHub repository
- **Email**: For questions or doubts, feel free to send an email to hello@cibran.es

## License

This project is licensed under the MIT License.
