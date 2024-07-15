import "./signup.css";

export default function Signup() {
    return (
        <div className="signup">
            <div className="con">

                <div className="info">
                    <span className="logo">ASBEZA</span>
                    <span className="wel">Get started now!!</span>
                    <div className="formm">
                        <form method="post">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required />
                            <label htmlFor="phone">Phone Number</label>
                            <input type="tel" id="phone" name="phone" required />
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" required />
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" id="confirmPassword" name="confirmPassword" required />
                            <input type="submit" value="Sign up" />
                        </form>
                    </div>
                    <div className="lnkk">
                        <span>Already have an account? </span>
                        <a href="/login">Login</a>
                    </div>
                </div>
                <div className="limg"></div>
            </div>
        </div>
    );
}
