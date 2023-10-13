import { FC } from 'react';
import { DateTime } from '../hocs/DateTime';

type TProps = {
  date: string;
};

export let DateTimeComponent: FC<TProps> = ({ date }) => {
  return <p className="date">{date}</p>;
};

DateTimeComponent = DateTime(DateTimeComponent);
