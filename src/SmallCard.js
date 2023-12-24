import { Link } from "react-router-dom";

const SmallCard = ({meal}) => {
    return (
        <Link to={`/details/${meal.idMeal}`} >  
            <div className="w-60 rounded-md overflow-hidden  shadow-md hover:shadow-xl transition-shadow duration-200">
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                <div className="p-3">
                    <h1 className="text-center text-theme-black font-bold">{meal.strMeal}</h1>
                </div>
            </div>
        </Link>
    );
}
 
export default SmallCard;