import { convertBodyRotationAxisAlignedComponent } from './body-rotation-axis-aligned-component.convertor';
import { convertBodyRotationBlockedComponent } from './body-rotation-blocked-component.convertor';
import { convertCollisionBoxComponent } from './collision-box-component.convertor';
import { convertCustomHitTestComponent } from './custom-hit-test-component.convertor';
import { convertFrictionModifierComponent } from './friction-modifier-component.convertor';
import { convertPhysicsComponent } from './physics-component.converter';
import { convertPushThroughComponent } from './push-through-component.convertor';
import { convertPushableComponent } from './pushable-component.convertor';
import { convertScaleByAgeComponent } from './scale-by-age-component.convertor';
import { convertScaleComponent } from './scale-component.convertor';

export const entityPhysicalComponentConvertorsFactory = {
  bodyRotationAxisAligned: convertBodyRotationAxisAlignedComponent,
  bodyRotationBlocked: convertBodyRotationBlockedComponent,
  customHitTest: convertCustomHitTestComponent,
  collisionBox: convertCollisionBoxComponent,
  frictionModifier: convertFrictionModifierComponent,
  physics: convertPhysicsComponent,
  pushThrough: convertPushThroughComponent,
  pushable: convertPushableComponent,
  scaleByAge: convertScaleByAgeComponent,
  scale: convertScaleComponent
};
