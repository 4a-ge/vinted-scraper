import { describe, expect, it } from 'vitest';
import Proxy from '../../src/types/Proxy.js';
import ProxyHandler from "../../src/handlers/ProxyHandler.js"

describe("proxy handler tests", () => {
  it("should return valid proxy list", () => {
    const proxyListString = [ "127.0.0.1:8080", "127.0.0.1:8081", "127.0.0.1:8082", "127.0.0.1:8083" ];
    const proxyList: Proxy[] = [{
      address: "127.0.0.1:8080",
      used: false,
    },{
      address: "127.0.0.1:8081",
      used: false,
    },{
      address: "127.0.0.1:8082",
      used: false,
    },{
      address: "127.0.0.1:8083",
      used: false,
    }]

    const proxyHandler = new ProxyHandler(proxyListString);

    expect(proxyHandler.proxyList).toEqual(proxyList);
  })

  it("should return valid proxy list with username and password", () => {
    const proxyListString = [ "127.0.0.1:8080:user0:pass0", "127.0.0.1:8081:user1:pass1", "127.0.0.1:8082:user2:pass2", "127.0.0.1:8083:user3:pass3" ];
    const proxyList: Proxy[] = [{
      address: "user0:pass0@127.0.0.1:8080",
      used: false,
    },{
      address: "user1:pass1@127.0.0.1:8081",
      used: false,
    },{
      address: "user2:pass2@127.0.0.1:8082",
      used: false,
    },{
      address: "user3:pass3@127.0.0.1:8083",
      used: false,
    }]

    const proxyHandler = new ProxyHandler(proxyListString);

    expect(proxyHandler.proxyList).toEqual(proxyList);
  });

  it("should throw invalid proxy format", () => {
    const proxyListString = [ "127.0.0.1&8080" ];

    expect(() => new ProxyHandler(proxyListString)).toThrowError("Invalid proxy format: 127.0.0.1&8080");
  });

  it("should return a valid proxy", () => {
    const proxyListString = [ "127.0.0.1:8080", "127.0.0.1:8081", "127.0.0.1:8082", "127.0.0.1:8083" ];

    const proxyHandler = new ProxyHandler(proxyListString);

    expect(proxyHandler.getProxy()).toBe("http://127.0.0.1:8080");
    expect(proxyHandler.getProxy()).toBe("http://127.0.0.1:8081");
    expect(proxyHandler.getProxy()).toBe("http://127.0.0.1:8082");
    expect(proxyHandler.getProxy()).toBe("http://127.0.0.1:8083");
    expect(proxyHandler.getProxy()).toBe("http://127.0.0.1:8080");
  })
});