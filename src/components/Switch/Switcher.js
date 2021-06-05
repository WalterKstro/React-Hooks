import './switcher.css'

const Switcher = ({handleToogle}) => {
    
    return (
        <label className="switch">
            <input type="checkbox" onClick={handleToogle}/>
            <span className="slider round"></span>
        </label>
    )
}

export default Switcher
