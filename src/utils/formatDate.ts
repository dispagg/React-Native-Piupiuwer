const formatDate = (dateStr: string | Date) => {
  const date = new Date(dateStr);
  return `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()} ${date.getHours()}h${date.getMinutes()}`;
};

export default formatDate;
