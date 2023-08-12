import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
