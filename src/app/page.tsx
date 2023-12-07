"use client";

import { Input, TextField, Alert, Snackbar } from "@mui/material";
import Button from "../Components/BlueButton";
import AddIcon from "@mui/icons-material/Add";
import Tasks from "@/Components/Tasks";
import { useState } from "react";

const [task, setTask] = useState<string[]>([]);
const [data, setData] = useState<string>("");
const [open, setOpen] = useState<boolean>(false)

const handleChange = (e: any) => {
  setData(e.target.value);
};

const handleSubmit = () => {
  if (data == "") {
    handleClickOpen();
  } else {
    setTask([...task, data].reverse());
    setData("");
  }
};

const handleClickOpen = () => {
  setOpen(true);
}

const handleClickClose = () => {
  setOpen(false);
}

const page = () => {

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
            />
            <Button onButtonClick={handleSubmit} data={<AddIcon />} />
          </div>
          <div>
            <Tasks tasks={task} />
          </div>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClickClose}>
        <Alert onClose={handleClickClose} severity="error">Please Enter a valid task!</Alert>
      </Snackbar>
    </>
  );
};

export default page;
