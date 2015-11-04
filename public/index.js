angular.module('app', [])
  .controller('AppController', function ($http) {
    var iot = this

    getiot()



    iot.submit = function (input) {
      $http.post('/api/iot', data)
        .then(function success (response) {
          console.log(response) 
          getiot()       
          alert('Success')
        }, function error (response) {
          alert(response.data.message)
        })
    }
   function getiot () {
       $http.get('/api/iot')
        .then(function success (response) {
          iot.val = response.data
          console.log(response)
        }, function error (response) {
          alert(response.data.message)
        })
    }
  

  })