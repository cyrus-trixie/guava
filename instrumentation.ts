// instrumentation.ts
export function register() {
  if (
    typeof globalThis.localStorage !== 'undefined' &&
    typeof globalThis.localStorage.getItem !== 'function'
  ) {
    delete (globalThis as any).localStorage;
  }
}