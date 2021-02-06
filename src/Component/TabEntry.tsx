import * as React from "react";

interface Props {
    title:string,
    identify: string,
    active: boolean,
}

interface State {
    title?: string,
    identify?: string,
    active?: boolean,
}

export default class TabEntry extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            title: props.title,
            identify: props.identify,
        }
    }
    render() {
        const href = `#${this.state.identify}`
        const className = 'nav-link' + (this.state.active ? ' active' : '')
        return (
            <li className="nav-item">
                <a className={className} id="home-tab" data-toggle="tab" href={href} role="tab"
                   aria-controls={this.state.identify} aria-selected="true">{this.state.title}</a>
            </li>
        )
    }
}