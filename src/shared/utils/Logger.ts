/* eslint-disable no-console */

// This file serves as a wrapper for all logging concerns, such
// that changes to logging can be made in a centralized location.

export function warn(msg: string) {
  console.warn(msg)
}

export function log(msg: string) {
  console.log(msg)
}

export function dir(object: Record<string, unknown>) {
  console.dir(object)
}

export function error(error: unknown) {
  console.error(error)
}

/* eslint-enable no-console */
