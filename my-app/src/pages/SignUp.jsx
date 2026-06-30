import { Link } from "react-router-dom";

function SignUp() {
  return (
    <section className="auth-section">
      <div className="auth-box">

        <div className="auth-left">
          <h1>Create Account 🚀</h1>

          <p>
            Join ShopEase today and discover premium quality products at the
            best prices. Create your account and start shopping now.
          </p>
        </div>

        <div className="auth-right">
          <h2>Sign Up</h2>

          <form>
            <input type="text" placeholder="Full Name" />

            <input type="email" placeholder="Email Address" />

            <input type="password" placeholder="Password" />

            <input
              type="password"
              placeholder="Confirm Password"
            />

            <button type="submit">
              Create Account
            </button>

            <p>
              Already have an account?
              <Link to="/login"> Login</Link>
            </p>
          </form>
        </div>

      </div>
    </section>
  );
}

export default SignUp;