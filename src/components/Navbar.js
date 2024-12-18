// filepath: /c:/Users/Kaho/Desktop/react-router/src/components/Navbar.js
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
    return (
        <div>
            <Link to={"/"}>Home</Link> |
            <ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink> |
            <Link to='/projects'>Projects</Link> |
        </div>
    );
};

export default Navbar;