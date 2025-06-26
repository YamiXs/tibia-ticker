(async function(){
  const result = { creature: null, boss: null };
  try {
    const proxy = 'https://api.allorigins.win/get?url=';
    const res1 = await fetch(proxy + encodeURIComponent('https://www.tibia.com/library/?subtopic=creatures'));
    const html1 = (await res1.json()).contents;
    const m1 = html1.match(/<td.*?>Today's boosted creature:<\/.*?><td.*?><.*?>([^<]+)<\/.*?>/i);
    if (m1) result.creature = m1[1];
    if (m1) result.creature = m1[1];

    const res2 = await fetch(proxy + encodeURIComponent('https://www.tibia.com/library/?subtopic=boostablebosses'));
    const html2 = (await res2.json()).contents;
    const m2 = html2.match(/<td.*?>Today's boosted boss:<\/.*?><td.*?><.*?>([^<]+)<\/.*?>/i);
    if (m2) result.boss = m2[1];
    if (m2) result.boss = m2[1];

  } catch(e) {
    console.error('Boosted fetch error', e);
  }
  window.tibiaBoosted = result;
})();
