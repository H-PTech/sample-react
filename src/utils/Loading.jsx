import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 grid place-items-center bg-white z-30">
      <img src="../src/assets/img/loading.gif" alt="loading" />
    </div>
  );
}
