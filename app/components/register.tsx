import { Button, Link } from "@nextui-org/react";

export default function Register() {
  return (
    <section>
      <p className="text-sm text-secondary">Register</p>
      <p className="text-4xl leading-tight mt-2">Ready to start?</p>
      <p>
        Sign up for one of our classes today or check when the next enrollment
        period begins!
      </p>
      <Button
        href="/register"
        as={Link}
        radius="sm"
        className="w-full h-[50px] text-xl text-white font-bold p-2 bg-primary shadow place-self-center mt-4"
      >
        Register
      </Button>
    </section>
  );
}
