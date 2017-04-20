const component = {
  template: require('./index.html'),
  controller: function($scope, Api, $stateParams) {
    const vm = this;

    this.$onInit = function () {
      Api.get($stateParams.apiUrl).then(function (response) {
        const data = response.data;
        console.log(data);

        vm.icon = data.weather[0].icon;
        vm.time = data.dt * 1000;

      }).catch(function (reason) {
        console.log(reason);
      });
    }
  },
  controllerAs: 'current'
};

export default component;
