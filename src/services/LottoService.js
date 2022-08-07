import http from "../http-common";

class LottoService {
    fetchData() {
        return http.get("/lotto/stats");
    }
}

export default new LottoService();