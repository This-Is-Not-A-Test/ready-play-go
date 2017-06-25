(function() {
    angular.module('app')
        .controller('profileController', profileController)

    function profileController($stateParams) {
        const vm = this

        console.log('profile controller is working')

        vm.isSet = function(id) {


            return id === Number($stateParams.questionid)
        }
    }

})()