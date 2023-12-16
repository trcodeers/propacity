import { MdDelete, MdEdit } from "react-icons/md";

const NoteCard = (props: any) =>{

    const { title, description, onClickEdit, onClickDelete } = props
    return(

        <div className="w-[200px] h-36 rounded overflow-hidden shadow-lg bg-red-50 relative">
        <div className="px-2 py-2 text-center">
          <div className="font-bold text-l mb-2 text-center overflow-hidden line-clamp-1">{title}</div>
  
          <p className="text-gray-700 text-base overflow-hidden line-clamp-3">{description}</p>
        </div>
  
        <div className="absolute bottom-0 right-0 mb-1 mr-2">
          <div className="flex flex-row justify-center gap-4">
            <div
              onClick={() => onClickEdit()}
              className="inline-block text-blue-700 bg-green-100 rounded-full px-2 py-"
            >
              <MdEdit />
            </div>
            <div
              onClick={() => onClickDelete()}
              className="inline-block text-red-500 bg-green-100 rounded-full px-2 py-"
            >
              <MdDelete />
            </div>
          </div>
        </div>
      </div>

    )
}

export default NoteCard;