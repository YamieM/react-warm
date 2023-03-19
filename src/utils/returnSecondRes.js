import declOfNum from "../utils/declOfNum";

const returnSecondRes = (firstDate, secondDate) => {
  return `Между ${new Date(firstDate).toLocaleString("ko-KR", {
    dateStyle: "long",
  })} и ${new Date(secondDate).toLocaleString("en-US", {
    dateStyle: "long",
  })} разница  ${declOfNum(
    Date.parse(new Date(firstDate)) / 1000 / 60 / 60 / 24 -
      Date.parse(new Date(secondDate)) / 1000 / 60 / 60 / 24,
    ["День", "Дня", "Дней"]
  )}`;
};

export default returnSecondRes;
