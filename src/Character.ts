import Race, { Elf } from './Races';
import Archetype, { Mage } from './Archetypes';
import Fighter from './Fighter';
import Energy from './Energy';
import getRandomInt from './utils';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this._archetype = new Mage(name);
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._energy = {
      amount: getRandomInt(1, 10),
      type_: this._archetype.energyType,
    };
  }

  public get race(): Race {
    return this._race;
  }

  public get archetype(): Archetype {
    return this._archetype;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  public get defense(): number {
    return this._defense;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  public get energy(): Energy {
    const obj: Energy = {
      amount: this._energy.amount,
      type_: this._energy.type_,
    };
    return obj;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;

    if (damage > 0) {
      this._lifePoints -= damage;
    }

    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }

    return this._lifePoints;
  }

  attack(enemy:Fighter) {
    return enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy = { amount: 10, type_: this._archetype.energyType };

    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this.race.maxLifePoints;
    }
    this._lifePoints = this._maxLifePoints;
  }

  special(enemy: Fighter) {
    return this._lifePoints - enemy.defense;
  }
}

export default Character;