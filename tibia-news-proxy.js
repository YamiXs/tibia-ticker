(async function(){
  try {
    const res = await fetch('https://api.tibiadata.com/v1/news.json');
    const data = await res.json();
    const news = Object.values(data.news).slice(0, 5);
    const sanitized = news.map(n => ({
      title: n.news.replace(/"/g,'\\"'),
      url: n.tibiaurl
    }));
    console.log('window.tibiaNews = ' + JSON.stringify(sanitized) + ';');
  } catch(e) {
    console.error(e);
    console.log('window.tibiaNews = [];');
  }
})();
