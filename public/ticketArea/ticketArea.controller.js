(function() {
    angular.module('app')
        .controller('ticketAreaController', ticketAreaController)

    function ticketAreaController($stateParams) {
        const vm = this

        console.log('ticket controller is working')

        vm.user = {
            tickets: 0
        }

        vm.isSet = function(id) {


            return id === Number($stateParams.questionid)
        }
    }

})()
