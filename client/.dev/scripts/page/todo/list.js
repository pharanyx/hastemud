'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-orm', 'aurelia-notification', 'aurelia-validation', 'aurelia-i18n'], function (_export, _context) {
  "use strict";

  var inject, NewInstance, EntityManager, Notification, ValidationController, I18N, _dec, _class, List;

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
    }, function (_aureliaNotification) {
      Notification = _aureliaNotification.Notification;
    }, function (_aureliaValidation) {
      ValidationController = _aureliaValidation.ValidationController;
    }, function (_aureliaI18n) {
      I18N = _aureliaI18n.I18N;
    }],
    execute: function () {
      _export('List', List = (_dec = inject(EntityManager, Notification, NewInstance.of(ValidationController), I18N), _dec(_class = function () {
        function List(entityManager, notification, controller, i18n) {
          _classCallCheck(this, List);

          this.notification = notification;
          this.listRepository = entityManager.getRepository('list');
          this.entityManager = entityManager;
          this.controller = controller;
          this.i18n = i18n;
        }

        List.prototype.attached = function attached() {
          var _this = this;

          return this.listRepository.find().then(function (lists) {
            _this.lists = lists;
          });
        };

        List.prototype.destroy = function destroy(index) {
          var _this2 = this;

          var list = this.lists[index];

          list.destroy().then(function () {
            _this2.lists.splice(index, 1);
            _this2.notification.success('List deleted successfully!');
          }).catch(function () {
            _this2.notification.error('Something went wrong!');
          });
        };

        List.prototype.save = function save(list) {
          var _this3 = this;

          list.save().then(function () {
            _this3.notification.success('List saved successfully!');
          }).catch(function () {
            _this3.notification.error('Something went wrong!');
          });
        };

        List.prototype.destroyTodo = function destroyTodo(list, index) {
          var _this4 = this;

          list.todos.splice(index, 1);

          list.save().then(function () {
            _this4.notification.success('Todo removed successfully!');
          }).catch(function () {
            _this4.notification.error('Something went wrong!');
          });
        };

        List.prototype.addTodo = function addTodo(list) {
          var _this5 = this;

          var todo = this.entityManager.getEntity('todo');

          todo.todo = prompt(this.i18n.tr('What is it you need to do?'));

          todo.validate().then(function (v) {
            if (v.length === 0) {
              list.todos.push(todo);

              return list.save().then(function () {
                _this5.notification.success('Todo created successfully!');
              }).catch(function (err) {
                list.todos.pop();

                throw err;
              });
            }

            throw v[0];
          }).catch(function (err) {
            _this5.notification.error(err.message);
          });
        };

        List.prototype.updated = function updated(todo) {
          var _this6 = this;

          todo.done = !todo.done;

          todo.save().then(function () {
            _this6.notification.success('Todo saved successfully!');
          }).catch(function () {
            _this6.notification.error('Something went wrong!');
          });

          return true;
        };

        List.prototype.keypress = function keypress(event, list) {
          if (event.which !== 13) {
            return true;
          }

          event.preventDefault();

          return this.save(list);
        };

        return List;
      }()) || _class));

      _export('List', List);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UvdG9kby9saXN0LmpzIl0sIm5hbWVzIjpbImluamVjdCIsIk5ld0luc3RhbmNlIiwiRW50aXR5TWFuYWdlciIsIk5vdGlmaWNhdGlvbiIsIlZhbGlkYXRpb25Db250cm9sbGVyIiwiSTE4TiIsIkxpc3QiLCJvZiIsImVudGl0eU1hbmFnZXIiLCJub3RpZmljYXRpb24iLCJjb250cm9sbGVyIiwiaTE4biIsImxpc3RSZXBvc2l0b3J5IiwiZ2V0UmVwb3NpdG9yeSIsImF0dGFjaGVkIiwiZmluZCIsInRoZW4iLCJsaXN0cyIsImRlc3Ryb3kiLCJpbmRleCIsImxpc3QiLCJzcGxpY2UiLCJzdWNjZXNzIiwiY2F0Y2giLCJlcnJvciIsInNhdmUiLCJkZXN0cm95VG9kbyIsInRvZG9zIiwiYWRkVG9kbyIsInRvZG8iLCJnZXRFbnRpdHkiLCJwcm9tcHQiLCJ0ciIsInZhbGlkYXRlIiwidiIsImxlbmd0aCIsInB1c2giLCJwb3AiLCJlcnIiLCJtZXNzYWdlIiwidXBkYXRlZCIsImRvbmUiLCJrZXlwcmVzcyIsImV2ZW50Iiwid2hpY2giLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQVFBLFksK0JBQUFBLE07QUFBUUMsaUIsK0JBQUFBLFc7O0FBQ1JDLG1CLGVBQUFBLGE7O0FBQ0FDLGtCLHdCQUFBQSxZOztBQUNBQywwQixzQkFBQUEsb0I7O0FBQ0FDLFUsZ0JBQUFBLEk7OztzQkFHS0MsSSxXQURaTixPQUFPRSxhQUFQLEVBQXNCQyxZQUF0QixFQUFvQ0YsWUFBWU0sRUFBWixDQUFlSCxvQkFBZixDQUFwQyxFQUEwRUMsSUFBMUUsQztBQUVDLHNCQUFZRyxhQUFaLEVBQTJCQyxZQUEzQixFQUF5Q0MsVUFBekMsRUFBcURDLElBQXJELEVBQTJEO0FBQUE7O0FBQ3pELGVBQUtGLFlBQUwsR0FBc0JBLFlBQXRCO0FBQ0EsZUFBS0csY0FBTCxHQUFzQkosY0FBY0ssYUFBZCxDQUE0QixNQUE1QixDQUF0QjtBQUNBLGVBQUtMLGFBQUwsR0FBc0JBLGFBQXRCO0FBQ0EsZUFBS0UsVUFBTCxHQUFzQkEsVUFBdEI7QUFDQSxlQUFLQyxJQUFMLEdBQXNCQSxJQUF0QjtBQUNEOzt1QkFFREcsUSx1QkFBVztBQUFBOztBQUNULGlCQUFPLEtBQUtGLGNBQUwsQ0FBb0JHLElBQXBCLEdBQ0pDLElBREksQ0FDQyxpQkFBUztBQUNiLGtCQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDRCxXQUhJLENBQVA7QUFJRCxTOzt1QkFFREMsTyxvQkFBUUMsSyxFQUFPO0FBQUE7O0FBQ2IsY0FBSUMsT0FBTyxLQUFLSCxLQUFMLENBQVdFLEtBQVgsQ0FBWDs7QUFFQUMsZUFBS0YsT0FBTCxHQUNHRixJQURILENBQ1EsWUFBTTtBQUNWLG1CQUFLQyxLQUFMLENBQVdJLE1BQVgsQ0FBa0JGLEtBQWxCLEVBQXlCLENBQXpCO0FBQ0EsbUJBQUtWLFlBQUwsQ0FBa0JhLE9BQWxCLENBQTBCLDRCQUExQjtBQUNELFdBSkgsRUFLR0MsS0FMSCxDQUtTLFlBQU07QUFDWCxtQkFBS2QsWUFBTCxDQUFrQmUsS0FBbEIsQ0FBd0IsdUJBQXhCO0FBQ0QsV0FQSDtBQVFELFM7O3VCQUVEQyxJLGlCQUFLTCxJLEVBQU07QUFBQTs7QUFDVEEsZUFBS0ssSUFBTCxHQUNHVCxJQURILENBQ1EsWUFBTTtBQUNWLG1CQUFLUCxZQUFMLENBQWtCYSxPQUFsQixDQUEwQiwwQkFBMUI7QUFDRCxXQUhILEVBSUdDLEtBSkgsQ0FJUyxZQUFNO0FBQ1gsbUJBQUtkLFlBQUwsQ0FBa0JlLEtBQWxCLENBQXdCLHVCQUF4QjtBQUNELFdBTkg7QUFPRCxTOzt1QkFFREUsVyx3QkFBWU4sSSxFQUFNRCxLLEVBQU87QUFBQTs7QUFDdkJDLGVBQUtPLEtBQUwsQ0FBV04sTUFBWCxDQUFrQkYsS0FBbEIsRUFBeUIsQ0FBekI7O0FBRUFDLGVBQUtLLElBQUwsR0FDR1QsSUFESCxDQUNRLFlBQU07QUFDVixtQkFBS1AsWUFBTCxDQUFrQmEsT0FBbEIsQ0FBMEIsNEJBQTFCO0FBQ0QsV0FISCxFQUlHQyxLQUpILENBSVMsWUFBTTtBQUNYLG1CQUFLZCxZQUFMLENBQWtCZSxLQUFsQixDQUF3Qix1QkFBeEI7QUFDRCxXQU5IO0FBT0QsUzs7dUJBRURJLE8sb0JBQVFSLEksRUFBTTtBQUFBOztBQUNaLGNBQUlTLE9BQVEsS0FBS3JCLGFBQUwsQ0FBbUJzQixTQUFuQixDQUE2QixNQUE3QixDQUFaOztBQUVBRCxlQUFLQSxJQUFMLEdBQVlFLE9BQU8sS0FBS3BCLElBQUwsQ0FBVXFCLEVBQVYsQ0FBYSw0QkFBYixDQUFQLENBQVo7O0FBRUFILGVBQUtJLFFBQUwsR0FDR2pCLElBREgsQ0FDUSxhQUFLO0FBQ1QsZ0JBQUlrQixFQUFFQyxNQUFGLEtBQWEsQ0FBakIsRUFBb0I7QUFDbEJmLG1CQUFLTyxLQUFMLENBQVdTLElBQVgsQ0FBZ0JQLElBQWhCOztBQUVBLHFCQUFPVCxLQUFLSyxJQUFMLEdBQ0pULElBREksQ0FDQyxZQUFNO0FBQ1YsdUJBQUtQLFlBQUwsQ0FBa0JhLE9BQWxCLENBQTBCLDRCQUExQjtBQUVELGVBSkksRUFLSkMsS0FMSSxDQUtFLGVBQU87QUFDWkgscUJBQUtPLEtBQUwsQ0FBV1UsR0FBWDs7QUFFQSxzQkFBTUMsR0FBTjtBQUNELGVBVEksQ0FBUDtBQVVEOztBQUVELGtCQUFNSixFQUFFLENBQUYsQ0FBTjtBQUNELFdBbEJILEVBbUJHWCxLQW5CSCxDQW1CUyxlQUFPO0FBQ1osbUJBQUtkLFlBQUwsQ0FBa0JlLEtBQWxCLENBQXdCYyxJQUFJQyxPQUE1QjtBQUNELFdBckJIO0FBc0JELFM7O3VCQUVEQyxPLG9CQUFRWCxJLEVBQU07QUFBQTs7QUFDWkEsZUFBS1ksSUFBTCxHQUFZLENBQUNaLEtBQUtZLElBQWxCOztBQUVBWixlQUFLSixJQUFMLEdBQ0dULElBREgsQ0FDUSxZQUFNO0FBQ1YsbUJBQUtQLFlBQUwsQ0FBa0JhLE9BQWxCLENBQTBCLDBCQUExQjtBQUNELFdBSEgsRUFJR0MsS0FKSCxDQUlTLFlBQU07QUFDWCxtQkFBS2QsWUFBTCxDQUFrQmUsS0FBbEIsQ0FBd0IsdUJBQXhCO0FBQ0QsV0FOSDs7QUFRQSxpQkFBTyxJQUFQO0FBQ0QsUzs7dUJBRURrQixRLHFCQUFTQyxLLEVBQU92QixJLEVBQU07QUFDcEIsY0FBSXVCLE1BQU1DLEtBQU4sS0FBZ0IsRUFBcEIsRUFBd0I7QUFDdEIsbUJBQU8sSUFBUDtBQUNEOztBQUVERCxnQkFBTUUsY0FBTjs7QUFFQSxpQkFBTyxLQUFLcEIsSUFBTCxDQUFVTCxJQUFWLENBQVA7QUFDRCxTIiwiZmlsZSI6InBhZ2UvdG9kby9saXN0LmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
