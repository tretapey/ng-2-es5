(function(app) {
    'use strict';

    app.HeroesComponent = 
        ng.core.Component({
            selector: 'my-heroes',
            templateUrl: 'app/templates/heroes.component.html',
            styleUrls: ['app/styles/heroes.component.css']
        })
        .Class({
            constructor: [
                app.HeroService,
                ng.router.Router,
                function(heroService, router) {
                    this.heroService = heroService;
                    this.router = router;

                    this.heroes;
                    this.selectedHero;
                }
            ],
            
            ngOnInit: function() {
                this.getHeroes();
            },

            getHeroes: function() {
                var vm = this;

                vm.heroService.getHeroes()
                    .then(function(heroes) {
                        vm.heroes = heroes;
                    });
            },

            add: function(name) {
                //add Hero
            },

            delete: function(hero) {
                //delete hero
            },

            onSelect: function(hero) {
                this.selectedHero = hero;
            },

            gotoDetail: function() {
                this.router.navigate(['/detail', this.selectedHero.id]);
            }

        });

})(window.app || (window.app = {}));