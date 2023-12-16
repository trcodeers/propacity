import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io";
import { SketchPicker } from "react-color";

type Props = {
  isOpen: boolean;
  onClose: any;
  formData: any;
  updateNote: any;
};
const NotesFormModal = ({ isOpen, onClose, formData, updateNote }: Props) => {
  
  const { register, handleSubmit, reset, setValue, formState: { errors }} = useForm({
    defaultValues: {
      title:  "",
      description: "",
      id: null,
    },
  });

  const [selectedColor, setSelectedColor] = useState<string>('#fff');

  useEffect(() => {
    setValue("id", formData?.id);
    setValue("title", formData?.title);
    setValue("description", formData?.description);
    setSelectedColor(formData?.color ? formData?.color : '#fff');
  }, [formData]);

  useEffect(() =>{
    console.log(selectedColor)
    console.log(formData)
  }, [selectedColor])

  const onSubmit = (data: any) => {
    updateNote({ ...data, color: selectedColor });
    reset();
  };

  return (
    <div
      className={`z-50 overflow-y-auto overflow-x-hidden fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="mt-44 bg-white w-1/2 p-6 rounded shadow-lg absolute top-48 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <p className="text-lg font-bold  mb-4">
          {formData?.id ? "Update Note" : "Create new note"}
        </p>
        <div
          onClick={onClose}
          className="cursor-pointer absolute right-8 top-6"
        >
          <IoMdClose />
        </div>
        <div className="flex justify-center">
          <form
            className="bg-white rounded mb-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-4 justify-center mt-50">
              <div>
                <input
                  className={`shadow appearance-none border rounded w-48 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlin`}
                  id="title"
                  type="text"
                  placeholder="Title"
                  {...register("title", { required: "Title is required" })}
                />
                {errors.title && <p className="text-red-700">{errors.title.message}</p>}
              </div>

              <div>
                <textarea
                  className={`shadow appearance-none border rounded w-48 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none `}
                  id="description"
                  placeholder="Description"
                  {...register("description", {
                    required: "Description is required",
                  })}
                  rows={6}
                />
                {errors.description && <p className="text-red-700">{errors.description.message}</p>}
              </div>

              <div>
                <SketchPicker
                  color={selectedColor}
                  onChange={(updatedColor) =>
                    setSelectedColor(updatedColor.hex)
                  }
                />
              </div>

              <div className="text-center">
                <button
                  className="bg-red-500 w-[80px] text-center text-white py-2 px-2 rounded "
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
