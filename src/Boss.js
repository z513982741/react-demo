import React, { Component } from 'react';
import {CSSTransition} from 'react-transition-group'
class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true
        }
        this.toggle = this.toggle.bind(this);
    }
    render() { 
        return ( 
            <div>
                <CSSTransition
                    in={this.state.isShow}
                    timeout={2000}
                    classNames='boss-text'
                >
                    <div>召唤Boss——孙悟空</div>
                </CSSTransition>
                <div><button onClick={this.toggle}>召唤Boss</button></div>
            </div>
        );
    }
    toggle(){
        this.setState({
            isShow: !this.state.isShow
        })
    }
}
 
export default Boss;