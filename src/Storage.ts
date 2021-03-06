export class Storage {
  public isOpenNewTab = false;
  public hiddenShortcutMenu = false;

  readValues(callBack: () => void): void {
    const values = ['isOpenNewTab', 'hiddenShortcutMenu'];
    chrome.storage.sync.get(values, (items) => {
      // LocalStorageから設定情報を取得
      console.log(items);

      this.isOpenNewTab = items.isOpenNewTab;
      this.hiddenShortcutMenu = items.hiddenShortcutMenu;

      console.log(`isOpenNewTab ${this.isOpenNewTab}`);
      console.log(`hiddenShortcutMenu ${this.hiddenShortcutMenu}`);

      callBack();
    });
  }

  /**
   * ローカルストレージに設定内容を保存します
   */
  saveValues(): void {
    console.log('saveValuesForLocalStorage -----');
    chrome.storage.sync.set({
      isOpenNewTab: this.isOpenNewTab,
      hiddenShortcutMenu: this.hiddenShortcutMenu,
    });
  }
}
