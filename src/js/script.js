$(document).ready(function() {
    // Get the browser language (first two characters only)
    var currentLanguage = navigator.language.slice(0, 2);

    // Function to load the data and display the table
    function loadData() {
        $.getJSON("../data/food.json", function(data) {
            var tableBody = "";
            var categories = {};

            // Group products by category using the category ID
            data.products.forEach(function(item) {
                var catObj = data.categories.find(function(cat) {
                    return cat.id === item.category;
                });
                // Get the category translation based on the current language,
                // falling back to Spanish if not found
                var categoryTranslation = catObj.translations[currentLanguage] || catObj.translations["es"];

                // Add the product to the corresponding category
                if (!categories[categoryTranslation]) {
                    categories[categoryTranslation] = [];
                }
                categories[categoryTranslation].push(item);
            });

            // Get and alphabetically sort the keys (categories)
            var sortedCategories = Object.keys(categories).sort();

            // Generate the table rows with sorted categories and products
            sortedCategories.forEach(function(cat) {
                // Sort the products within the category alphabetically
                categories[cat].sort(function(a, b) {
                    var nameA = a.name[currentLanguage].toLowerCase();
                    var nameB = b.name[currentLanguage].toLowerCase();
                    return nameA.localeCompare(nameB);
                });

                // Header row for the category
                tableBody += `<tr class='table-primary category' data-category='${cat}'><td colspan='4'><strong>${cat}</strong></td></tr>`;

                // Rows for each product in the category
                categories[cat].forEach(function(item) {
                    let grams_per_100g = ((100 / item.grams_per_cho) * 10).toFixed(1);

                    // Determine glycemic index display and its color
                    let gi = item.glycemic_index;
                    let gi_display = (gi !== null) ? gi : '-';
                    let gi_color = "";
                    if (gi !== null) {
                        if (gi < 50) {
                            gi_color = "green";
                        } else if (gi >= 50 && gi <= 75) {
                            gi_color = "orange";
                        } else if (gi > 75) {
                            gi_color = "red";
                        }
                    }
                    
                    tableBody += `<tr class='product' data-category='${cat}'>
                                    <td>${item.name[currentLanguage]}</td>
                                    <td>${item.grams_per_cho}g</td>
                                    <td>${grams_per_100g}g</td>
                                    <td style="color: ${gi_color};">${gi_display}</td>
                                  </tr>`;
                });
            });
            $("#dataTable tbody").html(tableBody);
        });
    }

    // Function to remove accents from a string
    function removeAccents(str) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    // Initialize data loading when the page loads
    loadData();

    // Search function that ignores accents
    $("#search").on("keyup", function() {
        var value = removeAccents($(this).val().toLowerCase());
        $("#dataTable tbody tr").hide();

        $("#dataTable tbody tr.product").filter(function() {
            var text = removeAccents($(this).text().toLowerCase());
            var category = removeAccents($(this).data("category").toLowerCase());
            return text.includes(value) || category.includes(value);
        }).show().each(function() {
            // Ensure that the corresponding category header is displayed
            $(this).prevAll(".category").first().show();
        });
    });
});
