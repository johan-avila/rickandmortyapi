import React from "react"
import { Switch, Route,  HashRouter} from "react-router-dom";
//componentes
import Navbar from "../pages/Home"

function App() {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Navbar} />
            </Switch>
        </HashRouter>
    )
}

export default App


