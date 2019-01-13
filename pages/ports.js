import React , {Component} from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import axios from 'axios'
import {Link} from '../routes'

class Ports extends Component{
    static async getInitialProps(){
        let userData = []
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            userData = response.data
        }
        catch(err){
            console.log.error(err)
        }


        return {useData : userData.splice(0,10)}
    }
    renderPosts(useData) {
        return(
            useData.map((post)=>{
                return(
                    <h3>
                        <li>
                            <Link route={`/p/${post.id}`}>
                                <a>
                                    {post.id} sd- {post.title}
                                </a>
                            </Link>
                        </li>
                    </h3>
                )
            })
        )
    }
    render(){
        const { useData } = this.props
        //console.log(useData)
        return(
            <BaseLayout>
                <h1>NextJs Ports.</h1>
                <ul>
                    {this.renderPosts(useData)}
                </ul>
            </BaseLayout>
        )
    }
}
export default Ports