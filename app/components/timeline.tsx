import styles from "@/app/home.module.css";
import { Link } from "@nextui-org/react";

export default function Timeline() {
  return (
    <div className="m-auto bg-zinc-200 p-8 space-y-4">
      <div>
        <p className="text-center font-medium text-2xl">Timeline Overview</p>
      </div>
      <ul className={styles.timeline}>
        <li>
          <p className="text-lg">Quarter 1</p>
          <Link href="#beginning">Beginning Kendo</Link>
        </li>
        <li>
          <p className="text-lg">Quarter 2 & 3*</p>
          <Link href="#continuing">Continuing Kendo</Link>
        </li>
        <li>
          <p className="text-lg">Quarter 4 & Onward</p>
          <Link href="#advanced">Advanced Kendo</Link>
        </li>
      </ul>
      <div>
        <p className="text-sm">
          * = Some students may only need to spend one quarter in the continuing
          class before progressing to advanced if show above average skill.
        </p>
      </div>
    </div>
  );
}
