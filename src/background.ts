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

/**
Amazonでのイチオシ裏コマンドはマーケットプレイス出品を非表示にする「&emi=AN1VRQENFRJN5」。Amazonからの公式出品のみの表示となり、偽物・送料サギがまずなくなるでしょう。

裏コマンドは「&sort=popularity-rank」が人気の高い順に並び替え、「&sort=salesrank」が売上の良い順に並び替え、「&sort=-salesrank」が売り上げの悪い順に並び替え、「&sort=review-rank」がレビューが良い順に並べ替えで「&sort=-review-rank」がレビューの悪い順に並び替えです。

さらに「&pct-off=50-」が50％以上安い品を表示、「&pct-off=-50」50％以上安い品を除外して表示、「&pct-off=50-90」が50～90％安い品を表示、「&high-price=2000」が2,000円以下の商品だけ表示となります。

このほかの裏コマンドには「&low-price=100 &high-price=2000」なら100円から2,000円の商品のみを表示、「&sort=-price」が価格の高い順に並び替え、「&sort=price」が価格の安い順に並び替え、「&sort=releasedate」が発売日の新しい順に並べ替えです。
 */

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
