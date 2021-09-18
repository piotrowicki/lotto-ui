import http from "../http-common";

class ChartService {
    fetchData() {
        return http.get("/lotto/stats");
    }
}

export default new ChartService();