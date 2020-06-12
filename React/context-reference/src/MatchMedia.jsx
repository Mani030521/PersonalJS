import React, { Component } from 'react'

class Media extends Component {
    constructor(props) {
        super(props)
        console.log(props.query)
        this.state = {
            matches: window.matchMedia(props.query).matches
        }
    }

    componentDidMount() {
        console.log(this.props.query)
        console.log(this.state.matches)
        this.setup()
    }
    
    setup() {
        const media = window.matchMedia(this.props.query)
        if (media.matches !== this.state.matches) {
            this.setState({
                matches: media.matches
            })
        }
        let listener = () => this.setState({ matches: media.matches })
        media.addListener(listener)
        this.removeListener = () => media.removeEventListener(listener)
    }

    componentDidUpdate(prevProps){
        console.log(prevProps)
        if(this.props.query !== prevProps.query){
            this.removeListener()
            this.setup()
        }
    }

    componentWillUnmount(){
        console.log(this.props.query)
        this.removeListener()
    }

    render(){
        console.log(this.props)
        return this.props.children(this.state.matches)
    }
}

export default function Apps() {
    return (
        <>
        <Media query="(max-width: 400px)">
            {small => (
                <>
                {console.log(small)}
                <Media query="(min-width: 800px)">
                   
                    {large => (
                        <div style={{textAlign: "center"}}>
                            <p>
                                Small? {small ? 'yes' : 'no'}
                            </p>
                            <p>
                                Large? {large ? 'yes' : 'no'}
                            </p>
                        </div>
                    )}
                </Media>
                </>
            )}
        </Media>
        </>
    )
}