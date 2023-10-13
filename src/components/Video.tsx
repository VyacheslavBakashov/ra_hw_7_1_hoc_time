import { FC } from 'react';

import { TVideo } from '../types';
import { DateTimeComponent } from './DateTimeComponent';

type TProps = TVideo;

export const Video: FC<TProps> = ({ url, date }) => {
  return (
    <div className="video">
      <iframe src={url} title='video' allow="autoplay; encrypted-media" allowFullScreen></iframe>
      <DateTimeComponent date={date} />
    </div>
  );
};