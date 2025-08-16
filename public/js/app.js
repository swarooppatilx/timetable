document.addEventListener('DOMContentLoaded', () => {

    const App = {
        attendanceData: {},
        calendarDate: new Date(),
        selectedDateISO: null,
        mobileSelectedDayIndex: (new Date().getDay() + 6) % 7,
        selectedClassId: null,
        selectedBatch: null,
        elements: {
            toast: document.getElementById('toast'),
            classSelector: document.getElementById('classSelector'),
            batchSelector: document.getElementById('batchSelector'),
            resetBtn: document.getElementById('resetBtn'),
            views: { timetable: document.getElementById('timetableView'), attendance: document.getElementById('attendanceView') },
            viewBtns: { timetable: document.getElementById('timetableBtn'), attendance: document.getElementById('attendanceBtn') },
            timetable: {
                todayBtn: document.getElementById('todayViewBtn'),
                fullBtn: document.getElementById('fullViewBtn'),
                todayContent: document.getElementById('todayViewContent'),
                fullContent: document.getElementById('fullViewContent'),
                fullGrid: document.getElementById('fullViewGrid'),
                mobileDaySelector: document.getElementById('mobileDaySelector'),
                currentDate: document.getElementById('current-date')
            },
            attendance: {
                monthYearHeader: document.getElementById('month-year-header'),
                prevMonthBtn: document.getElementById('prev-month-btn'),
                nextMonthBtn: document.getElementById('next-month-btn'),
                gridBody: document.getElementById('calendar-grid-body'),
                detailsHeader: document.getElementById('day-details-header'),
                detailsBody: document.getElementById('day-details-body'),
                startDate: document.getElementById('start-date'),
                endDate: document.getElementById('end-date'),
                prnNumber: document.getElementById('prn-number'),
                calculateBtn: document.getElementById('calculate-attendance-btn'),

            },
        },
        timeToMinutes: function (t) {
            return t.split(':').map(Number).reduce((h, m) => h * 60 + m, 0);
        },
        dateToISO: function (d) {
            return new Date(d.getTime() - (d.getTimezoneOffset() * 60000)).toISOString().split('T')[0];
        },
        saveState: function () {
            try {
                localStorage.setItem('attendanceData', JSON.stringify(this.attendanceData));
                localStorage.setItem('selectedClassId', this.selectedClassId);
                localStorage.setItem('selectedBatch', this.selectedBatch);

                if (this.elements.attendance.startDate && this.elements.attendance.startDate.value) {
                    localStorage.setItem('attendanceStartDate', this.elements.attendance.startDate.value);
                }
                if (this.elements.attendance.endDate && this.elements.attendance.endDate.value) {
                    localStorage.setItem('attendanceEndDate', this.elements.attendance.endDate.value);
                }
                if (this.elements.attendance.examSelector && this.elements.attendance.examSelector.value) {
                    localStorage.setItem('selectedExam', this.elements.attendance.examSelector.value);
                }
            } catch (error) {
                console.error('Error saving state:', error);
            }
        },
        loadState: function () {
            try {
                this.attendanceData = JSON.parse(localStorage.getItem('attendanceData') || '{}');
                const savedClassId = localStorage.getItem('selectedClassId');
                this.selectedClassId = (typeof timetableData !== 'undefined' && timetableData.some(c => c.id === savedClassId)) ? savedClassId : (typeof timetableData !== 'undefined' ? timetableData[0].id : null);
                if (this.selectedClassId) {
                    const currentClassData = this.getCurrentClassData();
                    const savedBatch = localStorage.getItem('selectedBatch');
                    this.selectedBatch = (currentClassData && currentClassData.batches.includes(savedBatch)) ? savedBatch : (currentClassData ? currentClassData.batches[0] : null);
                }

                const savedStartDate = localStorage.getItem('attendanceStartDate');
                const savedEndDate = localStorage.getItem('attendanceEndDate');
                const savedExam = localStorage.getItem('selectedExam');

                if (savedStartDate && this.elements.attendance.startDate) {
                    this.elements.attendance.startDate.value = savedStartDate;
                }
                if (savedEndDate && this.elements.attendance.endDate) {
                    this.elements.attendance.endDate.value = savedEndDate;
                }
                if (savedExam && this.elements.attendance.examSelector) {
                    this.elements.attendance.examSelector.value = savedExam;
                }
            } catch (error) {
                console.error('Error loading state:', error);
                this.attendanceData = {};
                this.selectedClassId = typeof timetableData !== 'undefined' ? timetableData[0].id : null;
                this.selectedBatch = null;
            }
        },
        showToast: function (message = 'Saved!', type = 'success', duration = 1500) {
            const toast = this.elements.toast;
            if (!toast) return;

            const icon = toast.querySelector('#toast-icon');
            const text = toast.querySelector('span');
            toast.className = 'card font-bold p-4 flex items-center gap-2';

            switch (type) {
                case 'success':
                    toast.classList.add('bg-green-500', 'text-white');
                    if (icon) icon.setAttribute('data-lucide', 'check-circle');
                    break;
                case 'warning':
                    toast.classList.add('bg-yellow-500', 'text-black');
                    if (icon) icon.setAttribute('data-lucide', 'alert-triangle');
                    break;
                case 'error':
                    toast.classList.add('bg-red-500', 'text-white');
                    if (icon) icon.setAttribute('data-lucide', 'x-circle');
                    break;
                case 'info':
                    toast.classList.add('bg-blue-500', 'text-white');
                    if (icon) icon.setAttribute('data-lucide', 'info');
                    break;
            }
            if (text) text.textContent = message;

            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }

            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), duration);
        },
        resetAppData: async function () {
            try {
                this.showToast('Resetting application...', 'info', 2000);

                localStorage.clear();
                if (typeof sessionStorage !== 'undefined') {
                    sessionStorage.clear();
                }

                if ('indexedDB' in window) {
                    try {
                        const databases = await indexedDB.databases();
                        await Promise.all(
                            databases.map(db => {
                                return new Promise((resolve, reject) => {
                                    const deleteReq = indexedDB.deleteDatabase(db.name);
                                    deleteReq.onsuccess = () => resolve();
                                    deleteReq.onerror = () => reject(deleteReq.error);
                                });
                            })
                        );
                    } catch (error) {
                        console.log('IndexedDB cleanup error:', error);
                    }
                }

                if ('caches' in window) {
                    try {
                        const cacheNames = await caches.keys();
                        await Promise.all(
                            cacheNames.map(cacheName => caches.delete(cacheName))
                        );
                    } catch (error) {
                        console.log('Cache cleanup error:', error);
                    }
                }

                if ('serviceWorker' in navigator) {
                    try {
                        const registrations = await navigator.serviceWorker.getRegistrations();
                        await Promise.all(
                            registrations.map(registration => registration.unregister())
                        );
                    } catch (error) {
                        console.log('Service worker cleanup error:', error);
                    }
                }

                document.cookie.split(";").forEach(cookie => {
                    const eqPos = cookie.indexOf("=");
                    const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
                    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
                });

                setTimeout(() => {
                    this.showToast('Reset complete! Reloading...', 'success', 1000);
                    setTimeout(() => {
                        window.location.reload(true);
                    }, 1000);
                }, 500);
            } catch (error) {
                console.error('Error during reset:', error);
                this.showToast('Reset completed with some limitations', 'warning', 2000);
                setTimeout(() => window.location.reload(true), 2000);
            }
        },
        to12Hour: function (timeStr) {
            function convert(t) {
                if (!t) return '';
                let [h, m] = t.split(":").map(Number);
                if (isNaN(h) || isNaN(m)) return t;
                const ampm = h >= 12 ? "PM" : "AM";
                h = h % 12;
                if (h === 0) h = 12;
                return `${h}:${m.toString().padStart(2, "0")} ${ampm}`;
            }
            if (timeStr && timeStr.includes("-")) {
                const [start, end] = timeStr.split("-");
                return `${convert(start)} - ${convert(end)}`;
            } else {
                return convert(timeStr);
            }
        },
        getCurrentClassData: function () {
            if (typeof timetableData === 'undefined' || !this.selectedClassId) return null;
            return timetableData.find(c => c.id === this.selectedClassId) || timetableData[0];
        },
        rerenderCurrentView: function () {
            const activeView = this.elements.views.timetable.classList.contains('hidden') ? 'attendance' : 'timetable';
            if (activeView === 'attendance') {
                this.renderCalendar();
                if (this.selectedDateISO) {
                    this.renderDayDetails(new Date(this.selectedDateISO.replace(/-/g, '/')));
                }
            } else {
                if (this.elements.timetable.fullContent.classList.contains('hidden')) {
                    this.renderTodayView();
                } else {
                    this.renderFullView();
                }
                this.updateTimetableCues();
            }
        },
        switchView: function (viewName) {
            Object.values(this.elements.views).forEach(v => v.classList.add('hidden'));
            Object.values(this.elements.viewBtns).forEach(b => b.classList.remove('tab-active'));
            this.elements.views[viewName].classList.remove('hidden');
            this.elements.viewBtns[viewName].classList.add('tab-active');

            if (viewName === 'attendance') {
                this.initAttendancePage();
            } else {
                this.initTimetablePage();
            }
        },
        renderClassSelector: function () {
            if (!this.elements.classSelector || typeof timetableData === 'undefined') return;

            const selector = this.elements.classSelector;
            selector.innerHTML = '';
            timetableData.forEach(classData => {
                const option = document.createElement('option');
                option.value = classData.id;
                option.textContent = classData.displayName;
                if (classData.id === this.selectedClassId) {
                    option.selected = true;
                }
                selector.appendChild(option);
            });
        },
        renderBatchSelector: function () {
            if (!this.elements.batchSelector) return;

            const selector = this.elements.batchSelector;
            const currentClassData = this.getCurrentClassData();
            if (!currentClassData) return;

            selector.innerHTML = '';
            currentClassData.batches.forEach(batchName => {
                const option = document.createElement('option');
                option.value = batchName;
                option.textContent = batchName;
                if (batchName === this.selectedBatch) {
                    option.selected = true;
                }
                selector.appendChild(option);
            });
        },
        renderCardHTML: function (viewType, dayName, slot, actualDetails) {
            const id = `${viewType}-${dayName}-${slot.time.split('-')[0]}`;
            const details = actualDetails || slot;
            const color = slot.color || '#ccc';
            return `<div id="${id}" class="card p-3 sm:p-4 flex justify-between items-center subject-color-tag yellow-tint" style="border-left-color: ${color};">
        <div>
            <h3 class="font-bold text-base sm:text-lg">${details.subject}</h3>
            <p class="text-sm text-gray-600">${details.teacher || ''}</p>
            <p class="text-xs font-mono opacity-75">${details.room || ''}</p>
        </div>
        <div class="font-bold text-sm sm:text-lg text-right">${this.to12Hour(details.time)}</div>
        <div class="progress-bar"></div>
    </div>`;
        },
        formatDate: function(date) {
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();
            return `${day}/${month}/${year}`;
        },
        renderTodayView: function () {
            const currentClassData = this.getCurrentClassData();
            if (!currentClassData || !this.elements.timetable.todayContent) return;

            const today = new Date();
            const dayIndex = today.getDay();

            todayContent.innerHTML = '';

            if (!daySchedule) {
                todayContent.innerHTML = `<h2 class="text-2xl sm:text-3xl font-bold mb-6 text-center">WEEKEND!</h2>`;
                return;
            }

            todayContent.innerHTML = `<h2 class="text-2xl sm:text-3xl font-bold mb-6 text-center">TODAY / ${daySchedule.day.toUpperCase()}</h2>`;

            const listContainer = document.createElement('div');
            listContainer.className = 'space-y-4';

            if (!daySchedule.slots || daySchedule.slots.length === 0) {
                listContainer.innerHTML = `<div class="card p-4 text-center font-bold text-gray-500">No classes scheduled.</div>`;
            } else {
                daySchedule.slots.forEach(slot => {
                    if (slot.type === 'lab') {
                        const batchDetails = slot.batches.find(b => b.name === this.selectedBatch);
                        if (batchDetails) {
                            const details = { ...batchDetails, time: slot.time, color: slot.color };
                            listContainer.innerHTML += this.renderCardHTML('today', daySchedule.day, slot, details);
                        }
                    } else {
                        listContainer.innerHTML += this.renderCardHTML('today', daySchedule.day, slot, slot);
                    }
                });
            }

            todayContent.appendChild(listContainer);
        },
        renderFullView: function () {
            const currentClassData = this.getCurrentClassData();
            if (!currentClassData || !this.elements.timetable.fullGrid) return;

            const { fullGrid, mobileDaySelector } = this.elements.timetable;
            fullGrid.innerHTML = '';
            if (mobileDaySelector) mobileDaySelector.innerHTML = '';

            const isMobile = window.innerWidth < 1024;

            if (isMobile && mobileDaySelector) {
                const selectorContainer = document.createElement('div');
                selectorContainer.className = 'mobile-day-selector flex';

                if (currentClassData.days) {
                    currentClassData.days.forEach((day, index) => {
                        const btn = document.createElement('button');
                        btn.className = 'btn px-4 py-3 flex-grow text-sm flex-shrink-0';
                        btn.textContent = day.day.substring(0, 3);
                        if (index === this.mobileSelectedDayIndex) btn.classList.add('btn-active');
                        btn.onclick = () => { this.mobileSelectedDayIndex = index; this.renderFullView(); this.updateTimetableCues(); };
                        selectorContainer.appendChild(btn);
                    });
                }

                mobileDaySelector.appendChild(selectorContainer);
            }

            const gridContainer = document.createElement('div');
            gridContainer.className = 'grid gap-2 sm:gap-4 mt-4';

            if (isMobile) {
                gridContainer.style.gridTemplateColumns = `auto 1fr`;
                const mobileDay = currentClassData.days ? currentClassData.days[this.mobileSelectedDayIndex] : null;
                if (mobileDay) {
                    gridContainer.innerHTML += `<div class="card p-2 font-bold text-center flex items-center justify-center text-xs">TIME</div><div class="card p-2 font-bold text-center">${mobileDay.day.toUpperCase()}</div>`;

                    if (currentClassData.timeSlots) {
                        currentClassData.timeSlots.forEach(slot => {
                            const timeCell = document.createElement('div');
                            timeCell.className = 'card p-2 text-center text-xs font-semibold flex flex-col justify-center';
                            if (slot.label) {
                                timeCell.innerHTML = `<div class="text-gray-500 font-bold">${slot.label}</div>`;
                            } else {
                                timeCell.innerHTML = `<div>${this.to12Hour(slot.start)}</div><div class="text-gray-500">${this.to12Hour(slot.end)}</div>`;
                            }
                            gridContainer.appendChild(timeCell);

                            const id = `full-${mobileDay.day}-${slot.start}`;
                            let cellClasses = `card p-2 text-center text-xs font-semibold flex flex-col justify-center min-h-[4rem]`;
                            let contentHTML = '';
                            let colorStyle = '';

                            if (slot.label) {
                                contentHTML = `<p class="font-bold text-xs text-gray-500">${slot.label}</p>`;
                            } else {
                                const classSlot = mobileDay.slots ? mobileDay.slots.find(s => s.time && s.time.startsWith(slot.start)) : null;
                                if (classSlot) {
                                    let details = classSlot;
                                    if (classSlot.type === 'lab') {
                                        details = classSlot.batches ? classSlot.batches.find(b => b.name === this.selectedBatch) : null;
                                    }
                                    if (details) {
                                        contentHTML = `<h4 class="font-bold text-sm">${details.subject}</h4><p class="text-xs text-gray-600">${details.teacher || ''}</p><p class="text-xs font-mono">${details.room || ''}</p>`;
                                        cellClasses += ' subject-color-tag';
                                        colorStyle = `border-left-color: ${classSlot.color || '#ccc'};`;
                                    }
                                }
                            }

                            const contentCell = document.createElement('div');
                            contentCell.id = id;
                            contentCell.className = cellClasses;
                            if (colorStyle) contentCell.style.cssText = colorStyle;
                            contentCell.innerHTML = contentHTML + '<div class="progress-bar"></div>';
                            gridContainer.appendChild(contentCell);
                        });
                    }
                }
            } else {
                gridContainer.className = 'hidden lg:grid gap-4 mt-4';
                if (currentClassData.days) {
                    gridContainer.style.gridTemplateColumns = `auto repeat(${currentClassData.days.length}, 1fr)`;

                    gridContainer.innerHTML += `<div class="card p-2 font-bold text-center flex items-center justify-center">TIME</div>`;
                    currentClassData.days.forEach(day => {
                        gridContainer.innerHTML += `<div id="header-${day.day}" class="card p-2 font-bold text-center">${day.day.toUpperCase()}</div>`;
                    });

                    if (currentClassData.timeSlots) {
                        currentClassData.timeSlots.forEach(slot => {
                            gridContainer.innerHTML += `<div class="card p-2 text-center text-xs sm:text-sm font-semibold flex flex-col justify-center"><div>${this.to12Hour(slot.start)}</div><div class="text-gray-500">${this.to12Hour(slot.end)}</div></div>`;

                            currentClassData.days.forEach(day => {
                                const id = `full-${day.day}-${slot.start}`;
                                let cellClasses = `card p-2 flex flex-col justify-center text-center h-28`;
                                let contentHTML = '';
                                let colorStyle = '';

                                const classSlot = day.slots ? day.slots.find(s => s.time && s.time.startsWith(slot.start)) : null;
                                if (classSlot) {
                                    let details = classSlot;
                                    if (classSlot.type === 'lab') {
                                        details = classSlot.batches ? classSlot.batches.find(b => b.name === this.selectedBatch) : null;
                                    }
                                    if (details) {
                                        contentHTML = `<h4 class="font-bold text-sm">${details.subject}</h4><p class="text-xs text-gray-600">${details.teacher || ''}</p><p class="text-xs font-mono">${details.room || ''}</p>`;
                                        cellClasses += ' subject-color-tag';
                                        colorStyle = `style="border-left-color: ${classSlot.color || '#ccc'};"`;
                                    } else {
                                        contentHTML = '';
                                    }
                                } else if (slot.label) {
                                    contentHTML = `<p class="font-bold text-xs text-gray-500">${slot.label}</p>`;
                                } else {
                                    contentHTML = '';
                                }

                                gridContainer.innerHTML += `<div id="${id}" class="${cellClasses}" ${colorStyle}>${contentHTML}<div class="progress-bar"></div></div>`;
                            });
                        });
                    }
                }
            }

            fullGrid.appendChild(gridContainer);
        },
        updateTimetableCues: function () {
            const currentClassData = this.getCurrentClassData();
            if (!currentClassData) return;

            const now = new Date();
            const currentDayIndex = now.getDay();
            const currentTime = this.timeToMinutes(now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }));

            document.querySelectorAll('.current-class, .next-class, .past-element').forEach(el => {
                el.classList.remove('current-class', 'next-class', 'past-element');
            });

            document.querySelectorAll('.progress-bar').forEach(el => {
                el.style.width = '0%';
            });

            if (currentClassData.days) {
                currentClassData.days.forEach(day => {
                    const isCurrentDay = day.dayIndex === currentDayIndex;
                    const isPastDay = day.dayIndex < currentDayIndex;

                    const headerEl = document.getElementById(`header-${day.day}`);
                    if (headerEl && isPastDay) {
                        headerEl.classList.add('past-element');
                    }

                    if (currentClassData.timeSlots) {
                        currentClassData.timeSlots.forEach(timeSlot => {
                            const [startStr, endStr] = [timeSlot.start, timeSlot.end];
                            if (!startStr || !endStr) return;

                            const startTime = this.timeToMinutes(startStr);
                            const endTime = this.timeToMinutes(endStr);

                            const isPast = isPastDay || (isCurrentDay && currentTime >= endTime);
                            const isCurrent = isCurrentDay && currentTime >= startTime && currentTime < endTime;

                            const cardEl = document.getElementById(`full-${day.day}-${startStr}`);
                            const todayCardEl = document.getElementById(`today-${day.day}-${startStr}`);

                            if (cardEl) {
                                if (isPast) {
                                    cardEl.classList.add('past-element');
                                } else if (isCurrent) {
                                    cardEl.classList.add('current-class');
                                    const progress = ((currentTime - startTime) / (endTime - startTime)) * 100;
                                    const progressBar = cardEl.querySelector('.progress-bar');
                                    if (progressBar) progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
                                }
                            }

                            if (todayCardEl) {
                                if (isPast) {
                                    todayCardEl.classList.add('past-element');
                                } else if (isCurrent) {
                                    todayCardEl.classList.add('current-class');
                                    const progress = ((currentTime - startTime) / (endTime - startTime)) * 100;
                                    const progressBar = todayCardEl.querySelector('.progress-bar');
                                    if (progressBar) progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
                                }
                            }
                        });
                    }
                });
            }
        },
        renderCalendar: function () {
            if (!this.elements.attendance.gridBody || !this.elements.attendance.monthYearHeader) return;

            const { gridBody, monthYearHeader, startDate, endDate } = this.elements.attendance;
            gridBody.innerHTML = '';

            const year = this.calendarDate.getFullYear();
            const month = this.calendarDate.getMonth();
            monthYearHeader.textContent = `${this.calendarDate.toLocaleString('default', { month: 'long' })} ${year}`;

            const firstDayOfMonth = new Date(year, month, 1).getDay();
            const daysInMonth = new Date(year, month + 1, 0).getDate();

            let rangeStart = null, rangeEnd = null;
            if (startDate && startDate.value) {
                rangeStart = new Date(startDate.value);
                rangeStart.setHours(0, 0, 0, 0);
            }
            if (endDate && endDate.value) {
                rangeEnd = new Date(endDate.value);
                rangeEnd.setHours(0, 0, 0, 0);
            }

            for (let i = 0; i < firstDayOfMonth; i++) {
                gridBody.innerHTML += '<div></div>';
            }

            for (let day = 1; day <= daysInMonth; day++) {
                const date = new Date(year, month, day);
                date.setHours(0, 0, 0, 0);
                const iso = this.dateToISO(date);
                const dayOfWeek = date.getDay();
                const dayData = this.attendanceData[iso];

                const cell = document.createElement('button');
                cell.className = 'calendar-day p-2 text-center rounded-md';
                cell.textContent = day;
                cell.dataset.iso = iso;

                const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
                const isWithinRange = rangeStart && rangeEnd ? (date >= rangeStart && date <= rangeEnd) : true;

                if (isWeekend || !isWithinRange) {
                    cell.classList.add('disabled-day');
                    cell.disabled = true;
                } else {
                    cell.disabled = false;
                }

                if (dayData && dayData.periods) {
                    const periods = Object.values(dayData.periods).filter(Boolean);
                    if (periods.length > 0) {
                        if (periods.every(p => p === 'present')) {
                            cell.classList.add('present');
                        } else {
                            cell.classList.add('absent');
                        }
                    }
                }

                if (iso === this.selectedDateISO) {
                    cell.classList.add('selected');
                }

                cell.addEventListener('click', () => {
                    this.selectedDateISO = iso;
                    this.renderDayDetails(date);
                    this.renderCalendar();
                });

                gridBody.appendChild(cell);
            }
        },
        renderDayDetails: function (date) {
            const currentClassData = this.getCurrentClassData();
            if (!currentClassData || !this.elements.attendance.detailsHeader || !this.elements.attendance.detailsBody) return;

            const { detailsHeader, detailsBody, startDate, endDate } = this.elements.attendance;
            const iso = this.dateToISO(date);
            const dayIndex = date.getDay();
            const daySchedule = currentClassData.days ? currentClassData.days.find(d => d.dayIndex === dayIndex) : null;

            detailsHeader.textContent = `MARKING / ${date.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long' })}`;
            detailsBody.innerHTML = '';

            let rangeStart = null, rangeEnd = null;
            if (startDate && startDate.value) {
                rangeStart = new Date(startDate.value);
                rangeStart.setHours(0, 0, 0, 0);
            }
            if (endDate && endDate.value) {
                rangeEnd = new Date(endDate.value);
                rangeEnd.setHours(0, 0, 0, 0);
            }

            const checkDate = new Date(date);
            checkDate.setHours(0, 0, 0, 0);

            if (rangeStart && rangeEnd && !(checkDate >= rangeStart && checkDate <= rangeEnd)) {
                detailsBody.innerHTML = `<p class="text-gray-500 text-center font-bold">DATE IS OUTSIDE THE ACTIVE MARKING RANGE.</p>`;
                return;
            }

            if (!daySchedule || !daySchedule.slots || daySchedule.slots.length === 0) {
                detailsBody.innerHTML = `<p class="text-gray-500 text-center font-bold">${daySchedule ? 'No classes scheduled.' : "IT'S THE WEEKEND."}</p>`;
                return;
            }

            if (!this.attendanceData[iso]) {
                this.attendanceData[iso] = { status: null, periods: {} };
            }

            const overallStatus = this.attendanceData[iso].status;

            const bulkActionsEl = document.createElement('div');
            bulkActionsEl.className = 'flex items-center gap-2 mb-4 border-b-2 border-dashed border-gray-300 pb-3';
            bulkActionsEl.innerHTML = `
                <span class="font-bold text-sm">MARK ALL <span class="text-gray-400">(P/A)</span>:</span>
                <button data-action="mark-all-present" class="btn text-xs px-3 py-1 ${overallStatus === 'present' ? 'bg-green-200' : ''}">Present</button>
                <button data-action="mark-all-absent" class="btn text-xs px-3 py-1 ${overallStatus === 'absent' ? 'bg-red-200' : ''}">Absent</button>
            `;
            detailsBody.appendChild(bulkActionsEl);

            daySchedule.slots.forEach(slot => {
                let detailsToRender = slot;
                if (slot.type === 'lab') {
                    const batchDetails = slot.batches ? slot.batches.find(b => b.name === this.selectedBatch) : null;
                    if (batchDetails) {
                        detailsToRender = { ...slot, ...batchDetails };
                    } else {
                        return;
                    }
                }

                const periodStatus = this.attendanceData[iso].periods[detailsToRender.time];
                const periodEl = document.createElement('div');
                periodEl.className = 'p-2 border border-gray-300 rounded-md flex justify-between items-center';
                periodEl.innerHTML = `
                    <div>
                        <p class="font-bold">${detailsToRender.subject}</p>
                        <p class="text-xs text-gray-500">${this.to12Hour(detailsToRender.time)}</p>
                    </div>
                    <div class="flex gap-2">
                        <button data-time="${detailsToRender.time}" data-status="present" class="btn text-sm px-3 py-1 ${periodStatus === 'present' ? 'bg-green-200' : ''}">P</button>
                        <button data-time="${detailsToRender.time}" data-status="absent" class="btn text-sm px-3 py-1 ${periodStatus === 'absent' ? 'bg-red-200' : ''}">A</button>
                    </div>
                `;
                detailsBody.appendChild(periodEl);
            });
        },
        calculateAttendance: function () {
            if (!this.elements.attendance.results) return;

            const exam = this.elements.attendance.examSelector ? this.elements.attendance.examSelector.value : 'insem1';
            const classDataForAttendance = this.getCurrentClassData();
            if (!classDataForAttendance) return;

            let start, end;

            if (exam === 'custom') {
                start = this.elements.attendance.startDate ? this.elements.attendance.startDate.value : null;
                end = this.elements.attendance.endDate ? this.elements.attendance.endDate.value : null;
            } else {
                const period = classDataForAttendance.examPeriods && classDataForAttendance.examPeriods[exam];
                start = this.elements.attendance.startDate ? this.elements.attendance.startDate.value : (period ? period.start : null);
                end = this.elements.attendance.endDate ? this.elements.attendance.endDate.value : (period ? period.end : null);
            }

            if (!start || !end) {
                this.elements.attendance.results.innerHTML = `<p class="text-red-600 font-bold">SELECT BOTH DATES.</p>`;
                return;
            }

            let totalHeld = 0, totalAttended = 0;
            const subjectStats = {};

            for (let d = new Date(start); d <= new Date(end); d.setDate(d.getDate() + 1)) {
                const dayIndex = d.getDay();
                const daySchedule = classDataForAttendance.days ? classDataForAttendance.days.find(ds => ds.dayIndex === dayIndex) : null;
                if (!daySchedule || !daySchedule.slots) continue;

                const iso = this.dateToISO(d);

                daySchedule.slots.forEach(slot => {
                    let subjectToTrack = slot.subject;
                    let isRelevant = true;
                    let timeSlot = slot.time;

                    if (slot.type === 'lab') {
                        const batch = slot.batches ? slot.batches.find(b => b.name === this.selectedBatch) : null;
                        if (batch) {
                            subjectToTrack = batch.subject;
                        } else {
                            isRelevant = false;
                        }
                    }

                    if (isRelevant && subjectToTrack && timeSlot) {
                        if (!subjectStats[subjectToTrack]) {
                            subjectStats[subjectToTrack] = { held: 0, attended: 0 };
                        }

                        subjectStats[subjectToTrack].held++;
                        totalHeld++;

                        if (this.attendanceData[iso] && this.attendanceData[iso].periods[timeSlot] === 'present') {
                            subjectStats[subjectToTrack].attended++;
                            totalAttended++;
                        }
                    }
                });
            }

            const totalPercent = totalHeld > 0 ? (totalAttended / totalHeld * 100).toFixed(1) : "0.0";
            let html = `<h4 class="font-bold text-lg mb-3">`;

            if (exam === 'custom') {
                html += `CUSTOM PERIOD (${start} to ${end})`;
            } else {
                html += `${exam.toUpperCase()}`;
                const period = classDataForAttendance.examPeriods && classDataForAttendance.examPeriods[exam];
                if (period) {
                    html += ` (${period.start} to ${period.end})`;
                }
            }

            html += `<br>OVERALL: ${totalAttended}/${totalHeld} (${totalPercent}%)</h4><div class="space-y-2 text-sm">`;

            Object.entries(subjectStats).forEach(([subject, stats]) => {
                const percent = stats.held > 0 ? (stats.attended / stats.held * 100).toFixed(1) : "0.0";
                html += `<p><strong class="font-bold">${subject}:</strong> ${stats.attended}/${stats.held} (${percent}%)</p>`;
            });

            this.elements.attendance.results.innerHTML = html + `</div>`;
        },
        handleBulkMark: function (bulkStatus) {
            if (!this.selectedDateISO) return;

            const date = new Date(this.selectedDateISO.replace(/-/g, '/'));
            const currentClassData = this.getCurrentClassData();
            if (!currentClassData) return;

            const daySchedule = currentClassData.days ? currentClassData.days.find(d => d.dayIndex === date.getDay()) : null;
            if (!daySchedule) return;

            const { startDate, endDate } = this.elements.attendance;
            let rangeStart = null, rangeEnd = null;

            if (startDate && startDate.value) {
                rangeStart = new Date(startDate.value);
                rangeStart.setHours(0, 0, 0, 0);
            }
            if (endDate && endDate.value) {
                rangeEnd = new Date(endDate.value);
                rangeEnd.setHours(0, 0, 0, 0);
            }

            const checkDate = new Date(date);
            checkDate.setHours(0, 0, 0, 0);

            if (rangeStart && rangeEnd && !(checkDate >= rangeStart && checkDate <= rangeEnd)) return;

            if (!this.attendanceData[this.selectedDateISO]) {
                this.attendanceData[this.selectedDateISO] = { status: null, periods: {} };
            }

            this.attendanceData[this.selectedDateISO].status = bulkStatus;

            if (daySchedule.slots) {
                daySchedule.slots.forEach(slot => {
                    let timeSlot = slot.time;
                    let shouldMark = true;

                    if (slot.type === 'lab') {
                        const batch = slot.batches ? slot.batches.find(b => b.name === this.selectedBatch) : null;
                        if (!batch) {
                            shouldMark = false;
                        }
                    }

                    if (shouldMark && timeSlot) {
                        this.attendanceData[this.selectedDateISO].periods[timeSlot] = bulkStatus;
                    }
                });
            }

            this.saveState();
            this.showToast();
            this.renderDayDetails(date);
            this.renderCalendar();
        },
        initTimetablePage: function () {
            if (this.elements.timetable.todayBtn) this.elements.timetable.todayBtn.classList.add('btn-active');
            if (this.elements.timetable.fullBtn) this.elements.timetable.fullBtn.classList.remove('btn-active');
            if (this.elements.timetable.todayContent) this.elements.timetable.todayContent.classList.remove('hidden');
            if (this.elements.timetable.fullContent) this.elements.timetable.fullContent.classList.add('hidden');

            this.renderTodayView();
            this.updateTimetableCues();
        },
        initAttendancePage: function () {
            this.loadState();

            const today = new Date();
            this.selectedDateISO = this.dateToISO(today);
            this.calendarDate = new Date(today);

            this.renderExamSelector();

            if (this.elements.attendance.examSelector) {
                this.elements.attendance.examSelector.addEventListener('change', () => {
                    const selectedExam = this.elements.attendance.examSelector.value;
                    const currentClassData = this.getCurrentClassData();

                    if (selectedExam !== 'custom' && currentClassData) {
                        const period = currentClassData.examPeriods && currentClassData.examPeriods[selectedExam];
                        if (period) {
                            if (this.elements.attendance.startDate) this.elements.attendance.startDate.value = period.start;
                            if (this.elements.attendance.endDate) this.elements.attendance.endDate.value = period.end;
                        } else {
                            const today = new Date();
                            const currentMonthStart = new Date(today.getFullYear(), today.getMonth(), 1);
                            const currentMonthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0);

                            if (this.elements.attendance.startDate) this.elements.attendance.startDate.value = this.dateToISO(currentMonthStart);
                            if (this.elements.attendance.endDate) this.elements.attendance.endDate.value = this.dateToISO(currentMonthEnd);
                        }
                    }

                    this.updateExamPeriodInfo();
                    this.saveState();
                    this.renderCalendar();
                    this.renderDayDetails(today);
                    this.calculateAttendance();
                });
            }

            this.updateExamPeriodInfo();

            const shouldSetDefaultDates = (!this.elements.attendance.startDate || !this.elements.attendance.startDate.value) ||
                (!this.elements.attendance.endDate || !this.elements.attendance.endDate.value);

            if (shouldSetDefaultDates) {
                const currentMonthStart = new Date(today.getFullYear(), today.getMonth(), 1);
                const currentMonthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0);

                if (this.elements.attendance.startDate && !this.elements.attendance.startDate.value) {
                    this.elements.attendance.startDate.value = this.dateToISO(currentMonthStart);
                }
                if (this.elements.attendance.endDate && !this.elements.attendance.endDate.value) {
                    this.elements.attendance.endDate.value = this.dateToISO(currentMonthEnd);
                }
            } this.renderCalendar();
            this.renderDayDetails(today);
            this.calculateAttendance();
        },

        renderExamSelector: function () {
            if (!this.elements.attendance.examSelector) return;

            const selector = this.elements.attendance.examSelector;
            selector.innerHTML = '';

            const examOptions = [
                { value: 'insem1', text: 'In-Sem 1' },
                { value: 'insem2', text: 'In-Sem 2' },
                { value: 'endsem', text: 'End-Sem' },
                { value: 'custom', text: 'Custom' }
            ];

            examOptions.forEach(exam => {
                const option = document.createElement('option');
                option.value = exam.value;
                option.textContent = exam.text;
                selector.appendChild(option);
            });

            selector.value = 'custom';
        },
        updateExamPeriodInfo: function () {
            const currentClassData = this.getCurrentClassData();
            if (!currentClassData) return;

            const exam = this.elements.attendance.examSelector ? this.elements.attendance.examSelector.value : 'custom';
            const period = currentClassData.examPeriods && currentClassData.examPeriods[exam];

            if (this.elements.attendance.examPeriodInfo) {
                if (exam === 'custom') {
                    this.elements.attendance.examPeriodInfo.innerHTML = `<div class="font-bold">CUSTOM Period:</div><div>Set your own date range</div>`;
                } else if (period) {
                    this.elements.attendance.examPeriodInfo.innerHTML = `<div class="font-bold">${exam.toUpperCase()} Period:</div><div>${period.start} to ${period.end}</div>`;
                } else {
                    this.elements.attendance.examPeriodInfo.innerHTML = `<div class="font-bold">${exam.toUpperCase()} Period:</div><div>Using current month dates</div>`;
                }
            }
        },
        checkAndSetCustomMode: function () {
            if (!this.elements.attendance.examSelector || !this.elements.attendance.startDate || !this.elements.attendance.endDate) return;

            const currentExam = this.elements.attendance.examSelector.value;
            if (currentExam === 'custom') return;

            const currentClassData = this.getCurrentClassData();
            if (!currentClassData) return;

            const currentStartDate = this.elements.attendance.startDate.value;
            const currentEndDate = this.elements.attendance.endDate.value;

            const examPeriods = ['insem1', 'insem2', 'endsem'];
            let matchesAnyPeriod = false;

            for (let exam of examPeriods) {
                const period = currentClassData.examPeriods && currentClassData.examPeriods[exam];
                if (period && period.start === currentStartDate && period.end === currentEndDate) {
                    matchesAnyPeriod = true;
                    if (currentExam !== exam) {
                        this.elements.attendance.examSelector.value = exam;
                        this.updateExamPeriodInfo();
                    }
                    break;
                }
            }

            if (!matchesAnyPeriod) {
                this.elements.attendance.examSelector.value = 'custom';
                this.updateExamPeriodInfo();
            }
        },
        init: function () {
            this.loadState();
            this.renderClassSelector();
            this.renderBatchSelector();
            this.switchView('timetable');

            document.addEventListener('keydown', (e) => {
                if (this.elements.views.attendance.classList.contains('hidden') || document.activeElement.tagName === 'INPUT') return;

                if (e.key.toLowerCase() === 'p') {
                    e.preventDefault();
                    this.handleBulkMark('present');
                }
                if (e.key.toLowerCase() === 'a') {
                    e.preventDefault();
                    this.handleBulkMark('absent');
                }
            });

        }
    };

    App.init();
});