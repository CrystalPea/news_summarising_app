(function(exports) {
  function NewsList() {
    this._news = []
  }

  NewsList.prototype.addNews = function(news) {
    this._news.push(news)
  };

exports.NewsList = NewsList;
})(this);
