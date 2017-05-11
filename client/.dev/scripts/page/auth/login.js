"use strict";

System.register(["aurelia-dependency-injection", "aurelia-authentication", "aurelia-notification"], function (_export, _context) {
  "use strict";

  var inject, AuthService, Notification, _dec, _class, Login;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaAuthentication) {
      AuthService = _aureliaAuthentication.AuthService;
    }, function (_aureliaNotification) {
      Notification = _aureliaNotification.Notification;
    }],
    execute: function () {
      _export("Login", Login = (_dec = inject(AuthService, Notification), _dec(_class = function () {
        function Login(authService, notification) {
          _classCallCheck(this, Login);

          this.username = 'example';
          this.password = 'example';

          this.notification = notification;
          this.authService = authService;
        }

        Login.prototype.login = function login() {
          var _this = this;

          return this.authService.login({
            username: this.username,
            password: this.password
          }).catch(function (error) {
            _this.notification.error('Login failed!');

            console.error(error);
          });
        };

        return Login;
      }()) || _class));

      _export("Login", Login);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UvYXV0aC9sb2dpbi5qcyJdLCJuYW1lcyI6WyJpbmplY3QiLCJBdXRoU2VydmljZSIsIk5vdGlmaWNhdGlvbiIsIkxvZ2luIiwiYXV0aFNlcnZpY2UiLCJub3RpZmljYXRpb24iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwibG9naW4iLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQVFBLFksK0JBQUFBLE07O0FBQ0FDLGlCLDBCQUFBQSxXOztBQUNBQyxrQix3QkFBQUEsWTs7O3VCQUdLQyxLLFdBRFpILE9BQU9DLFdBQVAsRUFBb0JDLFlBQXBCLEM7QUFNQyx1QkFBWUUsV0FBWixFQUF5QkMsWUFBekIsRUFBdUM7QUFBQTs7QUFBQSxlQUp2Q0MsUUFJdUMsR0FKNUIsU0FJNEI7QUFBQSxlQUZ2Q0MsUUFFdUMsR0FGNUIsU0FFNEI7O0FBQ3JDLGVBQUtGLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0EsZUFBS0QsV0FBTCxHQUFvQkEsV0FBcEI7QUFDRDs7d0JBRURJLEssb0JBQVE7QUFBQTs7QUFDTixpQkFBTyxLQUFLSixXQUFMLENBQWlCSSxLQUFqQixDQUF1QjtBQUM1QkYsc0JBQVUsS0FBS0EsUUFEYTtBQUU1QkMsc0JBQVUsS0FBS0E7QUFGYSxXQUF2QixFQUdKRSxLQUhJLENBR0UsaUJBQVM7QUFDaEIsa0JBQUtKLFlBQUwsQ0FBa0JLLEtBQWxCLENBQXdCLGVBQXhCOztBQUVBQyxvQkFBUUQsS0FBUixDQUFjQSxLQUFkO0FBQ0QsV0FQTSxDQUFQO0FBUUQsUyIsImZpbGUiOiJwYWdlL2F1dGgvbG9naW4uanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
