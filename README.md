# Timetable

Just a simple, no-fuss timetable I built because I wanted something fast, offline-first, and with a design that has some personality. It tracks my class schedule and attendance without needing a server or any complicated setup.

---

### What is this?

It's a complete, single-page application built with three files. The goal was to create something I could just drop onto any static host and have it work.

**Here's what it does:**

*   **Clean views** for the full week or just today.
*   A simple **attendance tracker** with a full calendar.
*   Saves everything in your browser's `localStorage`, so **no data ever leaves your machine**.
*   It's a **PWA**. You can install it to your home screen and it works completely offline.
*   Quickly mark a whole day present (`P`) or absent (`A`) with keyboard shortcuts.

### The Tech

-   Vanilla JS (ES6+)
-   Tailwind CSS (via CDN for simplicity)
-   Lucide Icons

No frameworks, no build steps, no nonsense.

---

### A Few Thoughts

I intentionally kept this stateless from a server perspective. All your attendance data lives and dies in your browser. It makes the app simple, private, and easy to host for free on places like GitHub Pages or Netlify.

The neo-brutalist design was a fun constraint. It's all about clear structure, raw components, and bold typography, which I think works well for a utility app like this.

---