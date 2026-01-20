import { getBrowserLanguage } from "./utils.js";
import { loadTranslations } from "./translations.js";
import { loadFoodData, organizeDataByCategory, sortCategoriesAndProducts } from "./data.js";
import { renderTable, initializeSearch } from "./ui.js";
import { removeAccents } from "./utils.js";

async function init() {
  try {
    await loadTranslations();
    const currentLanguage = getBrowserLanguage();
    const foodData = await loadFoodData();
    const categories = organizeDataByCategory(foodData, currentLanguage);
    const sortedCategories = sortCategoriesAndProducts(categories, currentLanguage);
    
    renderTable(categories, sortedCategories, currentLanguage);
    
    initializeSearch((searchValue) => {
      const normalizedValue = removeAccents(searchValue.toLowerCase());
      const rows = document.querySelectorAll("#dataTable tbody tr");
      
      rows.forEach((row) => {
        row.style.display = "none";
      });
      
      const productRows = document.querySelectorAll("#dataTable tbody tr.product");
      productRows.forEach((row) => {
        const text = removeAccents(row.textContent.toLowerCase());
        const category = removeAccents(
          row.getAttribute("data-category")?.toLowerCase() || ""
        );
        
        if (text.includes(normalizedValue) || category.includes(normalizedValue)) {
          row.style.display = "";
          // Show corresponding category header when product matches
          let categoryRow = row.previousElementSibling;
          while (categoryRow && !categoryRow.classList.contains("category")) {
            categoryRow = categoryRow.previousElementSibling;
          }
          if (categoryRow) {
            categoryRow.style.display = "";
          }
        }
      });
    });
  } catch (error) {
    console.error("Error initializing application:", error);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

