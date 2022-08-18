<h1 align="center">Vinted Scraper</h1>

<hr>

This module will help you to interact with the Vinted API.

## Example :

```javascript
import VintedScraper from "vinted-scraper"

const vintedScraper = new VintedScraper(); // Or new VintedScraper([ "proxy1:3128:user1:pass" ]) to use proxy.

/**
 * Search for new products.
 */ 
vintedScraper.search("https://vinted.fr/vetements?search_text=pantalon&order=newest_first").then(res => {
  // Do something ...
});

/**
 * Search for user data.
 */ 
vintedScraper.fetchUser(1).then(user => {
  // Do something ...
});

/**
 * Search for item data.
 */
vintedScraper.fetchItem(100000000).then(item => {
  // Do something ...
});
```

\
Made with ❤️ by <a href="https://github.com/ZyXProFR" target="_blank">ZyXProFR</a>
