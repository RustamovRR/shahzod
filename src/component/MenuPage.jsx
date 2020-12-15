import { faCog, faDatabase, faExternalLinkAlt, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import logo from '../images/Group 837.png';
import './MenuPage.css';



class MenuPage extends Component {
    render() {
        return (
            <div className="menu-container ">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>

                <div className="list-box">
                    <div className="menu-list">
                        <a href="#">
                            <FontAwesomeIcon icon={faDatabase} style={{ margin: "0px 20px 0 0" }} />
                            Dashboard
                        </a>
                        <a href="#">
                            <FontAwesomeIcon icon={faCog} style={{ margin: "0px 20px 0 0" }} />
                            Sozlamalar
                        </a>
                    </div>
                </div>

                <div className="foot-box list-box">
                    <div className="foot-list menu-list">
                        <a href="#">
                            <FontAwesomeIcon icon={faExternalLinkAlt} style={{ margin: "0px 20px 0 0" }} />
                            {`Home   pdp.uz`}
                        </a>

                        <a href="#">
                            <FontAwesomeIcon icon={faPowerOff} style={{ margin: "0px 20px 0 0" }} />
                            Chiqish
                        </a>

                    </div>
                </div>
            </div>
        );
    }
}

export default MenuPage;