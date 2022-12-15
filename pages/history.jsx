
import React, { useState, useEffect } from 'react'
import Historycard from '../components/Historycard'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import { useCookies } from "react-cookie"
import Swal from 'sweetalert2'
import Router from 'next/router'
import { useRouter } from "next/router"
import axios from 'axios'


function history() {
  const [cookie, setCookie, removeCookie] = useCookies()
  const [historydata, setHistoryData] = useState()

  const [rating, setRating] = useState('');
  const [feedback, setFeedback] = useState('');


  const router = useRouter();

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
        removeCookie("user_id");
        Router.push("/");
      }
    });

    // useEffect(() => {
    //   if (!cookies.token) {
    //     Router.push("/");
    //   }
    // }, [cookies.token]);


  }

  const getReservation = () => {
    axios
      .get(`https://numpangtidur.my.id/reservations`, {
        headers: {
          Authorization: `Bearer ${cookie.token
            }`
        }
      })
      .then((response) => {
        console.log(response.data)
        setHistoryData(response.data.data)
      })
      .catch((error) => console.log(error))
  }

  const postFeedback = async (e) => {
    e.preventDefault();
    console.log(rating)
    console.log(feedback)

    axios
      .post('https://numpangtidur.my.id/feedbacks',
        {
          homestay_id: 4,
          rating: "rating",
          feedback: feedback,
        },
        { headers: { Authorization: `Bearer ${cookie.token}` } }
      )
      .then((response) => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }


  useEffect(() => {
    if (!cookie.token) {
      router.push("/");
    }
    // getReservation()
  }, [cookie.token]);

  return (
    <Layout history={"shadow"} logout={() => logoutHandler()} name={cookie?.name}>
      <Navbar namePages="History" />
      {/* {historydata ? (
          historydata.map((item) => (
            <div id={item.id}>
              <Historycard />
            </div>
          ))
        ) : (
          <></>
        )} */}
      <Historycard
        submitButton={(e) => postFeedback(e)}
        onChangeFeedback={(e) => { setFeedback(e.target.value) }}
      />
    </Layout>
  );
}

export default history;
