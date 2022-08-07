import http from "../http-common";

class LottoService {
    fetchData() {
        return http.get("/lotto/stats");
    }

    getResults() {
        return http.get("/lotto/results");
    }
}

export default new LottoService();