(function testInstantiation() {
  var news_summary = new NewsSummary("Exciting Title", "I am news");
  assert.isTrue(typeof news_summary === "object", "testInstantiation")
})();

(function testTitleReturn() {
  var news_summary = new NewsSummary("Exciting Title", "I am news");
  assert.isTrue(news_summary.returnTitle() === "Exciting Title")
})();
