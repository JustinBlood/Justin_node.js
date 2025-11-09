module.exports = {
    timetable:[],
    // Explain what function A does
    scheduleClass(module,day,location,hours) {
        this.timetable.push({
            module: module,
            day: day,
            location: location,
            hours: hours
        });
    },
    // Explain what function B does
    addTutor(moduleName, tutorName) {
        const record = this.timetable.find(item => item.module === moduleName);
        
        if (record) {
            record.tutor = tutorName;
            console.log(`Tutor '${tutorName}' added to module '${moduleName}'.`);
        } else {
            console.log(`Module '${moduleName}' not found.`);
        }
    }
    // Explain what function C does
    updateTimetable() {
        console.log("Hello function B");
    }
    // Explain what function D does
    getTimetable() {
        return this.timetable;
    }
    // Explain what function D does
    getTotalHrs(moduleName) {
        
    }
}
