const timetable = require("./Justin_Timetabling.js");


timetable.scheduleClass('EGL101', 'Monday', 'S.500', '10:00AM', '01:00PM', 3);
timetable.scheduleClass('EGL102', 'Tuesday', 'S.501', '10:00AM', '01:00PM', 3);
timetable.scheduleClass('EGL103', 'Wednesday', 'S.502', '10:00AM', '01:00PM', 3);
timetable.scheduleClass('EGL101', 'Thursday', 'S.500', '10:00AM', '01:00PM', 3);

//Add tutor name to that specific module
timetable.addTutor('EGL', 'Mr Tan');

//Edit timetable
timetable.updateTimetable(1, '', '', 'S.505', '', '', 8);

//Get timetable
console.log(timetable.getTimetable());

//Get total amount of hours for specific module
timetable.getTotalHrs('EGL101');

//Delete a schedule or all schedule
console.log(timetable.deleteSchedule(3));

//Get timetable
console.log(timetable.getTimetable());