async function getItems() {
    fetch('results.json')
    .then((res) => res.json())
    .then((data) => {
        const arr1 = (Object.keys(data));
        const arr2 = (Object.values(data));
        console.log(arr2);
        for(i in arr2){
            console.log(i,arr2[i]);
        }
        arr2.forEach((item,index,array)=>{
            console.log(item);
            console.log(index);
            console.log(array);
        })
        Object.values(data).forEach((val) => {
            console.log(val);
        })
        console.log(arr2[0]['nutrition']['nutrients']);
        nutrients = arr2[0]['nutrition']['nutrients'];
        Object.values(nutrients).forEach((val) => {
            console.log(val);
        })
        // console.log(arr2[0]['nutrition']);
        let output = '<h2>Recipe</h2>';
        data.forEach(function(item){
            output += `
            <div id='displayData'>
                <p>ID: ${item.id}</p>
                <p>Title: ${item.title}</p>
                <p>Src: <a href="${item.sourceUrl}"> ${item.sourceUrl}</a></p>
                <p>Summary: ${item.summary}</p>
                <h3>Ingredients ...</h3>
            </div>
                `;
            if (item.extendedIngredients && Array.isArray(item.extendedIngredients)) {
                item.extendedIngredients.forEach(function(ingredient){
                    output += `
                    <div id='displayIngredients'>
                        <ul>
                            <li>&#8226; ${ingredient.amount} ${ingredient.unit} ${ingredient.originalName}</li>
                        </ul>
                    </div>
                    `;
                });
            
                if (nutrients && Array.isArray(nutrients)) {
                    output += '<h3>Nutrition Breakdown</h3>';
                    nutrients.forEach(function(nutrient) {
                        output += `
                        <div>
                            <ul>
                                <li>&#8226; ${nutrient.name} ${nutrient.amount} ${nutrient.unit}</li>
                            </ul>
                        </div>
                        `;
                    })
                }
        };
        document.getElementById('output').innerHTML = output;
    });
})
}

getItems();