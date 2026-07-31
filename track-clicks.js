// Report outbound link clicks to GoatCounter as named events.
// Every tracked link opens in a new tab, so the page stays alive long
// enough for the beacon to send.
document.addEventListener('click', function (e) {
  var link = e.target.closest('a[data-gc]');
  if (!link) return;
  if (!window.goatcounter || typeof window.goatcounter.count !== 'function') return;

  window.goatcounter.count({
    path: link.dataset.gc,
    title: link.dataset.gc,
    event: true
  });
});
