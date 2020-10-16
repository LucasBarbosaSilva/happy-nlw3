import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from './pages/Landing';
import OpharnagesMap from './pages/OpharnagesMap';



function Routes (){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/app" component={OpharnagesMap}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;