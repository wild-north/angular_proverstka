const component = {
  template: require('./index.html'),
  controller: function($stateParams) {
    this.name = $stateParams.id;

    const API_KEY = '752bfbff090d32bb16a9c80fb5b71aa5';
    const HOST = 'http://api.openweathermap.org/data/2.5';
    const TAIL = `?APPID=${API_KEY}&q=${this.name}`;

    this.weatherTypes = [
      {
        id: 0,
        name: 'Текущий',
        route: 'app.city.current',
        url: `${HOST}/weather${TAIL}`
      },
      {
        id: 1,
        name: 'На 5 дней',
        route: 'app.city.five',
        url: `${HOST}/forecast${TAIL}`
      },
      {
        id: 2,
        name: 'На 16 дней',
        route: 'app.city.sixteen',
        url: `${HOST}/forecast/daily${TAIL}`
      }
    ];
	},
  controllerAs: 'city'
};

export default component;
