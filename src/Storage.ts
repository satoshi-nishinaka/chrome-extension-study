export class Storage {
  public isOpenNewTab = false;
  public highlightWords = '';
  public enableHighlight = false;

  readValues(callBack: () => void): void {
    const values = ['isOpenNewTab', 'highlightWords', 'enableHighlight'];
    chrome.storage.sync.get(values, (items) => {
      // LocalStorageから設定情報を取得
      console.debug(items);

      this.isOpenNewTab = items.isOpenNewTab;
      this.highlightWords = items.highlightWords;
      this.enableHighlight = items.enableHighlight;

      console.debug(`isOpenNewTab ${this.isOpenNewTab}`);
      console.debug(`highlightWords ${this.highlightWords}`);
      console.debug(`enableHighlight ${this.enableHighlight}`);

      callBack();
    });
  }

  /**
   * ローカルストレージに設定内容を保存します
   */
  saveValues(): void {
    console.debug('saveValuesForLocalStorage -----');
    chrome.storage.sync.set({
      isOpenNewTab: this.isOpenNewTab,
      highlightWords: this.highlightWords,
      enableHighlight: this.enableHighlight,
    });
  }
}
