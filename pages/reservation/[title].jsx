import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import HomestayCard from "../../components/HomestayCard";
import Swal from "sweetalert2";
import Router from "next/router";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import axios from "axios";
import { Input } from "@material-tailwind/react";

import { AiFillStar } from "react-icons/ai";

const Homestay = () => {
  const router = useRouter();
  const [cookie, setCookie, removeCookie] = useCookies();
  const [avail, setAvail] = useState();
  const [homestay_id, setHomestayId] = useState();
  const [start_date, setStartDate] = useState();
  const [end_date, setEndDate] = useState();
  const [loading, setLoading] = useState(false);

  //data berhasil cek
  const [duration, setDuration] = useState();
  const [idHomestay, setIdHomestay] = useState();
  const [pricePerNight, setPricePerNight] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const titleHomestay = router?.query?.name;

  const [name, setName] = useState();

  useEffect(() => {
    setName(cookie.name);
  }, []);

  const [feedbackdata, setFeedbackData] = useState();
  const starnumber = [];

  const id = router?.query?.id;

  const checkAvail = (e) => {
    e.preventDefault();
    axios
      .post(
        `https://numpangtidur.my.id/reservations/check`,
        {
          homestay_id: parseInt(id),
          start_date: start_date,
          end_date: end_date,
        },
        {
          headers: {
            Authorization: `Bearer ${cookie.token}`,
          },
        }
      )
      .then((response) => {
        setHomestayId(response.data.data);
        const { duration, homestay_id, price_per_night, total_price } = response.data.data;
        setDuration(duration);
        setIdHomestay(homestay_id);
        setPricePerNight(price_per_night);
        setTotalPrice(total_price);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Your dates are already booked",
        });
      });
  };

  const reserve = (titleId) => {
    Router.push({
      pathname: `/payment/${titleId}`,
      query: {
        titleHomestay: titleHomestay,
        duration: duration,
        id_homestay: idHomestay,
        price_per_night: pricePerNight,
        total_price: totalPrice,
        start_date: start_date,
        end_date: end_date,
      },
    });
  };

  const LogoutHandler = () => {
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
  };
  const getFeedback = () => {
    const config = {
      headers: {
        Authorization: `Bearer ${cookie.token}`,
      },
    };
    axios
      .get(`https://numpangtidur.my.id/homestays/${parseInt(id)}`, config)
      .then((response) => {
        setFeedbackData(response.data.data.feedback);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err,
        });
      });
  };

  useEffect(() => {
    getFeedback();
  }, []);

  useEffect(() => {
    if (!cookie.token) {
      router.push("/");
    }
  }, [cookie.token]);

  // for (let i = 0; i <= feedbackdata.rating; i++) {
  //   starnumber.push(<AiFillStar key={i} />);
  // }

  // useEffect(()=>{
  //   checkAvail()
  // }, [])
  return (
    <Layout
      dashboard={"shadow"}
      logout={() => LogoutHandler()}
      name={
        name === undefined ? (
          <>
            <p>you are not login</p>
          </>
        ) : (
          <>
            <p className="mt-2">{name}</p>
          </>
        )
      }
    >
      <Navbar namePages={"Reservation "} />
      <div className="w-full flex justify-center">
        <HomestayCard
          address={router?.query?.address}
          owner={router?.query?.owner}
          image1={router?.query?.image1}
          image2={router?.query?.image2}
          image3={router?.query?.image3}
          name={router?.query?.name}
          deskripsi={router?.query?.description}
          harga={router?.query?.price_per_night}
        />
      </div>
      <div className="w-full flex justify-end">
        <div className="w-3/4 h-full bg-[#FBFBFB] text-black p-7 rounded-lg shadow-xl">
          <p className="text-2xl text-pink-airbnb">Last 3 reviews :</p>
          {feedbackdata ? (
            feedbackdata.slice(-3).map((item) => (
              <div key={item.id} className="py-5">
                <p className="flex items-center">
                  {item.rating} <AiFillStar /> from {item.poster}
                </p>
                {item.feedback}

                {starnumber}
              </div>

              // {for (i=0;i<={item.rating})}
            ))
          ) : (
            <></>
          )}
        </div>
        <div className="w-1/4 h-full bg-[#FBFBFB] rounded-lg shadow-xl mx-20">
          <div className="m-5">
            <form className="" onSubmit={(e) => checkAvail(e)}>
              <div className="my-2">
                <Input
                  variant="outlined"
                  size="lg"
                  label="Check-in Date"
                  type="text"
                  onChange={(e) => {
                    setStartDate(e.target.value);
                  }}
                  value={start_date}
                />
              </div>
              <div className="my-2">
                <Input
                  variant="outlined"
                  size="lg"
                  label="Check-out Date"
                  type="text"
                  onChange={(e) => {
                    setEndDate(e.target.value);
                  }}
                  value={end_date}
                />
              </div>
              <div className="flex justify-center my-7">
                {homestay_id ? (
                  <>
                    <button className="btn bg-pink-airbnb border-none hover:bg-[#E75056] normal-case text-[22px] text-white" onClick={() => reserve(idHomestay)}>
                      Reserve
                    </button>
                  </>
                ) : (
                  <>
                    <button type="submit" className="btn bg-pink-airbnb border-none hover:bg-[#E75056] normal-case text-[22px] text-white">
                      Check Availability
                    </button>
                  </>
                )}
              </div>
            </form>
            <div>
              {homestay_id ? (
                <>
                  <div className="text-black">
                    <p>Duration: {duration}</p>
                    <p>ID Homestay: {idHomestay}</p>
                    <p>Price/Night: {pricePerNight}</p>
                    <p>Total: {totalPrice}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-black">
                    <p>check again</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Homestay;
