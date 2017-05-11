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
        this.listRepository = entityManager.getRepository('list');
      }) || _class));

      _export("Demo", Demo);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UvYXNzb2NpYXRpb24tc2VsZWN0L2RlbW8uanMiXSwibmFtZXMiOlsiaW5qZWN0IiwiRW50aXR5TWFuYWdlciIsIkRlbW8iLCJlbnRpdHlNYW5hZ2VyIiwidG9kb1JlcG9zaXRvcnkiLCJnZXRSZXBvc2l0b3J5IiwibGlzdFJlcG9zaXRvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFRQSxZLCtCQUFBQSxNOztBQUNBQyxtQixlQUFBQSxhOzs7c0JBR0tDLEksV0FEWkYsT0FBT0MsYUFBUCxDLGdCQUVDLGNBQVlFLGFBQVosRUFBMkI7QUFBQTs7QUFDekIsYUFBS0MsY0FBTCxHQUFzQkQsY0FBY0UsYUFBZCxDQUE0QixNQUE1QixDQUF0QjtBQUNBLGFBQUtDLGNBQUwsR0FBc0JILGNBQWNFLGFBQWQsQ0FBNEIsTUFBNUIsQ0FBdEI7QUFDRCxPIiwiZmlsZSI6InBhZ2UvYXNzb2NpYXRpb24tc2VsZWN0L2RlbW8uanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
