const getDateComparison = (firstDate, secondDate, text) => {
  return `${new Date(firstDate).toLocaleString("ru", {
    dateStyle: "short",
  })} было ${text}, чем ${new Date(secondDate).toLocaleString("en-US", {
    dateStyle: "long",
  })}`;
};

export default getDateComparison;
