import { useState } from "react";
import Navbar from "../components/Navbar";
import useAuthCalls from "../hooks/useAuthCalls";

const Register = () => {
  const { register } = useAuthCalls();

  const initialState = {
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    password2: "",
  };

  const [registerInfo, setRegisterInfo] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const username = registerInfo.first_name + registerInfo.last_name;
    setRegisterInfo((prev) => ({ ...prev, [name]: value, username }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(registerInfo);
  };

  return (
    <>
      <Navbar />
      <div className="register-container h-screen w-full flex justify-center items-center -mb-20 ">
        <form
          className="flex flex-col w-3/4  max-w-3xl md:gap-4 gap-2 px-10 py-3 md:py-8 shadow-2xl rounded-xl bg-gradient-to-b from-zinc-300 backdrop-blur-sm"
          action=""
          onSubmit={handleSubmit}
        >
          <h3 className="text-primary mb-4 font-semibold text-lg">
            Bireysel Üyelik Bilgileri
          </h3>
          <div className="flex md:gap-6 gap-2 md:flex-row flex-col ">
            <label
              className="flex flex-1 flex-col whitespace-nowrap text-sm font-semibold "
              htmlFor="name"
            >
              Adınız (Ehliyetinizde yer aldığı gibi) *
              <input
                id="name"
                className="border p-3 font-normal focus:border-1 focus:border-gray-800 rounded focus:bg-zinc-200"
                type="text"
                name="first_name"
                value={registerInfo.first_name}
                onChange={handleChange}
                required
              />
            </label>

            <label
              className="flex flex-1 flex-col whitespace-nowrap text-sm font-semibold "
              htmlFor="lastname"
            >
              Soyadınız (Ehliyetinizde yer aldığı gibi) *
              <input
                id="lastname"
                className="border p-3 font-normal focus:border-1 focus:border-gray-800 rounded focus:bg-zinc-200"
                type="text"
                name="last_name"
                value={registerInfo.last_name}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div className="flex md:gap-6 gap-2 md:flex-row flex-col">
            <label
              className="flex flex-1 flex-col text-sm font-semibold"
              htmlFor="mail"
            >
              E-Posta *
              <input
                id="mail"
                className="border p-3 font-normal focus:border-1 focus:border-gray-800 rounded focus:bg-zinc-200"
                type="email"
                name="email"
                value={registerInfo.email}
                onChange={handleChange}
                required
              />
            </label>

            <label
              className="flex flex-1 flex-col text-sm font-semibold"
              htmlFor="mobile"
            >
              Cep Telefonu *
              <input
                id="mobile"
                className="border p-3 font-normal focus:border-1 focus:border-gray-800 rounded focus:bg-zinc-200"
                type="tel"
                required
              />
            </label>
          </div>

          <div className="flex md:gap-6 gap-2 md:flex-row flex-col">
            <label
              className="flex flex-1 flex-col text-sm font-semibold"
              htmlFor="sifre"
            >
              Şifre *
              <input
                id="sifre"
                className="border p-3 font-normal focus:border-1 focus:border-gray-800 rounded focus:bg-zinc-200"
                type="password"
                name="password"
                value={registerInfo.password}
                onChange={handleChange}
                required
              />
            </label>

            <label
              className="flex flex-1 flex-col text-sm font-semibold"
              htmlFor="sifre2"
            >
              Şifre Tekrar *
              <input
                id="sifre2"
                className="border p-3 font-normal focus:border-1 focus:border-gray-800 rounded focus:bg-zinc-200"
                type="password"
                name="password2"
                value={registerInfo.password2}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <button
            className="bg-secondary text-white ml-0 mx-auto mt-3 py-3 px-6 rounded-full  font-semibold hover:bg-red-600 transition"
            type="submit"
          >
            <span className="mr-6">ÜYE OL</span> <span>{">"}</span>
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
