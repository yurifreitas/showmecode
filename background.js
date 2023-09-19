
async function start() {
  const current = await chrome.windows.getCurrent();

  const allTabs = await chrome.tabs.query({});
  allTabs.forEach((tab) => {
    if (tab.windowId != current.id) {
      chrome.tabs.move(tab.id, {
        windowId: current.id,
        index: tab.index
      });
    }
  });
  console.log(allTabs);
}

// Set up a click handler so that we can merge all the windows.
chrome.action.onClicked.addListener(start);
console.log('Background script loaded.');
console.log(chrome);