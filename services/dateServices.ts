const now = new Date();
const formatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  year: 'numeric'
});
export const currentMonth = formatter.format(now); 