import * as React from 'react'
import {Tab} from "../Interface/Tab";

interface Props {
    title: string,
    tabs: Tab[]
}

interface State {
    title?: string,
    tabs?: Tab[]
}

export default class TabContainer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            title: props.title,
            tabs: props.tabs
        }
    }

    render() {
        return (
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                {this.state.tabs.map((tab) => {
                    const id = `${tab.identifyKey}-tab`
                    const href = `#${tab.identifyKey}`
                    return (
                        <li className="nav-item">
                            <a
                                className="nav-link active"
                                id={id}
                                data-toggle="tab"
                                href={href}
                                role="tab"
                               aria-controls={tab.identifyKey}
                                aria-selected="true">
                                {tab.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
        )
    }
}