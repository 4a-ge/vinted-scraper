import { describe, it, expect } from 'vitest';
import VintedScraper from '../../src/handlers/VintedHandler';

describe("vinted handler tests", async () => {
  it("should return array of items", async () => {
    const vintedScraper = new VintedScraper();
    const result = await vintedScraper.search("https://www.vinted.fr/vetements?search_text=dunk%20sb%20dodgers&catalog[]=214&catalog[]=1242&brand_id[]=53&price_to=220&currency=EUR&status[]=6&order=newest_first");

    expect(result.items.length).toBeGreaterThan(0);
  });

  it("should return array of items with proxy", async () => {
    const vintedScraper = new VintedScraper([ `${process.env.VITEST_PROXY}` ]);
    const result = await vintedScraper.search("https://www.vinted.fr/vetements?search_text=dunk%20sb%20dodgers&catalog[]=214&catalog[]=1242&brand_id[]=53&price_to=220&currency=EUR&status[]=6&order=newest_first");

    expect(result.items.length).toBeGreaterThan(0);
  });

  it("should throw invalid uri format", async () => {
    const vintedScraper = new VintedScraper();

    await expect(vintedScraper.search("https://vin.fr")).rejects.toThrowError("Invalid URI format")
    await expect(vintedScraper.search("https://fr.vinted")).rejects.toThrowError("Invalid URI format")
    await expect(vintedScraper.search("http://vinted.fr")).rejects.toThrowError("Invalid URI format")
    await expect(vintedScraper.search("https://vinted.fr")).rejects.toThrowError("Invalid URI format")
    await expect(vintedScraper.search("http://vinted.fr/vetements?search_text=pantalon test")).rejects.toThrowError("Invalid URI format")
  })

  it("should throw invalid uri parameters", async () => {
    const vintedScraper = new VintedScraper();
    
    await expect(vintedScraper.search("https://www.vinted.fr/vetements?search_text")).rejects.toThrowError("Invalid URI parameters")
  })

  it("should return valid user", async () => {
    const vintedScraper = new VintedScraper();
    const userData = await vintedScraper.fetchUser(1);

    expect(userData.user.anon_id).toBe("7da126c4-764b-42a7-9170-67cfe3d0e32b")
  })

  it("should return valid user with proxy", async () => {
    const vintedScraper = new VintedScraper([ `${process.env.VITEST_PROXY}` ]);
    const userData = await vintedScraper.fetchUser(1);

    expect(userData.user.anon_id).toBe("7da126c4-764b-42a7-9170-67cfe3d0e32b")
  })

  it("should return not found user", async () => {
    const vintedScraper = new VintedScraper();

    await expect(vintedScraper.fetchUser(0)).rejects.toThrowError("User not found");
  });

  it("should return valid item", async () => {
    const vintedScraper = new VintedScraper();
    const itemData = await vintedScraper.fetchItem(100000000);

    expect(itemData.item.user_id).toBe(17500877)
  })

  it("should return valid item with proxy", async () => {
    const vintedScraper = new VintedScraper([ `${process.env.VITEST_PROXY}` ]);
    const itemData = await vintedScraper.fetchItem(100000000);

    expect(itemData.item.user_id).toBe(17500877)
  })

  it("should return not found item", async () => {
    const vintedScraper = new VintedScraper();

    await expect(vintedScraper.fetchItem(0)).rejects.toThrowError("Item not found");
  });
});