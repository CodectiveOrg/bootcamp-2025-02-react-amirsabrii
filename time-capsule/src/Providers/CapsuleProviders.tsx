import { PropsWithChildren, ReactNode, useEffect, useState } from "react";

import { Capsule } from "../types/capsule.ts";
import { CapsuleContext } from "../context/CapsuleContext.tsx";

type Props = PropsWithChildren;

function CapsuleProviders({ children }: Props): ReactNode {
  const [capsule, setCapsule] = useState<Capsule[]>(loadCapsuleInitialState);

  useEffect(() => {
    localStorage.setItem("capsules", JSON.stringify(capsule));
  }, [capsule]);

  const createCapsule = (capsule: Capsule) => {
    setCapsule((old) => [...old, capsule]);
  };

  const editCapsule = (capsule: Capsule): void => {
    setCapsule((old) =>
      old.map((x) => (x.id === capsule.id ? { ...capsule } : x)),
    );
  };

  const removeCapsule = (id: string | number) => {
    setCapsule((old) => old.filter((x) => x.id !== id));
  };

  return (
    <CapsuleContext.Provider
      value={{
        capsule,
        createCapsule,
        removeCapsule,
        editCapsule,
      }}
    >
      {children}
    </CapsuleContext.Provider>
  );
}

function loadCapsuleInitialState(): Capsule[] {

  const items = localStorage.getItem("capsules");

  if (!items) {
    return [];
  }
  return JSON.parse(items);
}

export default CapsuleProviders;
