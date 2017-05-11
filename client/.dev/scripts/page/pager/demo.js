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
      _export("Demo", Demo = (_dec = inject(EntityManager), _dec(_class = function Demo(entityManager) {
        _classCallCheck(this, Demo);

        this.todoRepository = entityManager.getRepository('todo');

        var data = [];

        for (var i = 0; i < 500; i += 1) {
          data.push({
            id: i
          });
        }

        this.pagerData = data;
      }) || _class));

      _export("Demo", Demo);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UvcGFnZXIvZGVtby5qcyJdLCJuYW1lcyI6WyJpbmplY3QiLCJFbnRpdHlNYW5hZ2VyIiwiRGVtbyIsImVudGl0eU1hbmFnZXIiLCJ0b2RvUmVwb3NpdG9yeSIsImdldFJlcG9zaXRvcnkiLCJkYXRhIiwiaSIsInB1c2giLCJpZCIsInBhZ2VyRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQVFBLFksK0JBQUFBLE07O0FBQ0FDLG1CLGVBQUFBLGE7OztzQkFHS0MsSSxXQURaRixPQUFPQyxhQUFQLEMsZ0JBRUMsY0FBWUUsYUFBWixFQUEyQjtBQUFBOztBQUN6QixhQUFLQyxjQUFMLEdBQXNCRCxjQUFjRSxhQUFkLENBQTRCLE1BQTVCLENBQXRCOztBQUVBLFlBQUlDLE9BQU8sRUFBWDs7QUFFQSxhQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSSxHQUFwQixFQUF5QkEsS0FBSyxDQUE5QixFQUFpQztBQUMvQkQsZUFBS0UsSUFBTCxDQUFVO0FBQ1JDLGdCQUFJRjtBQURJLFdBQVY7QUFHRDs7QUFFRCxhQUFLRyxTQUFMLEdBQWlCSixJQUFqQjtBQUNELE8iLCJmaWxlIjoicGFnZS9wYWdlci9kZW1vLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
