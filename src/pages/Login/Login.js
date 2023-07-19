import "./Login.scss";
import LoginImg from "../../assets/images/login-image.svg";
import LoginLogo from "../../assets/images/login-logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addToken } from "../../redux/token/tokenActions";

export const Login = () => {
  const userNameRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const hendelSubmit = () => {
    // axios.post("http://localhost:5000/user/login", {
    //     userName: userNameRef.current.value,
    //     password: passwordRef.current.value,
    // }).then(res => {
    //     if(res.status === 201){
    //         dispatch(addToken(res.data.token));
    //         localStorage.setItem("token", res.data.token)
    //         navigate("/")
    //     }
    // }).catch(error => console.log(error))

    dispatch(addToken(userNameRef.current.value));
    localStorage.setItem("token", userNameRef.current.value);
    navigate("/");
  };
  return (
    <>
      <div className="login-wrapper">
        <div className="login-inner">
          <img className="login-img" src={LoginImg} alt="Login Image" />

          <form
            className="login-form"
            onSubmit={(evt) => {
              evt.preventDefault();
              hendelSubmit();
            }}>
            <Link className="login-logo-ling" to="/">
              <img src={LoginLogo} alt="Site logo" />
            </Link>

            <label className="login-label">
              <span className="login-label-text">Username</span>
              <input
                className="login-input"
                type="text"
                placeholder="Enter your username"
                ref={userNameRef}
                required
              />
            </label>
            <label className="login-label">
              <span className="login-label-text">Password</span>
              <input
                className="login-input"
                type="password"
                placeholder="Enter your password"
                ref={passwordRef}
                required
              />
            </label>
            <button className="login-btn" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
