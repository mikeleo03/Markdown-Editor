import React, { useState } from "react";
import { MdOutlineContentCopy } from 'react-icons/md';
import './copy-btn.css';

interface Props {
  children: JSX.Element;
}

const CopyBtn: React.FC<Props> = ({ children }) => {
  const [copied, setCopied] = useState(false);

  const handleClick = (e: React.MouseEvent<SVGSVGElement>) => {
    navigator.clipboard.writeText(children.props.children.toString());
    setCopied(true);
    setTimeout(() => setCopied(false), 500);
  };

  return (
    <span className="copy-btn">
      <MdOutlineContentCopy onClick={handleClick} />
    </span>
  );
};

export default CopyBtn;
