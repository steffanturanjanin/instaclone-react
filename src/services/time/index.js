import * as moment from 'moment';

export function timestamp (created_at) {
    const now = moment();
    const createdAt = moment(created_at);

// get the difference between the moments
    const diff = now.diff(createdAt);

//express as a duration
    const diffDuration = moment.duration(diff);

// display

    const weeks = diffDuration.asWeeks().toFixed();
    const days = diffDuration.asDays().toFixed();
    const hours = diffDuration.asHours().toFixed();
    const minutes = diffDuration.asMinutes().toFixed();
    const seconds = diffDuration.asSeconds().toFixed();

    if (seconds < 60) {
        return seconds + " seconds";
    }

    if (minutes < 60) {
        return minutes + " minutes";
    }

    if (hours < 24) {
        return hours + " hours";
    }

    if (days < 7) {
        return days + " d";
    }

    return weeks + " weeks";
}
