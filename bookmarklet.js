//javascript:
(function () {
  var script;
  if (!($ = window.jQuery)) {
    script = document.createElement('script');
    script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js';
      script.onload=init;
      document.body.appendChild(script);
  } else {
    init();
  }

  function init() {
    script = document.createElement('script');
    script.setAttribute('src', 'https://raw.github.com/chrisbreiding/random-text-bookmarklet/master/random-text.js');
    document.body.appendChild(script);
  }
}());
