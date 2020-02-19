class Store {
  init({ container }) {
    // map container
    this.container = container;
    // this.mapPosi = container.container.getBoundingClientRect();
    this.setMapPosi();
    window.addEventListener('scroll', () => {
      this.setMapPosi();
    });
  }

  setMapPosi() {
    this.mapPosi = this.container.getBoundingClientRect();
  }
}

export default new Store();
