(function(Global, $){
    var Greetr = function(
        firstName, 
        lastName, 
        language){
    }

    var supportedLangs = ['en', 'es'];
    
    Greetr.prototype = {};

    Greetr.init = function(
        firstName, 
        lastName, 
        language){

    var self = this;
    self.firstName = firstName || '';
    self.lastName = lastName || '';
    self.language = language || 'en';
    }

    Greetr.init.prototype = Greetr.prototype;
    
    Global.Greetr = global.G$ = Greetr;

}(window, JQuery));