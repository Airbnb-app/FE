
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

  const [idstate, setIdState] = useState();
  //asdfs
  const [name, setName] = useState()

  useEffect(() => {
    setName(cookie.name);
  }, [])

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

  const getReservation = async () => {
    axios
      .get(`https://numpangtidur.my.id/reservations`, {
        headers: {
          Authorization: `Bearer ${cookie.token
            }`
        }
      })
      .then((response) => {
        setHistoryData(response.data.data)
      })
      .catch((error) => console.log(error))
  }

  const postFeedback = async (e) => {
    e.preventDefault();

    axios
      .post('https://numpangtidur.my.id/feedbacks',
        {
          homestay_id: idstate,
          rating: rating,
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
    getReservation()
  }, [cookie.token]);

  return (
    <Layout history={"shadow"} logout={() => logoutHandler()} name={name === undefined ? (
      <><p>you are not login</p></>
    ) : (
      <><p className='mt-2'>{name}</p></>
    )}>
      <Navbar namePages="History" />
      <div className='p-5'>
        {historydata ? (
          historydata.map((item) => (
            <div id={item.id} className="mb-5">
              <Historycard
                homestay_name={item.homestay_name}
                start_date={item.start_date.substring(0, 10)}
                end_date={item.end_date.substring(0, 10)}
                total_price={item.total_price}
                giveId={()=>{setIdState(item.homestay_id)}}
                submitButton={(e) => postFeedback(e)}
                onChangeFeedback={(e) => { setFeedback(e.target.value) }}
                rate1={() => setRating("1")}
                rate2={() => setRating("2")}
                rate3={() => setRating("3")}
                rate4={() => setRating("4")}
                rate5={() => setRating("5")}
              />
            </div>
          ))
        ) : (
          <></>
        )}
        
      </div>


    </Layout>
  );
}

export default history;
