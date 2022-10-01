export interface Operations {
    add(a: number, b: number): number
    subtract(a: number, b: number): number
}

export class ArithmeticLogicUnit implements Operations {
    add(a: number, b: number): number {
        return a + b
    }
    subtract(a: number, b: number): number {
        return a - b
    }
}