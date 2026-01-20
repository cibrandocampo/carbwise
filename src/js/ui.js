import { getGlycemicIndexColor } from "./utils.js";

export function renderTable(categories, sortedCategories, language) {
  const tableBody = document.querySelector("#dataTable tbody");
  if (!tableBody) return;
  
  let html = "";
  
  sortedCategories.forEach((cat) => {
    html += `<tr class="table-primary category" data-category="${escapeHtml(cat)}">
              <td colspan="4"><strong>${escapeHtml(cat)}</strong></td>
            </tr>`;
    
    categories[cat].forEach((item) => {
      const gramsPer100g = ((100 / item.grams_per_cho) * 10).toFixed(1);
      const gi = item.glycemic_index;
      const giDisplay = gi !== null ? gi : "-";
      const giColor = getGlycemicIndexColor(gi);
      const productName = item.name[language] || item.name["es"] || "";
      
      html += `<tr class="product" data-category="${escapeHtml(cat)}">
                <td>${escapeHtml(productName)}</td>
                <td>${item.grams_per_cho}g</td>
                <td>${gramsPer100g}g</td>
                <td style="color: ${giColor};">${giDisplay}</td>
              </tr>`;
    });
  });
  
  tableBody.innerHTML = html;
}

export function initializeSearch(filterCallback) {
  const searchInput = document.getElementById("search");
  if (!searchInput) return;
  
  searchInput.addEventListener("keyup", (e) => {
    const value = e.target.value;
    filterCallback(value);
  });
}

// Escape HTML to prevent XSS attacks
function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

