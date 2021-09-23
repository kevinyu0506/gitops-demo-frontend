import axios from "axios";

export default axios.create({
    baseURL: window.config.BACKEND_URL,
    headers: {
        "Content-type": "application/json"
    }
});
