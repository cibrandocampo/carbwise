import { getBrowserLanguage } from "./utils.js";

export async function loadFoodData() {
  try {
    const response = await fetch("data/food.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error loading food data:", error);
    throw error;
  }
}

export function organizeDataByCategory(data, language) {
  const categories = {};
  
  data.products.forEach((item) => {
    const catObj = data.categories.find((cat) => cat.id === item.category);
    // Fallback to Spanish if language not available
    const categoryTranslation =
      catObj?.translations[language] || catObj?.translations["es"];
    
    if (!categories[categoryTranslation]) {
      categories[categoryTranslation] = [];
    }
    categories[categoryTranslation].push(item);
  });
  
  return categories;
}

export function sortCategoriesAndProducts(categories, language) {
  const sortedCategories = Object.keys(categories).sort();
  
  sortedCategories.forEach((cat) => {
    categories[cat].sort((a, b) => {
      const nameA = a.name[language]?.toLowerCase() || "";
      const nameB = b.name[language]?.toLowerCase() || "";
      return nameA.localeCompare(nameB);
    });
  });
  
  return sortedCategories;
}

