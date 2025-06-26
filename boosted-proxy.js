(async function(){
  const result = { creature: null, boss: null };
  try {
    const proxy = 'https://api.allorigins.win/raw?url=';
    const url = proxy + encodeURIComponent('https://www.tibia.com/news/?subtopic=creaturelibrary');
    const res = await fetch(url);
    const html = await res.text();

    const match = html.match(/Today's Boosted Creature:<\/b><\/td><td.*?><nobr>(.*?)<\/nobr>/);
    if (match) result.creature = match[1];

    const bossMatch = html.match(/Today's Boosted Boss:<\/b><\/td><td.*?><nobr>(.*?)<\/nobr>/);
    if (bossMatch) result.boss = bossMatch[1];

  } catch(e) {
    console.error('Fel vid hämtning av boosted-data', e);
  }

  window.tibiaBoosted = result;
})();
