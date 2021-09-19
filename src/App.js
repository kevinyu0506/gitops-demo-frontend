import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";

import OrderList from "./components/order-list.component";
import Order from "./components/order.component";

class App extends Component {
    render() {
        return (
            <div>
                <div className="container mt-3">
                    <Switch>
                        <Route exact path={["/", "/orders"]} component={OrderList} />
                        <Route path="/orders/:id" component={Order} />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default App;
