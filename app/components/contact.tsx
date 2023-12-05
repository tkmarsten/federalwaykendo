import { Link } from "@nextui-org/react";

export default function Contact() {
  return (
    <section className="py-16 bg-neutral-800 text-white shadow-[0_0_0_100vmax_#262626] [clip-path:inset(0_-100vmax)]">
      <p className="text-sm text-secondary">Contact</p>
      <div className="text-4xl mt-2">Still have questions?</div>
      <div>
        See our FAQ page for more answers! If the FAQ does not have what you
        need, feel free to{" "}
        <Link
          href="mailto:federalwaykendoclub@gmail.com"
          className="text-white underline"
        >
          email
        </Link>{" "}
        us.
      </div>
    </section>
  );
}
