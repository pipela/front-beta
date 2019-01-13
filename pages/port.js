import React , {Component} from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import {withRouter} from 'next/router'
import axios from 'axios'

class Port extends Component{
    static async getInitialProps({query}){
        let useData = {}
        const getId = query.id
        console.log(getId)
        try{
            const respons = await axios.get(`https://jsonplaceholder.typicode.com/posts/${getId}`)
            console.log("res1:: " ,respons)
            useData = respons.data
            console.log("res2:: " +useData.title)
            console.log("res ID:: " +useData.id)
        }
        catch(err){
            console.error(err)
        }
        

        return {useData}
    }
    render(){
        const { useData } = this.props
        return(
            <BaseLayout>
                <div>
                    <h3>
                        {useData.id}
                    </h3>
                    <h3>
                        {useData.title}
                    </h3>
                    <h3>
                        {useData.body}
                    </h3>
                </div>
            </BaseLayout>
        )
    }
}
export default withRouter(Port)