import React, { Component } from 'react';
import PropTypes from 'prop-types'
class XiaojiejieItem extends Component {
    constructor(props){
        super(props)
        // this绑定
        this.handleClick = this.handleClick.bind(this)
    }
    // 组件第一次渲染dom中,函数是不会被执行
    // 如果已经存在于dom中，函数才会被执行
    componentWillReceiveProps(){
        console.log('child-componentWillReaceiveProps')
    }
    // 组件被删除时执行
    componentWillUnmount(){
        console.log('child-componentWillUnmount')
    }
    // 组件更新后
    shouldComponentUpdate(nextPrors,nextState){
        if(nextPrors.content !== this.props.content){
            return true;
        }else{
            return false;
        }
        
    }
    render() { 
        return (
            <div>
                <li onClick={this.handleClick}>
                   {this.props.avname}为你服务——{this.props.content}
                </li>
            </div>
        );
    }
    handleClick(){
        this.props.removeItem(this.props.index);
    }
}
// 校验传递的值
XiaojiejieItem.propTypes={
    content: PropTypes.string.isRequired,
    index: PropTypes.number,
    removeItem: PropTypes.func
}
// 设置默认值
XiaojiejieItem.defaultProps={
    avname: '苍老师'
}
 
export default XiaojiejieItem;