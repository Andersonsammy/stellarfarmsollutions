const https = require('https');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectHost = res.headers.location.startsWith('http') ? res.headers.location : new URL(res.headers.location, url).href;
        resolve(fetchUrl(redirectHost));
      } else {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => resolve(data));
      }
    }).on('error', reject);
  });
}

async function getPinImage(url) {
  try {
    const html = await fetchUrl(url);
    const ogImageMatch = html.match(/<meta\s+property="og:image"\s+name="og:image"\s+content="([^"]+)"/i) || html.match(/<meta\s+property="og:image"\s+content="([^"]+)"/i);
    if (ogImageMatch) {
      let imgUrl = ogImageMatch[1];
      imgUrl = imgUrl.replace(/736x|236x|400x/, 'originals'); 
      console.log(`URL: ${url} -> IMG: ${imgUrl}`);
    } else {
      console.log(`URL: ${url} -> Not found in meta tags, looking for img tags...`);
      const imgMatch = html.match(/<img[^>]+src="([^"]+)"/i);
      if (imgMatch) {
         console.log(`URL: ${url} -> IMG (fallback): ${imgMatch[1]}`);
      }
    }
  } catch(e) {
    console.error(e);
  }
}

getPinImage('https://pin.it/4Rp48t1ng');
getPinImage('https://pin.it/1BR2qJcKP');
