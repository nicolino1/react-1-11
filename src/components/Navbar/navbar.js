import React , {useState} from 'react';
import "./css/navbar.scss";

const Navbar = (props) => {
    const { title, elements } = props;
    const [isOpen, setIsOpen] = useState(false);

    return (

        <div className="navbar">
            <div>
                {title}
            </div>
            <nav>
                <ul>
                   {elements.map((element) => <li><a>{element}</a></li>)}
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
                    <a>
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

export default Navbar;