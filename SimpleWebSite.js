document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    if(!calendarEl){
        console.error('Calendar element not found!');
    return;
    }
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        height: "parent",
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        events: [
            { title: 'My Event', start: '2025-07-01' },
            { title: 'Another Event', start: '2025-07-15', end: '2025-07-17' }
        ]
    });
    calendar.render();
    console.log('Calendar rendered');
});


