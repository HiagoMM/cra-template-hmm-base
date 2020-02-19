import { useState } from "react";

function useToggle() {
  const [toggle, setToggle] = useState<boolean>(false);
  function handleToggle() {
    setToggle(!toggle);
  }
  return [toggle, handleToggle] as const;
}

export default useToggle;
