import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Dashboard from './Dashboard';
import './HomePage.css';
import MenuPage from "./MenuPage";

class HomePage extends Component {
    render() {
        return (
            <div className="home-root">
                <MenuPage />
                <Dashboard />
            </div>
        );
    }
}

export default HomePage;