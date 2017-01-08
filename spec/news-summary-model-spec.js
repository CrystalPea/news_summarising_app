(function testSummaryInstantiation() {
  var newsSummary = new NewsSummary("Exciting Title", "I am news");
  assert.isTrue(typeof newsSummary === "object", "testSummaryInstantiation")
})();

(function testTitleReturn() {
  var newsSummary = new NewsSummary("Exciting Title", "I am news");
  assert.isTrue(newsSummary.returnHeadline() === "Exciting Title", "testTitleReturn")
})();

(function testSummaryReturn() {
  var newsSummary = new NewsSummary("Exciting Title", "I am news");
  assert.isTrue(newsSummary.returnSummary() === "I am news", "testSummaryReturn")
})();
