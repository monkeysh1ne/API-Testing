async function getItems() {
    fetch('results.json')
    .then((res) => res.json())
    .then((data) => {
        let output = '<h2>Output</h2>';
        const arr1 = (Object.keys(data));
        const arr2 = (Object.values(data));
/*         console.log(arr1);
        console.log(arr2);
        // display all values of results top level array.
        for(let i=0, j=0; i<arr1.length; i++, j++){
            console.log(i, arr1[i]);
            console.log(j, arr2[j]);
            // arr2[27] is nutrients
            console.log(arr2[27].caloricBreakdown);
        };
        for(i in arr2){
            console.log(i,arr2[i]);
        }; */
/*         arr1.forEach((item, index, array)=>{
            console.log(item);
            console.log(index);
            console.log(array);
        }); */
/*         Object.values(data).forEach((val)=> {
            console.log(val);
        });
        Object.entries(data).forEach((val)=>{
            console.log(val[0], val[1]);
        }); */
        // data.extendedIngredients.forEach(el => console.log(el));
        // data.nutrition.nutrients.forEach(el => console.log(el));
        data.nutrition.nutrients.forEach(nutrient => {
            console.log(nutrient);
            output += `
            <p>${nutrient}</p>
            `;
        });
    });
}

getItems();