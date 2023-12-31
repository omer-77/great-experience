import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout-container">
      <Header />
      <main className="w-full main flex-auto container">{children}</main>
      <Footer />
    </div>
  );
}
