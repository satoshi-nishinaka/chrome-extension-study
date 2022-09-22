/**
 * 指定したURLを開きます。
 * @param url
 * @param isOpenNewTab 新しいタブで開くか？
 */
export const transitionToNextPage = (
  url: string,
  isOpenNewTab: boolean
): void => {
  if (url === undefined) {
    return;
  }
  if (isOpenNewTab) {
    chrome.tabs.create({ url: url });
    return;
  }

  // Get the current Tab
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const active = tabs[0].id;
    // Set the URL to the Local-NTP (New Tab Page)
    chrome.tabs.update(active, { url: url });
  });
};
