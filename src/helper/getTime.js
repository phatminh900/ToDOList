const getTime = () => {
  return {
    day: new Date().getDate(),
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  };
};
export default getTime;
