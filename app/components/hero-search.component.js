(function(app) {
    'use strict';

    app.HeroSearchComponent = 
        ng.core.Component({
            selector: 'hero-search',
            templateUrl: 'app/templates/hero-search.component.html',
            styleUrls: ['app/styles/hero-search.component.css'],
            providers: [ app.HeroSearchService ]
        })
        .Class({
            constructor: [
                app.HeroSearchService,
                ng.router.Router,
                function(heroSearchService, router) {
                    this.heroSearchService = heroSearchService;
                    this.router = router;

                    this.searchTerms = new Rx.Subject();
                }
            ],

            search: function(term) {
                this.searchTerms.next(term);
            },

            
            ngOnInit: function() {
                var vm = this;

                vm.heroes = vm.searchTerms
                    .debounceTime(300)        // wait for 300ms pause in events
                    .distinctUntilChanged()   // ignore if next search term is same as previous
                    .switchMap(function(term) {
                        return term ? vm.heroSearchService.search(term) : Rx.Observable.of([]);
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            },

            gotoDetail: function(hero) {
                this.router.navigate(['/detail', hero.id]);
            }
        });

})(window.app || (window.app = {}));
