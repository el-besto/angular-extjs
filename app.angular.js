"use strict";

// define Ext module and service to inject into other Angular modules
var extFactory = angular.module('Ext', []).service('Ext', function() { return Ext; });

// define angular modules
var angularExt = angular.module('angularExt', ['Ext']);
var angularNavbar = angular.module('angularNavbar', ['angularExt', 'Ext']);
var angularApp1 = angular.module('angularApp1', ['angularExt', 'Ext']);

function bootstrapAngularNavbar() {
    var angularNavbarElement = document.getElementById('angularNavbar');
    angular.bootstrap(angularNavbarElement, ['angularNavbar']);
    var angularNavbarScope = angular.element(angularNavbarElement).scope();
    safeDigest(angularNavbarScope);
}
function bootstrapAngularApp1() {
    var angularApp1Element = document.getElementById('angularApp1');
    angular.bootstrap(angularApp1Element, ['angularApp1']);
    var angularApp1Scope = angular.element(angularApp1Element).scope();
    safeDigest(angularApp1Scope);
}
function bootstrapAngularExtApp() {
    var angularExtAppElement = document.getElementById('angularExtApp');
    angular.bootstrap(angularExtAppElement, ['angularExt']);
    var angularExtAppScope = angular.element(angularExtAppElement).scope();
    safeDigest(angularExtAppScope);
}
function safeDigest(scope) {
    //@todo: check if a current $scope is in progress and if so then wait;
    scope.$digest();
}



/**
 * angularExtApp 
  */
var angularExtService = function angularExtService(Ext){
    var extAppElement = angular.element(document.getElementById('extApp'));
    var angularApp1Element = angular.element(document.getElementById('angularApp1'));

    this.hideExtApp = function hideExtApp(){
        extAppElement.addClass('hidden');
    };
    this.showExtApp = function showExtApp(){
        extAppElement.removeClass('hidden');
    };
    this.hideAngularApp1 = function hideAngularApp1(){
        angularApp1Element.addClass('hidden');
    };
    this.showAngularApp1 = function showAngularApp1(){
        angularApp1Element.removeClass('hidden');
    };
};
angularExtService.$inject = ['Ext'];
angularExt.service('angularExtService', angularExtService);

var angularExtController = function angularExtController(Ext, angularExtService) {
    //Main Parent Controller. The idea is to coordinate communication between Ext & Angular.
};
angularExtController.$inject = ['Ext', 'angularExtService'];
angularExt.controller('angularExtController', angularExtController);



/**
 * angularNavbar App
 */
var angularNavbarController = function angularNavbarController($scope, Ext, angularExtService) {
    $scope.menuItems = [
        {
            name: 'Angular App 1 Only',
            showExtApp: false,
            action: menuAction
        },
        {
            name: 'Ext App Only',
            showExtApp: true,
            action: menuAction
        },
        {
            name: 'Angular App 1 AND Ext App',
            showExtApp: true,
            action: menuAction
        }
    ];

    function menuAction(menuName, showExtApp){
        switch (menuName) {
            case 'Angular App 1 Only':
                angularExtService.showAngularApp1();
                angularExtService.hideExtApp();
                break;

            case 'Angular App 1 AND Ext App':
                angularExtService.showAngularApp1();
                angularExtService.showExtApp();
                break;

            case 'Ext App Only':
                angularExtService.showExtApp();
                angularExtService.hideAngularApp1();
                break;

            default:
                showExtApp ?  angularExtService.showExtApp() :  angularExtService.hideExtApp();
        }

    }
};
angularNavbarController.$inject = ['$scope', 'Ext', 'angularExtService'];
angularNavbar.controller('angularNavbarController', angularNavbarController);



var angularApp1Controller = function angularApp1Controller($scope, Ext, angularExtService) {
    $scope.helloFromAngularApp1Controller = 'Hello! From AngularApp1Controller... See I told you it would be interpolated after Ext was ready.';
};
angularApp1Controller.$inject = ['$scope', 'Ext', 'angularExtService'];
angularApp1.controller('angularApp1Controller', angularApp1Controller);