angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.listaKontaktW', {
    url: '/contacts',
    views: {
      'tab1': {
        templateUrl: 'templates/listaKontaktW.html',
        controller: 'listaKontaktWCtrl'
      }
    }
  })

  .state('tabsController.dodaj', {
    url: '/add',
    views: {
      'tab2': {
        templateUrl: 'templates/dodaj.html',
        controller: 'dodajCtrl'
      }
    }
  })

  .state('tabsController.pliki', {
    url: '/file',
    views: {
      'tab3': {
        templateUrl: 'templates/pliki.html',
        controller: 'plikiCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('logowanie', {
    url: '/login',
    templateUrl: 'templates/logowanie.html',
    controller: 'logowanieCtrl'
  })

$urlRouterProvider.otherwise('/login')


});