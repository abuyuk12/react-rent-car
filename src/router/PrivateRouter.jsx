import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { clickSignButton } from "../features/rentSlice";
import { toastError } from "../helper/toastify";

const PrivateRouter = () => {
  const { firstName } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  firstName || dispatch(clickSignButton());

  return (
    <>
      {firstName ? <Outlet /> : <Navigate to="/" />}
      {!firstName && toastError("Lütfen Giriş Yapınız!")}
    </>
  );
};

export default PrivateRouter;
