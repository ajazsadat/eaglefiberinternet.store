/** Routes that hide the site header and footer entirely. */
export const CHROME_HIDDEN_PATHS = [
  '/contact-us-to-compare',
  '/compare-internet-options',
];

export function hidesChrome(pathname) {
  return CHROME_HIDDEN_PATHS.includes(pathname || '');
}

/** @deprecated Use hidesChrome — kept for any older imports */
export function hidesChromeOnMobile(pathname) {
  return hidesChrome(pathname);
}
