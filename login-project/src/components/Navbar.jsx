import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  // LOGOUT FUNCTION
  const logout = () => {
    window.open("http://localhost:3000/auth/logout", "_self");
  };
  return (
    <div className="navbar">
      <span className="logo">
        <Link to={"/"} className="link">
          Mudsir App
        </Link>
      </span>
      {/* If their is user shout "Logout" else no user then show "Login" */}
      {user ? (
        <ul className="list">
          <li className="listItem">
            <img
              // src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
              src={user.photos[0].value}
              alt="logout-img"
              className="avatar"
            />
          </li>
          <li>
            {" "}
            <h4 className="gap">Welcome</h4>
          </li>
          <li className="listItem"> {user.displayName}</li>
          <li className="listItem" onClick={logout}>
            Logout
          </li>
        </ul>
      ) : (
        <Link className="link" to="login">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
