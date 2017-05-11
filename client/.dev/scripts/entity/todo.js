'use strict';

System.register(['aurelia-orm', 'aurelia-validation'], function (_export, _context) {
  "use strict";

  var Entity, validatedResource, type, ValidationRules, _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, TodoEntity;

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
      type = _aureliaOrm.type;
    }, function (_aureliaValidation) {
      ValidationRules = _aureliaValidation.ValidationRules;
    }],
    execute: function () {
      _export('TodoEntity', TodoEntity = (_dec = validatedResource('todo'), _dec2 = type('string'), _dec3 = type('boolean'), _dec(_class = (_class2 = function (_Entity) {
        _inherits(TodoEntity, _Entity);

        function TodoEntity() {
          _classCallCheck(this, TodoEntity);

          var _this = _possibleConstructorReturn(this, _Entity.call(this));

          _initDefineProp(_this, 'todo', _descriptor, _this);

          _initDefineProp(_this, 'done', _descriptor2, _this);

          ValidationRules.ensure('todo').required().on(_this);
          return _this;
        }

        return TodoEntity;
      }(Entity), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'todo', [_dec2], {
        enumerable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'done', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class));

      _export('TodoEntity', TodoEntity);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudGl0eS90b2RvLmpzIl0sIm5hbWVzIjpbIkVudGl0eSIsInZhbGlkYXRlZFJlc291cmNlIiwidHlwZSIsIlZhbGlkYXRpb25SdWxlcyIsIlRvZG9FbnRpdHkiLCJlbnN1cmUiLCJyZXF1aXJlZCIsIm9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVFBLFksZUFBQUEsTTtBQUFRQyx1QixlQUFBQSxpQjtBQUFtQkMsVSxlQUFBQSxJOztBQUMzQkMscUIsc0JBQUFBLGU7Ozs0QkFHS0MsVSxXQURaSCxrQkFBa0IsTUFBbEIsQyxVQUdFQyxLQUFLLFFBQUwsQyxVQUdBQSxLQUFLLFNBQUwsQzs7O0FBR0QsOEJBQWM7QUFBQTs7QUFBQSx1REFDWixrQkFEWTs7QUFBQTs7QUFBQTs7QUFHWkMsMEJBQ0dFLE1BREgsQ0FDVSxNQURWLEVBQ2tCQyxRQURsQixHQUVHQyxFQUZIO0FBSFk7QUFNYjs7O1FBZDZCUCxNOzs7aUJBR3ZCLEU7Ozs7O2lCQUdBLEsiLCJmaWxlIjoiZW50aXR5L3RvZG8uanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
