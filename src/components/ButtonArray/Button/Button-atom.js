import './mobile-Button.css';
import './desktop-Button.css';
import PropTypes from 'prop-types';

const ButtonAtom = (props) => {
    const { isActive, href, number, content, clicked, classPlanet } = props;
    console.log(classPlanet);
    return (
        <button 
            type="button" 
            className="info-button"
        >
            <a
                className={isActive ? `nav-btn btn-active-${classPlanet}` : 'nav-btn'}
                onClick={() => clicked(number)}
            >
                <span>{number}</span>
                {content}
            </a>
        </button>
    );
}

ButtonAtom.propTypes = {
    isActive: PropTypes.bool,
    href: PropTypes.string,
    number: PropTypes.string, 
    content: PropTypes.string, 
    clicked: PropTypes.func, 
    classPlanet: PropTypes.string
}

export default ButtonAtom;

