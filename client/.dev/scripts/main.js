'use strict';

System.register(['config/routes', 'config/app', 'config/auth', 'config/local', 'config/entities', 'i18next-xhr-backend', 'aurelia-router', 'aurelia-authentication', 'aurelia-config', 'bootstrap', 'fetch'], function (_export, _context) {
  "use strict";

  var routes, appConfig, authConfig, localConfig, entities, Backend, Router, AuthorizeStep, Config;
  function configure(aurelia) {
    aurelia.use.standardConfiguration().plugin('aurelia-validation').plugin('aurelia-config', function (configure) {
      return configure(['aurelia-api', 'aurelia-authentication', 'aurelia-notification', 'aurelia-form', 'aurelia-datatable', 'aurelia-pager'], appConfig, authConfig, localConfig);
    }).plugin('aurelia-charts', function (charts) {
      charts.configure({
        library: 'C3'
      });
    }).plugin('aurelia-charts-c3').plugin('aurelia-orm', function (builder) {
      builder.registerEntities(entities);
    }).plugin('aurelia-i18n', function (instance) {

      instance.i18next.use(Backend);

      var language = localStorage.getItem('language');

      return instance.setup({
        backend: {
          loadPath: 'scripts/config/locale/{{lng}}/{{ns}}.json'
        },
        lng: language || appConfig.defaultLocale.language,
        attributes: ['t'],
        fallbackLng: language || appConfig.defaultLocale.language,
        debug: false
      });
    }).globalResources('component/value-converters/date-format');

    var mergedConfig = aurelia.container.get(Config);

    if (mergedConfig.fetch('environment') === 'development') {
      aurelia.use.developmentLogging();
    }

    aurelia.start().then(function (a) {
      a.container.get(Router).configure(configureRouter);
      a.setRoot('app');
    });
  }

  _export('configure', configure);

  function configureRouter(config) {
    config.title = appConfig.app.title;

    config.addPipelineStep('authorize', AuthorizeStep);

    config.map(routes);
  }
  return {
    setters: [function (_configRoutes) {
      routes = _configRoutes.default;
    }, function (_configApp) {
      appConfig = _configApp.default;
    }, function (_configAuth) {
      authConfig = _configAuth.default;
    }, function (_configLocal) {
      localConfig = _configLocal.default;
    }, function (_configEntities) {
      entities = _configEntities;
    }, function (_i18nextXhrBackend) {
      Backend = _i18nextXhrBackend.default;
    }, function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_aureliaAuthentication) {
      AuthorizeStep = _aureliaAuthentication.AuthorizeStep;
    }, function (_aureliaConfig) {
      Config = _aureliaConfig.Config;
    }, function (_bootstrap) {}, function (_fetch) {}],
    execute: function () {}
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiY29uZmlndXJlIiwiYXVyZWxpYSIsInVzZSIsInN0YW5kYXJkQ29uZmlndXJhdGlvbiIsInBsdWdpbiIsImFwcENvbmZpZyIsImF1dGhDb25maWciLCJsb2NhbENvbmZpZyIsImNoYXJ0cyIsImxpYnJhcnkiLCJidWlsZGVyIiwicmVnaXN0ZXJFbnRpdGllcyIsImVudGl0aWVzIiwiaW5zdGFuY2UiLCJpMThuZXh0IiwiQmFja2VuZCIsImxhbmd1YWdlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldHVwIiwiYmFja2VuZCIsImxvYWRQYXRoIiwibG5nIiwiZGVmYXVsdExvY2FsZSIsImF0dHJpYnV0ZXMiLCJmYWxsYmFja0xuZyIsImRlYnVnIiwiZ2xvYmFsUmVzb3VyY2VzIiwibWVyZ2VkQ29uZmlnIiwiY29udGFpbmVyIiwiZ2V0IiwiQ29uZmlnIiwiZmV0Y2giLCJkZXZlbG9wbWVudExvZ2dpbmciLCJzdGFydCIsInRoZW4iLCJhIiwiUm91dGVyIiwiY29uZmlndXJlUm91dGVyIiwic2V0Um9vdCIsImNvbmZpZyIsInRpdGxlIiwiYXBwIiwiYWRkUGlwZWxpbmVTdGVwIiwiQXV0aG9yaXplU3RlcCIsIm1hcCIsInJvdXRlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBWU8sV0FBU0EsU0FBVCxDQUFtQkMsT0FBbkIsRUFBNEI7QUFDakNBLFlBQVFDLEdBQVIsQ0FDR0MscUJBREgsR0FHR0MsTUFISCxDQUdVLG9CQUhWLEVBT0dBLE1BUEgsQ0FPVSxnQkFQVixFQU80QixxQkFBYTtBQUNyQyxhQUFPSixVQUFVLENBQ2YsYUFEZSxFQUVmLHdCQUZlLEVBR2Ysc0JBSGUsRUFJZixjQUplLEVBS2YsbUJBTGUsRUFNZixlQU5lLENBQVYsRUFPSkssU0FQSSxFQU9PQyxVQVBQLEVBT21CQyxXQVBuQixDQUFQO0FBUUQsS0FoQkgsRUFrQkdILE1BbEJILENBa0JVLGdCQWxCVixFQWtCNEIsa0JBQVU7QUFDbENJLGFBQU9SLFNBQVAsQ0FBaUI7QUFDZlMsaUJBQVM7QUFETSxPQUFqQjtBQUdELEtBdEJILEVBd0JHTCxNQXhCSCxDQXdCVSxtQkF4QlYsRUEyQkdBLE1BM0JILENBMkJVLGFBM0JWLEVBMkJ5QixtQkFBVztBQUNoQ00sY0FBUUMsZ0JBQVIsQ0FBeUJDLFFBQXpCO0FBQ0QsS0E3QkgsRUFnQ0dSLE1BaENILENBZ0NVLGNBaENWLEVBZ0MwQixvQkFBWTs7QUFHbENTLGVBQVNDLE9BQVQsQ0FBaUJaLEdBQWpCLENBQXFCYSxPQUFyQjs7QUFFQSxVQUFJQyxXQUFXQyxhQUFhQyxPQUFiLENBQXFCLFVBQXJCLENBQWY7O0FBRUEsYUFBT0wsU0FBU00sS0FBVCxDQUFlO0FBQ3BCQyxpQkFBUztBQUNQQyxvQkFBVTtBQURILFNBRFc7QUFJcEJDLGFBQWFOLFlBQVlYLFVBQVVrQixhQUFWLENBQXdCUCxRQUo3QjtBQUtwQlEsb0JBQWEsQ0FBQyxHQUFELENBTE87QUFNcEJDLHFCQUFhVCxZQUFZWCxVQUFVa0IsYUFBVixDQUF3QlAsUUFON0I7QUFPcEJVLGVBQWE7QUFQTyxPQUFmLENBQVA7QUFTRCxLQWhESCxFQW1ER0MsZUFuREgsQ0FtRG1CLHdDQW5EbkI7O0FBcURBLFFBQUlDLGVBQWUzQixRQUFRNEIsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0JDLE1BQXRCLENBQW5COztBQUVBLFFBQUlILGFBQWFJLEtBQWIsQ0FBbUIsYUFBbkIsTUFBc0MsYUFBMUMsRUFBeUQ7QUFDdkQvQixjQUFRQyxHQUFSLENBQVkrQixrQkFBWjtBQUNEOztBQUVEaEMsWUFBUWlDLEtBQVIsR0FBZ0JDLElBQWhCLENBQXFCLGFBQUs7QUFDeEJDLFFBQUVQLFNBQUYsQ0FBWUMsR0FBWixDQUFnQk8sTUFBaEIsRUFBd0JyQyxTQUF4QixDQUFrQ3NDLGVBQWxDO0FBQ0FGLFFBQUVHLE9BQUYsQ0FBVSxLQUFWO0FBQ0QsS0FIRDtBQUlEOzt1QkFoRWV2QyxTOztBQWtFaEIsV0FBU3NDLGVBQVQsQ0FBeUJFLE1BQXpCLEVBQWlDO0FBQy9CQSxXQUFPQyxLQUFQLEdBQWVwQyxVQUFVcUMsR0FBVixDQUFjRCxLQUE3Qjs7QUFFQUQsV0FBT0csZUFBUCxDQUF1QixXQUF2QixFQUFvQ0MsYUFBcEM7O0FBRUFKLFdBQU9LLEdBQVAsQ0FBV0MsTUFBWDtBQUNEOzs7QUFwRk1BLFk7O0FBQ0F6QyxlOztBQUNBQyxnQjs7QUFDQUMsaUI7O0FBQ0tLLGM7O0FBQ0xHLGE7O0FBQ0NzQixZLGtCQUFBQSxNOztBQUNBTyxtQiwwQkFBQUEsYTs7QUFDQWIsWSxrQkFBQUEsTSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
