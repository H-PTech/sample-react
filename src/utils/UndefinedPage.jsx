import React from "react";

export default function UndefinedPage({ undefinedMessage }) {
  return (
    <>
      <div className="bg-white/50 fixed inset-0 z-10" />
      {undefinedMessage}
    </>
  );
}
