/**
 * Common validation functions for entity filters
 */

import {
  CONTAINER_TYPES,
  ContainerType,
} from '../../constants/container-types';
import {
  DAMAGE_SOURCE_TYPES,
  DamageSourceType,
} from '../../constants/damage-source-types';
import { EFFECT_TYPES, EffectType } from '../../constants/effect-types';

/**
 * Validates that a value is a number
 * @param value The value to validate
 * @param field The name of the field being validated (for error messages)
 * @returns Whether the value is a valid number
 */
export const validateNumber = (
  value: any,
  fieldName: string,
  min?: number,
  max?: number,
): boolean => {
  if (typeof value !== 'number') {
    console.error(`${fieldName} must be a number`);

    return false;
  }
  if (min !== undefined && value < min) {
    console.error(`${fieldName} must be greater than or equal to ${min}`);

    return false;
  }
  if (max !== undefined && value > max) {
    console.error(`${fieldName} must be less than or equal to ${max}`);

    return false;
  }
  return true;
};

/**
 * Validates that a value is an integer
 * @param value The value to validate
 * @param fieldName The name of the field for error messages
 * @returns Whether the value is valid
 */
export const validateInteger = (
  value: any,
  fieldName: string,
  min?: number,
  max?: number,
): boolean => {
  if (typeof value !== 'number' || !Number.isInteger(value)) {
    console.error(`${fieldName} must be an integer`);

    return false;
  }
  if (min !== undefined && value < min) {
    console.error(`${fieldName} must be greater than or equal to ${min}`);

    return false;
  }
  if (max !== undefined && value > max) {
    console.error(`${fieldName} must be less than or equal to ${max}`);

    return false;
  }
  return true;
};

/**
 * Validates if a value is a boolean
 * @param value The value to validate
 * @param fieldName The name of the field being validated
 * @returns true if valid, false otherwise
 */
export const validateBoolean = (value: boolean, fieldName: string): boolean => {
  if (typeof value !== 'boolean') {
    console.error(`${fieldName} must be a boolean`);

    return false;
  }

  return true;
};

/**
 * Validates that a value is a string
 * @param value The value to validate
 * @param field The name of the field being validated (for error messages)
 * @returns Whether the value is a valid string
 */
export const validateString = (value: any, fieldName: string): boolean => {
  if (typeof value !== 'string') {
    console.error(`${fieldName} must be a string`);

    return false;
  }
  return true;
};

/**
 * Validates a range value that can be in several formats:
 * - A number
 * - An array of two numbers [min, max]
 * - An object with rangeMin and rangeMax properties
 *
 * @param value The value to validate
 * @param fieldName The name of the field being validated
 * @param min Optional minimum allowed value
 * @param max Optional maximum allowed value
 * @returns Whether the value is valid
 */
export const validateComplexRange = (
  value: number | [number, number] | { rangeMin: number; rangeMax: number },
  fieldName: string,
  min?: number,
  max?: number,
): boolean => {
  if (typeof value === 'number') {
    return validateNumber(value, fieldName, min, max);
  }

  if (Array.isArray(value)) {
    if (value.length !== 2) {
      console.error(`${fieldName} array must contain exactly 2 numbers`);

      return false;
    }

    if (
      !value.every((n) => validateNumber(n, `${fieldName} element`, min, max))
    ) {
      return false;
    }

    if (value[0] > value[1]) {
      console.error(
        `${fieldName} minimum value must be less than or equal to maximum value`,
      );

      return false;
    }

    return true;
  }

  if (typeof value === 'object' && value !== null) {
    if (
      !validateNumber(value.rangeMin, `${fieldName}.rangeMin`, min, max) ||
      !validateNumber(value.rangeMax, `${fieldName}.rangeMax`, min, max)
    ) {
      return false;
    }

    if (value.rangeMin > value.rangeMax) {
      console.error(
        `${fieldName}.rangeMin must be less than or equal to ${fieldName}.rangeMax`,
      );

      return false;
    }

    return true;
  }

  console.error(
    `${fieldName} must be a number, an array of two numbers, or an object with rangeMin and rangeMax properties`,
  );

  return false;
};

/**
 * Validates if a number is within a specified range
 * @param value The number to validate
 * @param min The minimum allowed value
 * @param max The maximum allowed value
 * @param fieldName The name of the field being validated
 * @returns true if valid, false otherwise
 */
