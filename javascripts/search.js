(function() {
  $(function() {
    $('.search-submit').on('click', function(e) {
      var search_term;
      e.preventDefault();
      search_term = $('.search-term').val().toLowerCase();
      return $.getJSON('/entries.json', function(data) {
        var i, result, results, value, _i, _j, _len, _len1, _results;
        results = [];
        for (_i = 0, _len = data.length; _i < _len; _i++) {
          i = data[_i];
          value = 0;
          if (i.title.toLowerCase().split(search_term).length - 1 !== 0) {
            value = 10;
          }
          if (i.content.toLowerCase().split(search_term).length - 1 !== 0) {
            value += (i.content.toLowerCase().split(search_term).length - 1) * 5;
          }
          if (value !== 0) {
            i.value = value;
            results.push(i);
          }
        }
        $('#SearchResult').html('');
        if (results.length > 0) {
          _results = [];
          for (_j = 0, _len1 = results.length; _j < _len1; _j++) {
            result = results[_j];
            _results.push($('#SearchResult').append('<p><a class="copy-bg" href="/' + result.url + '">' + result.title + '</a></p>'));
          }
          return _results;
        } else {
          $('#SearchResult').append('<p>No results found. Sorry.</p>');
        }
      });
    });
    this;
    $('.search-term').on('keypress', function(e) {
      var search_term;
      if (e.which && e.which === 13 || e.keyCode && e.keyCode === 13) {
        search_term = $('.search-term').val().toLowerCase();
        return $.getJSON('/entries.json', function(data) {
          var i, result, results, value, _i, _j, _len, _len1, _results;
          results = [];
          for (_i = 0, _len = data.length; _i < _len; _i++) {
            i = data[_i];
            value = 0;
            if (i.title.toLowerCase().split(search_term).length - 1 !== 0) {
              value = 10;
            }
            if (i.content.toLowerCase().split(search_term).length - 1 !== 0) {
              value += (i.content.toLowerCase().split(search_term).length - 1) * 5;
            }
            if (value !== 0) {
              i.value = value;
              results.push(i);
            }
          }
          $('#SearchResult').html('');
          if (results.length > 0) {
            _results = [];
            for (_j = 0, _len1 = results.length; _j < _len1; _j++) {
              result = results[_j];
              _results.push($('#SearchResult').append('<p><a class="copy-bg" href="/' + result.url + '">' + result.title + '</a></p>'));
            }
            return _results;
          } else {
            $('#SearchResult').append('<p>No results found. Sorry.</p>');
          }
        });
      }
    });
    return this;
  });

}).call(this);
