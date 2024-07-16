import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import Logo from "../../assets/images/qartelz-logo-2.png"

import AuthContext from '../../context/AuthContext'

const LoginPage = () => {


  const {loginUser} = useContext(AuthContext)
  const handleSubmit = e => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

    email.length > 0 && loginUser(email, password)

    console.log(email)

   
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md relative">
       
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"></div>

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img src={Logo} alt="Logo" className="h-24" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2"  htmlFor="form2Example17">
              Username / Email
            </label>
            <div className="flex items-center bg-gray-700 rounded-lg">
              <FontAwesomeIcon icon={faUser} className="text-gray-400 ml-3" />
              <input
                 id="form2Example17"
                type="text"
                placeholder="Username / Email"
                name='email'
                className="bg-gray-700 text-gray-300 rounded-lg focus:outline-none w-full py-2 px-4"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="form2Example27">
            Password
            </label>
            <div className="flex items-center bg-gray-700 rounded-lg">
              <FontAwesomeIcon icon={faLock} className="text-gray-400 ml-3" />
              <input
                 id="form2Example27"
                type="password"
                placeholder="Password"
                name='password'
                className="bg-gray-700 text-gray-300 rounded-lg focus:outline-none w-full py-2 px-4"
              />
            </div>
          </div>

          <div className="flex justify-between items-center mb-6">
            <a href="/forgot-password" className="text-sm text-blue-400 hover:text-blue-500">
              Forgot Password?
            </a>
          </div>

          <div className="flex justify-center mb-6">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none"
            >
              Login
            </button>
          </div>

          <div className="text-center text-gray-400 text-sm">
            New to Qartelz?{' '}
            <a href="/signup" className="text-blue-400 hover:text-blue-500">
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;



// import React, { useContext } from 'react'
// import { Link } from 'react-router-dom'
// import AuthContext from '../../context/AuthContext'



// function Loginpage() {

//   const {loginUser} = useContext(AuthContext)
//   const handleSubmit = e => {
//     e.preventDefault()
//     const email = e.target.email.value
//     const password = e.target.password.value

//     email.length > 0 && loginUser(email, password)

//     console.log(email)

   
//   }

//   return (
//     <div>
//       <>
//   <section className="vh-100" >
//     <div className="container py-5 h-100">
//       <div className="row d-flex justify-content-center align-items-center h-100">
//         <div className="col col-xl-10">
//           <div className="card" style={{ borderRadius: "1rem" }}>
//             <div className="row g-0">
//               <div className="col-md-6 col-lg-5 d-none d-md-block">
//                 <img
//                   src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
//                   alt="login form"
//                   className="img-fluid"
//                   style={{ borderRadius: "1rem 0 0 1rem" }}
//                 />
//               </div>
//               <div className="col-md-6 col-lg-7 d-flex align-items-center">
//                 <div className="card-body p-4 p-lg-5 text-black">
//                   <form onSubmit={handleSubmit}>
//                     <div className="d-flex align-items-center mb-3 pb-1">
//                       <i
//                         className="fas fa-cubes fa-2x me-3"
//                         style={{ color: "#ff6219" }}
//                       />
//                       <div className="d-flex align-items-center mb-3 pb-1">
//                         <i
//                           className="fas fa-cubes fa-2x me-3"
//                           style={{ color: "#ff6219" }}
//                         />
//                         <span className="h2 fw-bold mb-0">Welcome back 👋</span>
//                       </div>
//                     </div>
//                     <h5
//                       className="fw-normal mb-3 pb-3"
//                       style={{ letterSpacing: 1 }}
//                     >
//                       Sign into your account
//                     </h5>
//                     <div className="form-outline mb-4">
//                       <input
//                         type="email"
//                         id="form2Example17"
//                         className="form-control form-control-lg"
//                         name='email'
//                       />
//                       <label className="form-label" htmlFor="form2Example17">
//                         Email address
//                       </label>
//                     </div>
//                     <div className="form-outline mb-4">
//                       <input
//                         type="password"
//                         id="form2Example27"
//                         className="form-control form-control-lg"
//                         name='password'
//                       />
//                       <label className="form-label" htmlFor="form2Example27">
//                         Password
//                       </label>
//                     </div>
//                     <div className="pt-1 mb-4">
//                       <button
//                         className="btn btn-dark btn-lg btn-block"
//                         type="submit"
//                       >
//                         Login
//                       </button>
//                     </div>
//                     {/* <a className="small text-muted" href="#!">
//                       Forgot password?
//                     </a> */}
//                     {/* <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
//                       Don't have an account?{" "}
//                       <Link to="/register" style={{ color: "#393f81" }}>
//                         Register Now 
//                       </Link>
//                     </p> */}
//                     <a href="#!" className="small text-muted">
//                       Terms of use.
//                     </a>
//                     <a href="#!" className="small text-muted">
//                       Privacy policy
//                     </a>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
//   <footer className="bg-light text-center text-lg-start">
//     <div
//       className="text-center p-3"
//       style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
//     >
//       © 2024 - till date Copyright :
//       <a className="text-dark" href="https://qartelz.com/">
//         <> </>Qartelz FinTech.com
//       </a>
//     </div>
//   </footer>
// </>

//     </div>
//   )
// }

// export default Loginpage