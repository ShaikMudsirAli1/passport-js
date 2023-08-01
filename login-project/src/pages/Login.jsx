import Google from "../image/google.png";
import Facebook from "../image/facebook.png";
import Github from "../image/github.png";

const Login = () => {
  // GOOGLE FUNCTION.
  const google = () => {
    window.open("http://localhost:3000/auth/google", "_self");
  };
  return (
    <div className="login">
      <div className="wrapper">
        <div className="loginTitle">Choose a Login Method</div>
        <div className="left">
          <div className="loginButton google" onClick={google}>
            <img src={Google} alt="" className="icon" />
            Google
          </div>
          <div className="loginButton facebook">
            <img src={Facebook} alt="" className="icon" />
            Facebook
          </div>
          <div className="loginButton github">
            <img src={Github} alt="" className="icon" />
            Github
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">
          <input type="text" placeholder="Username" className="" />
          <input type="text" placeholder="Password" className="" />
          <div>
            {" "}
            <button className="submit">Login</button>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Login;
