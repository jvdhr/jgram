import moment from "moment-jalaali";
export default (
  events,
  { text, city, date, sortBy, category, startDate, endDate }
) => {
  return (
    events
      .filter(event => {
        const createdAtMoment = event.createdAt;
        const startDateMatch = startDate
          ? startDate.isSameOrBefore(createdAtMoment, "day")
          : true;
        const endDateMatch = endDate
          ? endDate.isSameOrAfter(createdAtMoment, "day")
          : true;
        const textMatch = event.title
          .toLowerCase()
          .includes(text.toLowerCase());
        const cityMatch = event.location.city
          .toLowerCase()
          .includes(city.toLowerCase());
        const categoryMatch = event.category
          .toLowerCase()
          .includes(category.toLowerCase());
        const dateMatch = moment(date)
          ? moment(date).isSameOrBefore(moment(event.dateTime[0]), "day")
          : true;

        return (
          // startDateMatch &&
          // endDateMatch &&
          textMatch && cityMatch && categoryMatch && dateMatch
        );
      })
      // eslint-disable-next-line
      .sort((a, b) => {
        if (sortBy === "date") {
          return moment(a.dateTime[0]) > moment(b.dateTime[0]) ? 1 : -1;
        } else if (sortBy === "amount") {
          return a.amount < b.amount ? 1 : -1;
        }
      })
  );
};
