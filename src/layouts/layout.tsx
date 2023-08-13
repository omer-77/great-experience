import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <main className="w-full main flex-auto">
        <div className="container">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
