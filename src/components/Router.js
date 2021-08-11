import React from 'react';
import {Switch, Route } from 'react-router-dom';


import PayWithPlayer from "./PayWithPlayer";
import PlayWithPc from "./PlayWithPc";
import Main from "./Main";


const Router = () => (
    <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/pwpc" component={PlayWithPc} />
        <Route exact path="/pwpl" component={PayWithPlayer} />

    </Switch>
)

export default Router;