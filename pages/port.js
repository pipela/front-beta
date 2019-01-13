import React , {Component} from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import {withRouter} from 'next/router'

class Port extends Component{
    render(){
        const titles = this.props
        return(
            <BaseLayout>
                <h3>
                    {titles.router.query.title}
                </h3>
            </BaseLayout>
        )
    }
}
export default withRouter(Port)