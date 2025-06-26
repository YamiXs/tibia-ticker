(async function(){
  try {
    const res = await fetch('https://api.tibiadata.com/v4/news/latest');
    const data = await res.json();
    const news = data.news.slice(0, 5); // Senaste 5 nyheterna
    const sanitized = news.map(n => ({
      title: n.title.replace(/"/g,'\\"'),
      url: n.url
    }));
    console.log('window.tibiaNews = ' + JSON.stringify(sanitized) + ';');
  } catch(e) {
    console.error(e);
    console.log('window.tibiaNews = [];');
  }
})();
