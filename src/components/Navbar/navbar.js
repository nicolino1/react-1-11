import React , {useState} from 'react';
import "./css/navbar.scss";
import PropTypes from 'prop-types';

const Navbar = (props) => {
    const { title, elements, onClick } = props;
    const [isOpen, setIsOpen] = useState(false);

    return (

        <div className="navbar">
            <div>
                {title}
            </div>
            <nav>
                <ul>
                   {elements.map((element) => <li><a onClick={() => onClick(element)}>{element}</a></li>)}
                </ul>
            </nav>
            <button id="hamburger" onClick={() => setIsOpen(!isOpen)}>
                <div>
                    <div>

                    </div>
                </div>
            </button>
            <nav id="lastnav" style={(isOpen) ? {display: "block"} : {display: "none"}}>
                <ul>
                {elements.map((element) => 
                <li>
                    <a onClick={() => {onClick(element); setIsOpen(!isOpen)}}>
                        <span></span>
                        {element}
                        <i class="fas fa-chevron-right" alt></i>
                    </a>
                </li>)}
                </ul>
            </nav>
        </div>

    )
} 

Navbar.propTypes = {
    title: PropTypes.string,
    elements: PropTypes.array,
    onclick: PropTypes.func
}

export default Navbar;