'use strict';

System.register(['aurelia-framework', 'aurelia-router', 'aurelia-authentication'], function (_export, _context) {
  "use strict";

  var inject, Router, AuthService, _dec, _class, App;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_aureliaAuthentication) {
      AuthService = _aureliaAuthentication.AuthService;
    }],
    execute: function () {
      _export('App', App = (_dec = inject(Router, AuthService), _dec(_class = function () {
        function App(router, authService) {
          _classCallCheck(this, App);

          this.languages = [{ code: 'nl', locale: 'nl-NL', flag: 'nl' }, { code: 'en', locale: 'en-US', flag: 'us' }];

          var payload = authService.getTokenPayload();

          this.router = router;
          this.username = payload ? payload.username : null;
          this.authenticated = authService.isAuthenticated();
        }

        App.prototype.setLanguage = function setLanguage(language) {
          localStorage.setItem('language', language.code);

          window.top.location.reload();
        };

        return App;
      }()) || _class));

      _export('App', App);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJpbmplY3QiLCJSb3V0ZXIiLCJBdXRoU2VydmljZSIsIkFwcCIsInJvdXRlciIsImF1dGhTZXJ2aWNlIiwibGFuZ3VhZ2VzIiwiY29kZSIsImxvY2FsZSIsImZsYWciLCJwYXlsb2FkIiwiZ2V0VG9rZW5QYXlsb2FkIiwidXNlcm5hbWUiLCJhdXRoZW50aWNhdGVkIiwiaXNBdXRoZW50aWNhdGVkIiwic2V0TGFuZ3VhZ2UiLCJsYW5ndWFnZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJ3aW5kb3ciLCJ0b3AiLCJsb2NhdGlvbiIsInJlbG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQVFBLFkscUJBQUFBLE07O0FBQ0FDLFksa0JBQUFBLE07O0FBQ0FDLGlCLDBCQUFBQSxXOzs7cUJBR0tDLEcsV0FEWkgsT0FBT0MsTUFBUCxFQUFlQyxXQUFmLEM7QUFRQyxxQkFBWUUsTUFBWixFQUFvQkMsV0FBcEIsRUFBaUM7QUFBQTs7QUFBQSxlQUxqQ0MsU0FLaUMsR0FMckIsQ0FDVixFQUFDQyxNQUFNLElBQVAsRUFBYUMsUUFBUSxPQUFyQixFQUE4QkMsTUFBTSxJQUFwQyxFQURVLEVBRVYsRUFBQ0YsTUFBTSxJQUFQLEVBQWFDLFFBQVEsT0FBckIsRUFBOEJDLE1BQU0sSUFBcEMsRUFGVSxDQUtxQjs7QUFDL0IsY0FBSUMsVUFBaUJMLFlBQVlNLGVBQVosRUFBckI7O0FBRUEsZUFBS1AsTUFBTCxHQUFxQkEsTUFBckI7QUFDQSxlQUFLUSxRQUFMLEdBQXFCRixVQUFVQSxRQUFRRSxRQUFsQixHQUE2QixJQUFsRDtBQUNBLGVBQUtDLGFBQUwsR0FBcUJSLFlBQVlTLGVBQVosRUFBckI7QUFDRDs7c0JBRURDLFcsd0JBQVlDLFEsRUFBVTtBQUNwQkMsdUJBQWFDLE9BQWIsQ0FBcUIsVUFBckIsRUFBaUNGLFNBQVNULElBQTFDOztBQUVBWSxpQkFBT0MsR0FBUCxDQUFXQyxRQUFYLENBQW9CQyxNQUFwQjtBQUNELFMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
