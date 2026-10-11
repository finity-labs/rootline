// The languages Rootline ships. Each entry has a file lang/<code>.js that
// registers its strings under window.ROOTLINE_STRINGS[code]. Add a language by
// copying lang/en.js, translating every value, and listing it here. The name is
// written in the language itself so people can find their own in the picker.
// familyFirst marks languages that write the family name before the given name.
window.ROOTLINE_LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'hu', name: 'Magyar', familyFirst: true },
  { code: 'de', name: 'Deutsch' },
  { code: 'fr', name: 'Français' },
  { code: 'es', name: 'Español' },
  { code: 'it', name: 'Italiano' },
  { code: 'pt', name: 'Português' },
  { code: 'nl', name: 'Nederlands' },
  { code: 'pl', name: 'Polski' },
  { code: 'cs', name: 'Čeština' },
  { code: 'sk', name: 'Slovenčina' },
  { code: 'ro', name: 'Română' },
  { code: 'hr', name: 'Hrvatski' },
  { code: 'sv', name: 'Svenska' },
  { code: 'uk', name: 'Українська' },
];
