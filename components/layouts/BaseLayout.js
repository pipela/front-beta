import React , {Component} from 'react'
import Header from '../shared/Header'

class BaseLayout extends Component{
    render(){
        const props = this.props
        return(
            <React.Fragment>
                <Header title="Hello from Header"/>
                {props.children}
            </React.Fragment>
        )
    }
}
export default BaseLayout