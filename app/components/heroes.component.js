(function(app) {
    'use strict';

    app.HeroesComponent = 
        ng.core.Component({
            selector: 'my-heroes',
            templateUrl: 'app/templates/heroes.component.html',
            styleUrls: ['app/styles/heroes.component.css'],
            providers: []
        })
        .Class({
            constructor: [
                ng.router.Router,
                function(router) {
                    this.router = router;

                    this.heroes;
                    this.selectedHero;
                }
            ],
            
            ngOnInit: function() {
                this.getHeroes();
            },

            getHeroes: function() {
                this.heroes = [
                    {id: 1, name: 'HOLA'},
                    {id: 2, name: 'MUNDO'}
                ];
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