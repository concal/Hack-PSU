import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import HomePage from './pages/home-page';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="main-content-container">
                    <Switch>
                        <Route exact path="/" component={() => (<HomePage/>)} />
                    </Switch>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;