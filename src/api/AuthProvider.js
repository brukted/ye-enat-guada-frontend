export class UserRole {
    static ADMIN = 'admin';
    static CUSTOMER = 'customer';
    static PROVIDER = 'provider';
}

export class User {
    constructor(id, firstName, lastName, email, role, avatarURL) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.role = role;
        this.avatarURL = avatarURL;
    }
}

export class AuthProvider {
    static loggedIn = false

    static getUser() {
        return new User(0, "John", "Doe", "safklsa@gamilc.om", UserRole.CUSTOMER, "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200");
    }

    static isAuthenticated() {
        return this.loggedIn;
    }

    static logout() {
        return new Promise(resolve => {
            this.loggedIn = false
            resolve()
        })
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

