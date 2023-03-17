import { useState } from "react";
import "./style.css";
import declOfNum from "../../utils/declOfNum";

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

  //ЕСЛИ ЗАРАНЕЕ ЗАСУНУТЬ ДАТЫ В ПЕРЕМЕННЫЕ,
  // ТО БУДЕТ КОРОЧЕ И МЕНЕЕ ЗАПУТАННО,
  // НО "НУЖНО ИЗБЕГАТЬ ПРИМИТИВОВ(?)"

  const getFirstRes = () => {
    if (Date.parse(dateCurr.firstDate) > Date.parse(dateCurr.secondDate)) {
      setDateCurr((previousState) => {
        return {
          ...previousState,
          resFirst: `${new Date(dateCurr.firstDate).toLocaleString("ru", {
            dateStyle: "short",
          })} было позже, чем ${new Date(dateCurr.secondDate).toLocaleString(
            "en-US",
            {
              dateStyle: "long",
            }
          )}`,
        };
      });
    } else if (
      Date.parse(dateCurr.firstDate) < Date.parse(dateCurr.secondDate)
    ) {
      setDateCurr((previousState) => {
        return {
          ...previousState,
          resFirst: `${new Date(dateCurr.firstDate).toLocaleString("de-DE", {
            dateStyle: "short",
          })} было раньше, чем ${new Date(dateCurr.secondDate).toLocaleString(
            "en-US",
            {
              dateStyle: "long",
            }
          )}`,
        };
      });
    } else {
      setDateCurr((previousState) => {
        return { ...previousState, resFirst: "Даты равны" };
      });
    }
  };

  const getSecondRes = () => {
    setDateCurr((previousState) => {
      return {
        ...previousState,
        resSecond: `Между ${new Date(dateCurr.firstDate).toLocaleString(
          "ko-KR",
          {
            dateStyle: "long",
          }
        )} и ${new Date(dateCurr.secondDate).toLocaleString("en-US", {
          dateStyle: "long",
        })} разница  ${declOfNum(
          Date.parse(new Date(dateCurr.firstDate)) / 1000 / 60 / 60 / 24 -
            Date.parse(new Date(dateCurr.secondDate)) / 1000 / 60 / 60 / 24,
          ["День", "Дня", "Дней"]
        )}`,
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
      <button className="dates-button" onClick={getFirstRes}>
        Сравнить даты
      </button>
      <button className="dates-button" onClick={getSecondRes}>
        Разница в днях
      </button>
      <h1 className="dates-res">{dateCurr.resFirst}</h1>
      <h1 className="dates-res">{dateCurr.resSecond}</h1>
    </div>
  );
};

export default Dates;
