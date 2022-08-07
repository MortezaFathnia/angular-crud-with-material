export class Serializer {

    static serialize<T>(obj: object | string): T {
        const json = typeof obj === 'object' ? JSON.stringify(obj) : obj;
        const newJson = json.replace(/\"(\w+)\":/g, (_, b) => `"${this.toCamelCase(b)}":`);
        return JSON.parse(newJson) as T;
    }

    private static toCamelCase(property: string): string {
        const result = property
        .replace(/\s(.)/g, s => s.toUpperCase())
        .replace(/\s/g, '')
        .replace(/^(.)/, s => s.toLowerCase());
        return result;
    }
}
