(function(app) {
    'use strict';

    app.DashboardComponent = 
        ng.core.Component({
            selector: 'my-dashboard',
            templateUrl: 'app/templates/dashboard.component.html',
            styleUrls: ['app/styles/dashboard.component.css'],
            providers: []
        })
        .Class({
            constructor: function() {
                this.heroService;
            },
            
            ngOnInit: function() {
                this.heroes = [
                    {id: 1, name: 'HOLA'},
                    {id: 2, name: 'MUNDO'}
                ];
            }
        });

})(window.app || (window.app = {}));
