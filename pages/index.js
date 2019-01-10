import React , {Component} from 'react'
import BaseLayout from '../components/layouts/BaseLayout'


class Index extends Component{
    constructor(props) {
        super(props)
        this.state = {
            title:'Im Index Page'
        }
        console.log('Constructor')
    }

    componentDidMount(){
        console.log('componentDidMount')
    }
    componentDidUpdate(){
        console.log('Did update')
    }
    componentWillUnmount(){
        console.log('component will un mount')
    }

    updateTitle() {
        this.setState({title: 'Im from states'})
    }

    render(){
        console.log('In Render')
        return(
            <BaseLayout>
                <h1>{this.state.title}</h1>
                <button onClick={()=>this.updateTitle()}>Chage Content</button>
            </BaseLayout>
        )
    }
}
export default Index