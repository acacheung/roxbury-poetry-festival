import Header from "../components/Header";
import Footer from "../components/Footer";
import Svg from "../components/Svg";

export default function Layout({ children }) {
  return (
    <>
      <Svg />
      <Header />
      <div className="min-h-screen relative">
        <main className="relative z-30">{children}</main>
      </div>
      <Footer />
    </>
  );
}
