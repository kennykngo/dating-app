// // // import React, { useContext } from "react";
// // // import { useHistory } from "react-router-dom";
// // // import userContext from "../../context/UserContext";

// // // export default function AuthOptions() {
// // //   const { userData, setUserData } = useContext(userContext);

// // //   const history = useHistory();

// // //   const register = () => history.push("/register");
// // //   const login = () => history.push("/login");
// // //   const logout = () => {
// // //     setUserData({ token: undefined, user: undefined });
// // //     localStorage.setItem("auth-token", "");
// // //   };

// // //   return (
// // //     <nav className="auth-options">
// // //       {userData.user ? (
// // //         <button onClick={logout}>Log Out</button>
// // //       ) : (
// // //         <>
// // //           <button onClick={register}>Register</button>
// // //           <button onClick={login}>Log In</button>
// // //         </>
// // //       )}
// // //     </nav>
// // //   );
// // // }

// import React from "react";

// function AuthOptions({ component: Component, authed, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         authed === true ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{ pathname: "/login", state: { from: props.location } }}
//           />
//         )
//       }
//     />
//   );
// }

// export default AuthOptions;
