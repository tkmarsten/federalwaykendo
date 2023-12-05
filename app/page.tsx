import Header from "@/app/components/header";
import Location from "@/app/components/location";
import Classes from "@/app/components/classes";
import FAQ from "@/app/components/faq";
import Register from "@/app/components/register";
import Contact from "@/app/components/contact";

export default function Home() {
  return (
    <main className="max-w-screen-lg px-6 mx-auto space-y-16">
      <Header />
      <Location />
      <Classes />
      <FAQ />
      <Register />
      <Contact />
    </main>
  );
}
