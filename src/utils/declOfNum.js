const declOfNum = (numb, text) => {
  numb = Math.abs(numb);
  const numb1 = numb % 10;
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
};
export default declOfNum;
