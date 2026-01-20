export function removeAccents(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export function getBrowserLanguage() {
  return navigator.language.slice(0, 2);
}

// Returns color based on glycemic index: green (low), orange (moderate), red (high)
export function getGlycemicIndexColor(gi) {
  if (gi === null) return "";
  if (gi < 50) return "green";
  if (gi >= 50 && gi <= 75) return "orange";
  if (gi > 75) return "red";
  return "";
}

