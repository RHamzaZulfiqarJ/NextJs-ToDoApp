"use client";

import { Input, TextField, Alert, Snackbar, IconButton } from "@mui/material";
import Button from "../Components/BlueButton";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

type TasksType = {
  id: string;
  task: string;
};

const Home = () => {
  const [task, setTask] = useState<TasksType[]>([]);
  const [data, setData] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const handleChange = (e: any) => {
    setData(e.target.value);
  };

  const handleSubmit = () => {
    if (data == "") {
      handleClickOpen();
    } else {
      let newId = Math.random().toString(36);
      const newTodoItem: TasksType = {
        id: newId,
        task: data,
      };

      setTask([...task, newTodoItem]);
      setData("");
    }
  };

  const deleteTask = (id: string) => {
    const newTask = task.filter((task) => task.id !== id);
    setTask(newTask);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  console.log(task)

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white h-auto w-96 flex flex-col p-6 rounded-md mx-2">
          <div className="text-3xl text-black flex font-medium">Todo App</div>
          <div className="flex items-center py-5 gap-2">
            <TextField
              name="data"
              value={data}
              size="small"
              className="w-full"
              variant="outlined"
              placeholder="Add Your New Todo"
              onChange={handleChange}
              autoFocus
            />
            <Button onButtonClick={handleSubmit} data={<AddIcon />} />
          </div>
          <div>
            <div className="flex flex-col gap-4 items-center h-auto">
              {task.map((task, key) => (
                <div
                  key={key}
                  aria-multiline
                  className="bg-[#F3F1F4] py-2 w-full px-3 text-black rounded-md overflow-auto flex items-center justify-between">
                  <div>{task.task}</div>
                  <div>
                    <IconButton onClick={() => deleteTask(task.id)}>
                      <CloseIcon className="text-red-500" />
                    </IconButton>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClickClose}>
        <Alert onClose={handleClickClose} severity="error">
          Please Enter a valid task!
        </Alert>
      </Snackbar>
    </>
  );
};

export default Home;
