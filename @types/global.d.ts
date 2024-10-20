import { ThemeTypes } from "@/hooks/use-theme";
import { ReactElement } from "react";

export {};

declare global {
  type UserTypes = "user" | "admin" | "user|admin";

  type StoreProps = {
    theme: ThemeTypes;
    notifications: number;
  };

  // BLOCK: Modal

  type ModalChildrenTypes = {
    onComplete?: (data?: object | string | number) => void;
    data?: object;
    message?: string;
  };

  type ModalOptionTypes = {
    onComplete?: (data?: object | string | number) => void;
    data?: object;
    others?: object;
    message?: ReactNode;
    closeModal?: () => void;
  };

  interface ModalPropsSetup {
    closeModal: () => void;
    children: (props: ModalOptionTypes) => ReactElement;
  }

  interface ModalPropsMain {
    type?: "default" | "confirm" | "alert" | "process" | "custom";
    // content?: (props: ModalChildrenTypes) => JSX.Element;
    content?: (props: ModalOptionTypes) => JSX.Element;
    label: ReactNode;
    options?: ModalOptionTypes;
    className?: string;
    overlay?: boolean;
    closeBtn?: boolean;
    onCloseModal?: () => void;
  }

  type ModalProps = ModalPropsMain & ModalPropsSetup;

  // BLOCK(AppContext):
  interface ContextProps {
    modal: ModalPropsMain | null;
    user: UserProps | null;
    token: string | null;
    store: StoreProps;
    setToken: (token?: string) => void;
    setStore: (props: StoreProps) => void;
    setModal: (modal: ModalPropsMain | null) => void;
    setUser: (user: UserProps | null) => void;
  }
  // BLOCK: User Props

  type UserProps = {
    id: number;
    userId: string;
    name: string;
    email: string;
    type: UserTypes;
    phone: string;
    photo: string;
    username: string;
    emailVerified: string;
  };
}
