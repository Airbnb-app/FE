import React from 'react'
import Historycard from '../components/Historycard'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import { useCookies } from "react-cookie"
import Swal from 'sweetalert2'
import Router from 'next/router'


function history() {
  const [cookies, setCookie, removeCookie] = useCookies()

  const logoutHandler = () => {
    Swal.fire({
      title: "Are you sure want to logout?",
      // text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Yes",
      cancelButtonColor: "#d33",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: "center",
          icon: "success",
          text: "Logout successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        removeCookie("name");
        removeCookie("role");
        removeCookie("token");
        Router.push('/');
      }
    })

  }
  return (
    <Layout
      logout={() => logoutHandler()}
      // name={cookies.name}
      >
      <Navbar namePages="History" />
      <Historycard />
    </Layout>
  )
}

export default history