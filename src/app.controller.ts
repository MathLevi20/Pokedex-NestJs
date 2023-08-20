import { Controller, Get, Param } from '@nestjs/common';

@Controller('pokemon')
export class PokemonController {
  private readonly pokemonData = [
    {
      number: 1,
      name: 'Bulbasaur',
      type: 'Grass/Poison',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
      stats: {
        hp: 45,
        attack: 49,
        defense: 49,
        specialAttack: 65,
        specialDefense: 65,
        speed: 45,
      },
      abilities: ['Overgrow', 'Chlorophyll'],
      story:
        'Bulbasaur is a small, quadruped Pokémon that has blue-green skin with darker blue-green spots. It has red eyes with white pupils and pointed, ear-like structures on top of its head. Its most notable feature is the plant bulb on its back, which grows into a large plant as it evolves. Bulbasaur relies on photosynthesis to grow and gain strength.',
    },
    {
      number: 2,
      name: 'Ivysaur',
      type: 'Grass/Poison',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',
      stats: {
        hp: 60,
        attack: 62,
        defense: 63,
        specialAttack: 80,
        specialDefense: 80,
        speed: 60,
      },
      abilities: ['Overgrow', 'Chlorophyll'],
      story:
        'Ivysaur is the evolved form of Bulbasaur. It has a larger bulb on its back that supports its growing plant. Ivysaur is more independent and capable of moving quickly. It can shoot seeds and vines from its bulb to attack opponents. As Ivysaur continues to evolve, its plant grows into a large and powerful flower.',
    },
    {
      number: 3,
      name: 'Venusaur',
      type: 'Grass/Poison',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png',
      stats: {
        hp: 80,
        attack: 82,
        defense: 83,
        specialAttack: 100,
        specialDefense: 100,
        speed: 80,
      },
      abilities: ['Overgrow', 'Chlorophyll'],
      story:
        'Venusaur is the final form of the Bulbasaur evolutionary line. Its flower has fully bloomed, and it gains the ability to release an intoxicating scent to draw in its prey. Despite its size, Venusaur is known for its gentle nature and strong sense of loyalty. Its vines and flower petals can be used to unleash powerful attacks and defensive moves.',
    },
    {
      number: 4,
      name: 'Charmander',
      type: 'Fire',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
      stats: {
        hp: 39,
        attack: 52,
        defense: 43,
        specialAttack: 60,
        specialDefense: 50,
        speed: 65,
      },
      abilities: ['Blaze', 'Solar Power'],
      story:
        "Charmander is a small, bipedal lizard-like Pokémon. It is known for its flame at the end of its tail, which burns brightly when it's healthy. Charmander is a Fire-type Pokémon and evolves into Charmeleon and then into Charizard.",
    },
    {
      number: 5,
      name: 'Charmeleon',
      type: 'Fire',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png',
      stats: {
        hp: 58,
        attack: 64,
        defense: 58,
        specialAttack: 80,
        specialDefense: 65,
        speed: 80,
      },
      abilities: ['Blaze', 'Solar Power'],
      story:
        "Charmeleon is the evolved form of Charmander. It is more aggressive and independent than its pre-evolution. Charmeleon's fiery tail indicates its mood, with a fiery blaze meaning it's angry. This Fire-type Pokémon evolves into Charizard.",
    },
    {
      number: 6,
      name: 'Charizard',
      type: 'Fire/Flying',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
      stats: {
        hp: 78,
        attack: 84,
        defense: 78,
        specialAttack: 109,
        specialDefense: 85,
        speed: 100,
      },
      abilities: ['Blaze', 'Solar Power'],
      story:
        "Charizard is the final form of the Charmander evolutionary line. It becomes even more powerful when it Mega Evolves. Charizard can breathe fire that's hot enough to melt boulders. It is known for its pride and strength.",
    },
    {
      number: 7,
      name: 'Squirtle',
      type: 'Water',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
      stats: {
        hp: 44,
        attack: 48,
        defense: 65,
        specialAttack: 50,
        specialDefense: 64,
        speed: 43,
      },
      abilities: ['Torrent', 'Rain Dish'],
      story:
        "Squirtle is a small, turtle-like Pokémon. It is a Water-type Pokémon and often carries water in its shell to use for defense. Squirtle's shell is not just for protection; it assists in swimming and crushing tough berries as well.",
    },
    {
      number: 8,
      name: 'Wartortle',
      type: 'Water',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png',
      stats: {
        hp: 59,
        attack: 63,
        defense: 80,
        specialAttack: 65,
        specialDefense: 80,
        speed: 58,
      },
      abilities: ['Torrent', 'Rain Dish'],
      story:
        "Wartortle is the evolved form of Squirtle. It is larger and more powerful, and it has the ability to swim faster than its pre-evolution. Wartortle's tail furrows as it evolves, resembling a long, wavy tail.",
    },
    {
      number: 9,
      name: 'Blastoise',
      type: 'Water',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png',
      stats: {
        hp: 79,
        attack: 83,
        defense: 100,
        specialAttack: 85,
        specialDefense: 105,
        speed: 78,
      },
      abilities: ['Torrent', 'Rain Dish'],
      story:
        'Blastoise is the final form of the Squirtle evolutionary line. It has immensely powerful water cannons on its shell, capable of shooting water with enough force to punch holes through thick steel. Blastoise can Mega Evolve into Mega Blastoise for even greater power.',
    },
    {
      number: 10,
      name: 'Caterpie',
      type: 'Bug',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png',
      stats: {
        hp: 45,
        attack: 30,
        defense: 35,
        specialAttack: 20,
        specialDefense: 20,
        speed: 45,
      },
      abilities: ['Shield Dust', 'Run Away'],
      story:
        'Caterpie is a small, green caterpillar-like Pokémon. It is known for its voracious appetite and ability to eat leaves larger than its size. Caterpie uses its yellow antenna-like appendages to release a stench that deters predators.',
    },
    {
      number: 11,
      name: 'Metapod',
      type: 'Bug',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png',
      stats: {
        hp: 50,
        attack: 20,
        defense: 55,
        specialAttack: 25,
        specialDefense: 25,
        speed: 30,
      },
      abilities: ['Shed Skin'],
      story:
        "Metapod is the evolved form of Caterpie. Its main purpose is to protect itself as it undergoes metamorphosis. Metapod's hardening shell makes it almost completely immobile and helps shield it from predators. It evolves into Butterfree.",
    },
    {
      number: 12,
      name: 'Butterfree',
      type: 'Bug/Flying',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png',
      stats: {
        hp: 60,
        attack: 45,
        defense: 50,
        specialAttack: 90,
        specialDefense: 80,
        speed: 70,
      },
      abilities: ['Compound Eyes', 'Tinted Lens'],
      story:
        "Butterfree is the final form of the Caterpie evolutionary line. Its wings are colorful and covered in fine scales that release a powdery substance when shaken, making it look like it's scattering pollen. Butterfree is known for its graceful flight and gentle nature.",
    },
    {
      number: 13,
      name: 'Weedle',
      type: 'Bug/Poison',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png',
      stats: {
        hp: 40,
        attack: 35,
        defense: 30,
        specialAttack: 20,
        specialDefense: 20,
        speed: 50,
      },
      abilities: ['Shield Dust', 'Run Away'],
      story:
        "Weedle is a small, larval Pokémon that has a sharp stinger on its head. It uses the stinger to inject poison into its prey and defend itself. Weedle's body is covered in tiny hairs that are toxic, causing irritation to those who touch it.",
    },
    {
      number: 14,
      name: 'Kakuna',
      type: 'Bug/Poison',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png',
      stats: {
        hp: 45,
        attack: 25,
        defense: 50,
        specialAttack: 25,
        specialDefense: 25,
        speed: 35,
      },
      abilities: ['Shed Skin'],
      story:
        "Kakuna is the evolved form of Weedle. It is a pupal stage where it remains nearly motionless while it undergoes metamorphosis. Kakuna's hard shell provides protection from predators, and it can still use its poisonous stinger to fend off threats.",
    },
    {
      number: 15,
      name: 'Beedrill',
      type: 'Bug/Poison',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png',
      stats: {
        hp: 65,
        attack: 90,
        defense: 40,
        specialAttack: 45,
        specialDefense: 80,
        speed: 75,
      },
      abilities: ['Swarm', 'Sniper'],
      story:
        'Beedrill is the final form of the Weedle evolutionary line. Its two large, drill-like arms are equipped with sharp stingers that inject venom. Beedrill is known for its aggressiveness and territorial behavior, and it can be quite fierce when defending its hive.',
    },
    {
      number: 16,
      name: 'Pidgey',
      type: 'Normal/Flying',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png',
      stats: {
        hp: 40,
        attack: 45,
        defense: 40,
        specialAttack: 35,
        specialDefense: 35,
        speed: 56,
      },
      abilities: ['Keen Eye', 'Tangled Feet'],
      story:
        'Pidgey is a small, bird-like Pokémon that is known for its keen eyesight. It can spot predators from high in the sky and quickly take flight to escape danger. Pidgey evolves into Pidgeotto and then into Pidgeot.',
    },
    {
      number: 17,
      name: 'Pidgeotto',
      type: 'Normal/Flying',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png',
      stats: {
        hp: 63,
        attack: 60,
        defense: 55,
        specialAttack: 50,
        specialDefense: 50,
        speed: 71,
      },
      abilities: ['Keen Eye', 'Tangled Feet'],
      story:
        'Pidgeotto is the evolved form of Pidgey. It has larger wings and is more adept at flying. Pidgeotto is territorial and fiercely protective of its territory. It hunts for prey from high above, swooping down to catch its meals.',
    },
    {
      number: 18,
      name: 'Pidgeot',
      type: 'Normal/Flying',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png',
      stats: {
        hp: 83,
        attack: 80,
        defense: 75,
        specialAttack: 70,
        specialDefense: 70,
        speed: 101,
      },
      abilities: ['Keen Eye', 'Tangled Feet'],
      story:
        'Pidgeot is the final form of the Pidgey evolutionary line. It has an impressive wingspan and can fly at Mach 2 speeds. Pidgeot is known for its loyalty to its Trainer and its ability to cover vast distances in search of food.',
    },
    {
      number: 19,
      name: 'Rattata',
      type: 'Normal',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png',
      stats: {
        hp: 30,
        attack: 56,
        defense: 35,
        specialAttack: 25,
        specialDefense: 35,
        speed: 72,
      },
      abilities: ['Run Away', 'Guts'],
      story:
        "Rattata is a small, quadrupedal rodent-like Pokémon. It is known for its sharp fangs and constant need to gnaw on objects. Rattata's whiskers are highly sensitive and help it navigate in the dark.",
    },
    {
      number: 20,
      name: 'Raticate',
      type: 'Normal',
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png',
      stats: {
        hp: 55,
        attack: 81,
        defense: 60,
        specialAttack: 50,
        specialDefense: 70,
        speed: 97,
      },
      abilities: ['Run Away', 'Guts'],
      story:
        "Raticate is the evolved form of Rattata. It is larger and more aggressive than its pre-evolution. Raticate's sharp fangs are constantly growing, so it needs to gnaw on objects to keep them at a manageable length.",
    },
    // Continue adicionando mais Pokémon...
  ];

  @Get()
  getPokemonList(...args: []): any[] {
    return this.pokemonData.map((pokemon) => ({
      number: pokemon.number,
      name: pokemon.name,
      type: pokemon.type,
      image: pokemon.image,
      stats: pokemon.stats,
      abilities: pokemon.abilities,
    }));
  }

  @Get(':number')
  getPokemonDetails(@Param('number') number: string): any {
    console.log(typeof number);
    console.log(number);
    const pokemonNumber = parseInt(number, 10); // Parse the string to an integer
    console.log(typeof pokemonNumber);
    console.log(pokemonNumber);
    const pokemon = this.pokemonData.find((p) => p.number === pokemonNumber);
    if (!pokemon) {
      return { error: 'Pokémon not found' };
    }
    return pokemon;
  }
}
