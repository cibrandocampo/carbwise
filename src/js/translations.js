export async function loadTranslations() {
  try {
    const response = await fetch("translations.json");
    const translations = await response.json();
    const userLang = navigator.language.substring(0, 2);
    const langData = translations[userLang] || translations["en"];
    
    const titleEl = document.getElementById("title");
    const sloganEl = document.getElementById("slogan");
    const smallSloganEl = document.getElementById("small-slogan");
    const searchEl = document.getElementById("search");
    const productHeaderEl = document.getElementById("product-header");
    const gramsHeaderEl = document.getElementById("grams-header");
    const carbsHeaderEl = document.getElementById("carbs-header");
    const glycemicHeaderEl = document.getElementById("glycemic-header");
    const dataSourceEl = document.getElementById("data-source");
    const copyrightEl = document.getElementById("copyright");
    
    if (titleEl) titleEl.innerText = langData.title;
    if (sloganEl) sloganEl.innerText = langData.slogan;
    if (smallSloganEl) smallSloganEl.innerText = langData.slogan;
    if (searchEl) searchEl.setAttribute("placeholder", langData.search);
    if (productHeaderEl) productHeaderEl.innerText = langData.product_header;
    if (gramsHeaderEl) gramsHeaderEl.innerText = langData.grams_header;
    if (carbsHeaderEl) carbsHeaderEl.innerText = langData.carbs_header;
    if (glycemicHeaderEl) glycemicHeaderEl.innerText = langData.glycemic_header;
    if (dataSourceEl) dataSourceEl.innerText = langData.data_source;
    if (copyrightEl) copyrightEl.innerHTML = langData.copyright;
  } catch (error) {
    console.error("Error loading translations:", error);
  }
}

