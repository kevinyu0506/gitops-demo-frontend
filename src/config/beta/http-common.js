import axios from "axios";

export default axios.create({
    baseURL: "https://api-beta.gitops-demo.page/api",
    headers: {
        "Content-type": "application/json"
    }
});
