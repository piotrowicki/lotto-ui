import http from "../http-common";

class ChartService {
    fetchData() {
        return http.get("/data");
    }
}

export default new ChartService();