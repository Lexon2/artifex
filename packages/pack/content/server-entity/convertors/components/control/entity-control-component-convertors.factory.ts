import { convertAddriderComponent } from './addrider-component.convertor';
import { convertBoostableComponent } from './boostable-component.convertor';
import { convertDashComponent } from './dash-component.convertor';
import { convertHorseJumpStrengthComponent } from './horse-jump-strength-component.convertor';
import { convertInputAirControlledComponent } from './input-air-controlled-component.convertor';
import { convertInputGroundControlledComponent } from './input-ground-controlled-component.convertor';
import { convertItemControllableComponent } from './item-controllable-component.convertor';
import { convertLeashableComponent } from './leashable-component.convertor';
import { convertLeashableToComponent } from './leashable-to-component.convertor';
import { convertRideableComponent } from './rideable-component.convertor';

export const entityControlComponentConvertorsFactory = {
  addRider: convertAddriderComponent,
  boostable: convertBoostableComponent,
  dash: convertDashComponent,
  horseJumpStrength: convertHorseJumpStrengthComponent,
  inputAirControlled: convertInputAirControlledComponent,
  inputGroundControlled: convertInputGroundControlledComponent,
  itemControllable: convertItemControllableComponent,
  leashable: convertLeashableComponent,
  leashableTo: convertLeashableToComponent,
  rideable: convertRideableComponent,
};
