import * as React from "react";

interface Props {
    title: string,
    image: string,
    href: string
}

interface State {
    image: string,
    title: string,
    href: string
}

export default class ImageButton extends React.Component<Props, State> {
    transitionTo() {
        location.href = this.state.href
    }
    render() {
        return (
            <button data-toggle='tooltip' title={this.state.title}>
                <img
                    className="btn-image"
                    src={this.state.image}
                    alt={this.state.title}
                    onClick={this.transitionTo} />
            </button>
        )
    }
}