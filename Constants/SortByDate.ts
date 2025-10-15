import { format, isToday, isYesterday, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';
import { TransactionType } from './type';

export type GroupedSection = {
  title: string;
  data: TransactionType[];
};

export const groupDataByDate = (data: TransactionType[]): GroupedSection[] => {
  const sorted = data.sort((b, a) => new Date(b.date).getTime() - new Date(a.date).getTime()).reverse();

  const grouped: { [key: string]: TransactionType[] } = {};

  sorted.forEach((item) => {
    const itemDate = parseISO(item.date);
    let label = '';

    if (isToday(itemDate)) {
      label = 'Today';
    } else if (isYesterday(itemDate)) {
      label = 'Yesterday';
    } else {
      label = format(itemDate, 'dd MMMM yyyy', { locale: fr });
    }

    if (!grouped[label]) {
      grouped[label] = [];
    }

    grouped[label].push(item);
  });

  return Object.keys(grouped).map((title) => ({
    title,
    data: grouped[title],
  }));
};
