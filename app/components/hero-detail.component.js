(function(app) {
    'use strict';

    app.HeroDetailComponent = 
        ng.core.Component({
            selector: 'my-hero-detail',
            templateUrl: 'app/templates/hero-detail.component.html',
            styleUrls: ['app/styles/hero-detail.component.css']
        })
        .Class({
            constructor: function() {}
        });

})(window.app || (window.app = {}));