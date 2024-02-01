const Heading = ({ title }: { title: string }) => {
  return <h2 className="font-bold text-2xl mb-5">{title}</h2>;
};

const App = () => {
  return (
    <div className="p-5">
      <Heading title="Todo App"></Heading>
    </div>
  );
};

export default App;
