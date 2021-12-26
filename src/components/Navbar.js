import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    {props.title}
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">
                                {props.aboutText}
                            </NavLink>
                        </li>
                    </ul>
                    {/* <form className="d-flex">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-primary" type="submit">
                            Search
                        </button>
                    </form> */}
                    <div className= {`form-check form-switch ${props.mode === 'light' ? 'dark' : 'light'}`} >
                        <input className="form-check-input" type="checkbox" onClick={props.toggleMode } role="switch" id="flexSwitchCheckDefault"/>
                        <label className ="form-check-label" htmlFor="flexSwitchCheckDefault" style ={{color: `${props.mode === 'light' ? 'black'  : 'white'}`}}>Enable {props.mode === 'light' ? 'Dark' : 'light'} mode</label>
                    </div>
                </div>
            </div>
        </nav>
    );
}

Navbar.prototypes = { title: PropTypes.string, aboutText: PropTypes.string };

//we use isrequired to must fill this props in react.

// Navbar.defaultProps = {
//     title: 'Set title here',
//     aboutText: 'set about text here'
// };