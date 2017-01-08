(function testInstantiationWithText() {
  var news_summary = new NewsSummary("I am news");
  assert.isTrue(news_summary._text === "I am news", "testInstantiationWithText")
})();
