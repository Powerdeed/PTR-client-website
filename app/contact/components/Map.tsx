"use client";

import SubTitle from "./SubTitle";

export default function Map() {
  return (
    <div>
      <SubTitle subtitle={"We're right Here"} />
      <div className="w-full min-h-50 relative border border-(--secondary-grey) rounded-[10px] p-2.5">
        map
      </div>
    </div>
  );
}
