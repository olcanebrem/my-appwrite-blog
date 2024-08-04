// src/utils/formatDate.js
export function formatDate(dateString, locale = 'en-US') {
    const date = new Date(dateString);
    return date.toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
  