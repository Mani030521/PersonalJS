function BoilingPoint(props) {
    if (props.celsius >= 100) {
        return <p>The Water can be boiled{props.celsius}</p>
    }
    return <p>The Water cannot be boiled{props.celsius}</p>
}

class TemperatureInput extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            temperature: ''
        }
    }

    handleChange = e => {
        this.setState({
            temperature: e.target.value
        })
    }

    render(){
        const { temperature } = this.state
        return(
            <fieldset>
                <legend>Enter Temperature in {this.props.scale}: </legend>
                <input value={temperature} onChange={this.handleChange.bind(this)} />
            </fieldset>
        )
    }
}