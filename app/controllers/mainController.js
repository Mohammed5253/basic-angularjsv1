var validationApp = angular.module('mainApp',['ngStorage']);




// create angular controller
validationApp.controller('mainController', function(mainService,$timeout,$window,$rootScope,$scope,$location,$http,$localStorage,$sessionStorage
) 
{	
	console.log("Dd");
	 // var id=localStorage.getItem('id');
	 // function to submit the form after all validation has occurred			
	//  $scope.submitForm = function(email,pass) 
	//  {	
		
	// 	doLogin.login(email,pass);
		
	// 	doLogin.login(email,pass).then(
	// 		function(response)
	// 		{
	// 			$location.path('/contacts')
	// 		},
	// 		function(err)
 //       		{
        		
 //        		if(err.status == -1)
 //        		{
 //        			$scope.errorMessage = "Server Error.Please Try again after some time."
 //        			console.log(err.status)
 //        		}
 //        		else
 //        		{
 //        			$scope.errorMessage = 'Please Enter Correct Credentials';
 //        		}
 //        	}
 //    	);
	// }

	// function to change Password

	
});
