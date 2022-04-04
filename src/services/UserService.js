import http from "../http-common";

class UserService {
    login(user) {
       return http.post("/auth/login", user);
    }
}

export default new UserService();