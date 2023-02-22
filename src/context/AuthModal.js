/* eslint-disable no-empty-function */
import React from "react";
import { useDisclosure } from "@chakra-ui/react";

export const AuthModalSteps = {
  CONNECT: "connect",
  SIGN_IN: "sign_in",
  GUEST_SIGN_IN: "GUEST_SIGN_IN",
  DONE: "done",
};
export const AuthModalContext = React.createContext({
  // modal states
  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
  step: AuthModalSteps.CONNECT,
  setStep: () => {},
});

export const useAuthModalContext = () => React.useContext(AuthModalContext);

export const AuthModalContextProvider = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [step, setStep] = React.useState(AuthModalSteps.CONNECT);

  return (
    <AuthModalContext.Provider
      value={{
        isOpen,
        onOpen,
        onClose,
        step,
        setStep,
      }}
    >
      {children}
    </AuthModalContext.Provider>
  );
};
