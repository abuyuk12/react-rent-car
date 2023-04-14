import { useNavigate } from "react-router-dom";
import AccountForm from "./AccountForm";
import { FiLogIn } from "react-icons/fi";
import { RxExit } from "react-icons/rx";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clickSignButton } from "../features/rentSlice";
import useAuthCalls from "../hooks/useAuthCalls";

const CarsNav = () => {
  const navigate = useNavigate();
  const ref = useRef();
  const dispatch = useDispatch();
  const { clickSign } = useSelector((state) => state.rent);
  const { firstName } = useSelector((state) => state.auth);
  const { logout } = useAuthCalls();

  return (
    <nav className="sticky top-0 h-20 bg-primary flex justify-between items-center px-8 z-10">
      <h1
        className="text-5xl text-white font-bold cursor-pointer"
        onClick={() => navigate("/")}
      >
        EUR
      </h1>
      {!firstName ? (
        <div className="relative h-full">
          <div
            className={`h-full text-white flex items-center gap-2 justify-center px-3 transition-all cursor-pointer hover:text-red-600 shadow font-medium text-sm hover:bg-white ${
              clickSign ? "bg-white !text-red-700" : ""
            } `}
            onClick={() => dispatch(clickSignButton())}
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
            className={`bg-gray-100 absolute right-0 w-80 ${
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

          <ul className="absolute hidden  group-hover:block transition-all bg-white w-60 px-1 divide-y right-0 border-2">
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
    </nav>
  );
};

export default CarsNav;
