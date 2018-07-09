app.service('mainService', function($http,$location,$q){

	var id=localStorage.getItem('id');

	







	// this.allcontacts = function($scope)
	// {
	// 	var deferred = $q.defer();
	// 	$http.get(apiurl+"/users/contacts-add/"+id)
 //    	.then(function(response) {
	    	

	//     	if(response.data != "No contact Available")
	//     	{	
	    		
	//     		$.each(response.data, function(i, item) {
 //     				if(response.data[i].lastname==null)
	// 	        	{
	//           	  		response.data[i].lastname="";		
	// 	     		}
	// 	     		else if(response.data[i].firstname==null)
	// 	     		{
	// 	     			response.data[i].firstname="";
	// 	     		}
	// 	     	});

	//     		deferred.resolve(response)

	//     	}
	//     	else
	//     	{
	//     		deferred.reject(response.data)

	//     	}
 //    	});
 //    	return deferred.promise;
	// }


	
        
});