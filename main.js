async function getItems() {
    fetch('results.json')
        .then((res) => res.json())
        .then((data) => {
            // --------Start Testing Array Loops ---------->
            const arr1 = (Object.keys(data));
            const arr2 = (Object.values(data));
            console.log(arr2);
            for (i in arr2) {
                console.log(i, arr2[i]);
            }
            arr2.forEach((item, index, array) => {
                console.log(item);
                console.log(index);
                console.log(array);
            })
            Object.values(data).forEach((val) => {
                console.log(val);
            })
            console.log(arr2[0]['nutrition']['nutrients']);
            let nutrients = arr2[0]['nutrition']['nutrients'];
            Object.values(nutrients).forEach((val) => {
                console.log(val);
            })
            console.log(arr2[0]['nutrition']['nutrients']);
            
            console.log(arr2[0]['analyzedInstructions'][0]['steps']);
            let steps = arr2[0]['analyzedInstructions'][0]['steps'];
                Object.values(steps).forEach((val) => {
                console.log(val);
            })

            // ---------End Testing Array Loops <----------
            let output = '<h2>Recipe</h2>';
            let introDiv = '';
            let ingredientsDiv = '';
            let nutritionDiv = '';
            let stepsDiv = '';

            data.forEach(function (item) {
                introDiv += `
                <p>ID: ${item.id}</p>
                <p>Title: ${item.title}</p>
                <p>Src: <a href="${item.sourceUrl}"> ${item.sourceUrl}</a></p>
                <p>Summary: ${item.summary}</p>
                <h3>Ingredients ...</h3>
                `;
                // Ingredients
                ingredientsDiv += `<ul>`;
                if (item.extendedIngredients && Array.isArray(item.extendedIngredients)) {
                    item.extendedIngredients.forEach(function (ingredient) {
                        ingredientsDiv += `
                        <li>&#8226; ${ingredient.amount} ${ingredient.unit} ${ingredient.originalName}</li>
                    `;
                    });
                }
                ingredientsDiv += `</ul>`;
                // Nutrition
                nutritionDiv += `<ul>`;
                if (nutrients && Array.isArray(nutrients)) {
                    nutritionDiv += '<h3>Nutrition Breakdown</h3>';
                    nutrients.forEach(function (nutrient) {
                        nutritionDiv += `
                        <li>&#8226; ${nutrient.name} ${nutrient.amount} ${nutrient.unit}</li>
                    `;
                    })
                    nutritionDiv += '</ul>';
                }
                // Prep & Cooking Steps
                stepsDiv += `<ul>`;
                if (steps && Array.isArray(steps)) {
                    stepsDiv += `<h3>Prep & Cooking Steps</h3>`;
                    steps.forEach(function (step) {
                        stepsDiv += `
                        <li class="no">${step.number} ${step.step}</li>
                    `;
                    })
                    stepsDiv += `</ul>`;
                }
                document.getElementById('introDiv').innerHTML = introDiv;
                document.getElementById('ingredientsDiv').innerHTML = ingredientsDiv;
                document.getElementById('nutritionDiv').innerHTML = nutritionDiv;
                document.getElementById('stepsDiv').innerHTML = stepsDiv;
            });
        })
}

getItems();


// for hiding or showing nutrition section
/* let nutritionSection = document.querySelector(".nutritionSection");
function showHideNutrients(){
    nutritionSection.style.display = "none";
} */
