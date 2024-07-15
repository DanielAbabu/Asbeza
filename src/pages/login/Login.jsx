import "./login.css";

export default function Login() {
    return (
        <div className="login">
            <div className="con">
                <div className="limg"></div>

                <div className="info">
                    <span className="logo">ASBEZA</span>
                    <span className="wel">Get started now!!</span>
                    <div className="formm">
                        <form method="post" >
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" name="email" required />
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" required />
                            <input type="submit" value="Login" />
                        </form>
                    </div>
                    <div className="lnkk">
                        <span>You don't have an account? </span>
                        <a href="/signup">Sign up</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
