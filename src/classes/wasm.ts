export default class WASM {
    private wasmData: string;
    
    constructor(wasmData: string) {
        this.wasmData = wasmData;
    }

    public async getWASMInstance(): Promise<WebAssembly.Exports> {
        var bits = Buffer.from(this.wasmData);
        var wasm = await WebAssembly.compile(bits);

        return new WebAssembly.Instance(wasm).exports;
    }
}
