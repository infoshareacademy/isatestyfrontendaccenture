// Zrób mock funckji postTask byś móc sprawdzić czy została ona wywołana i napisz testy.

import { addTodo } from './todos-service';
import { postTask } from './server';

jest.mock('./server.js', () => ({
    postTask: jest.fn()
}))

describe('Todo service', () => {
    beforeEach(() => expect.hasAssertions());
    afterEach(() => {
        jest.resetAllMocks()
    })

    test('should return success for valid task', () => {
        const result = addTodo('iść zakupy');

        expect(result).toEqual({
            success: true
        })
    });

    test('should call postTask for valid task', () => {
        addTodo('wyrzucić śmieci');

        expect(postTask).toHaveBeenCalled();
        expect(postTask).toHaveBeenCalledTimes(1);
        expect(postTask).toHaveBeenCalledWith('wyrzucić śmieci');
    });

    test('should return error for invalid task', () => {
        const result = addTodo('');

        expect(result).toEqual({
            error: 'Given task is not valid'
        })
    });
})
