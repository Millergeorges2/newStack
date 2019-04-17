import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from './components/About/About.jsx';
import LandingPage from './components/LandingPage/LandingPage.jsx'
class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/' component = { LandingPage } />
                    <Route path='/about' component={ About } />
                    </div>
            </Router>
        )
    }
}
export default App;