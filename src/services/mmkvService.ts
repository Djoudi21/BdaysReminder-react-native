import { StorageService } from "./interfaces/storageService.ts";
import { MMKV } from "react-native-mmkv";

export const storage = new MMKV();
export class MmkvService implements StorageService {
  retrieve(val1: string) {
    storage.getString(val1);
  }

  store(val1: string, val2: string) {
    storage.set(val1, val2);
  }
}
