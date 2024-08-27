/* Chapitre 2 : Les Composants */
export class Pokemon {
    id: number;
    hp: number;
    cp: number;
    name: string;
    picture: string;
    types: Array<string>;
    created: Date;

    constructor(
      name = "entrer un nom...",
      hp = 0,
      cp = 0,
      picture = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/xxx.png',
      types = ['Normal'],
      created = new Date(),
    ){
      this.name = name;
      this.hp = hp;
      this.cp = cp;
      this.picture = picture ;
      this.types = types;
      this.created = created;
    }
  }