import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

import './App.css';
import NavBar from "./components/NavBar";

function App() {
    return (
        <>
            <NavBar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/rooms" component={Rooms}/>
                <Route exact path="/rooms/:room" component={SingleRoom}/>
                <Route  component={Error}/>
            </Switch>
        </>
    );
}

export default App;
