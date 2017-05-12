import React,{Component} from 'react';// ==> multi terminal 
//解构赋值
import {render} from 'react-dom';//dom 层面的渲染
const RootDom= document.getElementById('root')
/*------step 1--- get started
 * The template syntax in React is called JSX. 
 * It is allowed in JSX to put HTML tags directly into JavaScript codes. 
 * ReactDOM.render() is the method which translates JSX into HTML, 
 * and renders it into the specified DOM node.
 */
//第一个参数是JSX,第二个参数是对应的dom节点  
render(<h1 className='aaaa'><div>Hello world</div></h1>,RootDom)





/** ----- step 2 ----- Use JavaScript in JSX
 * You could also use JavaScript in JSX. It takes angle brackets (<) as the beginning of HTML syntax,
 * and curly brackets ({) as the beginning of JavaScript syntax.
 */
render(
    <div>
		{
			['react','hanbaoyi','学习'].map(name => 
				<div>Hello, {name}!</div>
			)
		}
	</div>,
    RootDom
);


/** ----- step 3 ----- Use array in JSX
 * If a JavaScript variable is an array, 
 * JSX will implicitly concat all members of the array
 */
let arr = [
  <h1>Hello world!</h1>,
  <h2>React is awesome</h2>
];
render(<div>{arr}</div>,RootDom);



/** ----- step 4 ----- Define a component
 * a component class, 
 * which implements a render method to return an component instance of the class. 
 * You don't need to call new on the class in order to get an instance, j
 * ust use it as a normal HTML tag.
 */
// lifecycle ===> 生命周期
// 组件化 state + props ==> 
class FirstComponent extends Component{
	// shouldComponentUpdate(){
	// 	console.log('shouldComponentUpdate')
	// }
	componentWillUnmount(){
		console.log('componentWillUnmount')
	}
	componentDidUpdate(){
		console.log('componentDidUpdate')
	}
	componentWillUpdate(){
		console.log('componentWillUpdate')
	}
	componentWillReceiveProps(){
		console.log('componentWillReceiveProps')
	}
	componentWillMount(){
		console.log('componentWillMount')
	}
	componentDidMount (){
		console.log('componentDidMount')
	}
    constructor(){
        super()
        this.state={
            b: '我是第一个State'
        }
    }
    click(){
        this.setState({
            b: '我是第二个State'
        })
    }
    render(){
        console.log('render')
        return <div onClick={()=>this.click()}>
           	I am a component
           		{this.props.a}
                {this.state.b}
            </div>
    }
 };
let prop1 = '我是第一个prop'
render(<FirstComponent a={prop1}/>,RootDom);





/** ----- step 5 ----- state and props
 * React uses state and props to struct a component model
 */
 //MVVM  ==> model view viewModel

class PropState extends Component{
    constructor(){
        super();
        this.state = {a: 'I am state'}
    }
    click(){
        this.setState({
            a: '我更新了！'
        })
    }
    更新 
    render(){
        return <div onClick={() => this.click()}>
                    {this.state.a}
                    {this.props.b}
                    {this.props.a}
                </div>  
    }
}
let prop1 = 'I am props'
render(<PropState b={prop1} a='hai' />, RootDom)





//组件嵌套
class PropState extends Component{
    constructor(){
        super();
        this.state = {a: 'I am state'}
    }
    click(){
        this.setState({
            a: '我更新了！'
        })
    }
    更新
    render(){
        return <div onClick={() => this.click()}>
                    {this.state.a}
                    {this.props.b}
                    {this.props.a}
                </div>  
    }
}
class Another extends Component{
    render(){
        return <div>
                   我在PropState里面了
                   <PropState b={prop1} a='hai'/>
               </div>  
    }
}
let prop1 = 'I am props'
render(<Another/>, RootDom)



//组件交互
class PropState extends Component{
    constructor(){
        super();
        this.state = {a: 'I am state'}
    }
    click(){
        this.setState({
            a: '我更新了！'
        })
    }
    //更新
    render(){
        return <div onClick={() => this.click()}>
                    {this.state.a}
                    {this.props.b}
                    {this.props.a}
                </div>  
    }
}
class Another extends Component{
    constructor(){
        super()
        this.state = {
            prop1: '我是another的第一个prop'
        }
    }
    click(){
        this.setState({
            prop1: '我是another的第二个prop'
        })
    }
    render(){
        return <div onClick={()=>this.click()}>
                        我在PropState里面了
                   <PropState b={this.state.prop1} a='hai'/>
               </div>  
    }
}
render(<Another/>, RootDom)