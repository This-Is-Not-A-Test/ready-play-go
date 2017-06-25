(function() {
    angular.module('app')
        .controller('scienceController', scienceController)

    function scienceController($stateParams) {
        const vm = this

        console.log('science controller is working', $stateParams.questionid)

        vm.user = {
            tickets: 0
        }

        vm.check = false




        vm.isRight = function() {
            console.log('that is correct')
            vm.user.tickets = 10
            vm.check = true
        }


        vm.questID = $stateParams.questionid

        vm.isSet = function(id) {


            return id === Number($stateParams.questionid)
        }
    }

})()

