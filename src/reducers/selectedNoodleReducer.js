export default (selectedSong = null, { type, payload }) => {
  switch (type) {
    case "NOODLE_SELECTED":
      return payload;
    default:
      return selectedSong;
  }
}
