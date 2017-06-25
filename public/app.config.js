/**
 * Created by georgeflauta on 6/4/17.
 */
(function() {
    'use strict';

    angular.module('app').config(config)

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

    function config($stateProvider, $urlRouterProvider, $locationProvider){

        $locationProvider.html5Mode(true)

        $stateProvider
            .state('intro', {
                url: '/',
                component: 'signedOutFrame',
            })
            .state('profile', {
                url: '/profile/',
                component: 'profile'
            })
            .state('science', {
                url: '/science/:questionid',
                component: 'science'
            })
            .state('counter', {
                url: '/ticketcounter',
                component: 'counter'
            })
            .state('game', {
                url: '/start/:questionid',
                component: 'signedInFrame'
            })
        // etc...
    }
}());