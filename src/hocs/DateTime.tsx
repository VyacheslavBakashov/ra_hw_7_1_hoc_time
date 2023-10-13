import dayjs from 'dayjs';
import { ComponentType, FC } from 'react';

type TProps = {
  date: string;
};

export function DateTime<T>(Component: ComponentType<T & TProps>): FC<T & TProps> {
  return (props) => {
    const formatDate = (date: string) => {
      const deltaMins = (Date.now() / 1000 - dayjs(date).unix()) / 60;

      if (deltaMins < 60) {
        return `${Math.floor(deltaMins)} минут назад`;
      }

      if (deltaMins < 1440) {
        return `${Math.floor(deltaMins / 60)} часов назад`;
      }

      return `${Math.floor(deltaMins / 1440)} дней назад`;
    };

    const date = formatDate(props.date);

    return <Component {...props} date={date} />;
  };
}