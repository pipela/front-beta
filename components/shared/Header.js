import React , {Component} from 'react'
import Link from 'next/link'

class Header extends Component{
    render(){
        return(
            <React.Fragment>
                <p className="cus">Im style add</p>
                <p className="cusFF">Im style add</p>
                <Link href="/">
                    <a>Home</a>
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
                        font-size : 19px
                    }
                    .cus{
                        color: red
                    }
                    .cusFF{
                        color: blue
                    }
                `}
                </style>

            </React.Fragment>
        )
    }
}
export default Header