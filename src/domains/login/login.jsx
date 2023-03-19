import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { loginRequest } from '../../api/requests'


// export function Login() {
//   const { register, handleSubmit } = useForm();
//   const onSubmit = async (data) => {

//     try {
//       const response  = await loginRequest(data);
//       localStorage.setItem('token', response.token);
//     } catch(e) {
//       console.log(e);
//     }
//   }

//   return (
//     <div class="rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400 px-3 py-10 bg-gray-200 flex justify-center h-screen">
//     <div class="w-full max-w-xs">
//       <form onSubmit={handleSubmit(onSubmit)} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//         <div class="mb-4">
//           <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
//             Username
//           </label>
//           <input {...register("cnp")} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
//         </div>
//         <div class="mb-6">
//           <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
//             Password
//           </label>
//           <input {...register("password")} class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
//         </div>
//         <div class="flex items-center justify-between">
//           <button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
//             Sign In
//           </button>
//         </div>
//       </form>
//       <p class="text-center text-gray-500 text-xs">
//       </p>
//       <p><NavLink to="/">Landing</NavLink></p>
//     </div>
//     </div>
//   );
// }

import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
  from 'mdb-react-ui-kit';

import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'


export function Login() {
  // const { register, handleSubmit } = useForm();
  // const onSubmit = async (data) => {

  //   try {
  //     const response  = await loginRequest(data);
  //     localStorage.setItem('token', response.token);
  //   } catch(e) {
  //     console.log(e);
  //   }
  // }
  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center  h-screen'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{ color: 'hsl(218, 81%, 95%)' }}>
            Stay informed <br />
            <span style={{ color: 'hsl(218, 81%, 75%)' }}>prevention & awareness</span>
          </h1>

          <p className='px-3' style={{ color: 'hsl(218, 81%, 85%)' }}>
            Instert your <strong>CNP</strong> and your <strong>Password</strong> given by your physician.
          </p>

        </MDBCol>

        <MDBCol md='6' className='position-relative'>

          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

          <MDBCard className='my-5 bg-glass'>
            <MDBCardBody className='p-5'>

              <MDBInput wrapperClass='mb-4' label='CNP' id='form3' type='tel'/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password'/>

              <div class="flex items-center justify-between">
                <button class="w-100 w-100 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                <NavLink to="../home" style={{ textDecoration: 'none', color: 'white' }}>Log In</NavLink>
                </button>
              </div>
              {/* <MDBBtn className='w-100 mb-4' size='md' type="submit" form="form">Log in</MDBBtn> */}

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
        <p><NavLink to="/">Landing</NavLink></p>

      </MDBRow>

    </MDBContainer>
  );
}