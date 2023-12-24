const TableIngredient = ({ingredients}) => {
    console.log('here',ingredients);
    return (  
        <table className="border-collapse border  text-red-400 table-auto">
            <tr>
                <th className="border px-8 py-2">Name</th>
                <th className="border px-8 py-2">Measure</th>
            </tr>
            {ingredients && (
                ingredients.map(ingredient => (
                    <tr key={ingredient.id}>
                        <td className="border px-8 py-2">{ingredient.ingredient}</td>
                        <td className="border px-8 py-2">{ingredient.measure}</td>
                    </tr>
                ))
            )}
        </table>
    );
}
 
export default TableIngredient;