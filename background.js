var tablist = [];
var Tabinfo = function(tabid,url,uptime,sessionid,start){       
	this.tabid = tabid;
	this.url = url;
	this.uptime = uptime; 
	this.sessionid = sessionid;
	this.start = start;
}


chrome.tabs.onUpdated.addListener(function(tabId,tab,changeInfo){
	if(changeInfo.status == "complete"){
		var utab = new Tabinfo()
		utab.start = new Date();
		utab.sessionid = tab.sessionId;
		utab.tabid = tabId;
		utab.url = changeInfo.url;
		tablist.push(utab);
		getUptime(tablist);
		console.log(tablist);
	}
});
function getUptime (tablist){
	if(tablist.length>=2)
	{
		tablist[tablist.length-2].uptime = tablist[tablist.length-1].start - tablist[tablist.length-2].start;
	}
};