'use strict';

System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export('default', {
        app: {
          title: 'My SpoonX application',
          environment: 'development'
        },

        'aurelia-api': {
          endpoints: [{
            name: 'api',
            endpoint: 'http://127.0.0.1:1337/',
            default: true }, {
            name: 'auth',
            endpoint: 'http://127.0.0.1:1337/' }]
        },

        defaultLocale: {
          language: 'en',
          locale: 'en-US' },

        'aurelia-notification': {
          notifications: {
            success: 'humane-jackedup-success',
            error: 'humane-jackedup-error',
            info: 'humane-jackedup-info'
          }
        },

        'aurelia-view-manager': {
          'spoonx/datatable': {
            location: 'customViews/datatable.html'
          },
          'spoonx/form': {
            map: {
              checkboxes: 'customViews/checkbox.html'
            }
          }
        },

        'aurelia-charts': {
          defaults: {
            library: 'C3'
          }
        }
      });
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy9hcHAuanMiXSwibmFtZXMiOlsiYXBwIiwidGl0bGUiLCJlbnZpcm9ubWVudCIsImVuZHBvaW50cyIsIm5hbWUiLCJlbmRwb2ludCIsImRlZmF1bHQiLCJkZWZhdWx0TG9jYWxlIiwibGFuZ3VhZ2UiLCJsb2NhbGUiLCJub3RpZmljYXRpb25zIiwic3VjY2VzcyIsImVycm9yIiwiaW5mbyIsImxvY2F0aW9uIiwibWFwIiwiY2hlY2tib3hlcyIsImRlZmF1bHRzIiwibGlicmFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7eUJBQWU7QUFDYkEsYUFBSztBQUNIQyxpQkFBYSx1QkFEVjtBQUVIQyx1QkFBYTtBQUZWLFNBRFE7O0FBT2IsdUJBQWU7QUFDYkMscUJBQVcsQ0FDVDtBQUNFQyxrQkFBVSxLQURaO0FBRUVDLHNCQUFVLHdCQUZaO0FBSUVDLHFCQUFVLElBSlosRUFEUyxFQU9UO0FBQ0VGLGtCQUFVLE1BRFo7QUFFRUMsc0JBQVUsd0JBRlosRUFQUztBQURFLFNBUEY7O0FBd0JiRSx1QkFBZTtBQUNiQyxvQkFBVSxJQURHO0FBRWJDLGtCQUFVLE9BRkcsRUF4QkY7O0FBOEJiLGdDQUF3QjtBQUN0QkMseUJBQWU7QUFDYkMscUJBQVMseUJBREk7QUFFYkMsbUJBQVMsdUJBRkk7QUFHYkMsa0JBQVM7QUFISTtBQURPLFNBOUJYOztBQXVDYixnQ0FBd0I7QUFDdEIsOEJBQW9CO0FBQ2xCQyxzQkFBVTtBQURRLFdBREU7QUFJdEIseUJBQWU7QUFDYkMsaUJBQUs7QUFDSEMsMEJBQVk7QUFEVDtBQURRO0FBSk8sU0F2Q1g7O0FBbURiLDBCQUFrQjtBQUNoQkMsb0JBQVU7QUFDUkMscUJBQVM7QUFERDtBQURNO0FBbkRMLE8iLCJmaWxlIjoiY29uZmlnL2FwcC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
