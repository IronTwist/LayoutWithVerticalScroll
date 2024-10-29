export const PreviewButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      className="border p-2 border-white text-white"
      onClick={() => onClick?.()}
    >
      Preview button
    </button>
  );
};
