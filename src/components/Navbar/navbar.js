import React from 'react';
import "./navbar.scss";

const Navbar = (props) => {
    const { title, elements } = props;

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
        </div>
    )
} 

export default Navbar;