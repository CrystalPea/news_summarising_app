(function testNewsInstantiation() {
  var news = new News("Exciting Title", "I am news");
  assert.isTrue(typeof news === "object", "testNewsInstantiation")
})();

(function testHeadlineReturn() {
  var news = new News("Exciting Title", "I am news");
  assert.isTrue(news.returnHeadline() === "Exciting Title", "testHeadlineReturn")
})();

(function testSummaryReturn() {
  var news = new News("Exciting Title", "I am news");
  assert.isTrue(news.returnSummary() === "I am news", "testSummaryReturn")
})();
