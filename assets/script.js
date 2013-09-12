
var App = {

  init: function ()
  {
    // check login
    // bind events
    $('#github-auth').on('click', function () {
      GHAPI.auth();
    });
  },

  ensureLogin: function (callback)
  {
    // try login
    // if ok,
  }

}

var GHAPI = {
  appId: '5eaa4c43fab0ec0772ea',

  code: null,
  access_token: null,
  username: null,


  checkAuth: function () {},

  // begin auth process
  auth: function () {
    window.open('https://github.com' +
      '/login/oauth/authorize' +
      '?client_id=58a3dcf21a0bae21db44' +
      '&scope=gist');
  },

  // for the login.html postMessage reply
  handleResponse: function () {},

  call: function (method, args) {}

/*
window.addEventListener('message', function (event) {
  var code = event.data;
  $('#code').val(code);

  // Step 5
  $.get('token.php?code=' + code, function (access_token) {
    // Step 7
    $('#access_token').val(access_token);

    $.getJSON('https://api.github.com/user?access_token=' + access_token, function (user) {
      $('#username').val(user.login);
    });
  });
});
*/

}

function Issue() {
/*
<script>
$('#gist_new').click(function () {
  var url = 'https://api.github.com/gists' +
    '?access_token=' + $('#access_token').val();

  var data = JSON.stringify({
    "public": false,
    "files": {
      "sample.txt": {
        "content": $('#gist_content').val()
      }
    }
  });

  $.post(url, data, function (gist) {
    $('#gist_link').val(gist.html_url);
  });
});
*/
}
Issue.prototype.save = function () {}
Issue.prototype.load = function () {}


$(function () {
  App.init();
});
