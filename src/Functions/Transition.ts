/**
 * 指定したURLを開きます。
 * @param url
 * @param newTab 新しいタブで開くか？
 */
export function transitionToNextPage(url: string, newTab: boolean): void {
  if (url === undefined) {
    return;
  }
  if (newTab) {
    chrome.tabs.create({ url: url });
    return;
  }

  // Get the current Tab
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const active = tabs[0].id;
    // Set the URL to the Local-NTP (New Tab Page)
    chrome.tabs.update(active, { url: url }, function () {});
  });
  window.close();
}
