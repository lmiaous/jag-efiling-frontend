let USER_COOKIE = 'login';

let Service = function(window) {  
    this.userCookie = 'login';
    this.apiUrl = undefined;
    this.user = undefined;
    if (typeof window !== 'undefined') {
        this.apiUrl = window.location.origin;        
        if (window.document && window.document.cookie) { 
            let index = window.document.cookie.indexOf(USER_COOKIE+'=');
            this.user = window.document.cookie.substring(index + (USER_COOKIE+'=').length);
            if (this.user.indexOf(';') > 0) {
                this.user = this.user.substring(0, this.user.indexOf(';'));
            }
            if (this.user.length == 0 || this.user == ';') {
                this.user = undefined;
            }
        }
    }
    if (process.env.NODE_ENV === 'development' && process.env.REACT_APP_API_URL !== undefined) {
        this.apiUrl = process.env.REACT_APP_API_URL;
    } 
};

Service.prototype.base = function() {
    return this.apiUrl === undefined ? '' : this.apiUrl;
};

Service.prototype.savePerson = function(user, callback) {
    let request = require('request');
    let options = this.buildOptions('/api/persons');
    options.form = { data:user };
    request.post(options, function(err, response, body) {
        callback(body);
    });
};

Service.prototype.buildOptions = function(url) {
    return {
        url: this.base() + url,
        headers: {
            'X-USER': this.user
        }
    };
};
Service.prototype.getPersonInfo = function(callback) {
    let get = require('request');
    get(this.buildOptions('/api/persons/' + this.user), (err, response, body)=>{
        console.log(body);
        if (response && response.statusCode === 200) {
            callback(JSON.parse(body));
        }
        else {
            callback(body);
        }
    }); 
};
module.exports = Service;
module.exports.USER_COOKIE = USER_COOKIE;