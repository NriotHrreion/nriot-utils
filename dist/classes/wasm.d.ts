export default class WASM {
    private wasmData;
    constructor(wasmData: string);
    getWASMInstance(): Promise<WebAssembly.Exports>;
}
