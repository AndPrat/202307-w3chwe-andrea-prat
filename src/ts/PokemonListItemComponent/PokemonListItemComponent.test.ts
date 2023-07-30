import { type PokemonAccesList } from "../type.js";
import PokemonListItemComponent from "./PokemonListItemComponent.js";

describe("Given a PokemonListItemComponent component", () => {
  describe("When it receives a pokemnon named 'bulbasur'", () => {
    test("Then it should show 'bulbasur' inside a heading", () => {
      const container = document.createElement("div");
      const bulbasur: PokemonAccesList = {
        name: "bulbasur",
        url: "https://pokeapi.co/api/v2/pokemon/1",
      };

      const pokemonListItem = new PokemonListItemComponent(container, bulbasur);
      pokemonListItem.render();

      const headingElement = container.querySelector("h2")!;

      expect(headingElement.textContent).toBe(bulbasur.name);
    });
  });
});
