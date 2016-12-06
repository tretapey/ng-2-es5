(function(app) {
    'use strict';

    var routes = [
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        { path: 'dashboard',  component: app.DashboardComponent },
    //    { path: 'detail/:id', component: HeroDetailComponent },
      //  { path: 'heroes',     component: HeroesComponent }
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
