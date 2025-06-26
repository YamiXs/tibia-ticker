(async function(){
  const result = { creature: null, boss: null };
  try {
    const proxy = 'https://api.allorigins.win/get?url=';

    // Hämta boosted creature
    const res1 = await fetch(proxy + encodeURIComponent('https://www.tibia.com/library/?subtopic=creatures'));
    const html1 = (await res1.json()).contents;
    const m1 = html1.match(/Today's boosted creature:<\/span><\/td>\s*<td.*?><span.*?>(.*?)<\/span>/i);
    if (m1) result.creature = m1[1].trim();

    // Hämta boosted boss
    const res2 = await fetch(proxy + encodeURIComponent('https://www.tibia.com/library/?subtopic=boostablebosses'));
    const html2 = (await res2.json()).contents;
    const m2 = html2.match(/Today's boosted boss:<\/span><\/td>\s*<td.*?><span.*?>(.*?)<\/span>/i);
    if (m2) result.boss = m2[1].trim();

  } catch(e) {
    console.error('Boosted fetch error', e);
  }

  // Debugutskrift
  console.log("Boosted creature:", result.creature);
  console.log("Boosted boss:", result.boss);

  window.tibiaBoosted = result;
})();
