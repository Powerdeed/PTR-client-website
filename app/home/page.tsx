import HomeView from "./components/HomeView";
import HomeProvider from "./context/HomeProvider";
import TestimonialsProvider from "./context/TestimonialsProvider";

export default function Home() {
  return (
    <HomeProvider>
      <TestimonialsProvider>
        <HomeView />
      </TestimonialsProvider>
    </HomeProvider>
  );
}
