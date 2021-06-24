import {NavLink} from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">React</a>
                <div className="navbar-nav">
                    <NavLink activeClassName="active" exact className="nav-link" aria-current="page" to="/">Home</NavLink>
                    <NavLink activeClassName="active" exact className="nav-link" to="/about">About</NavLink>
                    <NavLink activeClassName="active" exact className="nav-link" to="/login">Login</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
