import './Loader.styles.scss';

export function Loader() {
    return (
        <div className="loader-container">
            <div className="lds-facebook"><div></div><div></div><div></div></div>
        </div>
    );
}