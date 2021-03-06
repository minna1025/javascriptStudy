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

// 가독성을 위해 객체를 작성할 때에 한번에 literal 표기법으로 작성하는 것을 추천

var html = { 
  head : { 
    meta : { charset : "UTF-8"} , 
    title : "title of the document" 
  },
  body : { 
    section : { 
      h1 : "Famous Cities", 
      article : [
        { h2 : "London", p : "London is the capital city of England." },
        { h2 : "Paris", p : "Paris is the capital city of France." }
      ]
     }
  }
}
