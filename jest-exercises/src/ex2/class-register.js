export const calculateAverageOfNotes = (student) => {
    return student.notes.reduce((a, b) => a + b, 0) / student.notes.length;
}

export const getBestStudentName = (students) => {
    return students.map((student) => ({
        name: student.name,
        note: calculateAverageOfNotes(student)
    })).sort((studentA, studentB) => {
        return studentA.note > studentB.note ? 1 : 0
    })[0].name
}

export const filterStudentsByIds = (students, studentIds) => {
    return students.filter((student) => studentIds.includes(student.id));
}

export const calculateAverageOfNoteForGroup = (group, students) => {
    const filteredStudents = filterStudentsByIds(students, group.studentIds);


    return (filteredStudents
        .map((student) => calculateAverageOfNotes(student))
        .reduce((a, b) => a + b, 0)) / filteredStudents.length;
}

export const getBestGroupName = (groups, students) => {
    return groups.map((group) => ({
        name: group.name,
        note: calculateAverageOfNoteForGroup(group, students)
    })).sort((groupA, groupB) => {
        return groupA.note > groupB.note ? 1 : 0
    })[0].name
}