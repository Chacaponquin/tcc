import { ROUTES } from "@/app/constants/ROUTES";
import { Edit, SignOut, User } from "@/modules/shared/modules/icons/components";
import { useUserServices } from "@/modules/user/services";
import Link from "next/link";
import { useState } from "react";

export default function UserOptions() {
  const [viewOptions, setViewOptions] = useState(false);
  const { signOut } = useUserServices();

  function handleViewOptions() {
    setViewOptions(!viewOptions);
  }

  async function handleSignOut() {
    await signOut();
  }

  return (
    <div className="flex justify-end">
      <button
        className="stroke-black rounded-full flex justify-center items-center w-[42px] h-[42px] bg-slate-200"
        onClick={handleViewOptions}
      >
        <User size={20} />
      </button>

      {viewOptions && (
        <div className="flex flex-col absolute translate-y-14 shadow-md">
          <Link
            href={ROUTES.ADD_CAPSULE}
            className="transition-all duration-300 hover:bg-slate-300 bg-white px-4 py-2 flex items-center stroke-black gap-x-3 cursor-pointer"
          >
            <Edit size={18} />
            <p className="whitespace-nowrap">Editar Cápsulas</p>
          </Link>

          <div
            className="transition-all duration-300 hover:bg-slate-300 bg-white px-4 py-2 flex items-center stroke-black gap-x-3 cursor-pointer"
            onClick={handleSignOut}
          >
            <SignOut size={18} />
            <p className="whitespace-nowrap">Salir</p>
          </div>
        </div>
      )}
    </div>
  );
}
