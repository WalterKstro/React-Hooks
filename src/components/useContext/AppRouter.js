import {BrowserRouter  as Router, Switch, Route, Redirect} from 'react-router-dom'
import AboutPage from './AboutPage'
import HomePage from './HomePage'
import LoginPage from './LoginPage'
import Navbar from './Navbar'

const AppRouter = () => {
    return (
        <Router>
            <header>
                <Navbar />
                <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/about" component={AboutPage}/>
                <Route exact path="/login" component={LoginPage}/>
                <Redirect to="/"/>
                </Switch>
            </header>
        </Router>
    )
}

export default AppRouter

