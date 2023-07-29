export interface PokemonListData {
  listData: PokemonData[];
}

export interface PokemonData {
  id: number;
  name: string;
  type: string;
  image: string;
  url: string;
}
