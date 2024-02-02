/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Children, useEffect, useReducer, useRef, useState } from "react";
import useTodos from "./hooks/useTodos";

const Heading = ({ title }: { title: string }) => {
  return <h2 className="mb-5 text-2xl font-bold">{title}</h2>;
};

interface Data {
  text: string;
}

const App = () => {
  const { todos, onAddTodo, onRemoveTodo, inputRef } = useTodos([]);
  const [data, setData] = useState<Data | null>(null);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  const onClickItem = (item: string) => {
    alert(item);
  };
  return (
    <div className="p-5">
      <Heading title="Todo App"></Heading>
      {/* <List
        items={["Javascript", "Html", "Css", "React"]}
        onClickItem={(item) => onClickItem(item)}
      ></List>
      <Boxded>
        <div>ABC</div>
      </Boxded> */}
      <div className="max-w-sm">
        {/* <div className="flex flex-col mb-5 gap-y-2">
          {todos.map((todo) => (
            <div className="flex items-center gap-x-3" key={todo.id}>
              <span>{todo.text}</span>
              <button
                onClick={() => onRemoveTodo(todo.id)}
                className="p-2 text-sm text-white bg-red-500 rounded-lg "
              >
                Remove
              </button>
            </div>
          ))}
        </div> */}
        <RenderList
          keyExtractor={(todo) => todo.id}
          items={todos}
          render={(todo) => (
            <div className="flex items-center gap-x-3" key={todo.id}>
              <span>{todo.text}</span>
              <button
                onClick={() => onRemoveTodo(todo.id)}
                className="p-2 text-sm text-white bg-red-500 rounded-lg "
              >
                Remove
              </button>
            </div>
          )}
        ></RenderList>
        <div className="flex items-center gap-x-5">
          <input
            type="text"
            className="p-4 border rounded outline-none border-slate-200"
            ref={inputRef}
          />
          <button
            onClick={onAddTodo}
            className="p-4 text-center text-white bg-blue-500 rounded-lg"
          >
            Add todo
          </button>
        </div>
        <Button
          type="button"
          disabled
          className="p-3 text-white bg-red-500 rounded-lg"
        >
          Buy now
        </Button>
        <Input type="text" placeholder="Text"></Input>
      </div>
    </div>
  );
};
// Thêm dấu "," để phân biệt Generic với <Tag>
const RenderList = <T,>({
  items,
  render,
  keyExtractor,
}: {
  items: T[];
  render: (items: T) => React.ReactNode;
  keyExtractor: (item: T) => number;
}) => {
  return (
    <ul className="flex flex-col mb-5 gap-y-2">
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
};

const List = ({
  items,
  onClickItem,
}: {
  items: string[];
  onClickItem?: (item: string) => void;
}) => {
  return (
    <div>
      {items.map((item) => (
        // Optional Chaning
        <div key={item} onClick={() => onClickItem?.(item)}>
          {item}
        </div>
      ))}
    </div>
  );
};

// HTMLDetailProps

type ButtonProps = {
  children: React.ReactNode;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = ({ children, ...rest }: ButtonProps) => {
  return <button {...rest}>{children}</button>;
};

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input = (rest: InputProps) => {
  return <input {...rest} />;
};

// Children
const Boxded = ({ children }: { children?: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default App;