export const validateNumberRange = (
  value: number,
  min: number,
  max: number,
  fieldName: string,
): boolean => {
  if (typeof value !== 'number' || isNaN(value)) {
    console.error(`${fieldName} must be a number`);

    return false;
  }

  if (value < min || value > max) {
    console.error(`${fieldName} must be between ${min} and ${max}`);

    return false;
  }

  return true;
};

/**
 * Validates a vector2 value
 * @param value The value to validate
 * @param fieldName The name of the field being validated
 * @returns true if valid, false otherwise
 */
export const validateVector2 = (
  value: any,
  fieldName: string,
  min?: number,
  max?: number,
): boolean => {
  if (
    !Array.isArray(value) ||
    value.length !== 2 ||
    !value.every((n) => validateNumber(n, `${fieldName} element`, min, max))
  ) {
    console.error(`${fieldName} must be an array of exactly 2 numbers`);

    return false;
  }
  return true;
};

/**
 * Validates a vector3 value
 * @param value The value to validate
 * @param fieldName The name of the field being validated
 * @returns true if valid, false otherwise
 */
export const validateVector3 = (
  value: any,
  fieldName: string,
  min?: number,
  max?: number,
): boolean => {
  if (
    !Array.isArray(value) ||
    value.length !== 3 ||
    !value.every((n) => validateNumber(n, `${fieldName} element`, min, max))
  ) {
    console.error(`${fieldName} must be an array of exactly 3 numbers`);

    return false;
  }
  return true;
};

/**
 * Validates that a value is one of the allowed values
 * @param value The value to validate
 * @param allowedValues Array of allowed values
 * @param field The name of the field being validated (for error messages)
 * @returns Whether the value is valid
 */
export const validateAllowedValues = (
  value: any,
  allowedValues: readonly string[],
  fieldName: string,
): boolean => {
  if (!allowedValues.includes(value)) {
    console.error(`${fieldName} must be one of: ${allowedValues.join(', ')}`);

    return false;
  }
  return true;
};

/**
 * Validates a container type
 * @param value The value to validate
 * @param fieldName The name of the field being validated
 * @returns true if valid, false otherwise
 */
export const validateContainerType = (
  value: any,
  fieldName: string,
): boolean => {
  if (typeof value !== 'string') {
    console.error(`${fieldName} must be a string`);

    return false;
  }

  if (!CONTAINER_TYPES.includes(value as ContainerType)) {
    console.error(`${fieldName} must be one of: ${CONTAINER_TYPES.join(', ')}`);

    return false;
  }

  return true;
};

/**
 * Validates a string array
 * @param value The value to validate
 * @param fieldName The name of the field being validated
 * @returns true if valid, false otherwise
 */
export const validateStringArray = (value: any, fieldName: string): boolean => {
  if (!Array.isArray(value)) {
    console.error(`${fieldName} must be an array`);

    return false;
  }

  for (const item of value) {
    if (typeof item !== 'string') {
      console.error(`${fieldName} must contain only strings`);

      return false;
    }
  }

  return true;
};

export const validateNumberArray = (value: any, fieldName: string): boolean => {
  if (!Array.isArray(value)) {
    console.error(`${fieldName} must be an array`);

    return false;
  }
  return value.every((n) => validateNumber(n, `${fieldName} element`));
};

/**
 * Validates a max turn value
 * @param value The value to validate
 * @param fieldName The name of the field being validated
 * @returns true if valid, false otherwise
 */
export const validateMaxTurn = (value: any, fieldName: string): boolean => {
  if (typeof value !== 'number' || isNaN(value)) {
    console.error(`${fieldName} must be a number`);

    return false;
  }

  if (value < 0 || value > 360) {
    console.error(`${fieldName} must be between 0 and 360 degrees`);

    return false;
  }

  return true;
};

/**
 * Validates if a value is a valid time value
 * @param value The value to validate
 * @param fieldName The name of the field being validated
 * @returns True if the value is valid, false otherwise
 */
export const validateTime = (value: any, fieldName: string): boolean => {
  if (typeof value === 'number') {
    if (value < 0) {
      console.error(`${fieldName} must be a positive number`);

      return false;
    }
    return true;
  }
  if (typeof value === 'string') {
    return true; // Assuming string is a valid Molang expression
  }
  console.error(
    `${fieldName} must be a positive number or a Molang expression`,
  );

  return false;
};

