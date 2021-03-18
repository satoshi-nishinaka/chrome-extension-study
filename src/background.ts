function saveUrlAndTitle(): void {
  chrome.tabs.getSelected(null, (tab) => {
    // 1. 任意のテキストを格納したテキストエリアを作成
    const textArea = document.createElement('textarea');
    textArea.value = `${tab.title}\n${tab.url}`;
    document.body.appendChild(textArea);

    // 2. 作成したテキストエリアを選択し、クリップボードに保存
    textArea.select();
    document.execCommand('copy');

    // 3. テキストエリアを削除
    document.body.removeChild(textArea);

    alert(
      '現在開いているページのタイトルとURLをクリップボードにコピーしました'
    );
  });
}

function saveUrlAndTitleForMarkDown(): void {
  chrome.tabs.getSelected(null, (tab) => {
    const textArea = document.createElement('textarea');
    textArea.value = `[${tab.title}](${tab.url})`;
    document.body.appendChild(textArea);

    textArea.select();
    document.execCommand('copy');

    document.body.removeChild(textArea);
    alert(
      '現在開いているページのタイトルとURLをmarkdown形式でクリップボードにコピーしました'
    );
  });
}

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
