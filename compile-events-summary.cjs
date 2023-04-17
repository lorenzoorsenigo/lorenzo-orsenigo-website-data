const fs = require('fs');
const eventsSummary = [];
let eventFileIndex = 0;
let fileExists = true;

for (eventFileIndex; fileExists; eventFileIndex++) {
    if (fs.existsSync(`./events-${eventFileIndex}.json`)) {
        const eventFile = require(`./events-${eventFileIndex}.json`);
        for (const event of eventFile) {
            eventsSummary.push({
                eventId: event.id,
                fileId: eventFileIndex,
                date: event.date
            });
        }
    } else {
        fileExists = false;
    }
}

fs.writeFileSync('./events-summary.json', JSON.stringify(eventsSummary, null, 4));
