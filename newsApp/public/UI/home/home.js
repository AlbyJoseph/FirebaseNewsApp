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
	$scope.up	=	function(newItem,newsData){
		newItem.voteCount++;
		var arrObj = [];
                               var i = 0 ;
                               for(var key in newsData){
                                       arrObj[i]  = newsData[key];
                                       i++;                                
                               }
                       console.log(arrObj);
                       for(i = 2 ;i<arrObj.length;i++){
                               for(var j = 2;j<arrObj.length - 1;j++){
                                       if(arrObj[j].voteCount < arrObj[j+1].voteCount){
                                               var t = arrObj[j];
                                               arrObj[j] = arrObj[j+1];
                                               arrObj[j+1] = t;
                                       }
                               }
                       }
                       i = 0 ;
                       console.log(arrObj);
                       for(key in newsData){
                               newsData[key]  = arrObj[i];
                               i++;                                
                       }

	};
	$scope.down	=	function(newItem,newsData){
		newItem.voteCount--;
		var arrObj = [];
                               var i = 0 ;
                               for(var key in newsData){
                                       arrObj[i]  = newsData[key];
                                       i++;                                
                               }
                       console.log(arrObj);
                       for(i = 2 ;i<arrObj.length;i++){
                               for(var j = 2;j<arrObj.length - 1;j++){
                                       if(arrObj[j].voteCount < arrObj[j+1].voteCount){
                                               var t = arrObj[j];
                                               arrObj[j] = arrObj[j+1];
                                               arrObj[j+1] = t;
                                       }
                               }
                       }
                       i = 0 ;
                       console.log(arrObj);
                       for(key in newsData){
                               newsData[key]  = arrObj[i];
                               i++;                                
                       }

	};
});