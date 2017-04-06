const app = {
  template: require('./app.html'),
  controller: function($scope, $state) {

    const cityRoute = 'app.city';

  	this.title = 'Погодный виджет';
  	this.cities = [
      {id: 0, name: 'Киев', value: 'kiev'},
      {id: 1, name: 'Харьков', value: 'kharkiv'},
      {id: 2, name: 'Одесса', value: 'odessa'},
    ];
    this.selectedCity = '';

    $scope.$watch(angular.bind(this, function () {
      return this.selectedCity;
    }), function (newVal, oldVal) {
      if (newVal && newVal !== oldVal) {
        $state.go(cityRoute, {id: newVal});
      }
    });

  },
  controllerAs: '$app'
};

export default app;
