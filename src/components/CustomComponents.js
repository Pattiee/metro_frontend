import '../components/custom-components-styles.css';

const CButton = ({ name, text, event }) => {
    return(
        <button className={name} onClick={event}>{text}</button>
    );
}


const CInput = ({ type, name, placeholder, value, required }) => {
    return(
        <input type={type} className={name} id={name} placeholder={placeholder} value={value} required={required}/>
    );
}

export { CButton, CInput }