angular.module('app', [])
  .controller('AppController', function ($http) {
    var iot = this

    getiot()
    iot.tomember = function(){
    	window.location = 'member.html'
    }


    iot.submit = function (data) {
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

  iot.toDate =  function(date){
   		return moment(date).format('MMMM Do YYYY , h:mm:ss a')
  }

  iot.delete = function (id, index) {
      console.log(id)
      $http.delete('/api/iot/' + id)
        .success(function (data) {
          alert('delete')
          iot.val.splice(index, 1)
        })
        .error(function (data) {
          alert('error')
          console.log('Error: ' + data)
        })
    }
  
 iot.member = function (data) {
      $http.post('/api/member', data)
        .then(function success (response) {
          console.log(response)       
          alert('Success')
        }, function error (response) {
          alert(response.data.message)
        })
    }

  })