import { useCallback, useState } from "react";
import "./style.css";

const Dates = () => {
  const [firstDate, set1stDate] = useState("1999-01-01");
  const [secondDate, set2ndDate] = useState("1999");

  const onChange1stDate = (event) => {
    set1stDate(event.target.value);
  };

  const onChange2ndDate = (event) => {
    set2ndDate(event.target.value);
  };

  const [res1st, setRes1st] = useState("");
  const [res2nd, setRes2nd] = useState("");

  //ЕСЛИ ЗАРАНЕЕ ЗАСУНУТЬ ДАТЫ В ПЕРЕМЕННЫЕ,
  // ТО БУДЕТ КОРОЧЕ И МЕНЕЕ ЗАПУТАННО,
  // НО "НУЖНО ИЗБЕГАТЬ ПРИМИТИВОВ(?)"

  const get1stRes = () => {
    if (Date.parse(firstDate) > Date.parse(secondDate)) {
      setRes1st(
        `${new Date(firstDate).toLocaleString("ru", {
          dateStyle: "short",
        })} было позже, чем ${new Date(secondDate).toLocaleString("en-US", {
          dateStyle: "long",
        })}`
      );
    } else if (Date.parse(firstDate) < Date.parse(secondDate)) {
      setRes1st(
        `${new Date(firstDate).toLocaleString("de-DE", {
          dateStyle: "short",
        })} было раньше, чем ${new Date(secondDate).toLocaleString("en-US", {
          dateStyle: "long",
        })}`
      );
    } else {
      setRes1st("Даты равны");
    }
  };

  const get2ndRes = () => {
    function declOfNum(numb, text) {
      numb = Math.abs(numb) % 100;
      var numb1 = numb % 10;
      if (numb > 10 && numb < 20) {
        return `${numb} ${text[2]}`;
      }
      if (numb1 > 1 && numb1 < 5) {
        return `${numb} ${text[1]}`;
      }
      if (numb1 === 1) {
        return `${numb} ${text[0]}`;
      }
      return `${numb} ${text[2]}`;
    }
    setRes2nd(
      `Между ${new Date(firstDate).toLocaleString("ko-KR", {
        dateStyle: "long",
      })} и ${new Date(secondDate).toLocaleString("en-US", {
        dateStyle: "long",
      })}  ${declOfNum(
        Date.parse(new Date(firstDate)) / 1000 / 60 / 60 / 24 -
          Date.parse(new Date(secondDate)) / 1000 / 60 / 60 / 24,
        ["День", "Дня", "Дней"]
      )}`
    );
  };

  return (
    <div className="dates-container">
      <div>
        <h1 className="date-h1">Введите первую дату</h1>
        <input
          type="text"
          className="date-input"
          placeholder="1999-01-01"
          onChange={onChange1stDate}
        />
      </div>
      <div>
        <h1 className="date-h1">Введите вторую дату</h1>
        <input
          type="text"
          className="date-input"
          placeholder="1999-01-01"
          onChange={onChange2ndDate}
        />
      </div>
      <button className="dates-button" onClick={get1stRes}>
        Сравнить даты
      </button>
      <button className="dates-button" onClick={get2ndRes}>
        Разница в днях
      </button>
      <h1 className="dates-res">{res1st}</h1>
      <h1 className="dates-res">{res2nd}</h1>
    </div>
  );
};

export default Dates;
