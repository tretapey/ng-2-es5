(function(app) {
    'use strict';

    app.Hero = 
        ng.core.Class({
            constructor: function(id, name) {
                this.id = id;
                this.name = name;
            }
        });

})(window.app || (window.app = {}));