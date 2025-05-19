/**
 * Creates a custom_components component for Minecraft items
 * @param values Array of custom component identifiers
 * @returns The custom_components component in Minecraft format or undefined if validation fails
 */
export const createCustomComponents = (
  values?: string[],
): { 'minecraft:custom_components': string[] } | undefined => {
  if (!values || !Array.isArray(values) || values.length === 0) {
    return undefined;
  }

  // Validate all entries are strings
  for (const value of values) {
    if (typeof value !== 'string' || value.length === 0) {
      // @TODO: Add error handling
      console.error('Custom components must be non-empty strings');

      return undefined;
    }
  }

  return {
    'minecraft:custom_components': values,
  };
};
