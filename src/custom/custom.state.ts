export type TCustomState = {
  count: number,
}

export function CustomState(): TCustomState {
  return {
    count: 5,
  }
}