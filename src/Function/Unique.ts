export function unique(array: string[]): string[] {
  // JavaScriptのArrayでuniqする8つの方法（と、その中で最速の方法） - Qiita
  // https://qiita.com/piroor/items/02885998c9f76f45bfa0#object%E3%81%AE%E3%82%AD%E3%83%BC%E3%82%92%E4%BD%BF%E3%81%86%E6%96%B9%E6%B3%95
  const knownElements = {};
  const uniqueArray = [];
  for (let i = 0, max = array.length; i < max; i++) {
    if (array[i] in knownElements) {
      continue;
    }
    uniqueArray.push(array[i]);
    knownElements[array[i]] = true;
  }
  return uniqueArray;
}
