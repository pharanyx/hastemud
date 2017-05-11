'use strict';

System.register(['aurelia-framework', 'aurelia-orm'], function (_export, _context) {
  "use strict";

  var BindingEngine, inject, EntityManager, _dec, _class, Demo;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function feedbackForm() {
    var schema = [{
      key: 'name',
      type: 'string',
      attributes: {
        placeholder: 'name'
      }
    }, {
      key: 'feedback',
      type: 'textarea'
    }];

    var model = {
      name: '',
      feedback: 'I like your product'
    };

    return { schema: schema, model: model };
  }

  function productForm() {
    var model = {
      name: 'Bread',
      tags: [{
        name: 'Basics',
        color: '#FF3333'
      }, {
        name: 'Brown',
        color: '#992233'
      }]
    };

    var removeTag = function removeTag(tag, index, $event) {
      model.tags.splice(index, 1);
    };

    var addTag = function addTag(tag, index, $event) {
      model.tags.push({
        name: '',
        color: '#ffffff'
      });
    };

    var tagSchema = [{
      key: 'name',
      type: 'string',
      attributes: {
        placeholder: 'tag name'
      }
    }, {
      key: 'color',
      type: 'color'
    }, {
      type: 'buttons',
      actions: [{
        label: 'remove',
        action: removeTag,
        attributes: {
          class: 'btn btn-warning'
        }
      }]
    }];

    var schema = [{
      key: 'name',
      type: 'string'
    }, {
      key: 'tags',
      type: 'collection',
      schema: tagSchema
    }, {
      type: 'buttons',
      actions: [{
        label: 'add tag',
        action: addTag,
        attributes: {
          class: 'btn btn-primary'
        }
      }]
    }];

    return { schema: schema, model: model };
  }

  function petOwnerForm(bindingEngine) {
    var petsModel = ['cat', 'dog'];
    var petsOptions = [];

    var calculatePetsOptions = function calculatePetsOptions() {
      petsOptions.length = 0;
      petsModel.forEach(function (pet) {
        petsOptions.push({
          name: capitalize(pet),
          value: pet
        });
      });

      return petsOptions;
    };

    petsOptions = calculatePetsOptions();

    var model = {
      food: 'other',
      favorite: 'cat',
      pets: petsModel
    };

    var schema = [{
      key: 'food',
      type: 'select',
      options: ["Brand", { name: 'Other' }, { value: 'Basic' }, { name: 'Premium', value: 'premium' }]
    }, {
      key: 'pets',
      type: 'checkboxes',
      options: [{
        name: 'Parrot',
        value: 'parrot'

      }, {
        name: 'Dog',
        value: 'dog'
      }, {
        name: 'Cat',
        value: 'cat'
      }]
    }, {
      key: 'favorite',
      type: 'radios',
      options: petsOptions
    }];

    bindingEngine.collectionObserver(petsModel).subscribe(calculatePetsOptions);

    return { model: model, schema: schema };
  }

  function loginForm() {
    var model = {
      email: 'info@spoonx.nl',
      password: '',
      remember: false,
      pet: ['dog']
    };

    var schema = [{
      key: 'email',
      type: 'email'
    }, {
      key: 'password',
      type: 'password'
    }, {
      key: 'remember',
      type: 'boolean'
    }];

    return { model: model, schema: schema };
  }

  function todoForm(lists) {

    var model = { lists: lists };

    var schema = [{
      key: 'lists',
      type: 'collection',
      schema: [{
        key: 'todos',
        type: 'collection',
        schema: [{
          key: 'todo'
        }, {
          type: 'boolean',
          label: false,
          key: 'done'
        }, {
          type: 'association',
          label: false,
          resource: 'list',
          key: 'list'
        }, {
          type: 'actions',
          actions: [{
            label: 'save',
            action: function action(entity) {
              entity.save();
            }
          }]
        }]
      }]
    }];

    return { model: model, schema: schema };
  }

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return {
    setters: [function (_aureliaFramework) {
      BindingEngine = _aureliaFramework.BindingEngine;
      inject = _aureliaFramework.inject;
    }, function (_aureliaOrm) {
      EntityManager = _aureliaOrm.EntityManager;
    }],
    execute: function () {
      _export('Demo', Demo = (_dec = inject(BindingEngine, EntityManager), _dec(_class = function Demo(bindingEngine, entityManager) {
        var _this = this;

        _classCallCheck(this, Demo);

        this.entity = entityManager.getEntity('todo');
        this.petOwnerForm = petOwnerForm(bindingEngine);
        this.loginForm = loginForm();
        this.productForm = productForm();
        this.feedbackForm = feedbackForm();

        this.todoForm = {
          schema: [],
          model: { lists: [] }
        };

        entityManager.getRepository('list').find().then(function (lists) {
          _this.todoForm = todoForm(lists);
        });
      }) || _class));

      _export('Demo', Demo);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UvZm9ybS9kZW1vLmpzIl0sIm5hbWVzIjpbImZlZWRiYWNrRm9ybSIsInNjaGVtYSIsImtleSIsInR5cGUiLCJhdHRyaWJ1dGVzIiwicGxhY2Vob2xkZXIiLCJtb2RlbCIsIm5hbWUiLCJmZWVkYmFjayIsInByb2R1Y3RGb3JtIiwidGFncyIsImNvbG9yIiwicmVtb3ZlVGFnIiwidGFnIiwiaW5kZXgiLCIkZXZlbnQiLCJzcGxpY2UiLCJhZGRUYWciLCJwdXNoIiwidGFnU2NoZW1hIiwiYWN0aW9ucyIsImxhYmVsIiwiYWN0aW9uIiwiY2xhc3MiLCJwZXRPd25lckZvcm0iLCJiaW5kaW5nRW5naW5lIiwicGV0c01vZGVsIiwicGV0c09wdGlvbnMiLCJjYWxjdWxhdGVQZXRzT3B0aW9ucyIsImxlbmd0aCIsImZvckVhY2giLCJjYXBpdGFsaXplIiwicGV0IiwidmFsdWUiLCJmb29kIiwiZmF2b3JpdGUiLCJwZXRzIiwib3B0aW9ucyIsImNvbGxlY3Rpb25PYnNlcnZlciIsInN1YnNjcmliZSIsImxvZ2luRm9ybSIsImVtYWlsIiwicGFzc3dvcmQiLCJyZW1lbWJlciIsInRvZG9Gb3JtIiwibGlzdHMiLCJyZXNvdXJjZSIsImVudGl0eSIsInNhdmUiLCJzdHJpbmciLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiQmluZGluZ0VuZ2luZSIsImluamVjdCIsIkVudGl0eU1hbmFnZXIiLCJEZW1vIiwiZW50aXR5TWFuYWdlciIsImdldEVudGl0eSIsImdldFJlcG9zaXRvcnkiLCJmaW5kIiwidGhlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQTBCQSxXQUFTQSxZQUFULEdBQXdCO0FBQ3RCLFFBQUlDLFNBQVMsQ0FBQztBQUNaQyxXQUFZLE1BREE7QUFFWkMsWUFBWSxRQUZBO0FBR1pDLGtCQUFZO0FBQ1ZDLHFCQUFhO0FBREg7QUFIQSxLQUFELEVBTVY7QUFDREgsV0FBTSxVQURMO0FBRURDLFlBQU07QUFGTCxLQU5VLENBQWI7O0FB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
