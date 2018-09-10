var html = new Object();
html.head = {};
html.head.meta = {charset:"UTF-8"}
html.head.title = "title of the document";
html.body = {};
html.body.section = {};
html.body.section.h1 = 'Famous Cities';
html.body.section.article = [
  { h2 : "London", p : "London is the capital city of England." },
  { h2 : "Paris", p : "Paris is the capital city of France." }
];

function articleAmount(obj){
  return Object.keys(obj).length;
}

console.log(articleAmount(html.body.section));

/**
var html = {
  head: {
    meta: { charset : "UTF-8" },
    title: "Title of the document"
  },
  body: {
    section: {
      h1: 'Famous Cities',
      articles: [
        {
          h2: 'London',
          p: 'London is the capital city of England.'
        },
        {
          h2: 'Paris',
          p: 'Paris is the capital city of France.'
        }
      ]
    }
  }
};

function articleConut(html){
  var articles = html.body.section.articles;
  // console.log(articles);
  // console.log(Array.isArray(articles));
  var articlesCount = Array.isArray(articles) ? articles.length : 0;

  return articles.length;
};

console.log(articleConut(html));
**/
