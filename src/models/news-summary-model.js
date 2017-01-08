(function(exports) {
  function NewsSummary(string1, string2) {
    this._headline = string1
    this._summary = string2
  }

  NewsSummary.prototype.returnHeadline = function() {
    return this._headline
  };

  NewsSummary.prototype.returnSummary = function() {
    return this._summary
  };

  exports.NewsSummary = NewsSummary;
})(this);
