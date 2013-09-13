# Bro, you got Issues

Based off initial client-side-only [Github Auth code by Vjeux](http://blog.vjeux.com/2012/javascript/github-oauth-login-browser-side.html)

Almost entirely client-side, except for the proxying to an external server to store the client_secret.

## todos
* set auth-* classes on the body so we can toggle "logged in" notices and such with CSS selectors
* add a JS listening/notify library so we can trigger when GHAPI.username changes, and update the DOM acoordingly. (does underscore do this? we don't need full backbone-style)
*

## classes
* body
  * .auth-none, .auth-known

