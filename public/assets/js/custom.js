function UpdateCopyYear() {
  var d = new Date();
  document.getElementById('copy-year').innerHTML = d.getFullYear();
}

$(document).ready(function() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('service-worker.js')
      .then(function(reg) {
        console.log('Service Worker registered successfully');
      })
      .catch(function(err) {
        console.log('Service worker registration failed');
      });
  }

  window.addEventListener('load', function() {
    window.cookieconsent.initialise({
      palette: {
        popup: {
          background: '#237afc',
        },
        button: {
          background: '#fff',
          text: '#237afc',
        },
      },
      theme: 'edgeless',
      content: {
        message: 'Esta web usa cookies para mejorar la experiencia del usuario.',
        dismiss: 'Entendido',
        link: 'Más información',
      },
    });
  });

  (function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    (i[r] =
      i[r] ||
      function() {
        (i[r].q = i[r].q || []).push(arguments);
      }),
      (i[r].l = 1 * new Date());
    (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
  ga('create', 'UA-55424484-5', 'auto');
  ga('send', 'pageview');

  window.cookieconsent_options = {
    message: 'Esta web usa cookies para mejorar la experiencia del usuario',
    dismiss: 'Entendido',
    learnMore: 'Más info',
    link: 'https://www.google.com/about/company/user-consent-policy.html',
    theme: 'light-bottom',
  };

  UpdateCopyYear();
});
