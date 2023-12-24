import SmallCard from "./SmallCard";

const SmallCardList = ({meals}) => {
    return (  
        <div className="grid grid-cols-4 gap-8 max-w-fit mx-auto">
            {meals && meals.map(meal => (
                <SmallCard meal={meal} key={meal.idMeal}/>
            ))}
        </div>
    );
}
 
export default SmallCardList;