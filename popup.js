var User = function(sessionid, tablist){ 
  this.sessionid = sessionid;                  // Separate user by unique sessionid
  var tablist = [];                             // Array of Tab
  this.tablist = tablist.slice();                      
}
var uTab = function(tabid,url,uptime){       
  this.tabid = tabid;
  this.url = url;
  this.uptime = uptime; 
}


document.addEventListener('DOMContentLoaded', function () {
 
      document.querySelector('button').addEventListener('click', main);      
});
function main() {
    var source = document.getElementById('source').value;
    document.getElementById("result").innerHTML = source;
}