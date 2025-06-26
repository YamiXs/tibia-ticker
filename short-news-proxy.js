(async function(){
  const result = [];
  try {
    const proxy = 'https://api.allorigins.win/get?url=';
    const url = proxy + encodeURIComponent('https://www.tibia.com/news/?subtopic=latestnews');
    const res = await fetch(url);
    const html = (await res.json()).contents;
    const divs = html.match(/<div class="ShortNewsHeadline".*?<\/div>/gs);
    if (divs) {
      divs.slice(0,5).forEach(div => {
        const dateMatch = div.match(/class="ShortNewsDate".*?>(.*?)<\/span>/);
        const textMatch = div.match(/<a href="(.*?)".*?>(.*?)<\/a>/);
        if (dateMatch && textMatch) {
          result.push({
            date: dateMatch[1],
            text: textMatch[2],
            url: 'https://www.tibia.com' + textMatch[1]
          });
        }
      });
    }
  } catch(e) {
    console.error('Short news proxy error', e);
  }
  window.tibiaShortNews = result;
})();
