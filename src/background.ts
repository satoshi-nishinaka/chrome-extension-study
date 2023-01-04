const copy = (tabId: number, text: string) => {
  console.info(text);
  chrome.tabs.sendMessage(tabId, text).catch((reason) => {
    console.error('Error occurred.', reason);
  });
};

export const saveUrlAndTitle = () => {
  console.log('called saveUrlAndTitle.');
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    console.info(self, self.navigator, navigator);
    const activeTab = tabs[0];
    if (!activeTab) {
      console.error('active tab が取得できていない');
      return;
    }
    console.info(activeTab);
    copy(activeTab.id, `${activeTab.title}\n${activeTab.url}`);
  });
};

export const saveUrlAndTitleForMarkDown = (): void => {
  console.log('called saveUrlAndTitleForMarkDown.');
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    console.info(self, self.navigator, navigator);
    const activeTab = tabs[0];
    if (!activeTab) {
      console.error('active tab が取得できていない');
      return;
    }
    console.info(activeTab);
    copy(activeTab.id, `[${activeTab.title}](${activeTab.url})`);
  });
};

chrome.commands.onCommand.addListener((command) => {
  switch (command) {
    case 'save_url_and_title':
      saveUrlAndTitle();
      break;
    case 'save_url_and_title_for_markdown':
      saveUrlAndTitleForMarkDown();
      break;
    default:
      break;
  }
});
