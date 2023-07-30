import Component from "../components/Component/Component.js";
import { type PokemonAccesList } from "../type.js";

class PokemonCardComponent extends Component {
  constructor(
    parentElement: Element,
    private readonly pokemon: PokemonAccesList
  ) {
    super(parentElement, "article", "pokemon-list-item");
  }

  render() {
    this.element.innerHTML = `
    <a href="${this.pokemon.url}" title="${this.pokemon.name}">
      <h2 class="pokemon__name">${this.pokemon.name}</h2>
    </a>
    `;
  }
}

export default PokemonCardComponent;
