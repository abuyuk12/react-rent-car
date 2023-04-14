import React, { useRef, useState } from "react";
import { FiLogIn, FiMenu } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { RxExit } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clickSignButton } from "../features/rentSlice";
import AccountForm from "./AccountForm";
import useAuthCalls from "../hooks/useAuthCalls";

const navList = [
  {
    li: "Rezervasyon",
    subLi: ["Rezervasyon İptal/Güncelleme", "Nasıl Rezervasyon Yaparsın"],
  },
  {
    li: "Araçlar",
    subLi: ["Tüm Kiralık Araçlar", "Ekonomik Araçlar", "Konfor Araçlar"],
  },
  {
    li: "Kampanyalar",
    subLi: ["Avis Kampanyaları", "Kurumsal Kampanyalar"],
  },
  {
    li: "Ofisler",
    subLi: ["Şehir Ofisleri", "Havalimanı Ofisleri"],
  },
  {
    li: "Hizmetler",
    subLi: ["Uzun Dönem Filo Kiralama", "Kurumsal Kiralama"],
  },
  {
    li: "Filo Kiralama",
    subLi: [],
  },
];

const Navbar = () => {
  const { logout } = useAuthCalls();
  const ref = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { clickSign } = useSelector((state) => state.rent);
  const { firstName } = useSelector((state) => state.auth);
  const [indexList, setIndexList] = useState(-1);
  const [open, setOpen] = useState(false);

  console.log(clickSign);

  const handleClick = () => {
    dispatch(clickSignButton());
  };

  const handleMobileMenuClick = (index) => {
    indexList === index ? setIndexList(-1) : setIndexList(index);
  };

  return (
    <>
      {/* <div className="h-20" /> */}
      <nav className="fixed top-0 h-20 bg-primary flex justify-between items-center px-10 w-full z-10">
        <div className="">
          <h1
            className="text-5xl text-white font-bold cursor-pointer"
            onClick={() => navigate("/")}
          >
            EUR
          </h1>
        </div>

        <div className="list-container h-full md:flex hidden">
          {navList?.map((item, index) => (
            <div
              key={index}
              className=" relative h-full group  hover:bg-white transition-all"
            >
              <div className=" h-full text-white flex items-center px-3 transition-all cursor-pointer  group-hover:text-red-600 shadow font-medium text-sm ">
                {item.li}
              </div>
              {item.subLi.length > 0 && (
                <ul
                  className={`absolute hidden  group-hover:block transition-all bg-white w-60 px-1 divide-y ${
                    index >= navList.length / 2 ? "right-0" : ""
                  } `}
                >
                  {item?.subLi?.map((sub, index) => (
                    <li
                      key={index}
                      className="py-2 pl-1 text-[13px] font-medium hover:text-primary hover:pl-2 cursor-pointer transition-all "
                    >
                      {sub}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {!firstName ? (
            <div className="relative">
              <div
                className={`h-full text-white flex items-center gap-2 justify-center px-3 transition-all cursor-pointer hover:text-red-600 shadow font-medium text-sm hover:bg-white ${
                  clickSign ? "bg-white !text-red-700" : ""
                } `}
                onClick={handleClick}
              >
                Üye Girişi
                <FiLogIn
                  size={20}
                  className={`pointer-events-none ${
                    clickSign ? "bg-white text-red-600" : ""
                  } `}
                />
              </div>

              <div
                ref={ref}
                className={`bg-white absolute right-0 w-80 ${
                  clickSign ? "" : "hidden"
                } `}
              >
                <AccountForm />
              </div>
            </div>
          ) : (
            <div className=" relative h-full group  hover:bg-white transition-all">
              <div className=" h-full text-white flex items-center px-3 transition-all cursor-pointer  group-hover:text-red-600 shadow font-medium text-sm ">
                Hesabım
              </div>

              <ul className="absolute hidden  group-hover:block transition-all bg-white w-60 px-1 divide-y right-0">
                <li
                  className="py-2 pl-1 text-[13px] font-medium hover:text-primary hover:pl-2 cursor-pointer transition-all"
                  onClick={() => navigate("/myreservations")}
                >
                  Reservasyonlarım
                </li>
                <li
                  className="py-2 pl-1 text-[13px] font-medium hover:text-primary hover:pl-2 cursor-pointer transition-all flex items-center gap-2"
                  onClick={logout}
                >
                  <p>Üye Çıkışı</p>
                  <RxExit />
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* md navbar */}

        <div className="relative flex items-center gap-4 md:hidden">
          {!firstName ? (
            <>
              <div
                className={`h-20 text-white flex items-center gap-2 justify-center px-3 transition-all cursor-pointer hover:text-red-600 shadow font-medium text-sm hover:bg-white ${
                  clickSign ? "bg-white !text-red-700" : ""
                } `}
                onClick={handleClick}
              >
                Üye Girişi
                <FiLogIn
                  size={20}
                  className={`pointer-events-none ${
                    clickSign ? "bg-white text-red-600" : ""
                  } `}
                />
              </div>
              <div
                ref={ref}
                className={`bg-white absolute top-20 right-11 w-80 ${
                  clickSign ? "" : "hidden"
                } `}
              >
                <AccountForm />
              </div>
            </>
          ) : (
            <div className=" relative h-full group  hover:bg-white transition-all">
              <div className="h-20 text-white flex items-center px-3 transition-all cursor-pointer  group-hover:text-red-600 shadow font-medium text-sm ">
                Hesabım
              </div>

              <ul className="absolute hidden  group-hover:block transition-all bg-white w-60 px-1 divide-y right-0 border-2 ">
                <li
                  className="py-2 pl-1 text-[13px] font-medium hover:text-primary hover:pl-2 cursor-pointer transition-all"
                  onClick={() => navigate("/myreservations")}
                >
                  Reservasyonlarım
                </li>
                <li
                  className="py-2 pl-1 text-[13px]  font-medium hover:text-primary hover:pl-2 cursor-pointer transition-all flex items-center gap-2"
                  onClick={logout}
                >
                  <p>Üye Çıkışı</p>
                  <RxExit />
                </li>
              </ul>
            </div>
          )}
          <FiMenu
            className="cursor-pointer text-white"
            size={28}
            onClick={() => setOpen(!open)}
          />
        </div>

        <div
          className={`absolute top-20 w-1/2 min-w-[20rem] bg-black text-white transition-all duration-1000 pt-2 md:hidden ${
            open ? "left-0" : "-left-[100%]"
          }`}
        >
          {navList.map((item, index) => (
            <div>
              <div
                className="flex justify-between items-center cursor-pointer border-b py-4 px-4 group"
                onClick={() => handleMobileMenuClick(index)}
              >
                <p className="group-hover:text-secondary transition-all">
                  {" "}
                  {item.li}
                </p>
                {item.subLi.length > 0 && (
                  <IoIosArrowDown
                    className={`${
                      indexList === index ? "rotate-180" : ""
                    } transition`}
                  />
                )}
              </div>
              <ul className="bg-white text-black">
                {item.subLi.map((sub) => (
                  <li
                    className={` ${
                      indexList === index ? "block" : "hidden"
                    } transition-all border-b py-4 px-2 text-sm cursor-pointer hover:text-secondary hover:pl-3 font-medium`}
                  >
                    {sub}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
