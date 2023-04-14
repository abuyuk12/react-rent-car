import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
} from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import { clickSignButton } from "../features/rentSlice";
import { toastError, toastInfo, toastSuccess } from "../helper/toastify";

const useAuthCalls = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const BASE_URL = "https://kamil01.pythonanywhere.com/";

  const register = async (registerInfo) => {
    try {
      dispatch(fetchStart());
      const { data } = await axios.post(
        `${BASE_URL}users/register/`,
        registerInfo
      );
      dispatch(registerSuccess(data));
      toastSuccess("Başarıyla Kayıt Olundu.");
      console.log(data);
      navigate("/");
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastError("Hata Oluştu!");
    }
  };

  const login = async (loginInfo) => {
    try {
      dispatch(fetchStart());
      const { data } = await axios.post(
        `${BASE_URL}users/auth/login/`,
        loginInfo
      );
      dispatch(loginSuccess(data));
      dispatch(clickSignButton());
      toastSuccess("Giriş Yapıldı.");
      console.log(data);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastError("Hatalı Giriş!");
    }
  };
  const logout = async () => {
    try {
      dispatch(fetchStart());
      const { data } = await axios.post(`${BASE_URL}users/auth/logout/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      dispatch(logoutSuccess());
      toastInfo("Çıkış Yapıldı.");
      console.log(data);
      navigate("/");
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastError("Hata Oluştu.");
    }
  };

  return { register, login, logout };
};

export default useAuthCalls;
