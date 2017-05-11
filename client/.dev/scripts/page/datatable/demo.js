"use strict";

System.register(["aurelia-dependency-injection", "aurelia-orm"], function (_export, _context) {
  "use strict";

  var inject, EntityManager, _dec, _class, Demo;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaOrm) {
      EntityManager = _aureliaOrm.EntityManager;
    }],
    execute: function () {
      _export("Demo", Demo = (_dec = inject(EntityManager), _dec(_class = function () {
        function Demo(entityManager) {
          var _this = this;

          _classCallCheck(this, Demo);

          this.actions = [{
            icon: 'flag',
            title: 'My Title',
            type: 'primary',
            action: function action(record) {
              _this.customAction(record);
            },
            disabled: function disabled(record) {
              return record.id % 2 === 0;
            }
          }];

          this.todoRepository = entityManager.getRepository('todo');
        }

        Demo.prototype.customAction = function customAction(record) {
          console.log('Custom action was triggerd with data: ', record);
        };

        Demo.prototype.myEventCallback = function myEventCallback(event) {
          console.log('Event "%s" was triggerd', event);
        };

        Demo.prototype.myFunctionCallback = function myFunctionCallback(event) {
          console.log('Edit was triggerd with data:', event);
        };

        return Demo;
      }()) || _class));

      _export("Demo", Demo);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UvZGF0YXRhYmxlL2RlbW8uanMiXSwibmFtZXMiOlsiaW5qZWN0IiwiRW50aXR5TWFuYWdlciIsIkRlbW8iLCJlbnRpdHlNYW5hZ2VyIiwiYWN0aW9ucyIsImljb24iLCJ0aXRsZSIsInR5cGUiLCJhY3Rpb24iLCJyZWNvcmQiLCJjdXN0b21BY3Rpb24iLCJkaXNhYmxlZCIsImlkIiwidG9kb1JlcG9zaXRvcnkiLCJnZXRSZXBvc2l0b3J5IiwiY29uc29sZSIsImxvZyIsIm15RXZlbnRDYWxsYmFjayIsImV2ZW50IiwibXlGdW5jdGlvbkNhbGxiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBUUEsWSwrQkFBQUEsTTs7QUFDQUMsbUIsZUFBQUEsYTs7O3NCQUdLQyxJLFdBRFpGLE9BQU9DLGFBQVAsQztBQWdCQyxzQkFBWUUsYUFBWixFQUEyQjtBQUFBOztBQUFBOztBQUFBLGVBYjNCQyxPQWEyQixHQWJqQixDQUFDO0FBQ1RDLGtCQUFRLE1BREM7QUFFVEMsbUJBQVEsVUFGQztBQUdUQyxrQkFBUSxTQUhDO0FBSVRDLG9CQUFRLGdCQUFDQyxNQUFELEVBQVk7QUFDbEIsb0JBQUtDLFlBQUwsQ0FBa0JELE1BQWxCO0FBQ0QsYUFOUTtBQU9URSxzQkFBVSwwQkFBVTtBQUVsQixxQkFBT0YsT0FBT0csRUFBUCxHQUFZLENBQVosS0FBa0IsQ0FBekI7QUFDRDtBQVZRLFdBQUQsQ0FhaUI7O0FBQ3pCLGVBQUtDLGNBQUwsR0FBc0JWLGNBQWNXLGFBQWQsQ0FBNEIsTUFBNUIsQ0FBdEI7QUFDRDs7dUJBRURKLFkseUJBQWFELE0sRUFBUTtBQUNuQk0sa0JBQVFDLEdBQVIsQ0FBWSx3Q0FBWixFQUFzRFAsTUFBdEQ7QUFDRCxTOzt1QkFFRFEsZSw0QkFBZ0JDLEssRUFBTztBQUNyQkgsa0JBQVFDLEdBQVIsQ0FBWSx5QkFBWixFQUF1Q0UsS0FBdkM7QUFDRCxTOzt1QkFFREMsa0IsK0JBQW1CRCxLLEVBQU87QUFDeEJILGtCQUFRQyxHQUFSLENBQVksOEJBQVosRUFBNENFLEtBQTVDO0FBQ0QsUyIsImZpbGUiOiJwYWdlL2RhdGF0YWJsZS9kZW1vLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
