import Logo from './logo'
import List from './list'
import Login from './login'

const header = ()=>{
    return(
        <div className="header_div">
            <Logo />
            <List />
            <Login />
        </div>
    )
}

export default header