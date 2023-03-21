import { useState } from "react";
import "./style.css";
import getDateComparison from "../../utils/getDateComparison";
import getDifferenceOfDates from "../../utils/getDifferenceOfDates";

const Dates = () => {
  const [dateCurr, setDateCurr] = useState({
    firstDate: "1999-01-01",
    secondDate: "1999-01-01",
    resFirst: "",
    resSecond: "",
  });

  const onChangeFirstDate = (event) => {
    setDateCurr((previousState) => {
      return { ...previousState, firstDate: event.target.value };
    });
  };

  const onChangeSecondDate = (event) => {
    setDateCurr((previousState) => {
      return { ...previousState, secondDate: event.target.value };
    });
  };

  const setDateComparison = () => {
    if (Date.parse(dateCurr.firstDate) > Date.parse(dateCurr.secondDate)) {
      setDateCurr((previousState) => {
        return {
          ...previousState,
          resFirst: getDateComparison(
            dateCurr.firstDate,
            dateCurr.secondDate,
            "позже"
          ),
        };
      });
    } else if (
      Date.parse(dateCurr.firstDate) < Date.parse(dateCurr.secondDate)
    ) {
      setDateCurr((previousState) => {
        return {
          ...previousState,
          resFirst: getDateComparison(
            dateCurr.firstDate,
            dateCurr.secondDate,
            "раньше"
          ),
        };
      });
    } else {
      setDateCurr((previousState) => {
        return { ...previousState, resFirst: "Даты равны" };
      });
    }
  };

  const setDifferenceOfDates = () => {
    setDateCurr((previousState) => {
      return {
        ...previousState,
        resSecond: getDifferenceOfDates(dateCurr.firstDate, dateCurr.secondDate),
      };
    });
  };

  return (
    <div className="dates-container">
      <div>
        <h1 className="date-h1">Введите первую дату</h1>
        <input
          type="text"
          className="date-input"
          placeholder="1999-01-01"
          onChange={onChangeFirstDate}
        />
      </div>
      <div>
        <h1 className="date-h1">Введите вторую дату</h1>
        <input
          type="text"
          className="date-input"
          placeholder="1999-01-01"
          onChange={onChangeSecondDate}
        />
      </div>
      <button className="dates-button" onClick={setDateComparison}>
        Сравнить даты
      </button>
      <button className="dates-button" onClick={setDifferenceOfDates}>
        Разница в днях
      </button>
      <h1 className="dates-res">{dateCurr.resFirst}</h1>
      <h1 className="dates-res">{dateCurr.resSecond}</h1>
    </div>
  );
};

export default Dates;
