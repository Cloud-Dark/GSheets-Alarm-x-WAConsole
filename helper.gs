function sendtext(to, text, appkey, authey) {
  var to = to;
  var message = text;
  var authkey = appkey;
  var appkey = authey;
  Logger.log(
    apipedia.sendtextwaconsole(
      to,
      message, 
      appkey, 
      authkey
      )
    );
}

function sendmedia(to, text, appkey, authey, urlmedia, medianame) {
  var file = urlmedia;
  var filename = medianame;
  var to = to;
  var message = text;
  var authkey = authey;
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
