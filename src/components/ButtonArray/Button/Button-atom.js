import './mobile-Button.css';
import './desktop-Button.css';

export default function ButtonAtom (props){
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

