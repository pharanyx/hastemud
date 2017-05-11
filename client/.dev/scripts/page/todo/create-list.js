"use strict";

System.register(["aurelia-dependency-injection", "aurelia-orm", "aurelia-router", "aurelia-notification", "aurelia-validation", "aurelia-form-renderer-bootstrap"], function (_export, _context) {
  "use strict";

  var inject, NewInstance, EntityManager, Router, Notification, ValidationController, validateTrigger, FormRendererBootstrap, _dec, _class, CreateList;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
      NewInstance = _aureliaDependencyInjection.NewInstance;
    }, function (_aureliaOrm) {
      EntityManager = _aureliaOrm.EntityManager;
    }, function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_aureliaNotification) {
      Notification = _aureliaNotification.Notification;
    }, function (_aureliaValidation) {
      ValidationController = _aureliaValidation.ValidationController;
      validateTrigger = _aureliaValidation.validateTrigger;
    }, function (_aureliaFormRendererBootstrap) {
      FormRendererBootstrap = _aureliaFormRendererBootstrap.FormRendererBootstrap;
    }],
    execute: function () {
      _export("CreateList", CreateList = (_dec = inject(EntityManager, Router, Notification, NewInstance.of(ValidationController)), _dec(_class = function () {
        function CreateList(entityManager, router, notification, controller) {
          _classCallCheck(this, CreateList);

          this.notification = notification;
          this.router = router;
          this.list = entityManager.getEntity('list');
          this.controller = controller;

          this.controller.addRenderer(new FormRendererBootstrap());
          this.controller.validateTrigger = validateTrigger.change;
        }

        CreateList.prototype.save = function save() {
          var _this = this;

          this.controller.validate().then(function (v) {
            if (v.length === 0) {
              return _this.list.save().then(function () {
                _this.notification.success('List saved successfully!');
                _this.router.navigate('lists');
              });
            }
            throw v[0];
          }).catch(function () {});
        };

        return CreateList;
      }()) || _class));

      _export("CreateList", CreateList);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UvdG9kby9jcmVhdGUtbGlzdC5qcyJdLCJuYW1lcyI6WyJpbmplY3QiLCJOZXdJbnN0YW5jZSIsIkVudGl0eU1hbmFnZXIiLCJSb3V0ZXIiLCJOb3RpZmljYXRpb24iLCJWYWxpZGF0aW9uQ29udHJvbGxlciIsInZhbGlkYXRlVHJpZ2dlciIsIkZvcm1SZW5kZXJlckJvb3RzdHJhcCIsIkNyZWF0ZUxpc3QiLCJvZiIsImVudGl0eU1hbmFnZXIiLCJyb3V0ZXIiLCJub3RpZmljYXRpb24iLCJjb250cm9sbGVyIiwibGlzdCIsImdldEVudGl0eSIsImFkZFJlbmRlcmVyIiwiY2hhbmdlIiwic2F2ZSIsInZhbGlkYXRlIiwidGhlbiIsInYiLCJsZW5ndGgiLCJzdWNjZXNzIiwibmF2aWdhdGUiLCJjYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQVFBLFksK0JBQUFBLE07QUFBUUMsaUIsK0JBQUFBLFc7O0FBQ1JDLG1CLGVBQUFBLGE7O0FBQ0FDLFksa0JBQUFBLE07O0FBQ0FDLGtCLHdCQUFBQSxZOztBQUNBQywwQixzQkFBQUEsb0I7QUFBc0JDLHFCLHNCQUFBQSxlOztBQUN0QkMsMkIsaUNBQUFBLHFCOzs7NEJBR0tDLFUsV0FEWlIsT0FBT0UsYUFBUCxFQUFzQkMsTUFBdEIsRUFBOEJDLFlBQTlCLEVBQTRDSCxZQUFZUSxFQUFaLENBQWVKLG9CQUFmLENBQTVDLEM7QUFFQyw0QkFBWUssYUFBWixFQUEyQkMsTUFBM0IsRUFBbUNDLFlBQW5DLEVBQWlEQyxVQUFqRCxFQUE2RDtBQUFBOztBQUMzRCxlQUFLRCxZQUFMLEdBQW9CQSxZQUFwQjtBQUNBLGVBQUtELE1BQUwsR0FBb0JBLE1BQXBCO0FBQ0EsZUFBS0csSUFBTCxHQUFvQkosY0FBY0ssU0FBZCxDQUF3QixNQUF4QixDQUFwQjtBQUNBLGVBQUtGLFVBQUwsR0FBb0JBLFVBQXBCOztBQUVBLGVBQUtBLFVBQUwsQ0FBZ0JHLFdBQWhCLENBQTRCLElBQUlULHFCQUFKLEVBQTVCO0FBQ0EsZUFBS00sVUFBTCxDQUFnQlAsZUFBaEIsR0FBa0NBLGdCQUFnQlcsTUFBbEQ7QUFDRDs7NkJBRURDLEksbUJBQU87QUFBQTs7QUFDTCxlQUFLTCxVQUFMLENBQWdCTSxRQUFoQixHQUEyQkMsSUFBM0IsQ0FBZ0MsYUFBSztBQUNuQyxnQkFBSUMsRUFBRUMsTUFBRixLQUFhLENBQWpCLEVBQW9CO0FBQ2xCLHFCQUFPLE1BQUtSLElBQUwsQ0FBVUksSUFBVixHQUNKRSxJQURJLENBQ0MsWUFBTTtBQUNWLHNCQUFLUixZQUFMLENBQWtCVyxPQUFsQixDQUEwQiwwQkFBMUI7QUFDQSxzQkFBS1osTUFBTCxDQUFZYSxRQUFaLENBQXFCLE9BQXJCO0FBQ0gsZUFKTSxDQUFQO0FBS0Q7QUFDRCxrQkFBTUgsRUFBRSxDQUFGLENBQU47QUFDRCxXQVRELEVBVUNJLEtBVkQsQ0FVTyxZQUFNLENBRVosQ0FaRDtBQWFELFMiLCJmaWxlIjoicGFnZS90b2RvL2NyZWF0ZS1saXN0LmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
