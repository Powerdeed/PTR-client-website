import ContainerLoadingAnimation from "@/components/layout/ContainerLoadingAnimation";

export default function ServiceLoading() {
  return (
    <div className="vertical-layout__inner w-full md:min-w-150 md:max-w-180">
      <ContainerLoadingAnimation styling="w-1/2 h-5" />

      <ContainerLoadingAnimation styling="h-60 md:h-90" />

      <ContainerLoadingAnimation styling="h-15" />
    </div>
  );
}
