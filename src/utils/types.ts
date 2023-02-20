export type CallBackReducer<T, U> = (accumulator: U, currentValue: T, index: number, array: T[]) => number;
