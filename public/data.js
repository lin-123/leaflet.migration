function initData() {
  const center = {
    lng: 106,
    lat: 30
  };
  window.data = new Array(100).fill().map((i, idx) => {
    const latOffset = (Math.random() - 0.5) * 60;
    const lngOffset = (Math.random() - 0.5) * 50;
    return {
      color: '#1EBCA1',
      from: [center.lng + lngOffset, center.lat + latOffset],
      to: [center.lng + latOffset, center.lat],
      labels: [`from-${idx}`, 'to'],
      value: 10 + 10 * (idx % 10) * Math.random()
    };
  });
}
initData();
