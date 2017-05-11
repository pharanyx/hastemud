'use strict';

System.register(['aurelia-authentication', 'aurelia-dependency-injection'], function (_export, _context) {
  "use strict";

  var AuthService, inject, _dec, _class, Logout;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaAuthentication) {
      AuthService = _aureliaAuthentication.AuthService;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }],
    execute: function () {
      _export('Logout', Logout = (_dec = inject(AuthService), _dec(_class = function () {
        function Logout(authService) {
          _classCallCheck(this, Logout);

          this.authService = authService;
        }

        Logout.prototype.activate = function activate() {
          return this.authService.logout();
        };

        return Logout;
      }()) || _class));

      _export('Logout', Logout);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UvYXV0aC9sb2dvdXQuanMiXSwibmFtZXMiOlsiQXV0aFNlcnZpY2UiLCJpbmplY3QiLCJMb2dvdXQiLCJhdXRoU2VydmljZSIsImFjdGl2YXRlIiwibG9nb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBUUEsaUIsMEJBQUFBLFc7O0FBQ0FDLFksK0JBQUFBLE07Ozt3QkFHS0MsTSxXQURaRCxPQUFPRCxXQUFQLEM7QUFFQyx3QkFBYUcsV0FBYixFQUEwQjtBQUFBOztBQUN4QixlQUFLQSxXQUFMLEdBQW1CQSxXQUFuQjtBQUNEOzt5QkFFREMsUSx1QkFBWTtBQUNWLGlCQUFPLEtBQUtELFdBQUwsQ0FBaUJFLE1BQWpCLEVBQVA7QUFDRCxTIiwiZmlsZSI6InBhZ2UvYXV0aC9sb2dvdXQuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
