import { BodyRotationAlwaysFollowsHeadComponent } from '../../../interfaces/components/navigation-movement';
import { convertStateObject } from '../../common/state-object';

export const convertBodyRotationAlwaysFollowsHeadComponent = (
  component?: BodyRotationAlwaysFollowsHeadComponent,
): { 'minecraft:body_rotation_always_follows_head'?: any } | undefined => {
  if (!component) {
    return undefined;
  }

  const result = convertStateObject(component);
  if (!result) {
    return undefined;
  }

  return {
    'minecraft:body_rotation_always_follows_head': result,
  };
};
