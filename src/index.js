import React, {Component} from 'react';
import './Main.css';
class Younglinks extends Component{
    constructor(props){
        super(props);

        this.state={
            href:'',
            text:'None',
        }
    }

    componentDidMount(props){
        this.setState({
            href: this.props.href,
            text: this.props.text
        })
    }

    render(){
        return(
            <a href={this.state.href}>{this.state.text}</a>
        );
    }
}
export default Younglinks;