(function(app) {
    'use strict';

    var routes = [
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        { path: 'dashboard',  component: app.DashboardComponent },
        { path: 'detail/:id', component: app.HeroDetailComponent },
        { path: 'heroes',     component: app.HeroesComponent }
    ];

    app.AppRoutingModule = 
        ng.core.NgModule({
            imports: [ 
                ng.router.RouterModule.forRoot(routes)
            ],
            exports: [ ng.router.RouterModule ]
        })
        .Class({
            constructor: function() {}
        });


})(window.app || (window.app = {}));
