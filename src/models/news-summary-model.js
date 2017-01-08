(function(exports) {
  function NewsSummary(string1, string2) {
    this._title = string1
    this._text = string2
  }

  NewsSummary.prototype.returnTitle = function() {
    return this._title
  };

  exports.NewsSummary = NewsSummary;
})(this);
