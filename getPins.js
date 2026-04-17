import https from 'https';

const urls = [
  "https://pin.it/4bs0GVJhJ",
  "https://pin.it/2Pzb2cyNw",
  "https://pin.it/akSkjIsGr",
  "https://pin.it/4tKwKtPyb",
  "https://pin.it/30EHNWyG7",
  "https://pin.it/3vsQqV8AR",
  "https://pin.it/2rNvOy0Si",
  "https://pin.it/6nLtei9TN",
  "https://pin.it/5VZdciEMQ",
  "https://pin.it/68RkXMv12",
  "https://pin.it/3EqMMf2Fc",
  "https://pin.it/2pgKhrbRq",
  "https://pin.it/6xYUAQtOR",
  "https://pin.it/77KLWYByv",
  "https://pin.it/7xDtzVmK3"
];

async function fetchUrl(url) {
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5'
      },
      redirect: 'follow'
    });
    const html = await response.text();
    const imgMatch = html.match(/https:\/\/i\.pinimg\.com\/(?:originals|736x|564x|474x)\/[a-zA-Z0-9_\-\.\/]+\.jpg/);
    const titleMatch = html.match(/<title>(.*?)<\/title>/) || html.match(/<meta property="og:title" content="(.*?)"/);
    
    let imgUrl = imgMatch ? imgMatch[0].replace('736x', 'originals').replace('564x', 'originals').replace('474x', 'originals') : 'No image';
    let title = titleMatch ? titleMatch[1] : 'No title';
    
    console.log(url, "=> IMG:", imgUrl, "| DESC:", title);
  } catch (err) {
    console.error(url, "=> Error", err.message);
  }
}

async function main() {
  for (const url of urls) {
    await fetchUrl(url);
  }
}

main();
