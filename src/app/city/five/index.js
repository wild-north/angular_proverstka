const component = {
  template: require('./index.html'),
  controller: function($scope, $stateParams, Api) {

    Api.get($stateParams.apiUrl).then(function (response) {
      console.log(response.data);
    });
	},
};

export default component;
