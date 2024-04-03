import { postTask } from './server';

export const addTodo = (task) => {
    if (task) {
        postTask(task);

        return {
            success: true,
        };
    } else {
        return {
            error: 'Given task is not valid',
        };
    }
};
