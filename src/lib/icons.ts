// Small monoline SVG icons used across the site (category pills, buttons, search).
// All icons use `currentColor` so they inherit their surrounding text color.

function svg(inner: string) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;
}

export const ICONS = {
  all: svg(
    '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>'
  ),
  entrees: svg(
    '<path d="M3 11h18a9 9 0 0 1-18 0Z"/><path d="M12 11V4"/><path d="M8.5 7 9.5 4"/><path d="M15.5 7 14.5 4"/>'
  ),
  tartesSalades: svg(
    '<path d="M12 3v9l7.79 4.5A9 9 0 1 1 12 3Z"/><path d="M12 12 4.2 16.5"/>'
  ),
  plats: svg('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/>'),
  desserts: svg(
    '<path d="M7 21h10l-1-9H8Z"/><path d="M6 12h12a1 1 0 0 0 .9-1.45C17.8 8.2 15.1 6 12 6S6.2 8.2 5.1 10.55A1 1 0 0 0 6 12Z"/><path d="M12 6V3"/>'
  ),
  preparations: svg(
    '<path d="M12 2v6"/><path d="M9 8c-2 0-3 2-3 4.5S8.5 20 12 20s6-5 6-7.5S16 8 14 8"/><path d="M12 20v2"/>'
  ),
  search: svg('<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>'),
  arrowRight: svg('<path d="M5 12h14"/><path d="M13 6l6 6-6 6"/>'),
};
