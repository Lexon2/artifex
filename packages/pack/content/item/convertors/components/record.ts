const validSoundEvents = [
  '13',
  'cat',
  'blocks',
  'chirp',
  'far',
  'mall',
  'mellohi',
  'stal',
  'strad',
  'ward',
  '11',
  'wait',
  'pigstep',
  'otherside',
  '5',
  'relic',
];

interface RecordOptions {
  soundEvent: string;
  comparatorSignal?: number;
  duration?: number;
}

/**
 * Creates a record component for Minecraft items
 * @param options The record options
 * @returns The record component in Minecraft format or undefined if validation fails
 */
export const createRecord = (
  options?: RecordOptions,
): { 'minecraft:record': any } | undefined => {
  if (!options) {
    return undefined;
  }

  if (
    typeof options.soundEvent !== 'string' ||
    options.soundEvent.length === 0 ||
    !validSoundEvents.includes(options.soundEvent)
  ) {
    // @TODO: Add error handling
    console.error('Sound event must be a non-empty string and one of the valid sound events');
    console.error(
      'Valid sound events are: ' + validSoundEvents.join(', '),
    );

    return undefined;
  }

  const result: any = {
    sound_event: options.soundEvent,
  };

  if (options.comparatorSignal !== undefined) {
    if (
      typeof options.comparatorSignal !== 'number' ||
      options.comparatorSignal < 0 ||
      options.comparatorSignal > 13
    ) {
      // @TODO: Add error handling
      console.error('Comparator signal must be a number between 0 and 15');

      return undefined;
    }
    result.comparator_signal = options.comparatorSignal;
  }

  if (options.duration !== undefined) {
    if (typeof options.duration !== 'number' || options.duration <= 0) {
      // @TODO: Add error handling
      console.error('Duration must be a positive number');

      return undefined;
    }
    result.duration = options.duration;
  }

  return {
    'minecraft:record': result,
  };
};
