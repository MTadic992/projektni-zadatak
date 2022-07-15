import "./Button.styles.scss";

export function Button(props) {
    const className = `button button--${props.variant}`;

    return (
        <button className="button button--icon">
            {props.children}
        </button>
    )
}