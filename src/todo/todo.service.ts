import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './entity/todo.entity';

@Injectable()
export class TodoService {

    
    private todos: Todo[] = [
        { id: 1, description: 'piedra del Alma', done: false },
        { id: 2, description: 'piedra del Espacio', done: false },
        { id: 3, description: 'piedra del Poder', done: false }
    ]

    finAll(): Todo[] 
    {
        return this.todos;
    }

    findOne(id: number): Todo
    {
        const todo = this.todos.find(t => t.id === id);

        if( !todo ) throw new NotFoundException(`Todo con ${ id } no encontrado`);

        return todo;

    }
}
