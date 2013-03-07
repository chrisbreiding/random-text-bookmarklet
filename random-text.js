(function ($) {

  var textOptions = getText(),
      regExes = Object.keys(textOptions).map(function (keyword) {
        return {
          keyword: keyword,
          re: new RegExp(keyword + '$')
        };
      });

  $('textarea, input').on('keydown', function (e) {
    var textInput,
        textArray,
        match,
        $this = $(this);

    if (e.which === 9) {
      textInput = $this.val();
      match = false;

      regExes.forEach(function (re) {
        if ( re.re.test(textInput) ) match = re;
      });

      if (match) {
        e.preventDefault();
        textArray = textOptions[match.keyword];
        $this.val( textInput.replace(match.re, '') + textArray[randomIndex(textArray.length)] );
      }
    }
  });

  function randomIndex (len) {
    return Math.floor( Math.random() * len );
  }

  function getText () {
    return {
      "emot": [
        "\\(^_^)/",
        "b(^_^)d",
        "(・◇・)",
        "(＾_＾)",
        "(￣ー￣)",
        "(*^▽^*)",
        "(＾▽＾)",
        "(’-’*)",
        "＼(＾ ＾）／",
        "(^～^)",
        "＼(＠￣∇￣＠）／",
        "(☆^O^☆)",
        "(★^O^★)",
        "(☆^ー^☆)",
        "ヽ(‘ ∇‘ )ノ",
        "(*＾ワ＾*）",
        "(-＾〇＾-",
        "ヽ(^。^)丿",
        "(＾ｖ＾）",
        "ヾ(@^▽^@)ノ",
        "ヾ(@°▽°@)ノ",
        "ヾ(＠＾▽＾＠）ノ",
        "ヾ(＠^∇^＠)ノ",
        "o((*^▽^*))o",
        "(°◇°;)",
        "ヽ(;^o^ヽ)",
        "(•‿•)"
      ],
      "loremt": [
        "Lorem ipsum dolor sit amet",
        "Consectetuer adipiscing elit",
        "Aenean commodo ligula eget dolor",
        "Aenean massa",
        "Cum sociis natoque penatibus et magnis di",
        "Nascetur ridiculus mus. Donec quam felis",
        "Pellentesque eu pretium quis sem",
        "Nulla consequat massa quis enim",
        "Donec pede justo",
        "Vulputate eget arcu",
        "Rhoncus ut imperdiet a"
      ],
      "lorems": [
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
        "Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
        "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. ",
        "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium."
      ],
      "loremp": [
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium."
      ],
      "band": [
        "Pink Floyd",
        "Led Zeppelin",
        "Metallica",
        "Cream",
        "The Beatles",
        "Megadeth",
        "Slayer",
        "The Doors",
        "Black Sabbath",
        "The Who"
      ]
    };
  }

}(jQuery));
