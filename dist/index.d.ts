import _WASM from "./classes/wasm";
export declare namespace NUtils {
    function getRandom(min: number, max: number): number;
    function arrayItemDelete(arr: any[], index: any): void;
    function arrayItemToLast(arr: any[], index: number): void;
    function isObjectEqual(obj1: object, obj2: object): boolean;
    function sleep(time: number): Promise<{}>;
    class WASM extends _WASM {
    }
}
