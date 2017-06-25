(function() {
    angular.module('app')
        .controller('technologyController', technologyController)

    function technologyController($stateParams) {
        const vm = this

        console.log('technology controller is working', $stateParams.questionid)

        vm.user = {
            tickets: 0
        }

        vm.questID = $stateParams.questionid

        vm.isSet = function(id) {


            return id === Number($stateParams.questionid)
        }
    }

})()
