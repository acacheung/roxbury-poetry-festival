import Header from "../components/header";
import Footer from "../components/footer";
import Svg from "../components/svg";

export default function Layout({ children }) {
  return (
    <>
      <Svg />
      <Header />
      <div className="min-h-screen bg-gray-900 relative">
        <main className="relative z-30">{children}</main>
      </div>
      <Footer />
    </>
  );
}
