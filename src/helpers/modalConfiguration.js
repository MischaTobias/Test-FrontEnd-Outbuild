import Modal from "react-modal";

export const customStyles = {
  content: {
    borderRadius: "10px",
    border: "3px solid #374151", // Matches the gray border color from the image
    padding: "20px", // Reduced padding for a more compact design
    maxWidth: "500px", // Smaller width for compact design
    width: "80%",
    maxHeight: "70vh", // Restricts the height for better body text display
    overflowY: "auto", // Allows scrolling for longer body content
    display: "flex", // Use flexbox for centering
    flexDirection: "column", // Align items in a column
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
    margin: "auto", // Ensures modal is centered in the overlay
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
    display: "flex",
    justifyContent: "center", // Center overlay content
    alignItems: "center", // Center overlay content
    position: "fixed", // Fixed position
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
};

Modal.setAppElement("#root");
