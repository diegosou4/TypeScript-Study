
type mapStringsCallback = (item: string) => string;

function mapStrings(array: string[], callbackfn: mapStringsCallback): string[]{
    const newArray: string[] = [];

    for(let i =0; i < array.length;i++){
        const item = array[i];
        newArray.push(item);
    }

    return newArray; 
}

const abc = ['a', 'b','c'];
const abcMapped = mapStrings(abc, (item) => item.toLowerCase())


console.log(abcMapped)