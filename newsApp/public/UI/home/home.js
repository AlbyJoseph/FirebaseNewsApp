angular.module('UI').controller('HomeCtrl',function($scope,$firebase){

	var ref = new window.Firebase("https://radiant-inferno-9864.firebaseio.com/news");  
	var fb = $firebase(ref);
	var syncObject = fb.$asObject();
	syncObject.$bindTo($scope, 'newsData');

		$scope.add	=	function(item){
			var title	=	item.title;
			var description	=	item.description;
			var voteCount	=	0;
		fb.$push({
			
				"title":title,
				"description":description,
				"voteCount":voteCount
			
		});
		$scope.itemadd=false;
		$scope.title="";
		$scope.description="";
	};
	$scope.up	=	function(newItem){
		newItem.voteCount++;
	};
	$scope.down	=	function(newItem){
		newItem.voteCount--;
	};
});