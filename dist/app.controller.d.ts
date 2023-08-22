export declare class PokemonController {
    private readonly pokemonData;
    getPokemonList(): {
        result: {
            number: number;
            name: string;
            type: string;
            image: string;
            stats: Record<string, number>;
            abilities: string[];
        }[];
    };
    getPokemonDetails(number: string): any;
}
