const https = require('https');
const http = require('http');

const pins = [
  "https://pin.it/4Rp48t1ng",
  "https://pin.it/1BR2qJcKP"
];

function fetchUrl(urlStr, redirects = 0) {
  return new Promise((resolve, reject) => {
    if (redirects > 5) return reject(new Error('Too many redirects'));
    const req = https.get(urlStr, { headers: { "User-Agent": "Mozilla/5.0", "Accept": "text/html" }, timeout: 10000 }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let loc = res.headers.location;
        if (!loc.startsWith('http')) loc = new URL(urlStr).origin + loc;
        return fetchUrl(loc, redirects + 1).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ data, urlStr }));
    });
    req.on('timeout', () => { req.destroy(); reject(new Error('timeout')); });
    req.on('error', reject);
  });
}

(async () => {
  for(let pin of pins) {
      let { data, urlStr } = await fetchUrl(pin);
      const match = data.match(/content=["'](https:\/\/i\.pinimg\.com\/originals\/[^"']+)["']/i) || 
                    data.match(/content=["'](https:\/\/i\.pinimg\.com\/\d+x\/[^"']+)["']/i) ||
                    data.match(/src=["'](https:\/\/i\.pinimg\.com\/\d+x\/[^"']+)["']/i);
      console.log(pin, "=>", match ? match[1].replace(/\/\d+x\//, '/originals/') : "NOT FOUND in HTML size " + data.length);
  }
})();
