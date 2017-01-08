(function(exports) {
  function NewsList() {
    this._news = []
  }

  NewsList.prototype.addNews = function(news) {
    this._news.push(news)
  };

  NewsList.prototype.ReturnListOfNotes = function() {
    return this._news
  };

exports.NewsList = NewsList;
})(this);
