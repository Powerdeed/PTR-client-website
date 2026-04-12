import HomeView from "./components/HomeView";
import HomeProvider from "./context/HomeProvider";

export default function Home() {
  return (
    <HomeProvider>
      <HomeView />
    </HomeProvider>
  );
}
