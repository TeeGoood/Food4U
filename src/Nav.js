import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (  
        <div className="flex justify-between align-middle py-3 px-10 border-b">
            <NavLink to="/" className="text-3xl font-bold text-orange-400">
               Food4U
            </NavLink>
            <div className="flex">
                <NavLink to="/" className="m-auto mr-3">
                    Home
                </NavLink>
                <NavLink to="/search" className="m-auto mr-3">
                    search
                </NavLink>
                <NavLink to="/about" className="m-auto mr-3">
                    about
                </NavLink>
            </div>
        </div>
    );
}
 
export default Navbar;