export type PreviewButtonType = {
  showComponents: boolean;
  onClick?: () => void;
};

export const PreviewButton = ({
  showComponents,
  onClick,
}: PreviewButtonType) => {
  return (
    <button
      className="border p-2 border-white text-white"
      onClick={() => onClick?.()}
    >
      {showComponents ? "Show only editor" : "Show components"}
    </button>
  );
};
