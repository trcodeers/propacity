import { MdDelete, MdEdit } from "react-icons/md";

const NoteCard = (props: any) => {
  const { title, description, onClickEdit, onClickDelete, id, color } = props;
  return (
    <div className="w-[220px] h-36 rounded shadow-lg relative" style={{ backgroundColor: color || 'fff' }}>
      <div className="px-3 py-2 text-center">
      <div className="font-bold w-full text-md mb-2 text-center overflow-hidden truncate">
          {title}
        </div>

        <p className="text-gray-700 text-base overflow-hidden line-clamp-3">
          {description}
        </p>
      </div>

      <div className="absolute bottom-0 right-0 mb-1 mr-2">
        <div className="flex flex-row justify-center gap-4">
          <div
            onClick={() => onClickEdit({ title, description, id, color })}
            className="cursor-pointer inline-block text-blue-700 bg-green-100 rounded-full px-2 py-2"
          >
            <MdEdit />
          </div>
          <div
            onClick={() => onClickDelete(id)}
            className="cursor-pointer inline-block text-red-500 bg-green-100 rounded-full px-2 py-2"
          >
            <MdDelete />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
