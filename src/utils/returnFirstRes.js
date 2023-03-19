const returnFirstState = (firstDate, secondDate) => {
  return `${new Date(firstDate).toLocaleString("ru", {
    dateStyle: "short",
  })} было позже, чем ${new Date(secondDate).toLocaleString("en-US", {
    dateStyle: "long",
  })}`;
};
const returnSecondState = (firstDate, secondDate) => {
  return `${new Date(firstDate).toLocaleString("de-DE", {
    dateStyle: "short",
  })} было раньше, чем ${new Date(secondDate).toLocaleString("en-US", {
    dateStyle: "long",
  })}`;
};
export  { returnFirstState, returnSecondState };
