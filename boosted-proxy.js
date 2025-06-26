(async function(){
  const result = { creature: null, boss: null };
  try {
    const proxy = 'https://api.allorigins.win/raw?url=';
    const url1 = proxy + encodeURIComponent('https://www.tibia.com/library/?subtopic=creatures');
    const res1 = await fetch(url1);
    const html1 = await res1.text();
    const m1 = html1.match(/Today's boosted creature:\s*<\/b>.*?<nobr>([^<]+)<\/nobr>/i);
    if (m1) result.creature = m1[1];

    const url2 = proxy + encodeURIComponent('https://www.tibia.com/library/?subtopic=boostablebosses');
    const res2 = await fetch(url2);
    const html2 = await res2.text();
    const m2 = html2.match(/Today's boosted boss:\s*<\/b>.*?<nobr>([^<]+)<\/nobr>/i);
    if (m2) result.boss = m2[1];

  } catch(e) {
    console.error('Boosted fetch error', e);
  }
  window.tibiaBoosted = result;
})();
