import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Md360 } from "react-icons/md";
import {
  BsFillPeopleFill,
  BsCalendar3,
  BsFillFuelPumpFill,
  BsFillPersonVcardFill,
  BsFillCreditCard2BackFill,
} from "react-icons/bs";
import { SiStopstalk } from "react-icons/si";
import { GiGearStickPattern } from "react-icons/gi";
import { FaRoad, FaCar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CarCard = ({ car, diffDays }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();

  console.log(car);

  return (
    <ReactCardFlip isFlipped={isFlipped}>
      <div className="border-2 mx-auto p-6 leading-8 w-[28rem] sm:w-[35rem] md:w-[45rem] lg:w-[30rem] h-[28rem] sm:h-[32rem] md:h-[38rem] lg:h-[29rem]">
        <div className="flex justify-between">
          <div>
            <p className="text-secondary text-sm font-bold mb-4">EKONOMİK</p>
            <p className="font-bold text-xl">{`${car?.brand} ${car?.model}`}</p>
            <p className="font-semibold text-lg mt-2">{car?.year}</p>
          </div>
          <div className="text-end">
            <p
              className="text-secondary text-sm font-bold flex items-center gap-2 mb-4 cursor-pointer"
              onClick={() => setIsFlipped((prev) => !prev)}
            >
              <Md360 /> Tüm Özellikler
            </p>
            <div className="font-medium text-sm leading-8">
              <p>Dizel/Benzin</p>
              <p>{car?.gear === "m" ? "Manuel" : "Otomatik"}</p>
              <p>1000 Km</p>
            </div>
          </div>
        </div>
        <div className="aspect-video flex items-center">
          <img src={car?.image} alt="car" className="" />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-end">
            <span className="text-2xl text-primary font-bold mr-3">
              {car?.rent_per_day * diffDays} <span>TL</span>{" "}
            </span>
            <span className="text-sm ">
              {car?.rent_per_day}
              <span> / Günlük</span>
            </span>
          </div>

          <button
            className="bg-secondary text-white py-1 px-5 rounded-3xl"
            onClick={() => navigate(`/reservation/${car?.id}`)}
          >
            {diffDays} Gün Kirala {" >"}{" "}
          </button>
        </div>
      </div>

      <div className="border-2 p-6 leading-8 w-[28rem] sm:w-[35rem] md:w-[45rem] lg:w-[30rem] h-[28rem] sm:h-[32rem] md:h-[38rem] lg:h-[29rem] ">
        <div className="flex justify-between border-b-2 mb-4">
          <div>
            <p className="text-secondary text-sm font-bold mb-4">EKONOMİK</p>
            <p className="font-bold text-xl pb-4">{`${car?.brand} ${car?.model}`}</p>
          </div>
          <div className="">
            <p
              className="text-secondary text-sm font-bold flex items-center gap-2 mb-4 cursor-pointer"
              onClick={() => setIsFlipped((prev) => !prev)}
            >
              <Md360 /> Geri Dön
            </p>
          </div>
        </div>

        <div className="flex justify-around leading-10">
          <div className="flex-1">
            <h5 className="font-bold">Araç Özellikleri</h5>
            <div className="flex items-center gap-2">
              <BsFillPeopleFill size={20} />
              <p>5 Yetişkin</p>
            </div>
            <div className="flex items-center gap-2">
              <SiStopstalk size={20} />
              <p>ABS</p>
            </div>
            <div className="flex items-center gap-2">
              <BsFillFuelPumpFill size={20} />
              <p>Dizel/Benzin</p>
            </div>
            <div className="flex items-center gap-2">
              <GiGearStickPattern size={20} />
              <p>{car?.gear === "m" ? "Manuel" : "Otomatik"}</p>
            </div>
            <div className="flex items-center gap-2">
              <FaCar size={20} />
              <p>{car?.year} Model</p>
            </div>
          </div>
          <div className="border-l-2 h-80 pl-4 flex-1">
            <h5 className="font-bold">Kiralama Koşulları</h5>
            <div className="flex items-center gap-2">
              <FaRoad size={20} />
              <p>1000 Km</p>
            </div>
            <div className="flex items-center gap-2">
              <BsCalendar3 size={20} />
              <p>21 Yaş ve Üstü</p>
            </div>
            <div className="flex items-center gap-2">
              <BsFillPersonVcardFill size={20} />
              <p>Ehliyet Yaşı 1 ve Üzeri</p>
            </div>
            <div className="flex items-center gap-2">
              <BsFillCreditCard2BackFill size={20} />
              <p>1 Kredi Kartı</p>
            </div>
          </div>
        </div>
      </div>
    </ReactCardFlip>
  );
};

export default CarCard;
