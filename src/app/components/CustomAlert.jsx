import React, { useEffect, useState } from "react";
import { CheckCircleIcon, ExclamationCircleIcon } from "@heroicons/react/solid"; // Import icons from Heroicons

const CustomAlert = ({ message, type, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      const fadeOutTimer = setTimeout(() => {
        setVisible(false);
      }, 2500); // Start fading out after 2.5 seconds

      const removeAlertTimer = setTimeout(() => {
        onClose();
      }, 3000); // Remove the alert after 3 seconds

      return () => {
        clearTimeout(fadeOutTimer);
        clearTimeout(removeAlertTimer);
      };
    }
  }, [message, onClose]);

  if (!message) return null;

  const icon =
    type === "success" ? (
      <CheckCircleIcon className="h-8 w-8 text-green-500 mr-2" />
    ) : (
      <ExclamationCircleIcon className="h-8 w-8 text-red-500 mr-2" />
    );

  const backgroundColor = type === "success" ? "bg-green-100" : "bg-red-100";
  const textColor = type === "success" ? "text-green-700" : "text-red-700";

  return (
    <div
      className={`fixed top-5 inset-x-0 mx-auto max-w-sm flex items-center justify-center z-50 transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`p-4 rounded-xl shadow-lg flex items-center ${backgroundColor}`}
      >
        {icon}
        <p className={`ml-2 ${textColor}`}>{message}</p>
      </div>
    </div>
  );
};

export default CustomAlert;
