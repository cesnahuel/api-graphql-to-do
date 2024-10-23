import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { TodoService } from './todo.service';
import { Todo } from './entity/todo.entity';
import { CreateTodoInput } from './dto/inputs/create-todo.input';

@Resolver()
export class TodoResolver {
    constructor(
        private readonly todoService: TodoService
    ){}

    @Query(() => [Todo], {name: 'todos'}) 
    findAll() : Todo[] {
        return this.todoService.finAll();
    }
    @Query(() => Todo, {name: 'todo'})
    findOne(
        @Args('id', { type: () => Int } ) id: number 
    ) 
    {
        return this.todoService.findOne(id);
    }
    @Mutation( () => Todo, { name: 'crearTodo'})
    createTodo(
        @Args('CreateTodoInput') createTodoInput: CreateTodoInput
    ) {
        console.log(createTodoInput)
        return null;
    }
}
