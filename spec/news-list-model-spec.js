(function testNewsListInstantiation() {
  var newsList = new NewsList();
  assert.isTrue(typeof newsList === "object", "testNewsListInstantiation")
})();

(function testNewsListAddNews() {
  var newsList = new NewsList();
  newsList.addNews(news1);
  assert.isTrue(newsList._news.includes(news1), "testNewsListAddNews")
})();

(function testNewsListReturnListOfNotes() {
  var newsList = new NewsList();
  newsList.addNews(news1);
  assert.isTrue(newsList.ReturnListOfNotes() === newsList._news)
})();
