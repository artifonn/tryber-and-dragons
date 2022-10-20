import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private static _createdArchetypeInstances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);

    this._energyType = 'stamina';
    Ranger.ArchetypeInstances();
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

export default Ranger;