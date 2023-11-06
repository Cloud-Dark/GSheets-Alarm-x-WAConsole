function sendtext(to,message,authkey,appkey) {
  var to = to;
  var message = message;
  var authkey = authkey;
  var appkey = appkey;
  Logger.log(
    apipedia.sendtextwaconsole(
      to,
      message, 
      appkey, 
      authkey
      )
    );
}
function sendmedia(to, text, appkey, authkey, urlmedia, medianame) {
  var file = urlmedia;
  var filename = medianame;
  var to = to;
  var message = text;
  var authkey = authkey;
  var appkey = appkey;
  Logger.log(
    apipedia.sendmediawaconsole(
      to,
      message, 
      appkey, 
      authkey,
      file,
      filename
      )
    );
}
