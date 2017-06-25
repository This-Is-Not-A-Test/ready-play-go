(function() {
    angular.module('app')
        .controller('counterController', counterController)

    function counterController($stateParams) {


//checks if element it is called on is visible (only checks horizontally
        (function($) {
            var $window = $(window);

            $.fn.isVisible = function(){
                var $this = $(this),
                    Left = $this.offset().left,
                    visibleWidth = $window .width();

                return Left < visibleWidth;
            }
        })(jQuery);
        //
        (function($){
            var list = $('.portfolio-items'),
                showVisibleItems = function(){
                    list.children('.item:not(.falldown)').each(function(el, i){
                        var $this = $(this);
                        if($this.isVisible()){
                            $this.addClass('falldown');
                        }
                    });
                };

            //initially show all visible items before any scroll starts
            showVisibleItems();

            //then on scroll check for visible items and show them
            list.scroll(function(){
                showVisibleItems();
            });

            //image hover pan effect
            list.on('mousemove','img', function(ev){
                var $this = $(this),
                    posX = ev.pageX,
                    posY = ev.pageY,
                    data = $this.data('cache');
                //cache necessary variables
                if(!data){
                    data = {};
                    data.marginTop = - parseInt($this.css('top')),
                        data.marginLeft = - parseInt($this.css('left')),
                        data.parent = $this.parent('.view'),
                        $this.data('cache', data);
                }

                var originX = data.parent.offset().left,
                    originY =  data.parent.offset().top;

                //move image
                $this.css({
                    'left': -( posX - originX ) / data.marginLeft,
                    'top' : -( posY - originY ) / data.marginTop
                });
            });

        })(jQuery);

        const vm = this

      vm.dropGumball = function() {
          console.log("gumball released")
            var request = new XMLHttpRequest();
            var dev_id = '23003d001147343438323536';
            var access = '3877c854d0e868b16bba9510ce9951bb8f24d562';
            var data = 'params=' + 50 + '&access_token=' + access;
            var url = 'https://api.particle.io/v1/devices/' + dev_id + '/gumballDrop/';
            request.open('POST', url, true);
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
            request.send(data);
        }

        vm.launchRDS = function() {
            console.log('release the Kraken')
            var request = new XMLHttpRequest();
            var dev_id = '32001a001347343438323536';
            var access = '3877c854d0e868b16bba9510ce9951bb8f24d562';
            var data = 'params=' + 90 + '&access_token=' + access;
            var url = 'https://api.particle.io/v1/devices/' + dev_id + '/setpos/';
            request.open('POST', url, true);
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
            request.send(data);
        }
        function lockRDS() {
            var request = new XMLHttpRequest();
            var dev_id = '32001a001347343438323536';
            var access = '3877c854d0e868b16bba9510ce9951bb8f24d562';
            var data = 'params=' + 0 + '&access_token=' + access;
            var url = 'https://api.particle.io/v1/devices/' + dev_id + '/setpos/';
            request.open('POST', url, true);
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
            request.send(data);
        }

    }

})()

