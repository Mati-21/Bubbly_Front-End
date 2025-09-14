import { useDispatch } from "react-redux";
import { setSelectedUserProfile } from "../../feature/ui/ui";

function SelectedUserProfile() {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(setSelectedUserProfile())}
      className="h-screen absolute inset-0 flex justify-center pt-20 bg-black/20 z-40"
    >
      <h1 className="text-white text-3xl">Selected user</h1>
    </div>
  );
}

export default SelectedUserProfile;
