import { useLocation, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useEffect, useState } from "react";
import SmallCard from "./SmallCard";
import SmallCardList from "./SmallCardList";

const CategoryMeals = () => {
    const {category} = useParams();
    const id = `filter.php?c=${category}`;
    const {data ,isLoading , err} = useFetch(id);
    const [meals ,setMeals] = useState(null)
    const location = useLocation();

    useEffect(()=> {
        if(data){
            setMeals(data.meals);
        }        
    },[data])
    
    return (  
        <div className="max-w-fit">
            <div>
                <h1 className="text-center text-4xl text-theme-black my-10">
                    {category}
                </h1>
                <div className="w-full text-center">
                    <p className="w-1/2 mx-auto mb-20 text-lg">
                        " {location.state} "
                    </p>
                </div>
                
            </div>
            
            {meals && (
                <>
                    <SmallCardList meals={meals} />
                </>
            )}
        </div>
    );
}
 
export default CategoryMeals
