import Link from "../Link/Link";

const Navbar = () => {
    const routes = [
        { path: '/', name: 'Home', id: 'home' },
        { path: '/about', name: 'About', id: 'about' },
        { path: '/services', name: 'Services', id: 'services' },
        { path: '/contact', name: 'Contact', id: 'contact' },
        { path: '*', name: 'NotFound', id: 'not-found' },
      ];
      
    return (
        <nav>
            <ul className="md:flex">
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