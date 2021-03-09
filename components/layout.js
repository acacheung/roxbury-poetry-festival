import Header from "../components/header";
import Footer from "../components/footer";
import Svg from "../components/svg";

export default function Layout({ children }) {
  return (
    <>
      <Svg />
      <Header />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
