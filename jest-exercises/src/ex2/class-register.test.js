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
        const actual = calculateAverageOfNotes(students[0]);

        expect(actual).toBe(4)
    });

    test('should calculate average when result would be rational number', () => {
        const actual = calculateAverageOfNotes({ notes: [1, 2] });

        expect(actual).toBe(1.5)
    });
});

describe('getBestStudentName', () => {
    test('should return name of best student', () => {
        const actual = getBestStudentName(students);

        expect(actual).toBe('Jacek');
    });
});

describe('filterStudentsByIds', () => {
    test('should return students with given ids', () => {
        const actual = filterStudentsByIds(students, [1, 2]);

        expect(actual).toHaveLength(2);
        expect(actual[0].name).toBe('Jacek');
        expect(actual[1].name).toBe('Ewa');
        expect(actual).toEqual([
            {
                id: 1,
                name: 'Jacek',
                notes: [5, 3, 4, 2, 5, 5],
            },
            {
                id: 2,
                name: 'Ewa',
                notes: [2, 3, 3, 3, 2, 5],
            }
        ]);
    });
});

describe('calculateAverageOfNoteForGroup', () => {
    test('should return average note of group', () => {
        const actual = calculateAverageOfNoteForGroup(groups[0], students);

        expect(actual).toBe(3.5);
    });

    test('should return average note of group with one person', () => {
        const actual = calculateAverageOfNoteForGroup(groups[2], students);

        expect(actual).toBe(3);
    });
});

describe('getBestGroupName', () => {
    test('should return name of best student', () => {
        const actual = getBestGroupName(groups, students);

        expect(actual).toBe('Group 1');
    });
});