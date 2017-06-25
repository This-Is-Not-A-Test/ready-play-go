(function() {
    angular.module('app')
        .controller('scienceController', scienceController)

    function scienceController($stateParams) {
        const vm = this

        console.log('science controller is working', $stateParams.questionid)

        vm.user = {
            tickets: 0
        }

        vm.isRight = function() {
            console.log('that is correct')
            vm.user.tickets = 5
        }
        vm.questID = $stateParams.questionid

        vm.isSet = function(id) {


            return id === Number($stateParams.questionid)
        }
    }

})()

