import React,{Component} from 'react'

// 等于
// import React form 'react'
// const Compoent = React.Compoent

class App extends Component{
    render(){
        return (
            <ul className="list">
                <li>Hello world</li>
                <li>I Lover React</li>
            </ul>
        )
        // var child1 = React.createElement('li',null,'Hello world')
        // var child2 = React.createElement('li',null,'I Lover React')
        // var root = React.createElement('ul',{className:'list'},child1,child2)
    }
}

export default App;