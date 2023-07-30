import PokemonListItemComponent from "../../PokemonListItemComponent/PokemonListItemComponent.js";
import urlPokeApi from "../../globals.js";
import { type PokemonData } from "../../type.js";
import Component from "../Component/Component.js";

class AppComponent extends Component {
  private pokemonList: PokemonData[] = [];

  constructor(parentElement: Element) {
    super(parentElement, "div", "container");

    (async () => {
      const response = await fetch(urlPokeApi);
      const { results: pokemonList } = (await response.json()) as {
        results: PokemonData[];
      };

      this.pokemonList = pokemonList;
      this.renderPokemonList();
    })();
  }

  render() {
    this.element.innerHTML = `
    <header>
      <h1>Pokédex</h1>
    </header>
    <main>
      <section>
        <h2></h2>
        <ul class="pokemon-list"></ul>
      </section>
    </main>
    `;
  }

  private renderPokemonList(): void {
    const pokemonItemsList = document.querySelector(".pokemon-list")!;
    this.pokemonList.forEach((pokemon) => {
      const pokemonItemList = document.createElement("li");
      new PokemonListItemComponent(pokemonItemList, pokemon).render();
      pokemonItemsList.append(pokemonItemList);
    });
  }
}

export default AppComponent;
