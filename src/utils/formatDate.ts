export const getYear = (date: string) =>
  date ? new Date(date).getFullYear() : new Date().getFullYear();

export const reformatDate = (date: string) => {
  const [year, month, day] = date.split('-');
  return `${month}/${day}/${year}`;
};

export const durationFormat = (totalMinutes: number) => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours}h ${minutes}m`;
};
