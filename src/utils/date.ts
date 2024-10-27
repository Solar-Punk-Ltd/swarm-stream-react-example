import { padTo2Digits } from './common';
import { HOUR, MINUTE, SECOND } from './constants';

export function convertMillisecondsToTime(milliseconds: number) {
  const hours = Math.floor(milliseconds / HOUR);
  const minutes = Math.floor((milliseconds - hours * HOUR) / MINUTE);
  const seconds = Math.floor((milliseconds - hours * HOUR - minutes * MINUTE) / SECOND);

  return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;
}
