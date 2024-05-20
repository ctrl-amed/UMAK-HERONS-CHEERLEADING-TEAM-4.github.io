const isLeapYear = (year) => {
    return (
        (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
        (year % 100 === 0 && year % 400 === 0)
    );
};

const getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28;
};

const month_names = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

const calendar = document.querySelector('.calendar');
const month_picker = document.querySelector('#month-picker');





const events = {
    // Example Content NOTE: the dd starts at 0 not 1
    '2024-05-18': [], // EX: dd = 18 is actually 19
    // Add more content here
};








month_picker.onclick = () => {
    month_list.classList.remove('hideonce');
    month_list.classList.remove('hide');
    month_list.classList.add('show');
};

const generateCalendar = (month, year) => {
    let calendar_days = document.querySelector('.calendar-days');
    calendar_days.innerHTML = '';
    let calendar_header_year = document.querySelector('#year');
    let days_of_month = [
        31, getFebDays(year), 31, 30, 31, 30, 31,
        31, 30, 31, 30, 31
    ];

    let currentDate = new Date();

    month_picker.innerHTML = month_names[month];
    calendar_header_year.innerHTML = year;

    let first_day = new Date(year, month);

    for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
        let day = document.createElement('div');
	day.classList.add("dayCell");

        if (i >= first_day.getDay()) {
            let dayNumber = i - first_day.getDay() + 1;
            day.innerHTML = dayNumber;

            let dayDate = new Date(year, month, dayNumber);
            let formattedDate = dayDate.toISOString().split('T')[0];

            if (
                dayNumber === currentDate.getDate() &&
                year === currentDate.getFullYear() &&
                month === currentDate.getMonth()
            ) {
                day.classList.add('current-date');
                displayEvents(formattedDate)
            }

            day.onclick = () => {
                selectedDate = dayDate;
		var element = document.getElementsByClassName("current-date")[0];
		element.classList.remove("current-date");
		day.classList.add("current-date");
                displayEvents(formattedDate);
            };
        }
        calendar_days.appendChild(day);
    }
};

const displayEvents = (date) => {
    const eventList = document.querySelector('.event-list');
    eventList.innerHTML = `<div class="form-container-feedback"> 
        <div class="section-title"> 
            <h2>ATTENDANCE</h2> 
        </div> 
        <form class="attendance-form" action="/submit-attendance" method="get">
        <div class="form-row">
            <label>STATUS:</label> 
            <input type="text" id="status" name="status" readonly> 
        </div> 
        <div class="form-row"> 
            <label for="coach">COACH:</label> 
            <input type="text" id="coach" name="coach" placeholder="PRESENT COACH" readonly>
        </div> 
        <div class="section-title">
            <h2>COACH FEEDBACK</h2> 
        </div>
        
            <div class="form-row"> 
                <div class="card"> 
                    <label>Performance Rating</label> 
                        <span class="star">★</span> 
                        <span class="star">★</span> 
                        <span class="star">★</span> 
                        <span class="star">★</span> 
                        <span class="star">★</span> 
                        <label id="output"> Rating is: 0/5 </label> 
                </div> 
            </div> 
            <br> 
            <div class="form-row-comment"> 
                <label for="comment">COMMENT:</label> 
                <textarea id="comment" name="comment" placeholder="No additional comment" readonly></textarea> 
            </div> 
        </form> 
        </div>`;

        


    if (events[date]) {
        events[date].forEach((event) => {
            let eventItem = document.createElement('div');
            eventItem.textContent = event;
            eventList.appendChild(eventItem);
        });
    } else {
        eventList.innerHTML = '<div class="form-container-nofeedback"> <div class="section-title"> <h1>No session for this day</h1> </div> </div>';
    }
};

let month_list = calendar.querySelector('.month-list');
month_names.forEach((e, index) => {
    let month = document.createElement('div');
    month.innerHTML = `<div>${e}</div>`;

    month_list.append(month);
    month.onclick = () => {
        currentMonth.value = index;
        generateCalendar(currentMonth.value, currentYear.value);
        month_list.classList.replace('show', 'hide');
        
    };
});

(function() {
    month_list.classList.add('hideonce');
})();

document.querySelector('#pre-year').onclick = () => {
    --currentYear.value;
    generateCalendar(currentMonth.value, currentYear.value);
};

document.querySelector('#next-year').onclick = () => {
    ++currentYear.value;
    generateCalendar(currentMonth.value, currentYear.value);
};

let currentDate = new Date();
let currentMonth = { value: currentDate.getMonth() };
let currentYear = { value: currentDate.getFullYear() };
generateCalendar(currentMonth.value, currentYear.value);

const currshowDate = new Date();
const showCurrentDateOption = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
};







let stars = 
    document.getElementsByClassName("star");
let output = 
    document.getElementById("output");
let initialRating = localStorage.getItem('performanceRating') || 0;
    
function gfg(n) {
    remove();
    for (let i = 0; i < n; i++) {
        if (n == 1) cls = "one";
        else if (n == 2) cls = "two";
        else if (n == 3) cls = "three";
        else if (n == 4) cls = "four";
        else if (n == 5) cls = "five";
        stars[i].className = "star " + cls;
    }
    output.innerText = "Rating is: " + n + "/5";
}

function updateRatingFromStorage() {
    const rating = localStorage.getItem('performanceRating') || 0;
    updateRatingDisplay(rating);
}

updateRatingDisplay(initialRating);