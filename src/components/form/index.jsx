import React, { useState, useReducer } from "react";

//              * HOW DEVMENTORLIVE WOULD WRITE IT *
import useLogin from "./use-login";

export default function Form() {
  const {
    values: { username, password, error, loggedIn, submitting },
    setUsername,
    setPassword,
    login,
    logout,
  } = useLogin();

  async function onSubmit(e) {
    e.preventDefault();
    login();
  }

  return (
    <div className="login-container">
      {loggedIn ? (
        <>
          <h1>Welcome {username}</h1>
          <button onClick={logout}>Log out</button>
        </>
      ) : (
        <form onSubmit={onSubmit}>
          <p>Please login!</p>
          {error ? <p className="error">{error}</p> : null}
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" disabled={submitting}>
            Log in
          </button>
        </form>
      )}
    </div>
  );
}

//              * USING REDUCER *
// import loginReducer from "./reducer";

// const initialState = {
//   username: "",
//   password: "",
//   loading: false,
//   loggedIn: false,
//   error: null
// };

// export default function Form() {
//   const [state, dispatch] = useReducer(loginReducer, initialState);
//   const { username, password, loading, loggedIn, error } = state;

//   async function onSubmit(e) {
//     e.preventDefault();
//     dispatch({ type: 'login' })
//     try {
//       await login({ username, password});
//       dispatch({ type: 'success', value: initialState })
//     } catch (error) {
//          dispatch({ type: 'error', value: error})
//     }
//     // dispatch({ type: 'reset' })
//   }

//   return (
//     <div className="login-container">
//         {
//             loggedIn ? (
//             <>
//             <h1>Welcome {username}</h1>
//             <button onClick={()=> dispatch({ type: 'logout', value: initialState })}>Log out</button>
//             </>
//             )
//             : (
//       <form onSubmit={onSubmit}>
//         <p>Please login!</p>
//             {error ? <p className='error' >{error}</p> : null}
//         <input
//           type="text"
//           placeholder="username"
//           value={username}
//           onChange={(e) =>
//             dispatch({
//               type: "field",
//               field: "username",
//               value: e.target.value,
//             })
//           }
//         />
//         <input
//           type="password"
//           placeholder="password"
//           value={password}
//           onChange={(e) =>
//             dispatch({
//               type: "field",
//               field: "password",
//               value: e.target.value,
//             })
//           }
//         />
//         <button type="submit" disabled={loading}>Log in</button>
//       </form>
//             )
//         }
//     </div>
//   );
// }

//                  * OR *

// export default function Form() {
//   const [loading, setLoading] = useState(false);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const [loggedIn, setLoggedIn] = useState(false);

//   async function onSubmit(e) {
//     e.preventDefault();
//     setLoading(true);
//     setError(null)

//     try {
//       await login({ username, password });
//       setLoggedIn(true);
//       setUsername('')
//       setPassword('')
//     } catch (error) {
//       setError(error);
//     }
//     setLoading(false);
//   }
//   const passwordHandler = (e) => {
//     setPassword((x) => (x = e.target.value));
//   };
//   return (
//     <div className="login-container">
//       {loggedIn ? (
//           <>
//         <h1>Welcome {username}</h1>
//         <button onClick={()=> setLoggedIn(false)}>Log out</button>
//       </>
//       ) : (
//         <form onSubmit={onSubmit}>
//           <p>Please login!</p>
//           {error ? <p className="error">{error}</p> : null}
//           <input
//             type="text"
//             placeholder="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="password"
//             value={password}
//             onChange={passwordHandler}
//           />
//           <button type="submit" disabled={loading}>
//             Log In
//           </button>
//         </form>
//       )}
//     </div>
//   );
// }
