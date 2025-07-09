# Heal Better Tobacco Cessation Widget

This project provides an embeddable React application that lists tobacco cessation strategies. The app can be embedded in other websites via an `<iframe>`.

## Embedding

Use the following HTML to embed the app:

```html
<iframe
  src="https://noa-kim.github.io/heal-better-tobacco-vite/"
  style="width:100%;border:0;overflow:hidden" 
  scrolling="no"></iframe>
```

Because the widget may be served from a different origin than the host page, make sure the host page is able to receive cross‑origin messages.

## Automatic Height Adjustment

The app sends its height to the parent window whenever it loads or the window resizes. The parent page can adjust the iframe height by listening for the `hb-height` message.

### WordPress Example

Add the following snippet to your WordPress theme or via a custom HTML block to automatically resize the iframe:

```html
<script>
window.addEventListener('message', function(e) {
  if (e.data && e.data.type === 'hb-height') {
    const frame = document.querySelector('iframe[src*="heal-better-tobacco-vite"]');
    if (frame) {
      frame.style.height = e.data.height + 'px';
    }
  }
});
</script>
```

This listens for the `hb-height` message and sets the matching iframe's height accordingly.
