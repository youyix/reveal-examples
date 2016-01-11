(function(role, params) {
  var role = role;
  var revealjsPath = 'reveal.js/';

  var transition = params['transition'] ? params['transition'] : 'slide';

  var dependencies = {
    'common': [
      { src: revealjsPath + 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
      { src: revealjsPath + 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
      { src: revealjsPath + 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
      { src: revealjsPath + 'plugin/highlight/highlight.js', async: false, callback: function() { hljs.initHighlightingOnLoad(); } },
      { src: revealjsPath + 'plugin/zoom-js/zoom.js', async: false },
    ],
    'presenter-only': [ { src: revealjsPath + 'plugin/notes/notes.js', async: false } ],
    'viewer-only': []
  };

  var revealSettings = Object.create(null);

  revealSettings['presenter'] = {
    controls: true,
    progress: true,
    history: true,
    center: true,

    transition:  transition, // none/fade/slide/convex/concave/zoom

    dependencies: dependencies['common'].concat(dependencies['presenter-only'])
  };

  revealSettings['viewer'] = {
    controls: false,
    progress: true,
    history: true,
    center: true,

    transition: transition, // none/fade/slide/convex/concave/zoom

    dependencies: dependencies['common'].concat(dependencies['viewer-only']),

    keyboard: {
      80: null,
      33: null,
      78: null,
      34: null,
      72: null,
      37: null,
      76: null,
      39: null,
      75: null,
      38: null,
      74: null,
      40: null,
      36: null,
      35: null,
      32: null,
      13: null,
      58: null,
      59: null,
      66: null,
      190: null,
      191: null,
      70: null,
      65: null,
      27: null
    }
  }

  Reveal.initialize(revealSettings[role]);

})(window.role, window.params);







