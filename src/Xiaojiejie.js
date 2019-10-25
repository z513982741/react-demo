import React, { Component, Fragment } from 'react'
import './style.css'
import XiaojiejieItem from './XiaojiejieItem'
import Boss from './Boss'
import axios from 'axios'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class Xiaojiejie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: ['头部按摩', '精油推背'],
        }
    }
    // 组件渲染之前
    componentWillMount() {
        console.log('compoentWillMount-------组件渲染之前')
    }
    // 组件第一次渲染完成
    componentDidMount() {
        console.log('componentDidMount-------组件渲染完成')
        axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
            .then((res) => { console.log('axios 获取数据成功:' + JSON.stringify(res)) })
            .catch((error) => { console.log('axios 获取数据失败' + error) })
    }

    // 组件更新后
    shouldComponentUpdate() {
        // 必需返回一个值 true 重新渲染 false 不渲染
        console.log('1-shouldComponentUpdate')
        return true
    }

    componentWillUpdate() {
        // 如果shuldComponentUpdate为false 不继续执行
        console.log('2-componentWillUpdate');
    }
    // 组件渲染完成之后
    componentDidUpdate() {
        console.log('4-componentDidUpdate')
    }

    // 组件渲染中
    render() {
        console.log('3-render-------组件渲染中')
        return (
            <Fragment>
                <div>
                    <label htmlFor="jspang">增加服务</label>
                    <input
                        id="jspang"
                        className='input'
                        value={this.state.inputValue}
                        onChange={this.inputChange.bind(this)}
                        ref={input => { this.input = input }}
                    />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul ref={ul => { this.ul = ul }}>
                    <TransitionGroup>
                        {
                            this.state.list.map((item, index) => {
                                return (
                                    <CSSTransition
                                        timeout={2000}
                                        classNames="boss-text"
                                        unmountOnExit
                                        appear={true}
                                        key={index+item}
                                        >
                                        <XiaojiejieItem
                                            key={index + item}
                                            content={item}
                                            index={index}
                                            removeItem={this.removeItem.bind(this)}
                                        />
                                    </CSSTransition>
                                )
                            })
                        }
                    </TransitionGroup>
                </ul>
                <Boss />
            </Fragment>
        )
    }
    inputChange(e) {
        console.log(this.input.value)
        this.setState({
            inputValue: e.target.value
        })
    }
    // 增加列表
    addList() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        }, () => {
            console.log(this.ul.querySelectorAll('li').length);
        })
    }
    // 删除列表
    removeItem(index) {
        let list = this.state.list;
        list.splice(index, 1);
        this.setState({
            list: list
        })
    }
}

export default Xiaojiejie