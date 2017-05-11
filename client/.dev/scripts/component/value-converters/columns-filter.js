'use strict';

System.register([], function (_export, _context) {
  "use strict";

  var ColumnsFilterValueConverter;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export('ColumnsFilterValueConverter', ColumnsFilterValueConverter = function () {
        function ColumnsFilterValueConverter() {
          _classCallCheck(this, ColumnsFilterValueConverter);
        }

        ColumnsFilterValueConverter.prototype.toView = function toView(array) {
          return array.filter(function (item) {
            return item.column.indexOf('.') === -1;
          });
        };

        return ColumnsFilterValueConverter;
      }());

      _export('ColumnsFilterValueConverter', ColumnsFilterValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC92YWx1ZS1jb252ZXJ0ZXJzL2NvbHVtbnMtZmlsdGVyLmpzIl0sIm5hbWVzIjpbIkNvbHVtbnNGaWx0ZXJWYWx1ZUNvbnZlcnRlciIsInRvVmlldyIsImFycmF5IiwiZmlsdGVyIiwiaXRlbSIsImNvbHVtbiIsImluZGV4T2YiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7NkNBQWFBLDJCOzs7Ozs4Q0FDWEMsTSxtQkFBT0MsSyxFQUFPO0FBQ1osaUJBQU9BLE1BQU1DLE1BQU4sQ0FBYTtBQUFBLG1CQUFRQyxLQUFLQyxNQUFMLENBQVlDLE9BQVosQ0FBb0IsR0FBcEIsTUFBNkIsQ0FBQyxDQUF0QztBQUFBLFdBQWIsQ0FBUDtBQUNELFMiLCJmaWxlIjoiY29tcG9uZW50L3ZhbHVlLWNvbnZlcnRlcnMvY29sdW1ucy1maWx0ZXIuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
