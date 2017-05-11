'use strict';

System.register(['aurelia-orm', 'aurelia-validation'], function (_export, _context) {
  "use strict";

  var Entity, validatedResource, association, ValidationRules, _dec, _dec2, _class, _desc, _value, _class2, _descriptor, ListEntity;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  return {
    setters: [function (_aureliaOrm) {
      Entity = _aureliaOrm.Entity;
      validatedResource = _aureliaOrm.validatedResource;
      association = _aureliaOrm.association;
    }, function (_aureliaValidation) {
      ValidationRules = _aureliaValidation.ValidationRules;
    }],
    execute: function () {
      _export('ListEntity', ListEntity = (_dec = validatedResource('list'), _dec2 = association({ collection: 'todo' }), _dec(_class = (_class2 = function (_Entity) {
        _inherits(ListEntity, _Entity);

        function ListEntity() {
          _classCallCheck(this, ListEntity);

          var _this = _possibleConstructorReturn(this, _Entity.call(this));

          _this.name = null;

          _initDefineProp(_this, 'todos', _descriptor, _this);

          ValidationRules.ensure('name').required().on(_this);
          return _this;
        }

        return ListEntity;
      }(Entity), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'todos', [_dec2], {
        enumerable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _export('ListEntity', ListEntity);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGl0eS9saXN0LmpzIl0sIm5hbWVzIjpbIkVudGl0eSIsInZhbGlkYXRlZFJlc291cmNlIiwiYXNzb2NpYXRpb24iLCJWYWxpZGF0aW9uUnVsZXMiLCJMaXN0RW50aXR5IiwiY29sbGVjdGlvbiIsIm5hbWUiLCJlbnN1cmUiLCJyZXF1aXJlZCIsIm9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVFBLFksZUFBQUEsTTtBQUFRQyx1QixlQUFBQSxpQjtBQUFtQkMsaUIsZUFBQUEsVzs7QUFDM0JDLHFCLHNCQUFBQSxlOzs7NEJBR0tDLFUsV0FEWkgsa0JBQWtCLE1BQWxCLEMsVUFJRUMsWUFBWSxFQUFDRyxZQUFZLE1BQWIsRUFBWixDOzs7QUFHRCw4QkFBYztBQUFBOztBQUFBLHVEQUNaLGtCQURZOztBQUFBLGdCQUxkQyxJQUtjLEdBTFAsSUFLTzs7QUFBQTs7QUFHWkgsMEJBQ0dJLE1BREgsQ0FDVSxNQURWLEVBQ2tCQyxRQURsQixHQUVHQyxFQUZIO0FBSFk7QUFNYjs7O1FBWjZCVCxNOzs7aUJBSXRCLEUiLCJmaWxlIjoiZW50aXR5L2xpc3QuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
