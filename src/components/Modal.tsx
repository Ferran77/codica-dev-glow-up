import { X } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const Modal = ({ isOpen, onClose, title, content }: ModalProps) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200"
        >
          <X size={24} />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-brand-white mb-4">{title}</h2>
        </div>

        {/* Modal Content */}
        <div className="text-gray-300 leading-relaxed whitespace-pre-line">
          {content}
        </div>

        {/* Modal Footer */}
        <div className="mt-8 flex justify-end">
          <button
            onClick={onClose}
            className="bg-brand-accent hover:bg-brand-accent/90 text-white font-medium px-6 py-2 rounded-lg transition-all duration-200 hover:shadow-lg"
          >
            {t("modal.close")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
