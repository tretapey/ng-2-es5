(function(app) {
    'use strict';

    app.HeroService = 
        ng.core.Class({
            constructor: [
                ng.http.Http,
                function(http) {
                    this.http = http;

                    this.headers = new Headers({'Content-Type': 'application/json'});
                    this.heroesUrl = 'http://5846e1056f4e4e120026be35.mockapi.io/api/v1/heroes'; //mockapi
                }
            ],

            getHeroes: function() {
                return this.http.get(this.heroesUrl)
                    .toPromise()
                    .then(function(res) {
                        return res.json();
                    })
                    .catch(this.handleError);
            },

            getHero: function(id) {
                var vm = this;

                return vm.getHeroes().then(function(res) {
                    return res.find(function (hero){
                        return hero.id == id;
                    });
                });
            },

            handleError: function(error) {
                console.error('An error occurred', error); // for demo purposes only
                return Promise.reject(error.message || error);
            }
        });

})(window.app || (window.app = {}));