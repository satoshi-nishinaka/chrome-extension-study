import * as React from 'react'
import {LocalStorage} from "../LocalStorage";
import bind = chrome.socket.bind;

interface Props {
    title: string,
    image: string,
    url: string
}

interface State {
    image?: string,
    title?: string,
    url?: string
}

export default class ImageButton extends React.Component<Props, State> {
    state: State = {
        title: '',
        image: '',
        url: '',
    }

    constructor(props: Props) {
        super(props);
        this.state = {
            title: props.title,
            image: props.image,
            url: props.url,
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
            <button data-toggle='tooltip' title={this.state.title} className='btn-image'>
                <img
                    src={this.state.image}
                    alt={this.state.title}
                    onClick={this.transitionTo}/>
            </button>
        )
    }
}