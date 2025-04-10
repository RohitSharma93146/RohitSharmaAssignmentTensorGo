import moment from "moment";

function getForwardDate(numDaysForward) {
  const today = moment();
  const forwardDate = today.clone().add(numDaysForward, 'days');
  
  while (forwardDate.diff(today, 'months', true) > 1) {
    forwardDate.subtract(1, 'months');
  }

  return forwardDate.format('DD-MM-YYYY');
}

export default getForwardDate