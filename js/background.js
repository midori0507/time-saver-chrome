var tablist = [];
var nettime;                      // array contain user's tab list
var Tabinfo = function(tabid,url,uptime,sessionid,start){       //tabinfo struct 
	this.tabid = tabid;
	this.url = url;
	this.uptime = uptime; 
	this.sessionid = sessionid;
	this.start = start;
}


chrome.tabs.onUpdated.addListener(function(tabId,tab,changeInfo){ // trigger when newtab created or change
	if(changeInfo.status == "complete"){
		var utab = new Tabinfo()
		utab.start = new Date();                     // start time of a tab. end time gonna be start time of next tab
		utab.sessionid = tab.sessionId;
		utab.tabid = tabId;
		utab.url = changeInfo.url;
		tablist.push(utab);
		getUptime(tablist);
		console.log(tablist);
	}
});
chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
			if(request.message=='getdata'){
				sendResponse({data:tablist,totaltime:nettime});
			}
		});
function getUptime (tablist){        // uptime = start time of next tab - start time of this tab
	if(tablist.length>=2)
	{
		tablist[tablist.length-2].uptime = tablist[tablist.length-1].start - tablist[tablist.length-2].start;
		netime+=tablist[tablist.length-2].uptime;
	}
};