import React , {Component} from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import {withRouter} from 'next/router'

class Port extends Component{
    static async getInitialProps({query}){
        let useData = {}
        const getId = query.id
        console.log(getId)
        try{
            const respons = await axios.get(`https://jsonplaceholder.typicode.com/posts/${getId}`)
            console.log("res1:: " ,respons)
            useData = respons.data
            console.log("res2s:: " +useData.title)
            console.log("res ID:: " +useData.id)
        }
        catch(err){
            console.error(err)
        }
        
        return {useData}
    }
    
    render(){
        const titles = this.props
        return(
            <BaseLayout>
                d
            </BaseLayout>
        )
    }
}
export default withRouter(Port)