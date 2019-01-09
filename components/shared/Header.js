import React , {Component} from 'react'
import Link from 'next/link'
import '../../styles/main.scss'

class Header extends Component{
    render(){
        const tItle = this.props.title
        return(
            <React.Fragment>
                <p className="cus">Im style add</p>
                <p className="cusFF">Im style add</p>
                <h1>{tItle}</h1>
                <Link href="/">
                    <a style={{'fontSize':'20px'}}>Home</a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link>
                <Link href="/blogs">
                    <a>Blogs</a>
                </Link>
                <Link href="/cv">
                    <a>CV</a>
                </Link>
                <Link href="/ports">
                    <a>Ports</a>
                </Link>

                <style jsx>
                {`
                    a{
                        fontSize : 19px
                    }
                    .cus{
                        color: red
                    }
                `}
                </style>

            </React.Fragment>
        )
    }
}
export default Header