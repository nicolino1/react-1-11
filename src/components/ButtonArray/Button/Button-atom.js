import './mobile-Button.css';
import './desktop-Button.css';

export default function ButtonAtom (props){
    const { isActive, href, number, content, clicked } = props;

    return (
        <button 
            type="button" 
            className="info-button"
        >
            <a
                className={isActive ? 'nav-btn btn-active' : 'nav-btn'}
                href={href}
                onClick={() => clicked(number)}
            >
                <span>{number}</span>
                {content}
            </a>
        </button>
    );
}

