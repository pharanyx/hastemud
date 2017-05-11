'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-templating'], function (_export, _context) {
  "use strict";

  var inject, ViewResources, _dec, _class, ConvertManagerValueConverter;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaTemplating) {
      ViewResources = _aureliaTemplating.ViewResources;
    }],
    execute: function () {
      _export('ConvertManagerValueConverter', ConvertManagerValueConverter = (_dec = inject(ViewResources), _dec(_class = function () {
        function ConvertManagerValueConverter(viewResources) {
          _classCallCheck(this, ConvertManagerValueConverter);

          this.viewResources = viewResources;
        }

        ConvertManagerValueConverter.prototype.runConverter = function runConverter(value, converter, convertParams) {
          var valueConverter = this.viewResources.getValueConverter(converter);

          if (valueConverter) {
            return valueConverter.toView(value, convertParams);
          }

          return value;
        };

        ConvertManagerValueConverter.prototype.toView = function toView(value, converters) {
          if (!converters) {
            return value;
          }

          for (var _iterator = converters.split(' | '), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
            var _ref;

            if (_isArray) {
              if (_i >= _iterator.length) break;
              _ref = _iterator[_i++];
            } else {
              _i = _iterator.next();
              if (_i.done) break;
              _ref = _i.value;
            }

            var converter = _ref;

            var index = converter.indexOf(':');

            if (index < 0) {
              value = this.runConverter(value, converter);

              continue;
            }

            var name = converter.slice(0, index);
            var param = this.parseParams(converter.slice(index + 1).trim());

            value = this.runConverter(value, name, param);
          }

          return value;
        };

        ConvertManagerValueConverter.prototype.parseParams = function parseParams(str) {
          if (!str) {
            return null;
          }

          return str;
        };

        return ConvertManagerValueConverter;
      }()) || _class));

      _export('ConvertManagerValueConverter', ConvertManagerValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC92YWx1ZS1jb252ZXJ0ZXJzL2NvbnZlcnQtbWFuYWdlci5qcyJdLCJuYW1lcyI6WyJpbmplY3QiLCJWaWV3UmVzb3VyY2VzIiwiQ29udmVydE1hbmFnZXJWYWx1ZUNvbnZlcnRlciIsInZpZXdSZXNvdXJjZXMiLCJydW5Db252ZXJ0ZXIiLCJ2YWx1ZSIsImNvbnZlcnRlciIsImNvbnZlcnRQYXJhbXMiLCJ2YWx1ZUNvbnZlcnRlciIsImdldFZhbHVlQ29udmVydGVyIiwidG9WaWV3IiwiY29udmVydGVycyIsInNwbGl0IiwiaW5kZXgiLCJpbmRleE9mIiwibmFtZSIsInNsaWNlIiwicGFyYW0iLCJwYXJzZVBhcmFtcyIsInRyaW0iLCJzdHIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFRQSxZLCtCQUFBQSxNOztBQUNBQyxtQixzQkFBQUEsYTs7OzhDQUtLQyw0QixXQURaRixPQUFPQyxhQUFQLEM7QUFFQyw4Q0FBWUUsYUFBWixFQUEyQjtBQUFBOztBQUN6QixlQUFLQSxhQUFMLEdBQXFCQSxhQUFyQjtBQUVEOzsrQ0FFREMsWSx5QkFBYUMsSyxFQUFPQyxTLEVBQVdDLGEsRUFBZTtBQUM1QyxjQUFJQyxpQkFBaUIsS0FBS0wsYUFBTCxDQUFtQk0saUJBQW5CLENBQXFDSCxTQUFyQyxDQUFyQjs7QUFFQSxjQUFJRSxjQUFKLEVBQW9CO0FBQ2xCLG1CQUFPQSxlQUFlRSxNQUFmLENBQXNCTCxLQUF0QixFQUE2QkUsYUFBN0IsQ0FBUDtBQUNEOztBQUlELGlCQUFPRixLQUFQO0FBQ0QsUzs7K0NBRURLLE0sbUJBQU9MLEssRUFBT00sVSxFQUFZO0FBQ3hCLGNBQUksQ0FBQ0EsVUFBTCxFQUFpQjtBQUNmLG1CQUFPTixLQUFQO0FBQ0Q7O0FBRUQsK0JBQXNCTSxXQUFXQyxLQUFYLENBQWlCLEtBQWpCLENBQXRCLGtIQUErQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUEsZ0JBQXRDTixTQUFzQzs7QUFDN0MsZ0JBQUlPLFFBQVFQLFVBQVVRLE9BQVYsQ0FBa0IsR0FBbEIsQ0FBWjs7QUFFQSxnQkFBSUQsUUFBUSxDQUFaLEVBQWU7QUFDYlIsc0JBQVEsS0FBS0QsWUFBTCxDQUFrQkMsS0FBbEIsRUFBeUJDLFNBQXpCLENBQVI7O0FBRUE7QUFDRDs7QUFFRCxnQkFBSVMsT0FBUVQsVUFBVVUsS0FBVixDQUFnQixDQUFoQixFQUFtQkgsS0FBbkIsQ0FBWjtBQUNBLGdCQUFJSSxRQUFRLEtBQUtDLFdBQUwsQ0FBaUJaLFVBQVVVLEtBQVYsQ0FBZ0JILFFBQVEsQ0FBeEIsRUFBMkJNLElBQTNCLEVBQWpCLENBQVo7O0FBRUFkLG9CQUFRLEtBQUtELFlBQUwsQ0FBa0JDLEtBQWxCLEVBQXlCVSxJQUF6QixFQUErQkUsS0FBL0IsQ0FBUjtBQUNEOztBQUVELGlCQUFPWixLQUFQO0FBQ0QsUzs7K0NBRURhLFcsd0JBQVlFLEcsRUFBSztBQUNmLGNBQUksQ0FBQ0EsR0FBTCxFQUFVO0FBQ1IsbUJBQU8sSUFBUDtBQUNEOztBQUVELGlCQUFPQSxHQUFQO0FBT0QsUyIsImZpbGUiOiJjb21wb25lbnQvdmFsdWUtY29udmVydGVycy9jb252ZXJ0LW1hbmFnZXIuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
