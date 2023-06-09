import React from "react";
import Loader from "../Loader/Loader";

export default function LoaderPage({
  children,
  loading,
}: {
  loading: boolean;
  children: React.ReactNode;
}) {
  return (
    <React.Fragment>
      {loading ? (
        <div className="h-screen w-full flex justify-center items-center bg-white">
          <Loader />
        </div>
      ) : (
        children
      )}
    </React.Fragment>
  );
}
