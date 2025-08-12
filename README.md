# Timetable

A simple, no-fuss timetable I built because I wanted something fast, offline-first, and with a design that actually has some personality. It tracks class schedules and attendance without needing a server or complicated setup.

## Screenshots

<div align="center">
    <img src="assets/screenshot_today.png" alt="Today View" width="33%">
    <img src="assets/screenshot_week.png" alt="Week View" width="33%">
    <img src="assets/screenshot_calendar.png" alt="Calendar View" width="33%">
</div>

---

## What is this?

A complete, single-page application built with just three files. The goal was to create something I could drop onto any static host and have it work instantly.

**Features:**
- Clean views for the full week or just today  
- Attendance tracker with a full calendar  
- Saves everything in your browser’s `localStorage` — no data ever leaves your machine  
- PWA support — can be installed to your home screen and used completely offline  
- Quick keyboard shortcuts to mark an entire day present (`P`) or absent (`A`)

---

## Tech Stack

- Vanilla JS (ES6+)  
- Tailwind CSS (via CDN)  
- Lucide Icons  

No frameworks. No build steps. No extra tooling.

---

## Timetable Data Format

The timetable data is stored in a JavaScript array called `timetableData`.

You can:
- Add more days for an existing timetable  
- Add entirely new timetables for different classes or batches  

Example:

```js
const timetableData = [
  {
    id: "ty-it", // Unique ID for this timetable
    displayName: "TY IT", // Display name for UI
    batches: ["T1", "T2", "T3"],

    days: [
      {
        day: "Monday",
        dayIndex: 1, // 1 = Monday, 2 = Tuesday, etc.
        slots: [
          {
            time: "08:15-09:15",
            type: "lecture",
            subject: "ML",
            teacher: "MKP",
            room: "605",
            color: "#ef4444"
          },
          {
            time: "10:30-12:30",
            type: "lab",
            color: "#a855f7",
            batches: [
              { name: "T1", subject: "SL-1 Lab", teacher: "ASP", room: "607-A" },
              { name: "T2", subject: "SEPM Lab", teacher: "RYT", room: "607-A" },
              { name: "T3", subject: "SL-1 Lab", teacher: "NF1", room: "607-B" }
            ]
          }
        ]
      }

      // Add more days here...
    ],

    timeSlots: [
      { start: "08:15", end: "09:15" },
      { start: "09:15", end: "10:15" },
      { start: "10:15", end: "10:30", label: "Tea Break" },
      { start: "10:30", end: "12:30" },
      { start: "12:30", end: "13:15", label: "Lunch Break" },
      { start: "13:15", end: "14:15" },
      { start: "14:15", end: "15:15" },
      { start: "15:15", end: "16:15" }
    ]
  }

  // Add another timetable here for a different class or section...
];
````

---

## Contributing

If you want to improve this project, here’s how:

### 1. Fork and clone

```sh
git clone https://github.com/swarooppatilx/timetable.git
cd timetable
```

### 2. Make your changes

* Edit `timetableData` in `data.js` to add or update schedules
* Modify `style.css` or Tailwind classes in `index.html` for styling
* Add features or fix bugs in `app.js`

### 3. Test locally

Open `index.html` directly in a browser.
If you want to test PWA features like offline mode, run a local server:

```sh
python -m http.server
```

### 4. Commit and push

```sh
git add .
git commit -m "feat: add new timetable for SY IT"
git push origin main
```

### 5. Create a pull request

Go to your fork on GitHub and submit a PR.
