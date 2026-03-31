/**
 * 指定したURLを開きます。
 * @param url
 * @param isOpenNewTab 新しいタブで開くか？
 */
export const transitionToNextPage = async (
  url: string,
  isOpenNewTab: boolean
): Promise<void> => {
  if (url === undefined) {
    return;
  }
  if (isOpenNewTab) {
    await chrome.tabs.create({ url: url });
    return;
  }

  // Get the current Tab
  chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
    const active = tabs[0].id;
    // Set the URL to the Local-NTP (New Tab Page)
    await chrome.tabs.update(active, { url: url });
  });
};
