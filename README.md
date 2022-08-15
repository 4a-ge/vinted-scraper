<h1 align="center">Vinted Scraper</h1>

<hr>

This module will help you to interact with the Vinted API.

## Example :

Without proxy :
```javascript
import VintedScraper from "vinted-scraper"

const vintedScraper = new VintedScraper();

vintedScraper.search("https://vinted.fr/vetements?search_text=pantalon&order=newest_first").then(res => {
  // Do something ...
});
```

With proxy :
```javascript
import VintedScraper from "vinted-scraper"

/**
 * IP:PORT:USERNAME:PASSWORD
 */ 
const proxies = [ "127.0.0.1:3128", "127.0.0.1:3129:user1:pass1" ];

const vintedScraper = new VintedScraper(proxies);

vintedScraper.search("https://vinted.fr/vetements?search_text=pantalon&order=newest_first").then(res => {
  // Do something ...
});
```

\
Made with ❤️ by <a href="https://github.com/ZyXProFR" target="_blank">ZyXProFR</a>
