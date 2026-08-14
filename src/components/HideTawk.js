'use client';

import { useEffect } from 'react';

export default function HideTawk() {
  useEffect(() => {
    // Prefer Tawk JS API if available
    if (typeof window !== 'undefined' && window.Tawk_API) {
      try {
        if (typeof window.Tawk_API.hideWidget === 'function') {
          window.Tawk_API.hideWidget();
        }
      } catch (e) {
        // ignore
      }
    }

    // Fallback: hide common Tawk DOM nodes if present
    const selectors = [
      '#tawkchat-minified',
      '#tawkChat',
      '#tawk-button',
      '.tawk-minified',
      '.tawk-chat',
      '[id^="tawk"]',
      'iframe[src*="tawk.to"]',
    ];

    const hiddenEls = [];

    selectors.forEach((sel) => {
      try {
        document.querySelectorAll(sel).forEach((el) => {
          // store previous inline display so we can restore
          hiddenEls.push({ el, prev: el.style.display });
          el.style.display = 'none';
          el.style.pointerEvents = 'none';
        });
      } catch (e) {
        // ignore invalid selectors
      }
    });

    return () => {
      // restore via API if available
      if (typeof window !== 'undefined' && window.Tawk_API) {
        try {
          if (typeof window.Tawk_API.showWidget === 'function') {
            window.Tawk_API.showWidget();
          }
        } catch (e) {
          // ignore
        }
      }

      // restore DOM nodes
      hiddenEls.forEach(({ el, prev }) => {
        try {
          el.style.display = prev || '';
          el.style.pointerEvents = '';
        } catch (e) {
          // ignore
        }
      });
    };
  }, []);

  return null;
}
