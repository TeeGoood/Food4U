import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";
import CategoryCard from "./CategoryCard";

const CategoryCardList = () => {
    const [categories ,setCategories] = useState(null);
    const {data ,isLoading ,err} = useFetch('categories.php');

    useEffect(() =>{
        if(data){
            setCategories(data.categories);
        }
    },[data])

    return (  
        <div className="mb-40">
            {err && <div>{err}</div>}
            {isLoading && <div className="text-center">Loading........</div>}
            {categories && <CategoryCard categories={categories} />}
        </div>
    );
}
 
export default CategoryCardList;