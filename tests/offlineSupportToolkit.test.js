/* global describe, it, expect */

// tests/offlineSupportToolkit.test.js
import { store } from "../src/OfflineSupportToolkit";

describe("Offline Support Toolkit Tests", () => {
  it("initial state should be correct", () => {
    const state = store.getState();
    expect(state.offlineQueue).toEqual([]);
  });
});
