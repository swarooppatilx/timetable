const timetableData = [
    {
        id: "ty-it",
        displayName: "TY IT",
        batches: ["T1", "T2", "T3"],
        examPeriods: {
            insem1: { start: '2025-07-14', end: '2025-07-25' },
            insem2: { start: '2025-08-04', end: '2025-08-14' },
            endsem: { start: '2025-08-25', end: '2025-10-31' },
        },
        days: [
            {
                day: "Monday",
                dayIndex: 1,
                slots: [
                    { time: "08:15-09:15", type: "lecture", subject: "ML", teacher: "MKP", room: "605", color: "#ff3d7f" },
                    { time: "09:15-10:15", type: "lecture", subject: "SEPM", teacher: "RYT", room: "605", color: "#ff9f43" },
                    {
                        time: "10:30-12:30",
                        type: "lab",
                        batches: [
                            { name: "T1", subject: "SL-1 Lab", teacher: "ASP", room: "607-A", color: "#3498db" },
                            { name: "T2", subject: "SEPM Lab", teacher: "RYT", room: "607-A", color: "#ff9f43" },
                            { name: "T3", subject: "SL-1 Lab", teacher: "NF1", room: "607-B", color: "#3498db" }
                        ]
                    },
                    { time: "13:15-14:15", type: "lecture", subject: "TOC", teacher: "JCP", room: "605", color: "#ffc600" },
                    { time: "14:15-15:15", type: "lecture", subject: "Honors", teacher: "MAT", room: "605", color: "#1e90ff" },
                    { time: "15:15-16:15", type: "lecture", subject: "Minor", teacher: "RYT", room: "605", color: "#00d2d3" }
                ]
            },
            {
                day: "Tuesday",
                dayIndex: 2,
                slots: [
                    { time: "08:15-09:15", type: "lecture", subject: "ELE-1", teacher: "ASP", room: "605", color: "#2ed573" },
                    { time: "09:15-10:15", type: "lecture", subject: "Audit Course", teacher: "NF2", room: "605", color: "#575fcf" },
                    {
                        time: "10:30-12:30",
                        type: "lab",
                        batches: [
                            { name: "T1", subject: "ML Lab", teacher: "MKP", room: "603", color: "#ff3d7f" },
                            { name: "T2", subject: "SL-1 Lab", teacher: "ASP", room: "607-A", color: "#3498db" },
                            { name: "T3", subject: "SEPM Lab", teacher: "RYT", room: "607-A", color: "#ff9f43" }
                        ]
                    },
                    { time: "13:15-14:15", type: "lecture", subject: "SEPM", teacher: "RYT", room: "605", color: "#ff9f43" },
                    { time: "14:15-15:15", type: "lecture", subject: "ML", teacher: "MKP", room: "605", color: "#ff3d7f" },
                    { time: "15:15-16:15", type: "lecture", subject: "Minor", teacher: "RYT", room: "605", color: "#00d2d3" }
                ]
            },
            {
                day: "Wednesday",
                dayIndex: 3,
                slots: [
                    { time: "08:15-09:15", type: "lecture", subject: "TOC", teacher: "JCP", room: "605", color: "#ffc600" },
                    { time: "09:15-10:15", type: "lecture", subject: "ML", teacher: "MKP", room: "605", color: "#ff3d7f" },
                    {
                        time: "10:30-12:30",
                        type: "lab",
                        batches: [
                            { name: "T1", subject: "SEPM Lab", teacher: "RYT", room: "607-A", color: "#ff9f43" },
                            { name: "T2", subject: "ML Lab", teacher: "MKP", room: "603", color: "#ff3d7f" },
                            { name: "T3", subject: "SL-1 Lab", teacher: "ASP", room: "607-A", color: "#3498db" }
                        ]
                    },
                    { time: "13:15-15:15", type: "lecture", subject: "CCRP", teacher: "NF", room: "605", color: "#ff4757" },
                    { time: "15:15-16:15", type: "lecture", subject: "IPR", teacher: "NF1", room: "605", color: "#5352ed" }
                ]
            },
            {
                day: "Thursday",
                dayIndex: 4,
                slots: [
                    { time: "08:15-09:15", type: "lecture", subject: "SEPM", teacher: "RYT", room: "605", color: "#ff9f43" },
                    { time: "09:15-10:15", type: "lecture", subject: "TOC", teacher: "JCP", room: "605", color: "#ffc600" },
                    {
                        time: "10:30-12:30",
                        type: "lab",
                        batches: [
                            { name: "T1", subject: "", teacher: "", room: "" },
                            { name: "T2", subject: "SL-1 Lab", teacher: "ASP", room: "607-A", color: "#3498db" },
                            { name: "T3", subject: "ML Lab", teacher: "MKP", room: "607-B", color: "#ff3d7f" }
                        ]
                    },
                    { time: "13:15-14:15", type: "lecture", subject: "ELE-1", teacher: "ASP", room: "605", color: "#2ed573" },
                    { time: "14:15-15:15", type: "lecture", subject: "ACTIVITY", teacher: "", room: "605", color: "#a4b0be" },
                    { time: "15:15-16:15", type: "lecture", subject: "Minor", teacher: "RYT", room: "605", color: "#00d2d3" }
                ]
            },
            {
                day: "Friday",
                dayIndex: 5,
                slots: [
                    { time: "08:15-09:15", type: "lecture", subject: "IPR", teacher: "NF1", room: "605", color: "#5352ed" },
                    { time: "09:15-10:15", type: "lecture", subject: "ELE-1", teacher: "ASP", room: "608", color: "#2ed573" },
                    {
                        time: "10:30-12:30",
                        type: "lab",
                        batches: [
                            { name: "T1", subject: "SL-1 Lab", teacher: "ASP", room: "607-A", color: "#3498db" },
                            { name: "T2", subject: "", teacher: "", room: "" },
                            { name: "T3", subject: "", teacher: "", room: "" }
                        ]
                    },
                    { time: "13:15-14:15", type: "lecture", subject: "LIBRARY", teacher: "ASP", room: "605", color: "#706fd3" },
                    { time: "14:15-15:15", type: "lecture", subject: "TOC Tut", teacher: "JCP", room: "605", color: "#ffc600" },
                    { time: "15:15-16:15", type: "lecture", subject: "MOOC", teacher: "JCP", room: "605", color: "#f78fb3" }
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
    {
        id: "ty-elec",
        displayName: "TY Elec",
        batches: ["T1", "T2", "T3"],
        examPeriods: {
            insem1: { start: '2025-07-14', end: '2025-07-25' },
            insem2: { start: '2025-08-04', end: '2025-08-14' },
            endsem: { start: '2025-08-25', end: '2025-10-31' },
        },
        days: [
            {
                day: "Monday",
                dayIndex: 1,
                slots: [
                    { time: "08:15-09:15", type: "lecture", subject: "IPR", teacher: "VPK", room: "213", color: "#5352ed" },
                    { time: "09:15-10:15", type: "lecture", subject: "PEMD", teacher: "VPK", room: "213", color: "#e74c3c" },
                    {
                        time: "10:30-12:30",
                        type: "lab",
                        batches: [
                            { name: "T1", subject: "PSA", teacher: "VSK", room: "208", color: "#f1c40f" },
                            { name: "T2", subject: "CSE", teacher: "SSL", room: "211B/207", color: "#2ecc71" },
                            { name: "T3", subject: "EL-IoT", teacher: "SDR", room: "212A", color: "#1abc9c" }
                        ]
                    },
                    { time: "13:15-14:15", type: "lecture", subject: "CSE", teacher: "SSL", room: "213", color: "#2ecc71" },
                    { time: "14:15-15:15", type: "lecture", subject: "PSA", teacher: "VSK", room: "213", color: "#f1c40f" },
                ]
            },
            {
                day: "Tuesday",
                dayIndex: 2,
                slots: [
                    { time: "08:15-09:15", type: "lecture", subject: "AC 5 FLL-I German", teacher: "SSL", room: "213", color: "#9b59b6" },
                    { time: "09:15-10:15", type: "lecture", subject: "MOOC SG", teacher: "SSL", room: "213", color: "#e67e22" },
                    {
                        time: "10:30-12:30",
                        type: "lab",
                        batches: [
                            { name: "T1", subject: "PEMD", teacher: "VPK", room: "013/207", color: "#e74c3c" },
                            { name: "T2", subject: "EL-IoT", teacher: "SDR", room: "212A", color: "#1abc9c" },
                            { name: "T3", subject: "PSA", teacher: "VSK", room: "208", color: "#f1c40f" }
                        ]
                    },
                    { time: "13:15-14:15", type: "lecture", subject: "PSA", teacher: "VSK", room: "213", color: "#f1c40f" },
                    { time: "14:15-15:15", type: "lecture", subject: "IPR", teacher: "VPK", room: "213", color: "#5352ed" },
                ]
            },
            {
                day: "Wednesday",
                dayIndex: 3,
                slots: [
                    { time: "08:15-09:15", type: "lecture", subject: "PEMD", teacher: "VPK", room: "213", color: "#e74c3c" },
                    { time: "09:15-10:15", type: "lecture", subject: "EL-IoT", teacher: "SDR", room: "213", color: "#1abc9c" },
                    {
                        time: "10:30-12:30",
                        type: "lab",
                        batches: [
                            { name: "T1", subject: "CSE", teacher: "SSL", room: "211B/207", color: "#2ecc71" },
                            { name: "T2", subject: "PSA", teacher: "VSK", room: "208", color: "#f1c40f" },
                            { name: "T3", subject: "PEMD", teacher: "VPK", room: "013/207", color: "#e74c3c" }
                        ]
                    },
                    { time: "13:15-15:15", type: "lecture", subject: "TY CCRP", teacher: "NF", room: "213", color: "#ff4757" },
                    { time: "15:15-16:15", type: "lecture", subject: "REMEDIAL", teacher: "", room: "", color: "#a4b0be" },
                    { time: "16:15-17:15", type: "lecture", subject: "ACTIVITY", teacher: "", room: "", color: "#a4b0be" }
                ]
            },
            {
                day: "Thursday",
                dayIndex: 4,
                slots: [
                    { time: "08:15-09:15", type: "lecture", subject: "CSE", teacher: "SSL", room: "213", color: "#2ecc71" },
                    { time: "09:15-10:15", type: "lecture", subject: "PSA", teacher: "VSK", room: "213", color: "#f1c40f" },
                    {
                        time: "10:30-12:30",
                        type: "lab",
                        batches: [
                            { name: "T1", subject: "EL-IoT", teacher: "SDR", room: "212A", color: "#1abc9c" },
                            { name: "T2", subject: "PEMD", teacher: "VPK", room: "013/207", color: "#e74c3c" },
                            { name: "T3", subject: "CSE", teacher: "SSL", room: "211B/207", color: "#2ecc71" }
                        ]
                    },
                    { time: "13:15-14:15", type: "lecture", subject: "LIBRARY", teacher: "", room: "", color: "#706fd3" },
                    { time: "14:15-15:15", type: "lecture", subject: "EL-IoT", teacher: "SDR", room: "213", color: "#1abc9c" },
                ]
            },
            {
                day: "Friday",
                dayIndex: 5,
                slots: [
                    { time: "08:15-09:15", type: "lecture", subject: "CSE-TU", teacher: "SSL", room: "213", color: "#2ecc71" },
                    { time: "09:15-10:15", type: "lecture", subject: "EL-IoT", teacher: "SDR", room: "213", color: "#1abc9c" },
                    { time: "10:30-11:30", type: "lecture", subject: "CSE", teacher: "SSL", room: "213", color: "#2ecc71" },
                    { time: "11:30-12:30", type: "lecture", subject: "PEMD", teacher: "VPK", room: "213", color: "#e74c3c" },
                    { time: "13:15-14:15", type: "lecture", subject: "AC 5 FLL-I Japanese", teacher: "SSL", room: "505", color: "#34495e" },
                ]
            }
        ],
        timeSlots: [
            { start: "08:15", end: "09:15" },
            { start: "09:15", end: "10:15" },
            { start: "10:15", end: "10:30", label: "Tea Break" },
            { start: "10:30", end: "12:30" },
            { start: "12:30", end: "13:15", label: "Lunch Break" },
            { start: "13:15", end: "14:15" },
            { start: "14:15", end: "15:15" },
            { start: "15:15", end: "16:15" },
            { start: "16:15", end: "17:15" }
        ],
    },
    {
        id: "ty-instru",
        displayName: "TY Instru",
        batches: ["T1", "T2", "T3"],
        examPeriods: {
            insem1: { start: '2025-07-14', end: '2025-07-25' },
            insem2: { start: '2025-08-04', end: '2025-08-14' },
            endsem: { start: '2025-08-25', end: '2025-10-31' },
        },
        days: [
            {
                day: "Monday",
                dayIndex: 1,
                slots: [
                    { time: "08:15-09:15", type: "lecture", subject: "MCT", teacher: "BNM", room: "708", color: "#ff3d7f" },
                    { time: "09:15-10:15", type: "lecture", subject: "IA", teacher: "SRK", room: "708", color: "#ff9f43" },
                    { time: "10:30-11:30", type: "lecture", subject: "BMI", teacher: "SRG", room: "", color: "#2ed573" },
                    { time: "11:30-12:30", type: "lecture", subject: "Library", teacher: "", room: "708", color: "#a4b0be" },
                    {
                        time: "13:15-15:15",
                        type: "lab",
                        batches: [
                            { name: "T1", subject: "MCT Lab", teacher: "BNM", room: "703", color: "#ff3d7f" },
                            { name: "T2", subject: "IA Lab", teacher: "SRK", room: "705", color: "#ff9f43" },
                            { name: "T3", subject: "BMI Lab", teacher: "SRG", room: "706", color: "#2ed573" }
                        ]
                    },
                    { time: "15:15-16:15", type: "lecture", subject: "Minor IA", teacher: "PUP", room: "708", color: "#706fd3" }
                ]
            },
            {
                day: "Tuesday",
                dayIndex: 2,
                slots: [
                    { time: "08:15-09:15", type: "lecture", subject: "IA", teacher: "SRK", room: "708", color: "#ff9f43" },
                    { time: "09:15-10:15", type: "lecture", subject: "DSP", teacher: "SSJ", room: "708", color: "#ffc600" },
                    { time: "10:30-11:30", type: "lecture", subject: "BMI", teacher: "SRG", room: "704", color: "#2ed573" },
                    { time: "11:30-12:30", type: "lecture", subject: "MCT", teacher: "BNM", room: "704", color: "#ff3d7f" },
                    {
                        time: "13:15-15:15",
                        type: "lab",
                        batches: [
                            { name: "T1", subject: "IA Lab", teacher: "SRK", room: "705", color: "#ff9f43" },
                            { name: "T2", subject: "BMI Lab", teacher: "SRG", room: "706", color: "#2ed573" },
                            { name: "T3", subject: "MCT Lab", teacher: "BNM", room: "703", color: "#ff3d7f" }
                        ]
                    },
                    { time: "15:15-16:15", type: "lecture", subject: "Minor IA", teacher: "PUP", room: "708", color: "#706fd3" }
                ]
            },
            {
                day: "Wednesday",
                dayIndex: 3,
                slots: [
                    { time: "08:15-09:15", type: "lecture", subject: "Audit Course", teacher: "", room: "708", color: "#575fcf" },
                    { time: "09:15-10:15", type: "lecture", subject: "DSP", teacher: "SSJ", room: "708", color: "#ffc600" },
                    { time: "10:30-12:30", type: "lecture", subject: "CCRP", teacher: "SRK", room: "708", color: "#ff4757" },
                    { time: "13:15-14:15", type: "lecture", subject: "IPR", teacher: "PUP", room: "708", color: "#1e90ff" },
                    { time: "14:15-15:15", type: "lecture", subject: "IA", teacher: "SRK", room: "708", color: "#ff9f43" },
                    { time: "15:15-16:15", type: "lecture", subject: "MOOC", teacher: "SRG", room: "704", color: "#00d2d3" }
                ]
            },
            {
                day: "Thursday",
                dayIndex: 4,
                slots: [
                    { time: "08:15-09:15", type: "lecture", subject: "BMI", teacher: "SRG", room: "708", color: "#2ed573" },
                    { time: "09:15-10:15", type: "lecture", subject: "DSP", teacher: "SSJ", room: "708", color: "#ffc600" },
                    { time: "10:30-11:30", type: "lecture", subject: "IA Tut", teacher: "SRK", room: "704", color: "#ff9f43" },
                    { time: "11:30-12:30", type: "lecture", subject: "DSP Tut", teacher: "SSJ", room: "704", color: "#ffc600" },
                    {
                        time: "13:15-15:15",
                        type: "lab",
                        batches: [
                            { name: "T1", subject: "BMI Lab", teacher: "SRG", room: "706", color: "#2ed573" },
                            { name: "T2", subject: "MCT Lab", teacher: "BNM", room: "703", color: "#ff3d7f" },
                            { name: "T3", subject: "IA Lab", teacher: "SRK", room: "705", color: "#ff9f43" }
                        ]
                    },
                    { time: "15:15-16:15", type: "lecture", subject: "Minor IA", teacher: "PUP", room: "708", color: "#706fd3" }
                ]
            },
            {
                day: "Friday",
                dayIndex: 5,
                slots: [
                    { time: "08:15-09:15", type: "lecture", subject: "IPR", teacher: "PUP", room: "708", color: "#1e90ff" },
                    { time: "09:15-10:15", type: "lecture", subject: "MCT", teacher: "BNM", room: "708", color: "#ff3d7f" },
                    { time: "10:30-11:30", type: "lecture", subject: "Remedial Class", teacher: "", room: "708", color: "#f78fb3" },
                    { time: "15:15-16:15", type: "lecture", subject: "Audit Course", teacher: "", room: "", color: "#5352ed" }
                ]
            },
        ],
        timeSlots: [
            { start: "08:15", end: "09:15" },
            { start: "09:15", end: "10:15" },
            { start: "10:15", end: "10:30", label: "Tea Break" },
            { start: "10:30", end: "11:30" },
            { start: "11:30", end: "12:30" },
            { start: "12:30", end: "13:15", label: "Lunch Break" },
            { start: "13:15", end: "14:15" },
            { start: "14:15", end: "15:15" },
            { start: "15:15", end: "16:15" },
            { start: "16:15", end: "17:15" }
        ]
    },
    {
        id: "sy-ai-a",
        displayName: "SY AI A",
        batches: ["S1", "S2", "S3"],
        examPeriods: {
            insem1: { start: '2025-07-14', end: '2025-09-12' },
            insem2: { start: '2025-09-22', end: '2025-10-03' },
            endsem: { start: '2025-10-13', end: '2025-10-31' },
        },
        days: [
            {
                day: "Monday",
                dayIndex: 1,
                slots: [
                    { time: "09:15-10:15", type: "lecture", subject: "OOP", teacher: "PDB", room: "405", color: "#ff3d7f" },
                    { time: "10:30-12:30", type: "lecture", subject: "CCRP", teacher: "", room: "405", color: "#1e90ff" },
                    { time: "13:15-14:15", type: "lecture", subject: "FDS", teacher: "RAJ", room: "405", color: "#ff9f43" },
                    { time: "14:15-15:15", type: "lecture", subject: "AUDIT", teacher: "AAV", room: "405", color: "#00d2d3" },
                    { time: "15:15-16:15", type: "lecture", subject: "MINOR", teacher: "", room: "", color: "#ff4757" }
                ]
            },
            {
                day: "Tuesday",
                dayIndex: 2,
                slots: [
                    { time: "09:15-10:15", type: "lecture", subject: "FDS", teacher: "RAJ", room: "405", color: "#ff9f43" },
                    {
                        time: "10:30-12:30",
                        type: "lab",
                        batches: [
                            { name: "S1", subject: "OOPL", teacher: "PDB", room: "406", color: "#ff3d7f" },
                            { name: "S2", subject: "DSL", teacher: "NAI", room: "402", color: "#3498db" },
                            { name: "S3", subject: "OSL", teacher: "AAV", room: "403", color: "#9b59b6" }
                        ]
                    },
                    { time: "13:15-14:15", type: "lecture", subject: "BOSCN", teacher: "AAV", room: "405", color: "#ffc600" },
                    { time: "14:15-15:15", type: "lecture", subject: "DMS", teacher: "NAS", room: "405", color: "#2ed573" },
                    { time: "15:15-16:15", type: "lecture", subject: "MINOR", teacher: "", room: "", color: "#ff4757" }
                ]
            },
            {
                day: "Wednesday",
                dayIndex: 3,
                slots: [
                    { time: "09:15-10:15", type: "lecture", subject: "LIBRARY", teacher: "", room: "", color: "#a4b0be" },
                    {
                        time: "10:30-12:30",
                        type: "lab",
                        batches: [
                            { name: "S1", subject: "OSL", teacher: "AAV", room: "407", color: "#9b59b6" },
                            { name: "S2", subject: "OOPL", teacher: "PDB", room: "406", color: "#ff3d7f" },
                            { name: "S3", subject: "DSL", teacher: "SB", room: "402", color: "#3498db" }
                        ]
                    },
                    { time: "13:15-14:15", type: "lecture", subject: "OOP", teacher: "PDB", room: "405", color: "#ff3d7f" },
                    { time: "14:15-15:15", type: "lecture", subject: "DEG", teacher: "AAV", room: "405", color: "#575fcf" }
                ]
            },
            {
                day: "Thursday",
                dayIndex: 4,
                slots: [
                    { time: "09:15-10:15", type: "lecture", subject: "BOSCN", teacher: "AAV", room: "405", color: "#ffc600" },
                    {
                        time: "10:30-12:30",
                        type: "lab",
                        batches: [
                            { name: "S1", subject: "DSL", teacher: "NAI", room: "402", color: "#3498db" },
                            { name: "S2", subject: "OSL", teacher: "AAV", room: "407", color: "#9b59b6" },
                            { name: "S3", subject: "OOPL", teacher: "PDB", room: "406", color: "#ff3d7f" }
                        ]
                    },
                    { time: "13:15-14:15", type: "lecture", subject: "DMS", teacher: "NAS", room: "405", color: "#2ed573" },
                    { time: "14:15-15:15", type: "lecture", subject: "OE", teacher: "SDK", room: "405", color: "#5352ed" },
                    { time: "15:15-16:15", type: "lecture", subject: "MINOR", teacher: "", room: "", color: "#ff4757" }
                ]
            },
            {
                day: "Friday",
                dayIndex: 5,
                slots: [
                    { time: "08:15-09:15", type: "lecture", subject: "OOP", teacher: "PDB", room: "405", color: "#ff3d7f" },
                    { time: "09:15-10:15", type: "lecture", subject: "FDS", teacher: "RAJ", room: "405", color: "#ff9f43" },
                    {
                        time: "10:30-12:30",
                        type: "lab",
                        batches: [
                            { name: "S1", subject: "DSL", teacher: "NAI", room: "402", color: "#3498db" },
                            { name: "S2", subject: "DSL", teacher: "RRO", room: "407", color: "#3498db" },
                            { name: "S3", subject: "DSL", teacher: "SBL", room: "406", color: "#3498db" }
                        ]
                    },
                    { time: "13:15-14:15", type: "lecture", subject: "BOSCN", teacher: "AAV", room: "405", color: "#ffc600" },
                    { time: "14:15-15:15", type: "lecture", subject: "DMS", teacher: "NAS", room: "405", color: "#2ed573" }
                ]
            }
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
    {
        id: "sy-ai-b",
        displayName: "SY AI B",
        batches: ["S1", "S2", "S3"],
        examPeriods: {
            insem1: { start: '2025-07-14', end: '2025-09-12' },
            insem2: { start: '2025-09-22', end: '2025-10-03' },
            endsem: { start: '2025-10-13', end: '2025-10-31' },
        },
        days: [
            {
                day: "Monday",
                dayIndex: 1,
                slots: [
                    { time: "08:15-09:15", type: "lecture", subject: "OOP", teacher: "DSZ", room: "409", color: "#ff3d7f" },
                    { time: "09:15-10:15", type: "lecture", subject: "BOSCN", teacher: "RSM", room: "409", color: "#ffc600" },
                    { time: "10:30-12:30", type: "lecture", subject: "CCRP", teacher: "", room: "409", color: "#1e90ff" },
                    { time: "13:15-14:15", type: "lecture", subject: "FDS", teacher: "PBW", room: "409", color: "#ff9f43" },
                    { time: "14:15-15:15", type: "lecture", subject: "DMS", teacher: "NAS", room: "409", color: "#2ed573" },
                    { time: "15:15-16:15", type: "lecture", subject: "MINOR", teacher: "", room: "", color: "#ff4757" }
                ]
            },
            {
                day: "Tuesday",
                dayIndex: 2,
                slots: [
                    { time: "08:15-09:15", type: "lecture", subject: "BOSCN", teacher: "RSM", room: "409", color: "#ffc600" },
                    { time: "09:15-10:15", type: "lecture", subject: "OOP", teacher: "DSZ", room: "409", color: "#ff3d7f" },
                    {
                        time: "10:30-12:30",
                        type: "lab",
                        batches: [
                            { name: "S1", subject: "OOPL", teacher: "DSZ", room: "412", color: "#ff3d7f" },
                            { name: "S2", subject: "DSL", teacher: "SB", room: "407", color: "#3498db" },
                            { name: "S3", subject: "OSL", teacher: "RSM", room: "408", color: "#9b59b6" }
                        ]
                    },
                    { time: "13:15-14:15", type: "lecture", subject: "OE", teacher: "SDK", room: "409", color: "#5352ed" },
                    { time: "14:15-15:15", type: "lecture", subject: "FDS", teacher: "PBW", room: "409", color: "#ff9f43" },
                    { time: "15:15-16:15", type: "lecture", subject: "MINOR", teacher: "", room: "", color: "#ff4757" }
                ]
            },
            {
                day: "Wednesday",
                dayIndex: 3,
                slots: [
                    { time: "08:15-09:15", type: "lecture", subject: "OOP", teacher: "DSZ", room: "409", color: "#ff3d7f" },
                    { time: "09:15-10:15", type: "lecture", subject: "BOSCN", teacher: "RSM", room: "409", color: "#ffc600" },
                    {
                        time: "10:30-12:30",
                        type: "lab",
                        batches: [
                            { name: "S1", subject: "OSL", teacher: "RSM", room: "408", color: "#9b59b6" },
                            { name: "S2", subject: "OOPL", teacher: "DSZ", room: "412", color: "#ff3d7f" },
                            { name: "S3", subject: "DSL", teacher: "PBW", room: "403", color: "#3498db" }
                        ]
                    },
                    { time: "13:15-14:15", type: "lecture", subject: "DMS", teacher: "NAS", room: "409", color: "#2ed573" },
                    { time: "14:15-15:15", type: "lecture", subject: "DEG", teacher: "RSM", room: "409", color: "#575fcf" }
                ]
            },
            {
                day: "Thursday",
                dayIndex: 4,
                slots: [
                    { time: "08:15-09:15", type: "lecture", subject: "DMS", teacher: "NAS", room: "409", color: "#2ed573" },
                    { time: "09:15-10:15", type: "lecture", subject: "LIBRARY", teacher: "", room: "", color: "#a4b0be" },
                    {
                        time: "10:30-12:30",
                        type: "lab",
                        batches: [
                            { name: "S1", subject: "DSL", teacher: "PBW", room: "403", color: "#3498db" },
                            { name: "S2", subject: "DSL", teacher: "SB", room: "408", color: "#3498db" },
                            { name: "S3", subject: "OOPL", teacher: "DSZ", room: "412", color: "#ff3d7f" }
                        ]
                    },
                    { time: "13:15-14:15", type: "lecture", subject: "FDS", teacher: "PBW", room: "409", color: "#ff9f43" },
                    { time: "14:15-15:15", type: "lecture", subject: "AUDIT", teacher: "RSM", room: "409", color: "#00d2d3" },
                    { time: "15:15-16:15", type: "lecture", subject: "MINOR", teacher: "", room: "", color: "#ff4757" }
                ]
            },
            {
                day: "Friday",
                dayIndex: 5,
                slots: [
                    {
                        time: "10:30-12:30",
                        type: "lab",
                        batches: [
                            { name: "S1", subject: "DSL", teacher: "PBW", room: "403", color: "#3498db" },
                            { name: "S2", subject: "OSL", teacher: "RSM", room: "408", color: "#9b59b6" }
                        ]
                    },
                    {
                        time: "13:15-15:15",
                        type: "lab",
                        batches: [
                            { name: "S3", subject: "DSL", teacher: "PBW", room: "403", color: "#3498db" }
                        ]
                    }
                ]
            }
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
    {
        id: "ty-ai-a",
        displayName: "TY AI A",
        batches: ["T1", "T2", "T3"],
        examPeriods: {
            insem1: { start: '2025-07-14', end: '2025-07-25' },
            insem2: { start: '2025-08-04', end: '2025-08-14' },
            endsem: { start: '2025-08-25', end: '2025-10-31' },
        },
        days: [
            {
                day: "Monday",
                dayIndex: 1,
                slots: [
                    {
                        time: "08:15-10:15",
                        type: "lab",
                        batches: [
                            { name: "T1", subject: "MLL", teacher: "MBT", room: "403", color: "#ff3d7f" },
                            { name: "T2", subject: "BATL", teacher: "RRO", room: "406", color: "#ff9f43" },
                            { name: "T3", subject: "NLPL", teacher: "SDK", room: "402", color: "#2ed573" }
                        ]
                    },
                    {
                        time: "10:30-12:30",
                        type: "lab",
                        batches: [
                            { name: "T1", subject: "BATL", teacher: "RRO", room: "406", color: "#ff9f43" },
                            { name: "T2", subject: "MLL", teacher: "BDL", room: "403", color: "#ff3d7f" }
                        ]
                    },
                    { time: "13:15-14:15", type: "lecture", subject: "ML", teacher: "BDL", room: "RF", color: "#ff3d7f" },
                    { time: "14:15-15:15", type: "lecture", subject: "TOC", teacher: "MBT", room: "RF", color: "#ffc600" },
                    { time: "15:15-16:15", type: "lecture", subject: "MINOR", teacher: "", room: "", color: "#ff4757" }
                ]
            },
            {
                day: "Tuesday",
                dayIndex: 2,
                slots: [
                    {
                        time: "08:15-10:15",
                        type: "lab",
                        batches: [
                            { name: "T1", subject: "NLPL", teacher: "SDK", room: "402", color: "#2ed573" },
                            { name: "T2", subject: "MLL", teacher: "MBT", room: "403", color: "#ff3d7f" },
                            { name: "T3", subject: "BATL", teacher: "RRO", room: "406", color: "#ff9f43" }
                        ]
                    },
                    { time: "10:30-11:30", type: "lecture", subject: "ML", teacher: "BDL", room: "409", color: "#ff3d7f" },
                    { time: "11:30-12:30", type: "lecture", subject: "NLP", teacher: "SDK", room: "409", color: "#2ed573" },
                    { time: "13:15-14:15", type: "lecture", subject: "BAT", teacher: "RRO", room: "RF", color: "#ff9f43" },
                    { time: "14:15-15:15", type: "lecture", subject: "TOC", teacher: "MBT", room: "RF", color: "#ffc600" },
                    { time: "15:15-16:15", type: "lecture", subject: "MINOR", teacher: "", room: "", color: "#ff4757" }
                ]
            },
            {
                day: "Wednesday",
                dayIndex: 3,
                slots: [
                    { time: "08:15-09:15", type: "lecture", subject: "TOC", teacher: "MBT", room: "206", color: "#ffc600" },
                    { time: "09:15-10:15", type: "lecture", subject: "AUDIT-GER", teacher: "SSS", room: "206", color: "#575fcf" },
                    { time: "10:30-12:30", type: "lecture", subject: "CCRP", teacher: "", room: "409", color: "#1e90ff" },
                    {
                        time: "13:15-15:15",
                        type: "lab",
                        batches: [
                            { name: "T1", subject: "MLL", teacher: "MBT", room: "402", color: "#ff3d7f" },
                            { name: "T2", subject: "BATL", teacher: "RRO", room: "406", color: "#ff9f43" },
                            { name: "T3", subject: "MLL", teacher: "BDL", room: "403", color: "#ff3d7f" }
                        ]
                    },
                    { time: "15:15-16:15", type: "lecture", subject: "NLP", teacher: "SDK", room: "RF", color: "#2ed573" }
                ]
            },
            {
                day: "Thursday",
                dayIndex: 4,
                slots: [
                    {
                        time: "08:15-10:15",
                        type: "lab",
                        batches: [
                            { name: "T1", subject: "BATL", teacher: "RRO", room: "406", color: "#ff9f43" },
                            { name: "T2", subject: "MLL", teacher: "MBT", room: "403", color: "#ff3d7f" }
                        ]
                    },
                    { time: "10:30-11:30", type: "lecture", subject: "ML", teacher: "BDL", room: "409", color: "#ff3d7f" },
                    { time: "11:30-12:30", type: "lecture", subject: "LIBRARY", teacher: "", room: "", color: "#a4b0be" },
                    { time: "13:15-14:15", type: "lecture", subject: "IPR", teacher: "AAV", room: "206", color: "#5352ed" },
                    { time: "14:15-15:15", type: "lecture", subject: "BAT", teacher: "RRO", room: "206", color: "#ff9f43" },
                    { time: "15:15-16:15", type: "lecture", subject: "MINOR", teacher: "", room: "", color: "#ff4757" }
                ]
            },
            {
                day: "Friday",
                dayIndex: 5,
                slots: [
                    {
                        time: "08:15-10:15",
                        type: "lab",
                        batches: [
                            { name: "T2", subject: "NLPL", teacher: "SDK", room: "402", color: "#2ed573" },
                            { name: "T3", subject: "BATL", teacher: "RRO", room: "406", color: "#ff9f43" }
                        ]
                    },
                    { time: "10:30-11:30", type: "lecture", subject: "IPR", teacher: "AAV", room: "409", color: "#5352ed" },
                    { time: "11:30-12:30", type: "lecture", subject: "NLP", teacher: "SDK", room: "409", color: "#2ed573" },
                    { time: "13:15-14:15", type: "lecture", subject: "OE", teacher: "NAI", room: "206", color: "#5352ed" },
                    { time: "14:15-15:15", type: "lecture", subject: "BAT", teacher: "RRO", room: "206", color: "#ff9f43" },
                    { time: "15:15-16:15", type: "lecture", subject: "AUDIT-JAP", teacher: "SSS", room: "206", color: "#575fcf" }
                ]
            }
        ],
        timeSlots: [
            { start: "08:15", end: "09:15" },
            { start: "09:15", end: "10:15" },
            { start: "10:15", end: "10:30", label: "Tea Break" },
            { start: "10:30", end: "11:30" },
            { start: "11:30", end: "12:30" },
            { start: "12:30", end: "13:15", label: "Lunch Break" },
            { start: "13:15", end: "14:15" },
            { start: "14:15", end: "15:15" },
            { start: "15:15", end: "16:15" }
        ]
    },
    {
        id: "ty-ai-b",
        displayName: "TY AI B",
        batches: ["T1", "T2", "T3"],
        examPeriods: {
            insem1: { start: '2025-07-14', end: '2025-07-25' },
            insem2: { start: '2025-08-04', end: '2025-08-14' },
            endsem: { start: '2025-08-25', end: '2025-10-31' },
        },
        days: [
            {
                day: "Monday",
                dayIndex: 1,
                slots: [
                    {
                        time: "08:15-10:15",
                        type: "lab",
                        batches: [
                            { name: "T1", subject: "NLPL", teacher: "SSS", room: "408", color: "#2ed573" },
                            { name: "T2", subject: "MLL", teacher: "NAI", room: "412", color: "#ff3d7f" },
                            { name: "T3", subject: "BATL", teacher: "PSG", room: "407", color: "#ff9f43" }
                        ]
                    },
                    {
                        time: "10:30-12:30",
                        type: "lab",
                        batches: [
                            { name: "T1", subject: "MLL", teacher: "NAI", room: "412", color: "#ff3d7f" },
                            { name: "T2", subject: "BATL", teacher: "PSG", room: "402", color: "#ff9f43" },
                            { name: "T3", subject: "MLL", teacher: "SB", room: "408", color: "#ff3d7f" }
                        ]
                    },
                    { time: "13:15-14:15", type: "lecture", subject: "ML", teacher: "NAI", room: "206", color: "#ff3d7f" },
                    { time: "14:15-15:15", type: "lecture", subject: "BAT", teacher: "PSG", room: "206", color: "#ff9f43" },
                    { time: "15:15-16:15", type: "lecture", subject: "MINOR", teacher: "", room: "", color: "#ff4757" }
                ]
            },
            {
                day: "Tuesday",
                dayIndex: 2,
                slots: [
                    {
                        time: "08:15-10:15",
                        type: "lab",
                        batches: [
                            { name: "T1", subject: "MLL", teacher: "NAI", room: "412", color: "#ff3d7f" },
                            { name: "T2", subject: "BATL", teacher: "PSG", room: "407", color: "#ff9f43" },
                            { name: "T3", subject: "NLPL", teacher: "SSS", room: "408", color: "#2ed573" }
                        ]
                    },
                    { time: "10:30-11:30", type: "lecture", subject: "NLP", teacher: "SSS", room: "405", color: "#2ed573" },
                    { time: "11:30-12:30", type: "lecture", subject: "TOC", teacher: "PSG", room: "405", color: "#ffc600" },
                    { time: "13:15-14:15", type: "lecture", subject: "ML", teacher: "NAI", room: "206", color: "#ff3d7f" },
                    { time: "14:15-15:15", type: "lecture", subject: "BAT", teacher: "PSG", room: "206", color: "#ff9f43" },
                    { time: "15:15-16:15", type: "lecture", subject: "MINOR", teacher: "", room: "", color: "#ff4757" }
                ]
            },
            {
                day: "Wednesday",
                dayIndex: 3,
                slots: [
                    { time: "08:15-09:15", type: "lecture", subject: "CCRP", teacher: "", room: "405", color: "#1e90ff" },
                    { time: "10:30-11:30", type: "lecture", subject: "IPR", teacher: "SDK", room: "405", color: "#5352ed" },
                    { time: "11:30-12:30", type: "lecture", subject: "ML", teacher: "NAI", room: "405", color: "#ff3d7f" },
                    { time: "13:15-14:15", type: "lecture", subject: "NLP", teacher: "SSS", room: "206", color: "#2ed573" },
                    { time: "14:15-15:15", type: "lecture", subject: "BAT", teacher: "PSG", room: "206", color: "#ff9f43" },
                    { time: "15:15-16:15", type: "lecture", subject: "OE", teacher: "NAI", room: "206", color: "#5352ed" }
                ]
            },
            {
                day: "Thursday",
                dayIndex: 4,
                slots: [
                    { time: "08:15-09:15", type: "lecture", subject: "IPR", teacher: "SDK", room: "206", color: "#5352ed" },
                    { time: "09:15-10:15", type: "lecture", subject: "AUDIT-GER", teacher: "SK", room: "206", color: "#575fcf" },
                    { time: "10:30-11:30", type: "lecture", subject: "LIBRARY", teacher: "", room: "", color: "#a4b0be" },
                    { time: "11:30-12:30", type: "lecture", subject: "TOC", teacher: "PSG", room: "405", color: "#ffc600" },
                    {
                        time: "13:15-15:15",
                        type: "lab",
                        batches: [
                            { name: "T1", subject: "BATL", teacher: "PSG", room: "407", color: "#ff9f43" },
                            { name: "T2", subject: "MLL", teacher: "DSZ", room: "412", color: "#ff3d7f" },
                            { name: "T3", subject: "BATL", teacher: "SB", room: "408", color: "#ff9f43" }
                        ]
                    },
                    { time: "15:15-16:15", type: "lecture", subject: "MINOR", teacher: "", room: "", color: "#ff4757" }
                ]
            },
            {
                day: "Friday",
                dayIndex: 5,
                slots: [
                    {
                        time: "08:15-10:15",
                        type: "lab",
                        batches: [
                            { name: "T1", subject: "BATL", teacher: "SB", room: "407", color: "#ff9f43" },
                            { name: "T2", subject: "NLPL", teacher: "SSS", room: "408", color: "#2ed573" },
                            { name: "T3", subject: "MLL", teacher: "DSZ", room: "412", color: "#ff3d7f" }
                        ]
                    },
                    { time: "10:30-11:30", type: "lecture", subject: "TOC", teacher: "PSG", room: "405", color: "#ffc600" },
                    { time: "11:30-12:30", type: "lecture", subject: "NLP", teacher: "SSS", room: "405", color: "#2ed573" }
                ]
            }
        ],
        timeSlots: [
            { start: "08:15", end: "09:15" },
            { start: "09:15", end: "10:15" },
            { start: "10:15", end: "10:30", label: "Tea Break" },
            { start: "10:30", end: "11:30" },
            { start: "11:30", end: "12:30" },
            { start: "12:30", end: "13:15", label: "Lunch Break" },
            { start: "13:15", end: "14:15" },
            { start: "14:15", end: "15:15" },
            { start: "15:15", end: "16:15" }
        ]
    },
    {
        id: "sy-it-a",
        displayName: "SY IT A",
        batches: ["S1", "S2", "S3"],
        days: [
            {
                day: "Monday",
                dayIndex: 1,
                slots: [
                    { time: "08:15-09:15", type: "lecture", subject: "DM", teacher: "MAT", room: "609", color: "#E40006" },
                    { time: "09:15-10:15", type: "lecture", subject: "DECO", teacher: "VJD", room: "609", color: "#E4E6F2" },
                    { time: "10:30-11:30", type: "lecture", subject: "DSA", teacher: "PPM", room: "609", color: "#0066DF" },
                    { time: "11:30-12:30", type: "lecture", subject: "DBMS", teacher: "PAP", room: "609", color: "#EFCA01" },
                    { time: "13:15-15:15", type: "lecture", subject: "CCRP", teacher: "", room: "609", color: "#1E2327" },
                    { time: "15:15-16:15", type: "lecture", subject: "MINOR", teacher: "RNM", room: "", color: "#18A727" },
                ],
            },
            {
                day: "Tuesday",
                dayIndex: 2,
                slots: [
                    {
                        time: "08:15-09:15",
                        type: "lab",
                        batches: [
                            { name: "S1", subject: "DSAL", teacher: "PPM", room: "603", color: "#0066DF" },
                            { name: "S3", subject: "DSAL", teacher: "MAT", room: "609", color: "#E40006" },
                        ],
                    },
                    {
                        time: "09:15-10:15",
                        type: "lab",
                        batches: [
                            { name: "S1", subject: "DSAL", teacher: "PPM", room: "603", color: "#0066DF" },
                            { name: "S3", subject: "DSAL", teacher: "MAT", room: "609", color: "#E40006" },
                        ],
                    },
                    { time: "10:30-11:30", type: "lecture", subject: "DBMS", teacher: "PAP", room: "609", color: "#EFCA01" },
                    { time: "11:30-12:30", type: "lecture", subject: "DM", teacher: "MAT", room: "609", color: "#E40006" },
                    { time: "13:15-14:15", type: "lecture", subject: "DSA", teacher: "PPM", room: "609", color: "#0066DF" },
                    { time: "14:15-15:15", type: "lecture", subject: "DECO", teacher: "VJD", room: "609", color: "#E4E6F2" },
                    { time: "15:15-16:15", type: "lecture", subject: "MINOR", teacher: "RNM", room: "", color: "#18A727" },
                ],
            },
            {
                day: "Wednesday",
                dayIndex: 3,
                slots: [
                    { time: "08:15-09:15", type: "lecture", subject: "DSA", teacher: "MAT", room: "609", color: "#E40006" },
                    { time: "09:15-10:15", type: "lecture", subject: "LIBRARY", teacher: "", room: "", color: "#ffffff" },
                    { time: "10:30-11:30", type: "lecture", subject: "DECO", teacher: "VJD", room: "609", color: "#E4E6F2" },
                    { time: "11:30-12:30", type: "lecture", subject: "ACTIVITY", teacher: "", room: "", color: "#ffffff" },
                    { time: "13:15-14:15", type: "lecture", subject: "Audit Course", teacher: "RRK", room: "609", color: "#000000" },
                    { time: "14:15-16:15", type: "lecture", subject: "DEG", teacher: "RSM", room: "609", color: "#575fcf" },
                ],
            },
            {
                day: "Thursday",
                dayIndex: 4,
                slots: [
                    {
                        time: "08:15-09:15",
                        type: "lab",
                        batches: [
                            { name: "S1", subject: "DECOL", teacher: "VJD", room: "611", color: "#E4E6F2" },
                            { name: "S2", subject: "DSAL", teacher: "PPM", room: "603", color: "#0066DF" },
                            { name: "S3", subject: "DSAL", teacher: "MAT", room: "602", color: "#E40006" },
                        ],
                    },
                    {
                        time: "09:15-10:15",
                        type: "lab",
                        batches: [
                            { name: "S1", subject: "DECOL", teacher: "VJD", room: "611", color: "#E4E6F2" },
                            { name: "S2", subject: "DSAL", teacher: "PPM", room: "603", color: "#0066DF" },
                            { name: "S3", subject: "DSAL", teacher: "MAT", room: "602", color: "#E40006" },
                        ],
                    },
                    { time: "10:30-11:30", type: "lecture", subject: "DBMS", teacher: "PAP", room: "609", color: "#EFCA01" },
                    { time: "11:30-12:30", type: "lecture", subject: "DM", teacher: "MAT", room: "609", color: "#E40006" },
                    {
                        time: "13:15-14:15",
                        type: "lab",
                        batches: [
                            { name: "S2", subject: "DECOL", teacher: "VJD", room: "611", color: "#E4E6F2" },
                            { name: "S3", subject: "DBMSL", teacher: "PAP", room: "606-A", color: "#EFCA01" },
                        ],
                    },
                    {
                        time: "14:15-15:15",
                        type: "lab",
                        batches: [
                            { name: "S2", subject: "DECOL", teacher: "VJD", room: "611", color: "#E4E6F2" },
                            { name: "S3", subject: "DBMSL", teacher: "PAP", room: "606-A", color: "#EFCA01" },
                        ],
                    },
                    { time: "15:15-16:15", type: "lecture", subject: "MINOR", teacher: "", room: "", color: "#18A727" },
                ],
            },
            {
                day: "Friday",
                dayIndex: 5,
                slots: [
                    {
                        time: "8:15-09:15",
                        type: "lab",
                        batches: [
                            { name: "S1", subject: "DSAL", teacher: "PPM", room: "603", color: "#0066DF" },
                            { name: "S2", subject: "DBMSL", teacher: "PAP", room: "606-A", color: "#EFCA01" },
                        ],
                    },
                    {
                        time: "09:15-10:15",
                        type: "lab",
                        batches: [
                            { name: "S1", subject: "DSAL", teacher: "PPM", room: "603", color: "#0066DF" },
                            { name: "S2", subject: "DBMSL", teacher: "PAP", room: "606-A", color: "#EFCA01" },
                        ],
                    },
                    {
                        time: "10:30-12:30",
                        type: "lab",
                        batches: [
                            { name: "S1", subject: "DBMSL", teacher: "PAP", room: "606-A", color: "#EFCA01" },
                            { name: "S2", subject: "DSAL", teacher: "VMD", room: "603", color: "#0f664F" },
                            { name: "S3", subject: "DECOL", teacher: "VJD", room: "611", color: "#E4E6F2" },
                        ],
                    },
                    { time: "13:15-14:15", type: "lecture", subject: "HCI MOOC", teacher: "VJD", room: "605", color: "#E4E6F2" },
                    { time: "14:15-16:15", type: "lecture", subject: "Minor Lab", teacher: "SMS", room: "212", color: "#18A727" },
                ],
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
            { start: "15:15", end: "16:15" },
        ],
    },
];