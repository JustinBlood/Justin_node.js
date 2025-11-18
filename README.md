# Assignment 1

You will only need one file, ie, your node module, for this assignment.

In this readme file, describe how to use your node module. It could be similar to **app.js** from Lab2, where you call some functions in your node module and display the output. Describe how to setup your node module, if any. Describe how to call the functions, what parameters required and so on.

You can press **Ctrl+Shift+V** in this file in Visual Studio Code to see a live preview of the readme file.

For some tips in formatting text in readme file, refer to https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

# Instruction

-1 Function: timetable.scheduleClass() -> Enter the ModuleCode, Weekday, BlockLocation, startTime, endTime, hours for it's parameter

-2 Function: timetable.addTutor() -> Enter the moduleCode, tutorName in the parameter this way it will find the specific module and add the tutor name for that module

-3 Function: Edit the object through index for example -> timetable.updateTimetable(1, '', '', 'S.505', '', '',);

-4 Function: timetable.getTimetable() -> Gets all the modules schedule

-5 Function: timetable.getTotalHrs() -> Enter moduleCode in the parameter and it will total up the hrs for that module if you have more of the same module in different weekdays

-6 Function: timetable.getTimetable() -> Enter the schedule index to select which schedule to delete OR add all string in the function to delete all schedule e.g. timetable.getTimetable(3,'all')

# References
-Use NYP timetable as a reference
