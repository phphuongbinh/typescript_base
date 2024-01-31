/* eslint-disable @typescript-eslint/no-unused-vars */
//?? Partial<Type>

interface Todo {
    title: string,
    description: string
}

// interface NewTodo {
//     title?: string,
//     description?: string
// }

type NewTodo = Partial<Todo>

export function updateTodo(todo: Todo, newTodo: NewTodo) {
    return {
        ...todo,
        ...newTodo
    }
}

//?? Require<Type>

interface Props {
    isActive?: boolean;
    color?: string;
}

const compA: Props =  {};
const compB : Required<Props> = {isActive: true,
 color: "red"}

// ?? Readonly<Type>

interface Book {
    title: string
}

const life : Book = { title: "The life of book"}
const game : Readonly<Book> = {title: "The life of Game"}

// ?? Record<Keys, Types>
interface CatInfo {
    age: number,
    breed: string
}

type CatName = "miffy" | "boris" | "mordred";

const cats : Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
}

cats.boris

//?? Pick<Type, Keys>

interface Todos {
    title: string,
    desc: string,
    complete: boolean
}

type TodoPreview = Pick<Todos, "title" | "complete">
const todos : TodoPreview  ={
    title: "Do homeword",
    complete: true
}

// ?? Omit<Type, Keys>

interface TodoOmit {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
  }
   
  type TodoPreviewOmit = Omit<TodoOmit, "description">;
   
  const todoOmit: TodoPreviewOmit = {
    title: "Clean room",
    completed: false,
    createdAt: 1615544252770,
  };
   
  todoOmit;


   