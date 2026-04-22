export const Loader: React.FC<{
  state: "pending" | "error";
}> = ({ state }) => {
  return (
    <div className="flex flex-grow items-center justify-center">
      {state === "pending"
        ? "Fetching schema..."
        : "Error while fetching schema :("}
    </div>
  );
};
