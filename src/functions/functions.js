export const today = () => {
  const thisDate = new Date();
  const thisDay = thisDate.getDate();
  let thisMonth = Number(thisDate.getMonth()) + 1;
  thisMonth = thisMonth.toString().length < 2 ? 0 + thisMonth.toString() : thisMonth;
  const thisYear = thisDate.getFullYear();
  const result = `${thisDay}/${thisMonth}/${thisYear}`;
  return result;
};

export const getDateInWord = (month) => {
  let thisMonth = month;
  if (thisMonth === '01') {
    thisMonth = 'Janvier';
  }
  if (thisMonth === '02') {
    thisMonth = 'Février';
  }
  if (thisMonth === '03') {
    thisMonth = 'Mars';
  }
  if (thisMonth === '04') {
    thisMonth = 'Avril';
  }
  if (thisMonth === '05') {
    thisMonth = 'Mai';
  }
  if (thisMonth === '06') {
    thisMonth = 'Juin';
  }
  if (thisMonth === '07') {
    thisMonth = 'Juillet';
  }
  if (thisMonth === '08') {
    thisMonth = 'Août';
  }
  if (thisMonth === '09') {
    thisMonth = 'Septembre';
  }
  if (thisMonth === '10') {
    thisMonth = 'Octobre';
  }
  if (thisMonth === '11') {
    thisMonth = 'Novembre';
  }
  if (thisMonth === '12') {
    thisMonth = 'Décembre';
  }

  return thisMonth;
};

export const getMonthInNumber = (month) => {
  let thisMonth = month;
  if (thisMonth === 'Janvier') {
    thisMonth = '01';
  }
  if (thisMonth === 'Février') {
    thisMonth = '02';
  }
  if (thisMonth === 'Mars') {
    thisMonth = '03';
  }
  if (thisMonth === 'Avril') {
    thisMonth = '04';
  }
  if (thisMonth === 'Mai') {
    thisMonth = '05';
  }
  if (thisMonth === 'Juin') {
    thisMonth = '06';
  }
  if (thisMonth === 'Juillet') {
    thisMonth = '07';
  }
  if (thisMonth === 'Août') {
    thisMonth = '08';
  }
  if (thisMonth === 'Septembre') {
    thisMonth = '09';
  }
  if (thisMonth === 'Octobre') {
    thisMonth = '10';
  }
  if (thisMonth === 'Novembre') {
    thisMonth = '11';
  }
  if (thisMonth === 'Décembre') {
    thisMonth = '12';
  }

  return thisMonth;
};
