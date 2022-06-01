var myApp = angular.module('myApp',['ngRoute', 'ngAnimate'])
myApp.config(['$routeProvider',function($routeProvider){
    $routeProvider
    .when("/",
    {
        templateUrl:'form.html'
    }
    )
    .when('/display',
    {
        templateUrl:'display.html'
    }
    )
   
}])

myApp.controller('FormsController', ['$scope','$filter','$location', function($scope, $filter,$location ){

    console.log("controller called");

    var infos = []
    
    $scope.save=function(){
        infos.push( {
        "name":$scope.name,
        "gender":$scope.gender,
        "date":( $filter('date')($scope.date, 'dd/MM/yy')),
        "course":$scope.course,
        "phone":$scope.phone
    })     

    $scope.$emit('content', infos);
    $scope.display=function(){
        $location.path('/display')
    }
    console.log(infos);
}
    $scope.clear=function(){
        $scope.myForm.name.$error.required=false;
        $scope.myForm.name.$dirty=false;

        $scope.myForm.gender.$error.required=false;
        $scope.myForm.gender.$dirty=false;

        $scope.myForm.date.$error.required=false;
        $scope.myForm.date.$dirty=false;

        $scope.myForm.phone.$error.required=false;
        $scope.myForm.phone.$dirty=false;

        
        $scope.myForm.course.$dirty=false; 
        $scope.myForm.course.$error.required=false;
        $scope.myForm.$submitted=false;

         $scope.name="",
        $scope.gender="",
        $scope.date="",
        $scope.course="",
        $scope.phone=""
       
    }

}])
myApp.controller('ParentController', ['$scope', function($scope){
    $scope.$on('content', function (event, value) {
        
        $scope.infos = value;
        console.log(value);
    
    });
    
}])
