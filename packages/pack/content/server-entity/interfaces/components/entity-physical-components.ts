import {
  BodyRotationAxisAlignedComponent,
  BodyRotationBlockedComponent,
  CustomHitTestComponent,
  CollisionBoxComponent,
  FrictionModifierComponent,
  PhysicsComponent,
  PushThroughComponent,
  PushableComponent,
  ScaleByAgeComponent,
  ScaleComponent
} from './physical';

export interface EntityPhysicalComponents {
  bodyRotationAxisAligned?: BodyRotationAxisAlignedComponent;
  bodyRotationBlocked?: BodyRotationBlockedComponent;
  customHitTest?: CustomHitTestComponent;
  collisionBox?: CollisionBoxComponent;
  frictionModifier?: FrictionModifierComponent;
  physics?: PhysicsComponent;
  pushThrough?: PushThroughComponent;
  pushable?: PushableComponent;
  scaleByAge?: ScaleByAgeComponent;
  scale?: ScaleComponent;
}
