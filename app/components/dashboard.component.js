(function(app) {
    'use strict';

    app.DashboardComponent = 
        ng.core.Component({
            selector: 'my-dashboard',
            templateUrl: 'app/templates/dashboard.component.html',
            styleUrls: ['app/styles/dashboard.component.css']
        })
        .Class({
            constructor: [
                app.HeroService,
                function(heroService) {
                    this.heroService = heroService;
                }
            ],
            
            ngOnInit: function() {
                var vm = this;

                vm.heroService.getHeroes()
                    .then(function(heroes) {
                        vm.heroes = heroes.slice(0,4);
                    });
            }
        });

})(window.app || (window.app = {}));
