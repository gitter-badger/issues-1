
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
  client_id: '5eaa4c43fab0ec0772ea',
  secret_proxy: 'http://chillidonut.com/junk/secret-proxy.php?code=',

  code: null,
  access_token: null,
  username: null,


  checkAuth: function () {},

  // begin auth process
  auth: function () {
    window.addEventListener('message', GHAPI.handleAuthResponse);

    window.open('https://github.com' +
      '/login/oauth/authorize' +
      '?client_id='+ GHAPI.client_id +
      '&scope=repo');
  },

  // for the login.html postMessage reply
  handleAuthResponse: function (event) {
    GHAPI.code = event.data;

    $.get(GHAPI.secret_proxy + code, function (access_token) {
      $('#access_token').val(access_token);

      $.getJSON('https://api.github.com/user?access_token=' + access_token,
        function (user) {
          GHAPI.username = user.login;
          $('#auth-username').val(user.login);
          // todo: add class to body to enable/disable auth notices
        });
    });
  },

  call: function (method, args) {}

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
