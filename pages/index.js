import React , {Component} from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import axios from 'axios'

class Index extends Component{
    static async getInitialProps(){
        let userData = {}
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
            userData = response.data
        }
        catch(err){
            console.log.error(err)
        }

        return {initialData: [1,2,3,4] , userData}
    }
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
        const {title} = this.state
        const {userData,initialData} = this.props
        return(
            <BaseLayout>
                <h1>{this.state.title}</h1>
                <h3>{userData.id}</h3>
                <h3>{userData.title}</h3>
                <button onClick={()=>this.updateTitle()}>Chage Content</button>
            </BaseLayout>
        )
    }
}
export default Index