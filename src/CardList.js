import Card from "./Card";

const CardList = ({recipes}) => {

    return (  
        <>
            {recipes.map( recipe => (
                <Card  key={recipe.idMeal} recipe={recipe} />
            ) )}
        </>
    );
}
 
export default CardList;