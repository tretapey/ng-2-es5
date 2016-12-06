(function(app) {
    'use strict';

    app.AppModule = 
        ng.core.NgModule({
            imports: [ 
                ng.platformBrowser.BrowserModule,
                ng.forms.FormsModule,
                ng.http.HttpModule,
                app.AppRoutingModule
            ],
            declarations: [ 
                app.AppComponent,
                app.DashboardComponent,
                app.HeroesComponent,
                app.HeroDetailComponent
            ],
            providers: [],
            bootstrap: [ app.AppComponent ]
        })
        .Class({
            constructor: function() {}
        });


})(window.app || (window.app = {}));
