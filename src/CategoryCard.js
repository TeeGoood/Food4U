import { Link } from "react-router-dom";

const CategoryCard = ({categories}) => {
    if(categories){
        console.log(categories);
    }
    
    return (  
        <div className="flex overflow-scroll"> 
            {categories &&  categories.map(category => (
                <Link to={`categoryMeals/${category.strCategory}`} state={category.strCategoryDescription}>
                    <div className="category-card w-60 overflow-hidden shadow-lg hover:shadow-2xl  transition-all duration-200 mx-3 flex-shrink-0" key={category.idCategory}>
                        <img src={category.strCategoryThumb} alt="meat" className="h-40 w-full object-cover"/>
                        <div className="py-5">
                            <h1 className="flex justify-center font-bold text-theme-black">
                                {category.strCategory}
                            </h1>
                            <p className="text-center">
                                "{category.strCategoryDescription.substring(0,40)}....."
                            </p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
 
export default CategoryCard;