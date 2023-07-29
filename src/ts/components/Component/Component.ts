class Component {
  element: Element;

  constructor(
    protected parentElement: Element,
    protected tag: string,
    protected className = ""
  ) {
    this.element = document.createElement(tag);
    this.element.className = className;
  }
}

export default Component;
