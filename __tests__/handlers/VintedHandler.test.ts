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
  })

  it("should throw invalid uri parameters", async () => {
    const vintedScraper = new VintedScraper();

    await expect(vintedScraper.search("https://www.vinted.fr/vetements")).rejects.toThrowError("Invalid URI parameters");
    await expect(vintedScraper.search("https://www.vinted.fr/vetements?search")).rejects.toThrowError("Invalid URI parameters")
  })
});