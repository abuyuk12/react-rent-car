import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePick from "./DatePicker";
import { useDispatch, useSelector } from "react-redux";
import {
  changePickupCity,
  changeReturnCity,
  diffDaysCount,
} from "../features/rentSlice";
import { toastError } from "../helper/toastify";

const MainModule = () => {
  const dispatch = useDispatch();
  const {
    startDate,
    endDate,
    startTime,
    endTime,
    diffDays,
    pickupCity,
    returnCity,
  } = useSelector((state) => state.rent);
  console.log(pickupCity, returnCity);

  const navigate = useNavigate();
  const [city, setCity] = useState({
    pickupCity: "istanbul",
    returnCity: "istanbul",
  });

  const [select, setSelect] = useState("car");
  const handleSelect = (e) => {
    setSelect(e.target.value);
    console.log(select);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCity({ ...city, [name]: value });
    console.log(city);
  };

  const handleSubmit = () => {
    const sd = new Date(startDate).toLocaleDateString("en-CA");
    const ed = new Date(endDate).toLocaleDateString("en-CA");

    if (ed === sd || sd > ed) {
      toastError("Lütfen Geçerli Bir Tarih Giriniz!");
    } else if (!startTime || !endTime) {
      toastError("Lütfen Geçerli Bir Saat Giriniz!");
    } else {
      dispatch(changePickupCity(city.pickupCity));
      dispatch(changeReturnCity(city.returnCity));
      navigate("/cars");
    }
  };

  useEffect(() => {
    dispatch(diffDaysCount());
    // eslint-disable-next-line
  }, [startDate, endDate]);

  return (
    <div className=" main text-white h-screen flex pt-40 justify-center mt-20">
      <div className="flex flex-col bg-primary px-2 h-[150px] mt-10">
        <p className="flex flex-1 items-end pb-2">1.</p>
        <p className="flex flex-1 items-end pb-5">2.</p>
      </div>

      <div className="modal-container">
        <div className="w-fit bg-modalBlack">
          <label
            className={`py-2 px-4 inline-block transition-all ${
              select === "car" ? "bg-modalBg" : "cursor-pointer"
            }`}
            htmlFor="car"
          >
            <input
              type="radio"
              name="rentType"
              value="car"
              id="car"
              checked={select === "car"}
              onChange={handleSelect}
            />

            <span className="pl-2">Araç Kirala</span>
          </label>

          <label
            className={`py-2 px-4 inline-block ${
              select === "caravan" ? "bg-modalBg" : "cursor-pointer"
            }`}
            htmlFor="caravan"
          >
            <input
              type="radio"
              name="rentType"
              value="caravan"
              id="caravan"
              checked={select === "caravan"}
              onChange={handleSelect}
            />
            <span className="pl-2">Karavan Kirala</span>
          </label>
        </div>

        <div className="flex flex-col md:flex-row items-center bg-modalBg px-6 md:px-4 py-5 gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex ">
              <p
                className="w-10 text-xs border-l-2 border-primary pl-2"
                htmlFor="office1"
              >
                Teslim Alma Ofisi
              </p>
              <select
                name="pickupCity"
                id="pickupCity"
                className="p-3 w-52 ml-4 text-white bg-modalBlack cursor-pointer"
                value={city.pickupCity}
                onChange={handleChange}
              >
                <option disabled defaultValue="istanbul">
                  Alış Ofisi Seçiniz
                </option>
                <option value="istanbul">İstanbul</option>
                <option value="ankara">Ankara</option>
                <option value="izmir">İzmir</option>
                <option value="aydın">Aydın</option>
                <option value="bursa">Bursa</option>
              </select>
            </div>

            <div className="flex">
              <p
                htmlFor="office2"
                className="w-10 text-xs border-l-2 border-primary pl-2"
              >
                Teslim Etme Ofisi
              </p>
              <select
                name="returnCity"
                id="returnCity"
                className="p-3 w-52 ml-4 text-white bg-modalBlack cursor-pointer"
                value={city.returnCity}
                onChange={handleChange}
              >
                <option disabled defaultValue="istanbul">
                  İade Ofisi Seçiniz
                </option>
                <option value="istanbul">İstanbul</option>
                <option value="ankara">Ankara</option>
                <option value="izmir">İzmir</option>
                <option value="aydın">Aydın</option>
                <option value="bursa">Bursa</option>
              </select>
            </div>
          </div>
          <div className="">
            <DatePick />
          </div>
        </div>
        <div className="w-full bg-modalBlack text-sm flex justify-between items-center p-4">
          <p className="text-xs">EUR İNDİRİM KODU</p>
          <button
            className="bg-primary py-4 px-7 rounded-3xl text-xs"
            onClick={handleSubmit}
          >
            {diffDays > 0 ? diffDays : ""} GÜN KİRALA
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainModule;
