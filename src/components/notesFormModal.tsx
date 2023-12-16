import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io";
// import { TaskData } from "../types/items";

type Props = {
  isOpen: boolean 
  onClose: any
  formData: any
  updateNote: any
}
const NotesFormModal = ({ isOpen, onClose, formData, updateNote, } : Props) => {

    const { register, handleSubmit, reset, setValue } = useForm({
        defaultValues:{
            title: formData?.title || '' ,
            description: formData?.description || '',
            id: formData?.id || null
        }
    });

    useEffect(() =>{
      setValue('title', formData?.title)
      setValue('description', formData?.description)
    }, [formData])

  const onSubmit = (data: any) => {
    console.log(data);
    updateNote(data);
    reset()
  };

  return (
    <div
      className={`z-50 fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-white w-1/2 p-6 rounded shadow-lg absolute top-48 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <p className="text-l  mb-4">Update Task</p>
        <div onClick={onClose} className="absolute right-8 top-6">
          <IoMdClose />
        </div>
        <div className="flex justify-center">
          <form
            className="bg-white rounded mb-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-4 justify-center">
              <div>
                <input
                  className={`shadow appearance-none border rounded w-48 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlin`}
                  id="title"
                  type="text"
                  placeholder="Task"
                  {...register("title", { required: "Title is required" })}
                />
              </div>

              <div>
                <textarea
                  className={`shadow appearance-none border rounded w-48 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none `}
                  id="description"
                  placeholder="Description"
                  {...register("description", {
                    required: "Description is required"
                  })}
                />
              </div>

              <div className="flex items-center justify-between">
                <button
                  className="bg-red-200 text-black py-2 px-2 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Save
                </button>
              </div>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NotesFormModal;
