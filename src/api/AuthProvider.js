export class User {

}

export class AuthProvider {
    static loggedIn = false

    static getUser() {
        return new User();
    }

    static isAuthenticated() {
        return this.loggedIn;
    }

    static logout() {
        return true;
    }

    static login(username, password) {
        return new Promise(resolve => {
            this.loggedIn = true
            resolve()
        })
    }

    static registerAsCustomer(username, password) {
        return true;
    }

    static registerAsProvider(username, password) {
        return true;
    }
}

