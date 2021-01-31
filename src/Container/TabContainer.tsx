import * as React from "react";

interface Props { }

interface State {
    tabs: Tab[]
}

interface Tab {
    identifyKey: string,
    title: string,
}

export default class TabContainer extends React.Component<Props, State> {
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