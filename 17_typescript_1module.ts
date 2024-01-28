export namespace Geometry {

    export const PI = Math.PI;

    export function calculateCircumference(radious: number): number {
        return 2 * PI * radious;
    }

    export function calculateArea(radious: number): number {
        return PI * radious * radious;
    }

}