module.exports = {
    timetable: [],
    // This allow user to enter the details of the scheduled classes
    scheduleClass(module, day, location, start, end, hours) {
        this.timetable.push({
            module: module,
            day: day,
            location: location,
            start: start,
            end: end,
            hours: hours
        });
    },
    // This finds the module name and adds tutorName into the specific object
    addTutor(modName, tutorName) {
        const result = this.timetable.filter(({ module }) => module === modName);
        result.forEach(timetable => timetable.tutor = tutorName)
    },
    // This allows you to edit the specific module
    updateTimetable(index, newModule, newDay, newLocation, newStart, newEnd, newHrs) {
        result = this.timetable[index];
        if (newModule != '') {
            result.module = newModule;
        }
        if (newDay != '') {
            result.day = newDay;
        }
        if (newLocation != '') {
            result.location = newLocation;
        }
        if (newStart != '') {
            result.start = newStart;
        }
        if (newEnd != '') {
            result.end = newEnd;
        }
        if (newHrs != null) {
            result.hours = newHrs;
        }
    },
    // This get all the objects in the array
    getTimetable() {
        return this.timetable;
    },
    // get all the same module name and add the number of hours
    getTotalHrs(moduleName) {
        sum = 0;
        const result = this.timetable.filter(({ module }) => module === moduleName);
        result.forEach(timetable => sum = sum + timetable.hours);
        return sum;
    },
    //delete one schedule record
    deleteSchedule(index,all){
        if(all == 'all'){
            this.timetable.splice(0, this.timetable.length);
            return 'You have deleted all schedule';
        }
        else{
            this.timetable.splice(index, 1);
            return 'You have deleted a schedule';
        }
    }
}
