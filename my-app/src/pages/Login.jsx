
import { Link } from "react-router-dom";
function Login() {
  return (
    <section className="auth-section">
      <div className="auth-box">

        <div className="auth-left">
          <h1>Welcome Back 👋</h1>

          <p>
            Login to access your dashboard, manage your products,
            and enjoy a seamless shopping experience.
          </p>
        </div>

        <div className="auth-right">
          <h2>Login</h2>

          <form>
            <input type="email" placeholder="Email Address" />

            <input type="password" placeholder="Password" />

            <button type="submit">Login</button>

            <p>
              Don't have an account?
              <Link to="/signup"> Sign Up</Link>
            </p>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Login;