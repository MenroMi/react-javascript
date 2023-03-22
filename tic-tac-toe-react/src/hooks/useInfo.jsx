// basic
import { useState } from "react";

export default function useInputInfo(init = "") {
  const [value, setValue] = useState(init);

  const onSetNewValue = (choice) => {
    return setValue(choice);
  };

  return { value, onSetNewValue };
}
