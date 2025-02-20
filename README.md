# CarbWise - Carbohydrate Calculator

CarbWise is a web application developed with HTML5, JavaScript, and CSS that provides an agile way to consult the carbohydrate values of most food products. Its primary goal is to serve as a quick lookup tool for people with type 1 diabetes, helping them calculate the necessary insulin dosage by easily accessing carbohydrate information.

## Demo

Check out the live demo at: [https://carbwise.naseira.es](https://carbwise.naseira.es)

## Features

- **Quick Carbohydrate Lookup:**  
  Easily search for carbohydrate values across a wide range of food products.

- **Dynamic Filtering:**  
  Fast search functionality with accent-insensitive filtering to enhance usability.

- **Categorized Display:**  
  Products are grouped by category, making it easier to locate specific items.

- **Multi-Language Support:**  
  The application supports multiple languages. The JSON data includes translations for product names and categories, ensuring a localized experience for users.

- **Reliable Data Source:**  
  All the information is based on trustworthy sources. The displayed data is derived from a study by Serafín Murillo, Nutrition and Sports Advisor for the Diabetes Foundation and the Novo Nordisk Diabetes Foundation.

- **Responsive Design:**  
  Optimized for both desktop and mobile devices, ensuring a smooth user experience on all screen sizes.

- **Easy Deployment:**  
  Deploy the project quickly using the provided `docker-compose` configuration.

## Technologies Used

- **HTML5:** Semantic and accessible markup.
- **JavaScript:** Dynamic data loading and search functionality (powered by jQuery).
- **CSS:** Styling with Bootstrap and custom styles.
- **Docker:** Simplified deployment using Docker and docker-compose.

## Installation

### Running Locally

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/carbwise.git
   cd carbwise
   ```

2. **Open the Project:**

   Serve the project using your preferred static server. For example, you could use [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in Visual Studio Code or another similar tool.

3. **Navigate to the Application:**

   Open your browser and visit the appropriate local URL (e.g., `http://localhost:5500`).

### Deployment with Docker

The project includes a `docker-compose.yml` file for easy deployment.

1. **Ensure Docker is Installed:**  
   Make sure Docker and docker-compose are installed on your machine.

2. **Build and Run the Container:**

   In the project root, run:

   ```bash
   docker-compose up --build
   ```

3. **Access the Application:**  
   Once the container is running, navigate to `http://localhost:<PORT>` (adjust the port as configured in your docker-compose file).

## Usage

- **Search Bar:**  
  Type in the search input to filter products by name or category. The search function is designed to ignore accents, providing a seamless search experience.

- **Dynamic Table:**  
  The table is dynamically populated from a JSON file containing product data. Products are sorted alphabetically by category and by product name within each category.

- **Multi-Language Interface:**  
  Thanks to the JSON file containing translations, the application automatically displays category and product names in the user's browser language, falling back to Spanish if the preferred language is not available.

- **Fixed Header:**  
  The header—including the title, slogan, search bar, and table header—remains fixed at the top of the page, ensuring key information is always visible.

## Contributing

Contributions are welcome! If you’d like to help improve CarbWise, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License.

## Contact

For any inquiries or feedback, please contact [Cibrán Docampo] at [hello@cibran.es].
