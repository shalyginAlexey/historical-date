import { useEffect, useState } from "react";

type TypeNumberCrunchingProps = {
  value: number;
  className?: string;
};

export const NumberCrunching = ({
  value,
  className,
}: TypeNumberCrunchingProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 0) {
      setCount(value);
    } else if (count !== value) {
      if (count >= value) setTimeout(setCount, 40, count - 1);
      if (count <= value) setTimeout(setCount, 40, count + 1);
    } else {
    }
  }, [count, value]);

  return <span className={className}>{count}</span>;
};
