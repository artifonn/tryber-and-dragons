import Energy from '../Energy';

export default interface Fighter {
  defense: number;
  lifePoints: number;
  strength: number;
  energy?: Energy;
  attack(enemy: Fighter): void;
  special(enemy?: Fighter): void;
  receiveDamage(amount: number): void;
  levelUp():void;
}