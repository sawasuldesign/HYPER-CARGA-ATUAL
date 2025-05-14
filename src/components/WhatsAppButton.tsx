
import React from "react";
import { MessageSquare } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/SEUNUMERODETELEFONE"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#00FF00] rounded-full p-3 shadow-lg hover:bg-[#00FF00]/90 transition-all duration-300"
      aria-label="Contato via WhatsApp"
    >
      <MessageSquare size={32} className="text-white" />
    </a>
  );
};

export default WhatsAppButton;
