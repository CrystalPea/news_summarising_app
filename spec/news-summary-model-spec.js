(function testInstantiation() {
  var newsSummary = new NewsSummary("Exciting Title", "I am news");
  assert.isTrue(typeof newsSummary === "object", "testInstantiation")
})();

(function testTitleReturn() {
  var newsSummary = new NewsSummary("Exciting Title", "I am news");
  assert.isTrue(newsSummary.returnTitle() === "Exciting Title", "testTitleReturn")
})();

(function testSummaryReturn() {
  var newsSummary = new NewsSummary("Exciting Title", "I am news");
  assert.isTrue(newsSummary.returnSummary() === "I am news", "testSummaryReturn")
})();
