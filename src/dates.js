import { format, addDays } from "date-fns";

function formatInputDate(date) {
    const day = date.slice(8);
    const month = date.slice(5, 7);
    const year = date.slice(0, 4);

    if (date !== '') {
        return day + '-' + month + '-' + year;
    }
}

function todaysDate() {
    const date = format(new Date(), 'yyyy-MM-dd');

    return date;
}

function datesThisWeek() {
    const dates = [];

    const today = new Date();

    dates.push(today);

    // Add remaining days to week - cannot add days onto formatted date
    for (let i = 1; i < 7; i++) {
        let date = addDays(today, i);
        date = format(date, 'yyyy-MM-dd');
        dates.push(date);
    }

    // Format original date before return
    dates[0] = format(dates[0], 'yyyy-MM-dd');

    return dates;
}

export { formatInputDate, todaysDate, datesThisWeek };