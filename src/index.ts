export namespace NUtils {
    export function getRandom(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
    export function arrayItemDelete(arr: any[], index: any): void {
        var j = index;
        while(j < arr.length) {
            arr[j] = arr[j + 1];
            j++;
        }
        arr.pop();
    }
    
    export function arrayItemToLast(arr: any[], index: number): void {
        var str = arr.splice(index, 1);
        arr.push(str[0]);
    }
    
    export function isObjectEqual(obj1: object, obj2: object): boolean {
        var isEqual = true;
    
        for(let i in obj1) {
            if(typeof obj1[i] == "object" && typeof obj2[i] == "object") {
                if(!isObjectEqual(obj1[i], obj2[i])) isEqual = false;
                continue;
            }
    
            if(obj1[i] != obj2[i]) isEqual = false;
        }
    
        return isEqual;
    }
    
    export function sleep(time: number): Promise<{}> {
        return new Promise((resolve) => setTimeout(resolve, time));
    }
}
