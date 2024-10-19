interface Props {
  children: JSX.Element | JSX.Element[];
}

export default function ModalContentWrapper({ children }: Props) {
  return <div className="w-[calc(100vw-60px)] max-w-xl">{children}</div>;
}
