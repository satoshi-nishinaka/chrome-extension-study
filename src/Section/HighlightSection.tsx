import React = require("react")
import {Storage} from "../Storage";
import {useEffect, useState} from "react";
interface HighlightSectionProps {
    storage: Storage;
}
export const HighlightSection = (props: HighlightSectionProps): JSX.Element => {
    const [storage] = useState(props.storage);
    const [highlightWords, setHighlightWords] = useState<string>()

    const saveHighlightWords = (): void => {
        storage.highlightWords = highlightWords
        storage.saveValues()
    }

    useEffect(() => {
        storage.readValues(() => {
            setHighlightWords(storage.highlightWords)
        })
    }, [])

    return (
        <div>
            <textarea className='form-control' rows={8} onChange={(event) => setHighlightWords(event.target.value)} value={highlightWords} />
            <button className="btn btn-primary btn-sm w-100 mt-2" onClick={saveHighlightWords}>
                保存する
            </button>
            <div className='p-2'>
                ※ハイライトしたい単語を1行に1つずつ入力してください
            </div>
        </div>
    )
}