export const dateFormat = (date) => {
  const [mm, dd, yyyy] = new Date(date).toLocaleDateString().split("/");
  return [format(dd), format(mm), yyyy].join('-');
};

const format = (x) => (x < 10 ? "0" + x : x);
