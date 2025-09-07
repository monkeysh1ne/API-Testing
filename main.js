async function getItems() {
    fetch('results.json')
    .then((res) => res.json())
    .then((data) => {
        let output = '<h2>Output</h2>';
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

            
        };
        document.getElementById('output').innerHTML = output;
    });
})
}

getItems();
