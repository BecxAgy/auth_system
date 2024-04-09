import React from "react";
import { BsExclamationTriangle } from "react-icons/bs";

interface MessageErrorProps {
  message: string;
}
const MessageError = ({ message }: MessageErrorProps) => {
  return (
    <div className="bg-destructive/15 p-3 rounded-md flex items-center text-destructive gap-x-2 text-sm">
      <BsExclamationTriangle />
      <p>{message}</p>
    </div>
  );
};

export default MessageError;
