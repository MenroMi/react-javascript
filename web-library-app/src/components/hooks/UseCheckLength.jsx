import { useState } from "react";

const useCheckLength = (initValue) => {
  // states
  const [description, setDescription] = useState(initValue);
  const [title, setTitle] = useState(initValue);

  // methods

  const checkLengthDescr = () => {
    if (description.length > 200) {
      setDescription(`${description.slice(0, 200)}...`);
    }
    setDescription(description);
  };

  const checkLengthTitle = () => {
    if (title.length > 27) {
      setTitle(`${title.slice(0, 27)}...`);
    }
    setTitle(title);
  };

  return {
    description,
    title,
    checkLengthDescr,
    checkLengthTitle,
  };
};

export default useCheckLength;
