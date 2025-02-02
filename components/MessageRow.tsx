"use client";

type MessageRowProps = {
  name: string;
  message: string;
  status: string;
  time: string;
};

const MessageRow = ({ name, message, status, time }: MessageRowProps) => (
  <div className="flex justify-between py-4 items-center">
    <div className="flex items-center space-x-4">
      <img className="w-10 h-10 rounded-full border" src="/user.jpg" alt={name} />
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-sm text-gray-500">{message}</p>
      </div>
    </div>
    <div className={`text-sm font-medium ${status === "Answered" ? "text-blue-500" : "text-gray-400"}`}>{status}</div>
    <div className="text-sm text-gray-500">{time}</div>
  </div>
);

export default MessageRow;
