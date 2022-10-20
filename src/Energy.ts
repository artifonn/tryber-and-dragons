export type EnergyType = 'stamina' | 'mana';

export default interface Energy {
  amount: number;
  type_: EnergyType;
}