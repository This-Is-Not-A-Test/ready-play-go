(function() {
    angular.module('app')
        .controller('mathController', mathController)

    function mathController($stateParams) {
        const vm = this

        console.log('math controller is working', $stateParams.questionid)

        vm.user = {
            tickets: 0
        }

        vm.questID = $stateParams.questionid

        vm.isSet = function(id) {


            return id === Number($stateParams.questionid)
        }
    }

})()
