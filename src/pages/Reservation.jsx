import { useParams } from "react-router-dom";
import CarDetailCard from "../components/CarDetailCard";
import { useSelector } from "react-redux";
import useCarCalls from "../hooks/useCarCalls";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const Reservation = () => {
  const { startDate, endDate } = useSelector((state) => state.rent);
  const { id } = useParams();
  const { getCarDetail } = useCarCalls();
  const [carDetail, setCarDetail] = useState([]);

  useEffect(() => {
    console.log(new Date(startDate));
    const sd = new Date(startDate).toLocaleDateString("en-CA");
    const ed = new Date(endDate).toLocaleDateString("en-CA");
    getCarDetail(id, sd, ed, setCarDetail);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen p-8 mt-20">
        <h1 className="text-center mb-6 text-3xl font-bold">Rezervasyonunuz</h1>
        <CarDetailCard car={carDetail} />
      </div>
    </>
  );
};

export default Reservation;
