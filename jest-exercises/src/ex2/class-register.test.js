import { calculateAverageOfNotes, getBestStudentName, filterStudentsByIds, calculateAverageOfNoteForGroup, getBestGroupName } from './class-register';

const students = [
    {
        id: 1,
        name: 'Jacek',
        notes: [5, 3, 4, 2, 5, 5],
    },
    {
        id: 2,
        name: 'Ewa',
        notes: [2, 3, 3, 3, 2, 5],
    },
    {
        id: 3,
        name: 'Zygmunt',
        notes: [2, 2, 4, 4, 3, 3],
    },
];

const groups = [
    {
        id: 1,
        name: 'Group 1',
        studentIds: [1, 2],
    },
    {
        id: 2,
        name: 'Group 2',
        studentIds: [1, 3],
    },
    {
        id: 3,
        name: 'Group 3',
        studentIds: [3],
    },
];


//  Uzupełnij pozostałe testy

describe('calculateAverageOfNotes', () => {
    beforeEach(() => {
        expect.hasAssertions();
    });

    test('should calculate average when result would be integer', () => {

    });

    test('should calculate average when result would be rational number', () => {

    });
});

describe('getBestStudentName', () => {
    test('should return name of best student', () => {

    });
});

describe('filterStudentsByIds', () => {
    test('should return students with given ids', () => {

    });
});

describe('calculateAverageOfNoteForGroup', () => {
    test('should return average note of group', () => {

    });

    test('should return average note of group with one person', () => {

    });
});

describe('getBestGroupName', () => {
    test('should return name of best student', () => {

    });
});