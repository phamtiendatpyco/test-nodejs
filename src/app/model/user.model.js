class User {
    /**
     *
     * @param {*} username username of user
     * @param {*} createdDate which the user is created
     * @param {*} employee indicates that user is a employee or not
     * @param {*} affiliate indicates that user is a affiliate or not
     */
    constructor(username, createdDate, employee, affiliate) {
        this.username = username;
        this.createdDate = createdDate;
        this.employee = employee;
        this.affiliate = affiliate;
    }

    getUsername() {
        return this.username;
    }

    getCreatedDate() {
        return this.createdDate;
    }

    isEmployee() {
        return this.employee;
    }

    isAffiliate() {
        return this.affiliate;
    }
}

export default User;
