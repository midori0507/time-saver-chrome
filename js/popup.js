

document.addEventListener('DOMContentLoaded', function () {

      document.querySelector('button').addEventListener('click', function(){
        chrome.runtime.sendMessage({ message: 'getdata' },function(response){
          for(var i=0;i<response.data.length;i++)
          {

            document.write("\n"+"Link: "+response.data[i].url+"Uptime: "+response.data[i].uptime+"ms\n");
          }
        });
      });      
});
