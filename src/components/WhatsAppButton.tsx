
import React from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/551130000000" 
      className="fixed bottom-6 right-6 z-40 bg-hyper-green hover:bg-hyper-green/80 p-3 rounded-full shadow-lg transition-transform hover:scale-110 duration-300"
      aria-label="Fale conosco pelo WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <MessageCircle className="h-6 w-6 text-white" />
    </a>
  );
};

export default WhatsAppButton;
