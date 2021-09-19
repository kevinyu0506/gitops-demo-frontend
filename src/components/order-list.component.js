import React, { Component } from "react";
import OrderDataService from "../services/order.service";
import { Link } from "react-router-dom";

export default class OrderList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchCustomer = this.onChangeSearchCustomer.bind(this);
    //this.retrieveOrders = this.retrieveOrders.bind(this);
    this.searchCustomer = this.searchCustomer.bind(this);
    this.handleRowClick = this.handleRowClick.bind(this);

    this.state = {
      orders: null,
      searchCustomer: ""
    };
  }

  componentDidMount() {
    //this.retrieveOrders();
  }

  onChangeSearchCustomer(e) {
    const searchCustomer = e.target.value;

    this.setState({
        searchCustomer: searchCustomer
    });
  }

  handleRowClick(orderId) {
    this.props.history.push(`/orders/${orderId}`)
  }

  //retrieveOrders() {
  //  OrderDataService.getAll()
  //    .then(response => {
  //      this.setState({
  //          orders: response.data
  //      });
  //      console.log(response.data);
  //    })
  //    .catch(e => {
  //      console.log(e);
  //    });
  //}

  searchCustomer() {
    OrderDataService.getByCustomerName(this.state.searchCustomer)
      .then(response => {
        this.setState({
            orders: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        this.setState({
            orders: null
        });
        console.log(e);
      });
  }

  render() {
    const { searchCustomer, orders } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <h3>Title</h3>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by Customer"
              value={searchCustomer}
              onChange={this.onChangeSearchCustomer}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchCustomer}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-8">
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th colSpan="2">Orders</th>
                    </tr>
                    <tr>
                        <th>order ID</th>
                        <th>customer</th>
                    </tr>
                </thead>
                <tbody>
                    {orders ? orders.map((order, index) => (
                        <tr key={order.orderId}
                            onClick={() => this.handleRowClick(order.orderId)}>
                            <td>{order.orderId}</td>
                            <td>{order.customerName}</td>
                        </tr>
                    )) :
                    <tr>
                        <td colSpan="2">No orders</td>
                    </tr>}
                </tbody>
            </table>
        </div>
      </div>
    );
  }
}
