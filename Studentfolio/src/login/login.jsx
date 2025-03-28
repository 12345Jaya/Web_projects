const login = () => {
    return(
        <div className="login_div">
            <div className="login_name">Login</div>
            <div className="main_login">
                <input type="text"></input>
                <input type="text"></input>
            </div>
            <div className="login_button">
                <div>Forget Password?</div>
                <button>Login</button>
                <div>Not a member? Signup</div>
            </div>
        </div>
    )
}

export default login