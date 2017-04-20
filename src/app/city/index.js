const component = {
  template: require('./index.html'),
  controller: function($stateParams, WeatherTypes) {
    this.name = $stateParams.id;
    this.weatherTypes = WeatherTypes.getData($stateParams.id);
	},
  controllerAs: 'city'
};

export default component;
