const FirstPart = () => {
    return (  
        <div className=" h-1/4 flex flex-col bg-[url('https://plus.unsplash.com/premium_photo-1668095398193-58a63a440464?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
            <h1 className="text-6xl font-bold text-center pt-14 text-white font-Libre-Baskerville">
                Find a Recipe 
            </h1>
            <div className="text-center mt-6">
               <form >
                    <input type="text" id="search" className="-mr-1 focus:border-none p-2 w-1/3 pl-4" placeholder="search a recipe" />
                    <button className="bg-gray-200 p-2 rounded ">search</button>
                </form>
            </div>
            
        </div>
    );
}
 
export default FirstPart;