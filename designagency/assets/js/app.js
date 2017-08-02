// creating Angular Module
var websiteApp = angular.module('websiteApp', []);
websiteApp.controller('FormController', function($scope, $http, $timeout) {

	$scope.footerformData = {};
	$scope.successStatus = true;
	$scope.submitfooterForm = function(data) {
		//alert("submit click");
		$scope.successStatus = true;
		var status = true;
		if (data) {
			//alert("if data is there");
			return false;
		} else {
			//alert(12);
			$http({
				method : 'POST',
				url : 'process.php',
				data : $.param($scope.footerformData), // pass in data as strings
				headers : {
					'Content-Type' : 'application/x-www-form-urlencoded'
				} // set the headers so angular passing info as form data (not request payload)
			}).success(function(data) {
				//alert(567);
				$scope.successStatus = false;
				$scope.footerformData = {};

				$('#footerSuccess').fadeIn(1000);
				$timeout(function() {
					$('#footerSuccess').fadeOut(1000);
				}, 1000);
			})
		};
	}
}); 