function formatCoords(lon, lat) {
  const ew = lon > 0 ? 'E' : 'W';
  const ns = lat > 0 ? 'N' : 'S';
  return `${ns} ${Math.abs(lat).toFixed(4)}, ${ew} ${Math.abs(lon).toFixed(4)}`;
}

export default formatCoords;
