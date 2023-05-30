import React, { useState } from "react";
import { MdOutlineContentCopy } from 'react-icons/md';
import './copy-btn.css';

interface Props {
  children: JSX.Element;
}

const CopyBtn: React.FC<Props> = ({ children }) => {
  const handleClick = () => {
    navigator.clipboard.writeText(children.props.children.toString());
  };

  return (
    <span className="copy-btn">
      <MdOutlineContentCopy onClick={handleClick} />
    </span>
  );
};

export default CopyBtn;
