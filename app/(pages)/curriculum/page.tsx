import { Link } from "@nextui-org/react";
import Timeline from "@/app/components/timeline";

export default function Page() {
  return (
    <main>
      <p className="text-4xl place-self-center font-semibold text-center mb-16">
        Class Curriculum
      </p>
      <section className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <p className="text-2xl mb-4">About Our Classes</p>
          <p>
            Here at Federal Way Kendo Club, we provide a comprehensive class to
            create strong foundations for our students, while also challenging
            them. Our classes focus on learning the basics of kendo and
            emphasizing those basics that allow students to progress at a more
            steady pace when they become more experienced.
          </p>
          <br />
          <p>
            All new students start in the beginning class and work their way up
            to the advanced class after demonstrating they possess the
            neccessary skill. From your first quarter to the advanced class,
            this typically takes 6-9 months. Classes are very dynamic and may
            have the speed or curriculum adjusted week by week based on the
            overall skill level, age range, and progression of the students. We
            try our best to accomodate all students by adjusting classes to
            their needs.
          </p>
        </div>
        <Timeline />
      </section>

      <section id="beginning">
        <p>Beginning</p>
        <div>
          <p>Concepts</p>
          <p>Strikes</p>
          <p>Equipment</p>
        </div>
        <ul>
          <li>Concepts</li>
          <li>Using your spirit (kiai)</li>
          <li>Posture</li>
        </ul>
        <ul>
          <li>Etiquette (rei-ho)</li>
          <li>Bowing (rei)</li>
          <li>Meditation (moku-sou)</li>
        </ul>
        <ul>
          <li>Stances</li>
          <li>Neutral standing position (shi-zen-tai)</li>
          <li>Silent sitting (seiza)</li>
          <li>Crouched position (son-kyo)</li>
        </ul>
        <ul>
          <li>Footwork (ashi-sabaki)</li>
          <li>One step (okuri-ashi)</li>
          <li>Continuous steps (renzoku-okuri-ashi)</li>
          <li>Attack step (fumi-komi)</li>
        </ul>
        <ul>
          <li>Basic swings / strikes (suburi)</li>
          <li>Top to bottom swing (jyouge-buri)</li>
          <li>Head strike (men)</li>
          <li>Wrist strike (kote)</li>
          <li>Head and wrist strike (kote-men)</li>
          <li>Fast head strike (haya-suburi)</li>
        </ul>
      </section>
      <section id="continuing">
        <p>Intermediate</p>
        <ul>
          <li>All previous things learned</li>
        </ul>
        <ul>
          <li>Swings / strikes (suburi)</li>
          <li>Diagonal swing (naname-buri)</li>
          <li>Diagonal head strike (sayu-men)</li>
          <li>Torso strike (dou)</li>
          <li>Backwards head strike (hiki-men)</li>
        </ul>
        <ul>
          <li>Drills</li>
          <li>Kiri-kaeshi</li>
          <li>Men</li>
          <li>Kote</li>
          <li>Dou</li>
          <li>Hiki-men</li>
        </ul>
        <ul>
          <li>Warmups</li>
          <li>Receiving with shinai</li>
          <li>Preperation for uniform and armor</li>
        </ul>
      </section>
      <section id="advanced">
        <p>Advanced</p>
        <ul>
          <li>All previous things learned</li>
        </ul>
        <ul>
          <li>Hitting and receiving in armor</li>
        </ul>
        <ul>
          <li>Advanced techniques (waza)</li>
          <li>Open hit practice (kakari-geiko)</li>
          <li>Sparring practice (ji-geiko)</li>
        </ul>
        <ul>
          <li>Preparation for grade tests and tournaments</li>
        </ul>
      </section>
    </main>
  );
}
