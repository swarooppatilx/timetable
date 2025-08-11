const timetableData = [
    {
        id: "ty-it",
        displayName: "TY IT",
        batches: ["T1", "T2", "T3"],
        days: [
            {
                day: "Monday",
                dayIndex: 1,
                slots: [
                    { time: "08:15-09:15", type: "lecture", subject: "ML", teacher: "MKP", room: "605", color: "#ef4444" },
                    { time: "09:15-10:15", type: "lecture", subject: "SEPM", teacher: "RYT", room: "605", color: "#22c55e" },
                    {
                        time: "10:30-12:30",
                        type: "lab",
                        color: "#a855f7",
                        batches: [
                            { name: "T1", subject: "SL-1 Lab", teacher: "ASP", room: "607-A" },
                            { name: "T2", subject: "SEPM Lab", teacher: "RYT", room: "607-A" },
                            { name: "T3", subject: "SL-1 Lab", teacher: "NF1", room: "607-B" }
                        ]
                    },
                    { time: "13:15-14:15", type: "lecture", subject: "TOC", teacher: "JCP", room: "605", color: "#eab308" },
                    { time: "14:15-15:15", type: "lecture", subject: "Honors", teacher: "MAT", room: "605", color: "#22c55e" },
                    { time: "15:15-16:15", type: "lecture", subject: "Minor", teacher: "RYT", room: "605", color: "#8b5cf6" }
                ]
            },
            {
                day: "Tuesday",
                dayIndex: 2,
                slots: [
                    { time: "08:15-09:15", type: "lecture", subject: "ELE-1", teacher: "ASP", room: "605", color: "#ef4444" },
                    { time: "09:15-10:15", type: "lecture", subject: "Audit Course", teacher: "NF2", room: "605", color: "#f97316" },
                    {
                        time: "10:30-12:30",
                        type: "lab",
                        color: "#a855f7",
                        batches: [
                            { name: "T1", subject: "ML Lab", teacher: "MKP", room: "603" },
                            { name: "T2", subject: "SL-1 Lab", teacher: "ASP", room: "607-A" },
                            { name: "T3", subject: "SEPM Lab", teacher: "RYT", room: "607-A" }
                        ]
                    },
                    { time: "13:15-14:15", type: "lecture", subject: "SEPM", teacher: "RYT", room: "605", color: "#3b82f6" },
                    { time: "14:15-15:15", type: "lecture", subject: "ML", teacher: "MKP", room: "605", color: "#8b5cf6" },
                    { time: "15:15-16:15", type: "lecture", subject: "Minor", teacher: "RYT", room: "605", color: "#8b5cf6" }

                ]
            },
            {
                day: "Wednesday",
                dayIndex: 3,
                slots: [
                    { time: "08:15-09:15", type: "lecture", subject: "TOC", teacher: "JCP", room: "605", color: "#eab308" },
                    { time: "09:15-10:15", type: "lecture", subject: "ML", teacher: "MKP", room: "605", color: "#ef4444" },
                    {
                        time: "10:30-12:30",
                        type: "lab",
                        color: "#a855f7",
                        batches: [
                            { name: "T1", subject: "SEPM Lab", teacher: "RYT", room: "607-A" },
                            { name: "T2", subject: "ML Lab", teacher: "MKP", room: "603" },
                            { name: "T3", subject: "SL-1 Lab", teacher: "ASP", room: "607-A" }
                        ]
                    },
                    { time: "13:15-15:15", type: "lecture", subject: "CCRP", teacher: "NF", room: "605", color: "#3b82f6" },
                    { time: "15:15-16:15", type: "lecture", subject: "IPR", teacher: "NF1", room: "605", color: "#8b5cf6" }
                ]
            },
            {
                day: "Thursday",
                dayIndex: 4,
                slots: [
                    { time: "08:15-09:15", type: "lecture", subject: "SEPM", teacher: "RYT", room: "605", color: "#ef4444" },
                    { time: "09:15-10:15", type: "lecture", subject: "TOC", teacher: "JCP", room: "605", color: "#f97316" },
                    {
                        time: "10:30-12:30",
                        type: "lab",
                        color: "#a855f7",
                        batches: [
                            { name: "T1", subject: "N/A", teacher: "N/A", room: "N/A" },
                            { name: "T2", subject: "SL-1 Lab", teacher: "ASP", room: "607-A" },
                            { name: "T3", subject: "ML Lab", teacher: "MKP", room: "607-B" }
                        ]
                    },
                    { time: "13:15-14:15", type: "lecture", subject: "ELE-1", teacher: "ASP", room: "605", color: "#3b82f6" },
                    { time: "14:15-15:15", type: "lecture", subject: "ACTIVITY", teacher: "N/A", room: "605", color: "#8b5cf6" },
                    { time: "15:15-16:15", type: "lecture", subject: "Minor", teacher: "RYT", room: "605", color: "#8b5cf6" }

                ]
            },
            {
                day: "Friday",
                dayIndex: 5,
                slots: [
                    { time: "08:15-09:15", type: "lecture", subject: "IPR", teacher: "NF1", room: "605", color: "#ef4444" },
                    { time: "09:15-10:15", type: "lecture", subject: "ELE-1", teacher: "ASP", room: "608", color: "#f97316" },
                    {
                        time: "10:30-12:30",
                        type: "lab",
                        color: "#a855f7",
                        batches: [
                            { name: "T1", subject: "SL-1 Lab", teacher: "ASP", room: "607-A" },
                            { name: "T2", subject: "N/A", teacher: "N/A", room: "N/A" },
                            { name: "T3", subject: "N/A", teacher: "N/A", room: "N/A" }
                        ]
                    },
                    { time: "13:15-14:15", type: "lecture", subject: "LIBRARY", teacher: "ASP", room: "605", color: "#3b82f6" },
                    { time: "14:15-15:15", type: "lecture", subject: "TOC Tut", teacher: "JCP", room: "605", color: "#8b5cf6" },
                    { time: "15:15-16:15", type: "lecture", subject: "MOOC", teacher: "JCP", room: "605", color: "#8b5cf6" }

                ]
            },
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
    },
];
