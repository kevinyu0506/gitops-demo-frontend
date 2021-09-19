import React, { Component } from "react";
import OrderDataService from "../services/order.service";

export default class Order extends Component {
  constructor(props) {
    super(props);
    this.getOrder = this.getOrder.bind(this);

    this.state = {
        currentOrder: null,
    };
  }

  componentDidMount() {
    this.getOrder(this.props.match.params.id);
  }

  getOrder(id) {
    OrderDataService.getByOrderId(id)
      .then(response => {
        this.setState({
          currentOrder: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentOrder } = this.state;

    return (
        <div className="col-md-6">
            {this.state.currentOrder ? (
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th colSpan="2">Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>order ID</td>
                            <td>{currentOrder.orderId}</td>
                        </tr>
                        <tr>
                            <td>customer</td>
                            <td>{currentOrder.customerName}</td>
                        </tr>
                        {currentOrder.itemName.map((item, index) => (
                            <tr key={index}>
                                <td style={{display: index === 0 ? "show" : "table-column"}}>items</td>
                                <td colSpan={index === 0 ? "1" : "2"}>{item}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <span>Not found</span>
            )}
        </div>
    );
  }
}
