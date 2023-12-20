import Header from "@/app/components/header";
import Location from "@/app/components/location";
import Classes from "@/app/components/classes";
import FAQ from "@/app/components/faq";
import Register from "@/app/components/register";

export default function Page() {
  return (
    <main className="space-y-16 lg:space-y-32 max-lg:my-8 mb-16">
      <Header />
      <Classes />
      <Location />
      <FAQ />
      <Register />
    </main>
  );
}
