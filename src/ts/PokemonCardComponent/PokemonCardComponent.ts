import Component from "../components/Component/Component.js";
import { type PokemonData } from "../type.js";

class PokemonCardComponent extends Component {
  constructor(parentElement: Element, private readonly pokemons: PokemonData) {
    super(parentElement, "article", "card");
  }

  render() {
    this.element.innerHTML = `
    <img class="pokemon__poster"
                src=""
                alt="" />
    <h2 class="pokemon__name"></h2>
    `;
  }
}

export default PokemonCardComponent;
