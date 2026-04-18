export default function ContainerLoadingAnimation({
  styling,
}: {
  styling: string;
}) {
  return (
    <div
      className={`${styling} rounded-[10px] bg-(--terciary-grey)/80 overflow-hidden`}
    >
      <div className="loading-animation">
        <div className="shadow-[0_0_10px_10px_white] w-0 h-full rotate-12" />
      </div>
    </div>
  );
}
