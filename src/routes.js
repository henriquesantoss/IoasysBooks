import { Routes as Switch, Route} from 'react-router-dom';

import Login from "./pages/Login";

import Home from "./pages/Home";

const Routes = () => {
    return (

        <Switch>

            <Route path="/" exact element={<Login />} />

            <Route path="/home" exact element={<Home />} />

        </Switch>

    );
}

export default Routes; 