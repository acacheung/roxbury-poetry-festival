import Header from "../components/Header";
import Svg from "../components/Svg";

export default function Layout({ children }) {
  return (
    <>
      <Svg />
      <Header />
      <div className="relative">
        <main className="relative z-30">{children}</main>
      </div>
    </>
  );
}
