import React, { useEffect, useState } from "react";
import useCarCalls from "../hooks/useCarCalls";
import Navbar from "../components/Navbar";

const MyReservations = () => {
  const { getReservation } = useCarCalls();
  const [reservation, setReservation] = useState([]);

  useEffect(() => {
    getReservation(setReservation);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen mt-24">
        <h1 className="text-center text-2xl m-4 font-bold">Rezervasyonlarım</h1>
        <div className="max-h-fit py-4 border-2">
          {!reservation.length && (
            <p className="text-center text-gray-600">
              Rezervasyonunuz Bulunmamaktadır...
            </p>
          )}
          {reservation.map((res) => (
            <div className="flex flex-col gap-4 w-3/4 mx-auto border-black border rounded mb-4 p-4">
              <div className="flex items-center gap-8">
                <p className="bg-zinc-800 text-white px-4 py-2 rounded-xl shadow-2xl">
                  Kiralanan Araç :
                </p>
                <p className="bg-teal-800 text-white px-4 py-2 rounded-xl shadow-2xl">
                  {res.car}
                </p>
              </div>

              <div className="flex items-center gap-8">
                <p className="bg-zinc-800 text-white px-4 py-2 rounded-xl shadow-2xl">
                  Kiralama Başlangıç Tarihi :
                </p>
                <p className="bg-teal-800 text-white px-4 py-2 rounded-xl shadow-2xl">
                  {new Date(res.start_date).toLocaleDateString()}
                </p>
              </div>

              <div className="flex items-center gap-8">
                <p className="bg-zinc-800 text-white px-4 py-2 rounded-xl shadow-2xl">
                  Kiralama Bitiş Tarihi :
                </p>
                <p className="bg-teal-800 text-white px-4 py-2 rounded-xl shadow-2xl">
                  {new Date(res.end_date).toLocaleDateString()}
                </p>
              </div>

              <div className="flex items-center gap-8">
                <p className="bg-zinc-800 text-white px-4 py-2 rounded-xl shadow-2xl">
                  Toplam Kiralama Ücreti :
                </p>
                <p className="bg-teal-800 text-white px-4 py-2 rounded-xl shadow-2xl">
                  {res.total_price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyReservations;
