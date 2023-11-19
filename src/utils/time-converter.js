export const timeConverter = (time) => {
  const onlyTime = Number(time.split(" ")[1].split(":")[0]);
  if (onlyTime === 0) return "12 AM";
  if (onlyTime === 12) return "12 PM";
  return onlyTime > 12 ? `${onlyTime - 12} PM` : `${onlyTime} AM`;
};
