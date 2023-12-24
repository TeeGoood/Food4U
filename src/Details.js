import {  useParams } from "react-router-dom";
import useFetch from "./useFetch";
import TableIngredient from "./TableIngredient";
import SmallCard from "./SmallCard";

const Details = () => {
    const {id} = useParams();
    const {recipe , isLoading , err ,ingredients} = useFetch('lookup.php?i='+id);

    return (
        <div className="px-4">
            { err && <div>{err}</div>}
            { isLoading && <div>Loading........</div>}
            { recipe && (
                <div className="mt-10 max-w-2xl">
                    <div>
                        <h1 className="my-4 text-4xl  text-center font-bold">
                            {recipe.strMeal}
                        </h1>
                        <img src={recipe.strMealThumb} alt="tom-yum" className="rounded-xl w-2/3 mx-auto"/>
                        <div className="ingredient flex flex-col ">
                            <h1 className="text-2xl font-bold text-gray-700 my-8 ">
                                ingredient
                            </h1>
                            <TableIngredient ingredients={ingredients} />
                        </div>
                        <div className="instruction  mb-20">
                            <h1 className="text-2xl font-bold text-gray-700 my-8">instruction</h1>
                            {recipe.strInstructions}
                        </div>
                    </div>
                </div>
                )}

        </div>
    );
}
 
export default Details;