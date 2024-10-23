import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {

    @Query( () => String, { description: 'Esta es una descripcion de lo que hace este resolver', name: 'helloWorldRename'})
    helloWorld(): string {
        return "Hola Mundo"
    }

    @Query( () => Float, { description: 'Retorna un numero', name: 'randomNumber'})
    getRandomNumber(): number {
        return Math.random() * 100;
    }

    // Recibe un parametro tipo int, que puede ser opcional pero que por defecto toma el valor 6 en caso que no lo envie
    @Query ( () => Int, { name: 'randomFromZeroTo', description: 'from zero to argument to'})
    getRandomFromZeroTo(@Args('to', { type: () => Int, nullable: true } ) toCualquierCosa: number = 6 ): number {
        return Math.floor( Math.random() * toCualquierCosa);
     }

}
