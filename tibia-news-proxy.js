(async function(){
  try {
    const res = await fetch('https://api.tibiadata.com/v4/news/latest');
    const data = await res.json();
    const news = data.news.slice(0, 5); // Senaste 5
    const sanitized = news.map(n => ({
      title: n.title,
      url: n.url
    }));
    window.tibiaNews = sanitized; // 👈 detta behövs!
  } catch(e) {
    console.error('Fel vid hämtning:', e);
    window.tibiaNews = [];
  }
})();
