const getSleepHours = (day) => {
  if (day === 'monday') {
    return 8;
  } else if (day === 'tuesday') {
    return 5;
  } else if (day === 'wednesday'){
    return 8;
  } else if (day === 'thursday'){
    return 7;
  } else if (day === 'friday') {
    return 9;
  } else if (day === 'saturday') {
      return 6;
    } else if (day === 'sunday') {
      return 8;
    }
  }
const getActualSleepHours = () => {
const sum =  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  return sum;
}
const getIdealSleepHours = () => {
  const idealHours = 7
  return idealHours * 7;
}
const calculateSleepDebt = () => {
 const actualSleepHours = getActualSleepHours();
 const idealSleepHours = getIdealSleepHours();
}
