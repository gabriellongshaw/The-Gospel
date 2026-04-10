export function initStories() {
  document.querySelectorAll('.story-item').forEach(item => {
    const summary = item.querySelector('.story-summary');
    const body = item.querySelector('.story-body');
    if (!summary || !body) return;

    summary.addEventListener('click', e => {
      e.preventDefault();
      const isOpen = item.hasAttribute('open');

      if (!isOpen) {
        item.setAttribute('open', '');
        const targetH = body.scrollHeight;
        body.style.height = '0px';

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            body.style.height = targetH + 'px';
          });
        });

        body.addEventListener('transitionend', function h() {
          body.style.height = 'auto';
          body.removeEventListener('transitionend', h);
        }, { once: true });

      } else {
        body.style.height = body.scrollHeight + 'px';

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            body.style.height = '0px';
          });
        });

        body.addEventListener('transitionend', function h() {
          item.removeAttribute('open');
          body.removeEventListener('transitionend', h);
        }, { once: true });
      }
    });
  });
}
