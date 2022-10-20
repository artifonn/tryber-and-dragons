import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static _createdArchetypeInstances = 0;

  constructor(name: string) {
    super(name);

    this._energyType = 'mana';
    Necromancer.ArchetypeInstances();
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  private static ArchetypeInstances() {
    this._createdArchetypeInstances += 1;
  }

  static createdArchetypeInstances() {
    return this._createdArchetypeInstances;
  }
}

export default Necromancer;