/**
 * Validates if a value is a valid weight value
 * @param value The value to validate
 * @param fieldName The name of the field being validated
 * @returns True if the value is valid, false otherwise
 */
export const validateWeight = (value: any, fieldName: string): boolean => {
  if (typeof value === 'number') {
    if (value < 0) {
      console.error(`${fieldName} must be a positive number`);

      return false;
    }
    return true;
  }
  console.error(`${fieldName} must be a positive number`);

  return false;
};

/**
 * Validates if a value is a valid trade table path
 * @param value The value to validate
 * @param fieldName The name of the field being validated
 * @returns True if the value is valid, false otherwise
 */
export const validateTradeOrLootTablePath = (
  value: any,
  fieldName: string,
): boolean => {
  if (typeof value !== 'string') {
    console.error(`${fieldName} must be a string`);

    return false;
  }

  if (!value.endsWith('.json')) {
    console.error(`${fieldName} must end with .json`);

    return false;
  }

  return true;
};

export const validateDegrees = (
  value: any,
  fieldName: string,
  hasNegative: boolean = false,
): boolean => {
  if (
    typeof value !== 'number' ||
    value < (hasNegative ? -360 : 0) ||
    value > 360
  ) {
    console.error(
      `${fieldName} must be a number between ${
        hasNegative ? '-360' : '0'
      } and 360`,
    );

    return false;
  }
  return true;
};

/**
 * Validates a percentage value between 0 and 1
 * @param value The value to validate
 * @param fieldName The name of the field being validated
 * @returns True if valid, false otherwise
 */
export const validatePercentage = (value: any, fieldName: string): boolean => {
  if (typeof value !== 'number' || value < 0 || value > 1) {
    console.error(`${fieldName} must be a number between 0 and 1`);

    return false;
  }
  return true;
};

/**
 * Validates a sound event
 * @param value The value to validate
 * @param fieldName The name of the field being validated
 * @returns True if valid, false otherwise
 */
export const validateSoundEvent = (value: any, fieldName: string): boolean => {
  if (typeof value !== 'string') {
    console.error(`${fieldName} must be a string`);

    return false;
  }
  return true;
};

/**
 * Validates a damage source type
 * @param value The value to validate
 * @param fieldName The name of the field being validated
 * @returns true if valid, false otherwise
 */
export const validateDamageSourceType = (
  value: DamageSourceType,
  fieldName: string,
): boolean => {
  if (typeof value !== 'string') {
    console.error(`${fieldName} must be a string`);

    return false;
  }

  if (!DAMAGE_SOURCE_TYPES.includes(value)) {
    console.error(
      `${fieldName} must be one of: ${DAMAGE_SOURCE_TYPES.join(', ')}`,
    );

    return false;
  }

  return true;
};

/**
 * Validates an array of damage source types
 * @param value The value to validate
 * @param fieldName The name of the field being validated
 * @returns True if valid, false otherwise
 */
export const validateDamageSourceTypes = (
  value: DamageSourceType[],
  fieldName: string,
): boolean => {
  if (!Array.isArray(value)) {
    console.error(`${fieldName} must be an array`);

    return false;
  }
  return value.every((n) =>
    validateDamageSourceType(n, `${fieldName} element`),
  );
};

/**
 * Validates a color value
 * @param value The value to validate
 * @param fieldName The name of the field being validated
 * @returns True if valid, false otherwise
 */
export const validateEffectType = (
  value: EffectType,
  fieldName: string,
): boolean => {
  if (!EFFECT_TYPES.includes(value)) {
    console.error(`${fieldName} must be one of: ${EFFECT_TYPES.join(', ')}`);

    return false;
  }
  return true;
};

export const validateHexColor = (value: any, fieldName: string): boolean => {
  if (typeof value !== 'string') {
    console.error(`${fieldName} must be a string`);

    return false;
  }
  if (!value.startsWith('#')) {
    console.error(`${fieldName} must start with #`);

    return false;
  }

  if (value.length !== 7 && value.length !== 9) {
    console.error(`${fieldName} must be 7 or 9 characters long`);

    return false;
  }

  if (!/^[0-9A-Fa-f]+$/.test(value.slice(1))) {
    console.error(`${fieldName} must contain only hexadecimal characters`);

    return false;
  }

  return true;
};
