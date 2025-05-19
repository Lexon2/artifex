import {
  AdmireItemComponent,
  AreaAttackComponent,
  AttackComponent,
  AttackCooldownComponent,
  CannotBeAttackedComponent,
  CombatRegenerationComponent,
  DamageOverTimeComponent,
  IgnoreCannotBeAttackedComponent,
  ProjectileComponent,
  ReflectProjectilesComponent,
  ShooterComponent,
  FollowRangeComponent,
} from './combat';

export interface EntityCombatComponents {
  admireItem?: AdmireItemComponent;
  areaAttack?: AreaAttackComponent;
  attack?: AttackComponent;
  attackCooldown?: AttackCooldownComponent;
  cannotBeAttacked?: CannotBeAttackedComponent;
  combatRegeneration?: CombatRegenerationComponent;
  damageOverTime?: DamageOverTimeComponent;
  ignoreCannotBeAttacked?: IgnoreCannotBeAttackedComponent;
  projectile?: ProjectileComponent;
  reflectProjectiles?: ReflectProjectilesComponent;
  shooter?: ShooterComponent;
  followRange?: FollowRangeComponent;
}
