import axios from "axios";

export default axios.create({
    baseURL: "http://pomocdrogowaostroda.com.pl:8082/api",
    headers: {
        "Content-type": "application/json"
    }
});