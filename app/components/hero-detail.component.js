(function(app) {
    'use strict';

    app.HeroDetailComponent = 
        ng.core.Component({
            selector: 'my-hero-detail',
            templateUrl: 'app/templates/hero-detail.component.html',
            styleUrls: ['app/styles/hero-detail.component.css']
        })
        .Class({
            constructor: [
                app.HeroService,
                ng.router.ActivatedRoute,
                ng.common.Location,
                function(heroService, route, location) {
                    this.heroService = heroService;
                    this.route = route;
                    this.location = location;
                }
            ],

            ngOnInit: function() {
                var vm = this;

                vm.route.params
                    .switchMap(function(params) {
                        return vm.heroService.getHero(+params['id'])
                    })
                    .subscribe(function(hero) {
                        vm.hero = hero;
                    })
            },

            save: function() {

            },

            goBack: function() {
                this.location.back();
            }
        });

})(window.app || (window.app = {}));