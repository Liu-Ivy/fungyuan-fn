import axios from "axios";

class Auth {
  
  constructor() {
    this.auth = axios.create({
      baseURL: `${process.env.REACT_APP_BASE_URL}`,
      withCredentials: true
    });
  }

  signup(user) {
    const { username, password, email, phone } = user;
    return this.auth
      .post("/auth/signup", { username, password, email, phone })
      .then(({ data }) => data);
  }

  login(user) {
    const { username, password } = user;
    return this.auth
      .post("/auth/login", { username, password })
      .then(({ data }) => data);
  }

  logout() {
    return this.auth.post("/auth/logout", {}).then(response => response.data);
  }

  me() {
    console.log('process.env.REACT_APP_BASE_URL', process.env.REACT_APP_BASE_URL)
    return this.auth.get("/auth/me").then(response => response.data);
  }
}

const auth = new Auth();

export default auth;
