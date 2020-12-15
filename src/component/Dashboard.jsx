import { faRing } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './Dashboard.css';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard-container">
                <div className="contact">
                    <p>Odilbek Mirziyoyev</p>
                    <FontAwesomeIcon icon={faRing} style={{ margin: "0px 30px" }} />
                    <FontAwesomeIcon icon={faRing} />
                </div>

                <h1>
                    Direktor Dashboard
                </h1>

                <div className="card-box">
                    <div className="card">Ro'yxatdan o'tgan talabalar soni</div>
                    <div className="card">Ro'yxatdan o'tgan talabalar soni</div>
                    <div className="card">Ro'yxatdan o'tgan talabalar soni</div>
                    <div className="card">Ro'yxatdan o'tgan talabalar soni</div>
                </div>
            </div>
        );
    }
}

export default Dashboard;