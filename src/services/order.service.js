import http from "../config/http-common";

class OrderDataService {
    getAll() {
      return http.get("/orders");
    }

    getByOrderId(id) {
      return http.get(`/orders/${id}`);
    }

    getByCustomerName(name) {
        return http.get(`/customers/${name}`);
    }
}

export default new OrderDataService();
