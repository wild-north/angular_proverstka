function Api ($http, $q) {



  this.get = function (apiUrl) {
    if (apiUrl) {
      return $http({
        method: 'GET',
        url: apiUrl
      });
    } else {
      const defer = $q.defer();
      defer.reject('No data');
      return defer.promise;
    }
  };

  // this.five =
  // this.sixteen =


}
export default Api;
