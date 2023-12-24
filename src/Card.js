import {Link} from 'react-router-dom';

const Card = ({recipe}) => {
    let tags = recipe.strTags;
    if (tags){
        tags = tags.split(',');
    }

    return (  
        <Link to={`/details/${recipe.idMeal}`} state={recipe.idMeal}>
            <div className="card grid grid-cols-5 w-full h-60 mt-6 shadow-lg hover:shadow-xl transition-all duration-200 overflow-hidden rounded-md text-xs sm:text-sm" >
                <div className="col-span-3 h-60">
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full h-full object-cover "/>
                </div>
                <div className="px-4 col-span-2">
                    <h1 className="text-gray-700 text-lg sm:text-2xl font-bold my-4">{recipe.strMeal}</h1>
                    <p className="mb-2 flex flex-wrap">
                        <span>
                            Category : 
                        </span>
                        <span className="bg-gray-400 text-white ml-3 px-2  rounded-full">
                            {recipe.strCategory}
                        </span>
                    </p>
                    <p className="mb-2 flex flex-wrap">
                        <span>
                            Area : 
                        </span> 
                        <span className="bg-gray-400 text-white ml-3 px-2  rounded-full">
                            {recipe.strArea}
                        </span>
                    </p>
                    <div className="mb-2 flex ">
                        <div>
                            tags :
                        </div>
                        <div className='flex flex-wrap'>
                            {tags && tags.map(tag => (
                                <span className="bg-gray-400 text-white ml-3 px-2  rounded-full mb-2" key={tag}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
 
export default Card;