import DatePicker from "react-datepicker";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDate } from "../features/rentSlice";

function DatePick() {
  const { startDate, endDate, startTime, endTime } = useSelector(
    (state) => state.rent
  );
  const dispatch = useDispatch();
  // const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(new Date());

  // console.log(startDate, endDate);
  const sd = new Date(startDate);
  const ed = new Date(endDate);
  const st = startTime ? new Date(startTime) : "";
  const et = endTime ? new Date(endTime) : "";

  const handleDate = (data, url) => {
    dispatch(setDate({ data, url }));
  };

  return (
    <div className="w-64  ">
      <div className="flex gap-1 mb-3">
        <p className="text-xs flex items-center border-l-2 border-primary px-2">
          Alış Tarihi
        </p>
        <DatePicker
          selected={sd}
          onChange={(date) => handleDate(date, "startDate")}
          selectsStart
          minDate={new Date()}
          startDate={sd}
          endDate={ed}
          dateFormat="dd MMMM"
          monthsShown={2}
          showPopperArrow={false}
          className="px-2 h-12 text-xl cursor-pointer w-28 bg-modalBlack text-white font-semibold text-center"
        />

        <DatePicker
          selected={st}
          onChange={(date) => handleDate(date, "startTime")}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={60}
          dateFormat="HH:mm"
          timeFormat="HH:mm"
          placeholderText="09:00"
          className="pick px-2 h-12 text-2xl cursor-pointer w-20 bg-modalBlack text-white font-semibold text-center"
        />
      </div>

      <div className="flex gap-1 ">
        <p className="text-xs flex items-center border-l-2 border-primary px-2">
          İade Tarihi
        </p>
        <DatePicker
          selected={ed}
          onChange={(date) => handleDate(date, "endDate")}
          selectsEnd
          startDate={sd}
          endDate={ed}
          minDate={sd}
          showPopperArrow={false}
          monthsShown={2}
          dateFormat="dd MMMM"
          wrapperClassName="datePicker"
          className=" px-2 h-12 text-xl cursor-pointer w-28 bg-modalBlack text-white font-semibold text-center"
        />

        <DatePicker
          selected={et}
          onChange={(date) => handleDate(date, "endTime")}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={60}
          timeCaption="Time"
          dateFormat="HH:mm"
          timeFormat="HH:mm"
          placeholderText="09:00"
          className="px-2 h-12 text-2xl cursor-pointer w-20 bg-modalBlack text-white font-semibold text-center "
        />
      </div>
    </div>
  );
}

export default DatePick;
