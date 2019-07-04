chrome.browserAction.onClicked.addListener(function(activeTab)
{
    var newURL = "https://przegladarka-ekw.ms.gov.pl/eukw_prz/KsiegiWieczyste/wyszukiwanieKW";
    chrome.tabs.create({ url: newURL });
});