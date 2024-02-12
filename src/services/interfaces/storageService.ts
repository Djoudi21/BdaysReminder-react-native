export interface StorageService {
  store: (val1: string, val2: string) => Promise<any> | void;
  retrieve: (val1: string) => Promise<any> | void;
}
