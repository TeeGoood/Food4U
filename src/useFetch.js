import { useEffect, useState } from "react";

const useFetch = (id) => {
    const [data,setData] = useState(null);
    const [recipe ,setRecipe] = useState(null);
    const [isLoading , setIsLoading] = useState(true);
    const [err, SetErr] = useState(null);
    const [ingredients , setIngredients] = useState([]);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/${id}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
                if('meals' in data){
                    setRecipe(data.meals[0]);
                }
                setIsLoading(false);
                   
            })
            .catch(err => {
                console.log(err)
                SetErr(err.message);
                setIsLoading(false);
            });
   
    },[id]);

    useEffect(() => {
        if(recipe){
            const stringredient = [];
            for(let i = 1; i <= 20; i++){
                eval(
                    `const ingredient = recipe.strIngredient${i};
                    const measure = recipe.strMeasure${i};

                    if(ingredient){
                        console.log(ingredient);
                        stringredient.push({ingredient , measure , id:${i}});
                    }`
                );
                
            }
            setIngredients(stringredient); 
        }
        
        
    },[recipe])
    

    
    
    return {data, recipe , isLoading ,err,ingredients};
}
 
export default useFetch;