import { ReactNode, useEffect } from "react";
import ReactDOM from "react-dom";
import LiveSkladWidget from "./../Widgets/LiveSkladWidget";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;

    const addScript = () => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src =
        (document.location.protocol === "https:" ? "https://" : "http://") +
        "my.livesklad.com/static/widget.js";
      const head = document.getElementsByTagName("head")[0];
      head.appendChild(script);
    };

    const addWidget = () => {
      const widgetContainer = document.getElementById(
        "livesklad-widget-container"
      );
      if (widgetContainer) {
        widgetContainer.style.display = "block";
      }
    };

    if (isOpen) {
      timeoutId = setTimeout(() => {
        addScript();
        setTimeout(addWidget, 1000);
      }, 500);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* <div id="livesklad-widget-container" style={{ display: "none" }} /> */}
        {/* {children} */}
        <div className="w-full h-96">
          <LiveSkladWidget
            api_key="tB5HIm77UqMixqIGFRaP"
            title="Мои заказы"
            width="400px"
          />
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Popup;
