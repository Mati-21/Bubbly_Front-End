import { useDispatch, useSelector } from "react-redux";
import { setCloseCreateGroup } from "../../../feature/ui/ui";

function CreateGroup() {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(setCloseCreateGroup())}
      className="absolute inset-0 bg-black/20 flex items-center justify-center"
    ></div>
  );
}

export default CreateGroup;
