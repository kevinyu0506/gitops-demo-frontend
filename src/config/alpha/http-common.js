import axios from "axios";

export default axios.create({
    baseURL: "https://api-alpha.gitops-demo.page/api",
    headers: {
        "Content-type": "application/json"
    }
});
