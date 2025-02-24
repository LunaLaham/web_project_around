class Section {
  constructor({ items, renderer }, containerSelector) {
    this.items = items;
    this.renderer = renderer;
    this.container = document.querySelector(containerSelector);
  }

  renderItems() {
    this.items.forEach((item) => {
      this.renderer(item);
    });
  }

  item(element) {
    this.container.prepend(element);
  }
}

export default Section;
