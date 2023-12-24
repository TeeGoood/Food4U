import {Link} from 'react-router-dom';
import recommend from "./recommend";
import Card from "./Card";
import CategoryCard from './CategoryCardList';
import CardList from './CardList';
import FirstPart from './FirstPart';

const Home = () => {
    return (  
        <div className='pb-20 w-full px-4'>
            <FirstPart />
            <div className='pb-6 border-b border-gray-200 max-w-2xl mx-auto'>
                <h1 className="mt-6 font-semibold text-2xl">Recommended</h1>
                <div>
                    <CardList recipes = {recommend} />
                </div>
            </div>

            <div >
                <h1 className="my-6 font-semibold text-2xl text-center">Categories</h1>
                <CategoryCard />
                
            </div>
        </div>
    );
}
 
export default Home;