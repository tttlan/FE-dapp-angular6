export class LocalStorageHelper {
    setValue(key: string, value: any) {
        localStorage.setItem(key, value);
    }

    getValue(key: string) {
        localStorage.getItem(key);
    }

    deleteValue(key: string) {
        localStorage.removeItem(key);
    }

    clearAll() {
        localStorage.clear();
    }
}