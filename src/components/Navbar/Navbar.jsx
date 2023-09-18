import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenuUnfold, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    //declare a state to handle menu icon default is menu option will not be open
    const [open, setOpen] = useState(false);
    const routes = [
        { path: '/', name: 'Home', id: 'home' },
        { path: '/about', name: 'About', id: 'about' },
        { path: '/services', name: 'Services', id: 'services' },
        { path: '/contact', name: 'Contact', id: 'contact' },
        { path: '*', name: 'NotFound', id: 'not-found' },
      ];
      
    return (
        <nav>
            <div className="text-2xl md:hidden bg-yellow-200 p-6" onClick={() => setOpen(!open)}>
                {
                    open === true ? <AiOutlineClose></AiOutlineClose>:<AiOutlineMenuUnfold></AiOutlineMenuUnfold>
                }
            </div>
            {/* Chnage the position absolute for small device*/}
            {/* For conditional style use dynamically  */}
            <ul className={`md:flex absolute md:static bg-yellow-200 text-black p-4
            ${open ? 'top-14 pl-2 ml-5 duration-1000 rounded' : '-top-40'}`}>
                {
                    //Map routes array for each element create list and anchor to put the path dynamically 
                    //send props to Link component
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;