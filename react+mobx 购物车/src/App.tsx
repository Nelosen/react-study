import * as React from "react"
import { HashRouter, Switch } from "react-router-dom"
import { routes } from "./routes"
import { configure } from 'mobx'
import { renderRoutes } from "react-router-config"

configure({ enforceActions: true });

class App extends React.Component<any, any> {

    render() {
        return (
            <HashRouter>
                <Switch>
                    {renderRoutes(routes)}
                </Switch>
            </HashRouter>
        )
    }
}

export default App;
