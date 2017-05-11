'use strict';

System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export('default', [{
        route: '',
        name: 'index',
        moduleId: 'page/index',
        nav: true,
        auth: true,
        title: 'Home'
      }, {
        route: '/login',
        name: 'login',
        moduleId: 'page/auth/login',
        nav: true,
        auth: false,
        title: 'Login'
      }, {
        route: 'logout',
        name: 'logout',
        moduleId: 'page/auth/logout',
        title: 'Logout'
      }, {
        route: '/lists',
        name: 'lists',
        moduleId: 'page/todo/list',
        nav: true,
        auth: true,
        title: 'Todo lists'
      }, {
        route: '/lists/create',
        name: 'lists/create',
        auth: true,
        moduleId: 'page/todo/create-list',
        title: 'Create list'
      }, {
        route: '/datatable',
        name: 'datatable',
        moduleId: 'page/datatable/demo',
        nav: true,
        auth: true,
        title: 'Datatable'
      }, {
        route: '/pager',
        name: 'pager',
        moduleId: 'page/pager/demo',
        nav: true,
        auth: true,
        title: 'Pager'
      }, {
        route: '/association-select',
        name: 'association-select',
        moduleId: 'page/association-select/demo',
        nav: true,
        auth: true,
        title: 'Association select'
      }, {
        route: '/paged',
        name: 'paged',
        moduleId: 'page/paged/demo',
        nav: true,
        auth: true,
        title: 'Paged'
      }, {
        route: '/form',
        name: 'form',
        moduleId: 'page/form/demo',
        nav: true,
        auth: true,
        title: 'Form'
      }, {
        route: '/charts',
        name: 'charts',
        moduleId: 'page/charts/demo',
        nav: true,
        auth: true,
        title: 'Charts'
      }]);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy9yb3V0ZXMuanMiXSwibmFtZXMiOlsicm91dGUiLCJuYW1lIiwibW9kdWxlSWQiLCJuYXYiLCJhdXRoIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O3lCQUFlLENBQ2I7QUFDRUEsZUFBVSxFQURaO0FBRUVDLGNBQVUsT0FGWjtBQUdFQyxrQkFBVSxZQUhaO0FBSUVDLGFBQVUsSUFKWjtBQUtFQyxjQUFVLElBTFo7QUFNRUMsZUFBVTtBQU5aLE9BRGEsRUFTYjtBQUNFTCxlQUFVLFFBRFo7QUFFRUMsY0FBVSxPQUZaO0FBR0VDLGtCQUFVLGlCQUhaO0FBSUVDLGFBQVUsSUFKWjtBQUtFQyxjQUFVLEtBTFo7QUFNRUMsZUFBVTtBQU5aLE9BVGEsRUFpQmI7QUFDRUwsZUFBVSxRQURaO0FBRUVDLGNBQVUsUUFGWjtBQUdFQyxrQkFBVSxrQkFIWjtBQUlFRyxlQUFVO0FBSlosT0FqQmEsRUF1QmI7QUFDRUwsZUFBVSxRQURaO0FBRUVDLGNBQVUsT0FGWjtBQUdFQyxrQkFBVSxnQkFIWjtBQUlFQyxhQUFVLElBSlo7QUFLRUMsY0FBVSxJQUxaO0FBTUVDLGVBQVU7QUFOWixPQXZCYSxFQStCYjtBQUNFTCxlQUFVLGVBRFo7QUFFRUMsY0FBVSxjQUZaO0FBR0VHLGNBQVUsSUFIWjtBQUlFRixrQkFBVSx1QkFKWjtBQUtFRyxlQUFVO0FBTFosT0EvQmEsRUFzQ2I7QUFDRUwsZUFBVSxZQURaO0FBRUVDLGNBQVUsV0FGWjtBQUdFQyxrQkFBVSxxQkFIWjtBQUlFQyxhQUFVLElBSlo7QUFLRUMsY0FBVSxJQUxaO0FBTUVDLGVBQVU7QUFOWixPQXRDYSxFQThDYjtBQUNFTCxlQUFVLFFBRFo7QUFFRUMsY0FBVSxPQUZaO0FBR0VDLGtCQUFVLGlCQUhaO0FBSUVDLGFBQVUsSUFKWjtBQUtFQyxjQUFVLElBTFo7QUFNRUMsZUFBVTtBQU5aLE9BOUNhLEVBc0RiO0FBQ0VMLGVBQVUscUJBRFo7QUFFRUMsY0FBVSxvQkFGWjtBQUdFQyxrQkFBVSw4QkFIWjtBQUlFQyxhQUFVLElBSlo7QUFLRUMsY0FBVSxJQUxaO0FBTUVDLGVBQVU7QUFOWixPQXREYSxFQThEYjtBQUNFTCxlQUFVLFFBRFo7QUFFRUMsY0FBVSxPQUZaO0FBR0VDLGtCQUFVLGlCQUhaO0FBSUVDLGFBQVUsSUFKWjtBQUtFQyxjQUFVLElBTFo7QUFNRUMsZUFBVTtBQU5aLE9BOURhLEVBc0ViO0FBQ0VMLGVBQVUsT0FEWjtBQUVFQyxjQUFVLE1BRlo7QUFHRUMsa0JBQVUsZ0JBSFo7QUFJRUMsYUFBVSxJQUpaO0FBS0VDLGNBQVUsSUFMWjtBQU1FQyxlQUFVO0FBTlosT0F0RWEsRUE4RWI7QUFDRUwsZUFBVSxTQURaO0FBRUVDLGNBQVUsUUFGWjtBQUdFQyxrQkFBVSxrQkFIWjtBQUlFQyxhQUFVLElBSlo7QUFLRUMsY0FBVSxJQUxaO0FBTUVDLGVBQVU7QUFOWixPQTlFYSxDIiwiZmlsZSI6ImNvbmZpZy9yb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
