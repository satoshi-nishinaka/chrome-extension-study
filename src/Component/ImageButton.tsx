import * as React from 'react'
import {LocalStorage} from "../LocalStorage";
import {transitionToNextPage} from "../Functions/Transition";

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
            transitionToNextPage(url, storage.isOpenNewTab)
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