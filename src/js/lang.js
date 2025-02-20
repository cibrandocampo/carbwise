document.addEventListener("DOMContentLoaded", function () {
    fetch("translations.json")
        .then(response => response.json())
        .then(translations => {
            let userLang = navigator.language.substring(0, 2); // Get browser language
            let langData = translations[userLang] || translations["en"]; // Default to English
            
            document.getElementById("title").innerText = langData.title;
            document.getElementById("slogan").innerText = langData.slogan;
            //document.getElementById("description").innerText = langData.description;
            document.getElementById("search").setAttribute("placeholder", langData.search);
            document.getElementById("product-header").innerText = langData.product_header;
            document.getElementById("grams-header").innerText = langData.grams_header;
            document.getElementById("carbs-header").innerText = langData.carbs_header;
            document.getElementById("glycemic-header").innerText = langData.glycemic_header;
            document.getElementById("data-source").innerText = langData.data_source;
            document.getElementById("copyright").innerHTML = langData.copyright;
        })
        .catch(error => console.error("Error loading translations:", error));
});
