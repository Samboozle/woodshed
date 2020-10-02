import { minuetOne } from '../passages';

export default (selectedSong = minuetOne, { type, payload }) => {
  switch (type) {
    case "NOODLE_SELECTED":
      return payload;
    default:
      return selectedSong;
  }
}