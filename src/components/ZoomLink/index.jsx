import React from "react";
import { toast } from "react-toastify";

const ZoomLink = ({
  zoomLink,
  className = "",
  label = "Join Zoom Meeting",
}) => {
  const handleClick = (e) => {
    // If the link exists, navigate directly to the Zoom link
    if (zoomLink) {
      window.location.href = zoomLink; // Redirect to the Zoom link
      toast.success("Redirecting to Zoom meeting...");
    } else {
      toast.error("Invalid Zoom link");
    }
  };

  return (
    <a
      // href={zoomLink}
      className={className}
      // onClick={handleClick}
      aria-label="Join Zoom Meeting"
      target="_blank"
    >
      {label}
    </a>
  );
};

export default ZoomLink;
