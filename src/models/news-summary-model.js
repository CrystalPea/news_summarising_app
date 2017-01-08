(function(exports) {
  function NewsSummary(string1, string2) {
    this._title = string1
    this._summary = string2
  }

  NewsSummary.prototype.returnTitle = function() {
    return this._title
  };

  NewsSummary.prototype.returnSummary = function() {
    return this._summary
  };

  exports.NewsSummary = NewsSummary;
})(this);
