export const PreviewButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      className="border border-white text-white"
      onClick={() => onClick?.()}
    >
      Preview button
    </button>
  );
};
