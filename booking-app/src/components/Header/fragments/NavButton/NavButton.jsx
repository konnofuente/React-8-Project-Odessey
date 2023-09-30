import { useState } from "react";
import { HiPlusSm } from "react-icons/hi";
import { TbMinus } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

function NavButton({text, link}) {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(link);
  };

  return (
    <div>
      <div
        onClick={handleButtonClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{ color: hover ? "#b89146" : "white" }}
        className="single-headerContainer-line"
      >
        <span className="text-style">{text}</span>
        {hover ? (
          <TbMinus size={13} style={{ left: "5px" }} className="keyChange" />
        ) : (
          <HiPlusSm size={13} style={{ left: "3px" }} className="keyChange" />
        )}
      </div>
    </div>
  );
}

export default NavButton;
