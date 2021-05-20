import Vue from 'vue';

Vue.filter('formatDate', (date) => {
  if (!date) return '';
  const dateToFormat = new Date(date);
  const months = [
    'January', 'Februbary', 'March', 'April', 'June', 'July', 'August', 'September', 'October', 'November', 'December',
  ];
  const day = dateToFormat.getDate().toString();
  let suffix = '';
  switch (day.substr(-1)) {
    case '1':
      suffix = 'st';
      break;
    case '2':
      suffix = 'nd';
      break;
    case '3':
      suffix = 'rd';
      break;
    default:
      suffix = 'th';
      break;
  }
  return `${day + suffix} ${months[dateToFormat.getMonth()]} ${dateToFormat.getFullYear()}`;
});

Vue.filter('formatFullDate', (date) => {
  const dateToFormat = new Date(date);
  return new Intl.DateTimeFormat('en-gB', { dateStyle: 'full', timeStyle: 'medium' }).format(dateToFormat).toString();
});
Vue.filter('formatAmount', (amount) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
  });
  if (!amount || amount === 0) return 0;
  return formatter.format(amount).toString();
});
