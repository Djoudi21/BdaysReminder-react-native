import { expect } from "detox";
import { beforeEach, describe, it } from "@jest/globals";

describe("ScreenShot", () => {
  beforeEach(async () => {
    // await device.reloadReactNative();
    await device.launchApp();
  });

  it("should take screenshot correctly", async () => {
    // takeScreenshot();
    // await expect(element(by.id("componentFoo"))).toBeVisible();
    // await element(by.id("ButtonFoo")).tap();
    console.log("TOTO");

    await expect(element(by.id("toto"))).toBeVisible();
    // takeScreenshot();
  });
});
