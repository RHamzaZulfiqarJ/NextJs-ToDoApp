import DeleteButton from "./DeleteButton";

type Props = {
  tasks: string[];
};

const Tasks = ({ tasks }: Props) => {

  return (
    <div className="flex flex-col gap-4 items-center h-auto">
      {tasks.map((task, key) => (
        <div key={key} aria-multiline className="bg-[#F3F1F4] py-3 w-full px-3 text-black rounded-md overflow-auto">
            <div>{task}</div>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
