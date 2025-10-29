const urlInput = document.getElementById('url');
const goBtn = document.getElementById('go');
const backBtn = document.getElementById('back');
const forwardBtn = document.getElementById('forward');
const reloadBtn = document.getElementById('reload');
const webview = document.getElementById('webview');

// Navigate when clicking Go
goBtn.addEventListener('click', () => {
  let url = urlInput.value.trim();
  if (!url) return;
  if (!url.startsWith('http')) url = 'https://' + url;
  webview.src = url;
});

// Simple back/forward using browser history inside iframe (very basic)
backBtn.addEventListener('click', () => {
  try { webview.contentWindow.history.back(); } catch (e) {}
});
forwardBtn.addEventListener('click', () => {
  try { webview.contentWindow.history.forward(); } catch (e) {}
});
reloadBtn.addEventListener('click', () => {
  webview.src = webview.src;
});

// Update the address bar when iframe loads a new page
webview.addEventListener('load', () => {
  try {
    urlInput.value = webview.contentWindow.location.href;
  } catch (e) {
    // cross-origin pages may block reading location — ignore safely
    urlInput.value = webview.src;
  }
});
