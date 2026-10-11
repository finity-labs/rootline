# Rootline

Build your family tree in the browser. One page, no account, nothing to install.

**[Open Rootline](https://finity-labs.github.io/rootline/)** — or download this repository and open `index.html` locally; it works straight from a `file://` URL.

## What it does

- Add parents, partners, children and siblings with a couple of taps. Each person has a name, a birth or maiden name when it differs, dates of birth and death (a year is enough), a gender and free notes.
- Marriages, partnerships, divorces, separations and parents who were never a couple are drawn differently, and a couple can be given its own dates. The kind is chosen when the partner is added and can be changed later.
- When you add a brother, sister, parent or child, the family name they most likely share is already in the box. A "Name order" setting in the menu says whether the family name comes first, as in Hungarian, or last, as in English; it follows the language unless you change it.
- The tree is drawn around whoever you centre it on: their ancestors above, their parents' descendants below. Drag to pan, pinch or scroll to zoom, tap a card to open it. A `+` badge on a card means more relatives are hidden; centre the tree on that person to see them.
- Put someone in the wrong place? Press and hold their card and drag it onto the right parent, onto a brother or sister, or onto the ring between a couple. Their partner and children come along. The Move button in the side panel does the same with a tap instead of a drag.
- Show everyone at once with the button beside the zoom controls: the whole tree in one picture, generation by generation, with the families people married into drawn next to them. Jumping to a person then just scrolls to them. The choice is remembered for each tree.
- Undo and redo, a search box, and a list of everyone in the tree that you can narrow by name or year.
- Keep several trees side by side, each with its own name, and switch between them from the menu. Opening a file or the sample family never replaces a tree you have been working on.
- Save the tree as a file and open it again later or on another device. Export to GEDCOM for other genealogy programs, or save the drawing as a PNG or SVG picture.
- Works offline once opened, and installs as an app on phones and tablets.

## Your data stays with you

Rootline runs entirely in your browser. Your trees are kept in the browser's own storage on your device and are never sent anywhere. There is no server, no account and no tracking. If you want a copy, or want to move a tree to another device, save it to a file from the menu.

Clearing the browser's site data removes the trees, so keep a saved file of anything you would not want to lose.

## Languages

Rootline speaks English and Hungarian. Each language is one file in `lang/`. To add yours, copy `lang/en.js`, translate every value, save it as `lang/<code>.js`, and add the code and the language's name (written in that language) to `lang/languages.js`. Pull requests with new languages are welcome.

## Licence

MIT. See [LICENSE](LICENSE).

---

© 2026 Finity Labs.
