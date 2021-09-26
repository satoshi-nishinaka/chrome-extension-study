import * as $ from 'jquery';
import {Storage} from "./Storage";
import {unique} from "./Functions/Unique";

const storage = new Storage();
storage.readValues(() => {
    if (storage.enableHighlight === false || !storage.highlightWords) {
        return
    }
    const highlightWords = unique(storage.highlightWords.trim().split('\n'));
    const highlight = (highlightWords: string[]):void => {
        const target = $('body')[0];
        let html = target.innerHTML;
        console.debug('start replaceHighlightText ');
        highlightWords.map(value => {
            const regExp = new RegExp(`(${value})`, 'g')
            html = html
                .replace(
                    regExp,
                    '<span class="shortcut-extension-highlight">$1</span>'
                )
        })

        target.innerHTML = html;
        console.log('replace finish');
    }
    highlight(highlightWords)
});