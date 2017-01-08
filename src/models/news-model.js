(function(exports) {
  function News(string1, string2) {
    this._headline = string1
    this._summary = string2
  }

  News.prototype.returnHeadline = function() {
    return this._headline
  };

  News.prototype.returnSummary = function() {
    return this._summary
  };

  exports.News = News;
})(this);
