/** Routes that hide site header/footer on mobile and show a centered logo instead. */
export const MOBILE_CHROME_HIDDEN_PATHS = [
  '/live-agent',
  '/independent-support-help',
];

export function hidesChromeOnMobile(pathname) {
  return MOBILE_CHROME_HIDDEN_PATHS.includes(pathname || '');
}
