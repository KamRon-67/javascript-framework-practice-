(function(global, $) {

    var Greetr = function(firstName, lastName, language) {
        return new Greeter.init(firstName, lastName, language);
    }

    var supportedLangs = ['en', 'es'];

    greetings = {

    }

    formalGreetings = {

    }

    Greetr.prototype = {};

    Greetr.init = function(firstName, lastName, language) {

        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || '';
    }

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr;

}(window, jQuery));