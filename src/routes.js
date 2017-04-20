export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  /*
  * app
  *   city:id
  *     current
  *     five
  *     sixteen
  *
  * */

  $stateProvider
    /*
    * список городов
    * */
    .state('app', {
      url: '/',
      component: 'app',
      // redirectTo: 'app.city'
    })
    /*
      * Родительский роут для выбранного города,
      * В нем будут отображаться кнопки
      * а-ля табы
     * */
    .state('app.city', {
      url: ':id/',
      component: 'city'
    })

    /*
    * Погода на сегодня
    * */
    .state('app.city.current', {
      url: 'current/',
      component: 'current',
      params: {
        apiUrl: { value: '' }
      },
    })
    /*
     * Погода на 5 дней
     * */
    .state('app.city.five', {
      url: 'five/',
      component: 'five',
      params: {
        apiUrl: { value: '' }
      },
    })
    /*
     * Погода на 16 дней
     * */
    .state('app.city.sixteen', {
      url: 'sixteen/',
      component: 'sixteen',
      params: {
        apiUrl: { value: '' }
      },
    });
}
