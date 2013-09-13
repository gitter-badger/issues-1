
var App = {

  init: function ()
  {
    GHAPI.watch('user', App.updateAuthStatus);
    $('body').addClass('auth-none');

    // bind events
    $('#github-auth').on('click', function () {
      GHAPI.auth();
    });
  },

  updateAuthStatus: function () {
    if (GHAPI.user) {
      $('body').removeClass('auth-true').addClass('auth-none');
    } else {
      $('body').removeClass('auth-none').addClass('auth-true');
      $('#auth-username').text(GHAPI.user.login);
    }
  },

  refresh: function () {
    // GHAPI.call()
  }

}

var GHAPI = {
  client_id: '5eaa4c43fab0ec0772ea',
  secret_proxy: 'http://www.chillidonut.com/junk/issues-secret.php?code=',

  code: null,
  access_token: null,
  user: null,

  checkAuth: function () {
    if (GHAPI.access_token)
      return true;
    return false;
  },

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
    var code = GHAPI.code = event.data;

    $.get(GHAPI.secret_proxy + code, function (access_token) {
      $('#access_token').val(access_token);

      $.getJSON('https://api.github.com/user?access_token=' + access_token,
        function (user) {
          console.log('Logged in', user);
          GHAPI.user = user;
          App.refresh();
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



///
// object-watch.js
// https://gist.github.com/eligrey/384583
///

/*
 * object.watch polyfill
 *
 * 2012-04-03
 *
 * By Eli Grey, http://eligrey.com
 * Public Domain.
 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 */

// object.watch
if (!Object.prototype.watch) {
  Object.defineProperty(Object.prototype, "watch", {
      enumerable: false
    , configurable: true
    , writable: false
    , value: function (prop, handler) {
      var
        oldval = this[prop]
      , newval = oldval
      , getter = function () {
        return newval;
      }
      , setter = function (val) {
        oldval = newval;
        return newval = handler.call(this, prop, oldval, val);
      }
      ;

      if (delete this[prop]) { // can't watch constants
        Object.defineProperty(this, prop, {
            get: getter
          , set: setter
          , enumerable: true
          , configurable: true
        });
      }
    }
  });
}

// object.unwatch
if (!Object.prototype.unwatch) {
  Object.defineProperty(Object.prototype, "unwatch", {
      enumerable: false
    , configurable: true
    , writable: false
    , value: function (prop) {
      var val = this[prop];
      delete this[prop]; // remove accessors
      this[prop] = val;
    }
  });
}
