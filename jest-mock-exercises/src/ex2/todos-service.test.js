// Zrób mock funckji postTask byś móc sprawdzić czy została ona wywołana i napisz testy.

import { addTodo } from './todos-service';
import { postTask } from './server';

describe('Todo service', () => {
    beforeEach(() => expect.hasAssertions())

    test('should return success for valid task', () => {

    });

    test('should call postTask for valid task', () => {

    });

    test('should return error for invalid task', () => {

    });
})
