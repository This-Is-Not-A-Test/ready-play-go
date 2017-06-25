function dropGumball() {
  var request = new XMLHttpRequest();
  var dev_id = '23003d001147343438323536';
  var access = '3877c854d0e868b16bba9510ce9951bb8f24d562';
  var data = 'params=' + 50 + '&access_token=' + access;
  var url = 'https://api.particle.io/v1/devices/' + dev_id + '/gumballDrop/';
  request.open('POST', url, true);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  request.send(data);
}
