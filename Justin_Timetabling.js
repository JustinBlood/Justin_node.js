module.exports = {
    timetable:[],
    // This allow user to enter the details of the scheduled classes
    scheduleClass(module,day,location,hours) {
        this.timetable.push({
            module: module,
            day: day,
            location: location,
            hours: hours
        });
    },
    // Explain what function B does
    addTutor(modName, tutorName) {
        
    },
    // Explain what function C does
    updateTimetable() {
        console.log("Hello function B");
    },
    // Explain what function D does
    getTimetable() {
        return this.timetable;
    },
    // Explain what function E does
    getTotalHrs(moduleName) {
        
    }
}
