import Modal from "react-modal";

import { Typography } from "@mui/material";

import { customStyles } from "../../helpers";
import { useDashboardModal } from "../../hooks";

export const ItemModal = () => {
  const { id, name, email, body, isItemModalOpen, closeItemModal } =
    useDashboardModal();

  return (
    <Modal
      isOpen={isItemModalOpen}
      onRequestClose={closeItemModal}
      style={customStyles}
      ariaHideApp={false}
    >
      {/* Close button positioned in the upper-right corner */}
      <button
        onClick={closeItemModal}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          border: "2px solid #374151",
          backgroundColor: "#fff",
          padding: "5px 10px",
          cursor: "pointer",
          fontSize: "12px", // Slightly smaller close button
          borderRadius: "5px",
        }}
      >
        Close
      </button>

      {/* Modal content with adjusted font sizes */}
      <div
        className="modal-content"
        style={{ marginTop: "30px", textAlign: "center" }}
      >
        <Typography
          variant="h6"
          component="p"
          style={{ marginBottom: "10px", fontSize: "16px" }}
        >
          <strong>{id}</strong>
        </Typography>
        <Typography
          variant="h6"
          component="p"
          style={{ marginBottom: "10px", fontSize: "16px" }}
        >
          <strong>{name}</strong>
        </Typography>
        <Typography
          variant="h6"
          component="p"
          style={{ marginBottom: "10px", fontSize: "16px" }}
        >
          <strong>{email}</strong>
        </Typography>

        {/* Larger space allocated for body content */}
        <Typography
          variant="body1"
          component="p"
          style={{
            marginTop: "20px",
            fontSize: "18px",
            whiteSpace: "pre-wrap",
          }}
        >
          <strong>{body}</strong>
        </Typography>
      </div>
    </Modal>
  );
};
