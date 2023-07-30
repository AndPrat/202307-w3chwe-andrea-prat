import AppComponent from "./components/AppComponent/AppComponent.js";

const appContainer = document.querySelector(".appContainer")!;
const container = new AppComponent(appContainer);

container.render();
