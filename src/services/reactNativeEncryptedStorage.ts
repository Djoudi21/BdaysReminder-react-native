import { StorageService } from "./interfaces/storageService.ts";
import EncryptedStorage from "react-native-encrypted-storage";

export class ReactNativeEncryptedStorage implements StorageService {
  retrieve(val1: string): void {}

  async store(val1: string, val2: string): Promise<any> {
    console.log({ val1, val2 });
    await EncryptedStorage.setItem(
      "user_session",
      JSON.stringify({
        age: 21,
        token: "ACCESS_TOKEN",
        username: "emeraldsanto",
        languages: ["fr", "en", "de"],
      })
    );
  }
}
