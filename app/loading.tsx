import { TailSpin } from "react-loader-spinner";

export default function Loading() {
  return <div>Loading</div>;
}

export function Loader() {
  return (
    <TailSpin
      visible={true}
      height="40"
      width="40"
      color="#0043b9"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
}
