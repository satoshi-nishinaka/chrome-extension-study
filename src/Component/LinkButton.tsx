import * as React from "react";
import {LocalStorage} from "../LocalStorage";

interface Props {
    text: string,
    url: string,
}
interface State {
    url?: string,
    text?: string,
}
export default class LinkButton extends React.Component<Props, State> {
    state: State = {
        url: '',
        text: '',
    }
    constructor(props: Props) {
        super(props)
        this.state = {
            url: props.url,
            text: props.text,
        }
        this.transitionTo = this.transitionTo.bind(this)
    }

    transitionTo() {
        const storage = new LocalStorage()
        storage.readValues(() => {
            const url = this.state.url
            if (storage.isOpenNewTab) {
                chrome.tabs.create({url: url});
                return;
            }

            // Get the current Tab
            chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
                const active = tabs[0].id;
                // Set the URL to the Local-NTP (New Tab Page)
                chrome.tabs.update(active, {url: url}, () => {
                });
            });
            window.close();
        })
    }
    render() {
        return (
            <button className="btn btn-primary w-80" onClick={this.transitionTo}>
                {this.state.text}
            </button>
        )
    }
}