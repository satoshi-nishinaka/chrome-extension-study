import * as React from 'react'

interface Props {}
interface State {
    title: string
}

export default class CardContainer extends React.Component<Props, State> {
    render() {
        return (
            <article className="card">
                <h6 className="card-header">{this.state.title}</h6>
                <div className="card-body">
                    {React.Children.map(this.props.children, child => {
                        return child
                    })}
                </div>
            </article>
        )
    }
}
