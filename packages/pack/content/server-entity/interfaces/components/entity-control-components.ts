import {
  AddRiderComponent,
  BoostableComponent,
  DashComponent,
  HorseJumpStrengthComponent,
  InputAirControlledComponent,
  InputGroundControlledComponent,
  ItemControllableComponent,
  LeashableComponent,
  LeashableToComponent,
  RideableComponent,
} from './control';

export interface EntityControlComponents {
  addRider?: AddRiderComponent;
  boostable?: BoostableComponent;
  dash?: DashComponent;
  horseJumpStrength?: HorseJumpStrengthComponent;
  inputAirControlled?: InputAirControlledComponent;
  inputGroundControlled?: InputGroundControlledComponent;
  itemControllable?: ItemControllableComponent;
  leashable?: LeashableComponent;
  leashableTo?: LeashableToComponent;
  rideable?: RideableComponent;
}
