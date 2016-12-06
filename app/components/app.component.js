(function(app) {
    'use strict';

    app.AppComponent = 
        ng.core.Component({
            selector: 'my-app',
            templateUrl: 'app/templates/app.component.html',
            styleUrls: ['app/styles/app.component.css']
        })
        .Class({
            constructor: function() {
                this.title = 'Tour of Heroes';
            }
        });

})(window.app || (window.app = {}));