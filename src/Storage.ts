export class Storage {
  public isOpenNewTab = false;
  public highlightWords = '';
  public enableHighlight = false;
  public enableConsoleLog = false;
  public showSucceedMessage = false;

  readValues(callBack: () => void): void {
    const values = [
      'isOpenNewTab',
      'highlightWords',
      'enableHighlight',
      'enableConsoleLog',
      'showSucceedMessage',
    ];
    chrome.storage.sync.get(values, (items) => {
      // LocalStorageから設定情報を取得
      if (this.enableConsoleLog) {
        console.debug(items);
      }

      this.isOpenNewTab = items.isOpenNewTab;
      this.highlightWords = items.highlightWords;
      this.enableHighlight = items.enableHighlight;
      this.enableConsoleLog = items.enableConsoleLog;
      this.showSucceedMessage = items.showSucceedMessage;

      if (this.enableConsoleLog) {
        console.debug(`isOpenNewTab ${this.isOpenNewTab}`);
        console.debug(`highlightWords ${this.highlightWords}`);
        console.debug(`enableHighlight ${this.enableHighlight}`);
        console.debug(`enableConsoleLog ${this.enableConsoleLog}`);
        console.debug(`showSucceedMessage ${this.showSucceedMessage}`);
      }
      callBack();
    });
  }

  /**
   * ローカルストレージに設定内容を保存します
   */
  saveValues(): void {
    if (this.enableConsoleLog) {
      console.debug('saveValuesForLocalStorage -----');
      console.debug(`isOpenNewTab ${this.isOpenNewTab}`);
      console.debug(`highlightWords ${this.highlightWords}`);
      console.debug(`enableHighlight ${this.enableHighlight}`);
      console.debug(`enableConsoleLog ${this.enableConsoleLog}`);
      console.debug(`showSucceedMessage ${this.showSucceedMessage}`);
    }
    chrome.storage.sync.set({
      isOpenNewTab: this.isOpenNewTab,
      highlightWords: this.highlightWords,
      enableHighlight: this.enableHighlight,
      enableConsoleLog: this.enableConsoleLog,
      showSucceedMessage: this.showSucceedMessage,
    });
  }
}
