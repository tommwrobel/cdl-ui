/**
 * helper function to ensure that a value is not undefined or null,
 * helpful especially when using array find methods
 */

export const ensure = <T>(
  argument: T | undefined | null,
  message = "This value was promised to be there."
) => {
  if (argument === undefined || argument === null) {
    throw new TypeError(message);
  }
  return argument;
};
