(function(app) {
    'use strict';

    app.HeroSearchService = 
        ng.core.Class({
            constructor: [
                ng.http.Http,
                function(http) {
                    this.http = http;

                    this.headers = new Headers({'Content-Type': 'application/json'});
                    this.searchUrl = 'http://5846e1056f4e4e120026be35.mockapi.io/api/v1/heroes?filter='; //mockapi
                }
            ],

            search: function(term) {
                return this.http.get(this.searchUrl + term)
                    .toPromise()
                    .then(function(res) {
                        return res.json();
                    })
                    .catch(this.handleError);
            },

            handleError: function(error) {
                console.error('An error occurred', error); // for demo purposes only
                return Promise.reject(error.message || error);
            }
        });

})(window.app || (window.app = {}));