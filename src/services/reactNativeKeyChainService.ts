import { StorageService } from "./interfaces/storageService.ts";
import Keychain from "react-native-keychain";

export class ReactNativeKeyChainService implements StorageService {
  retrieve(): Promise<any> {
    return Promise.resolve();
  }

  async store(val1: string, val2: string) {
    let options: Keychain.Options = { storage: Keychain.STORAGE_TYPE.FB };
    await Keychain.setGenericPassword(val1, val2, options);
  }
}
