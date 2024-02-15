import { Link } from "@nextui-org/react";
import Timeline from "@/app/components/timeline";

export default function Page() {
  return (
    <main>
      <p className="text-4xl place-self-center font-semibold text-center mb-16">
        Class Curriculum
      </p>
      <section className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 max-w-2xl">
          <p className="text-2xl font-semibold mb-4">About Our Classes</p>
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

      <div className="space-y-8 mt-16">
        <section id="beginning" className="bg-zinc-200 rounded-xl p-4">
          <p className="text-2xl font-semibold">Beginning</p>
          <div className="grid lg:grid-cols-3">
            <div>
              <p className="font-medium">Concepts</p>
              <ul>
                <li>Etiquette (rei-ho)</li>
                <li>Manners (rei-gi)</li>
                <li>Bowing</li>
                <li>Holding the shinai</li>
                <li>Stances</li>
                <li>Strikes</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Drills / Exercises</p>
              <ul>
                <li>One step (okuri-ashi)</li>
                <li>Continuous steps (renzoku okuri-ashi)</li>
                <li>Full range swing (jouge-buri)</li>
                <li>Head strike (men)</li>
                <li>Wrist strike (kote)</li>
                <li>Continuous strikes (kote-men)</li>
                <li>Attack step (fumi-komi)</li>
                <li>Fast swing (haya-suburi)</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Equipment</p>
              <ul>
                <li>Shinai</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="continuing" className="bg-zinc-200 rounded-xl p-4">
          <p className="text-2xl font-semibold">Intermediate</p>
          <div className="grid lg:grid-cols-3">
            <div>
              <p className="font-medium">Concepts</p>
              <ul>
                <li>Hitting / receiving with shinai</li>
                <li>Preparing to wear uniform / armor</li>
                <li>Warmups</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Drills / Exercises</p>
              <ul>
                <li>Diagonal swing (naname-buri)</li>
                <li>Diagonal head strike (sayu-men)</li>
                <li>Kiri-kaeshi</li>
                <li>Torso strike (dou)</li>
                <li>Backwards head strike (hiki-men)</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Equipment</p>
              <ul>
                <li>Keiko-gi</li>
                <li>Hakama</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="advanced" className="bg-zinc-200 rounded-xl p-4">
          <p className="text-2xl font-semibold">Advanced</p>
          <div className="grid lg:grid-cols-3">
            <div>
              <p className="font-medium">Concepts</p>
              <ul>
                <li>Sparring</li>
                <li>Waza</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Drills / Exercises</p>
              <ul>
                <li>Kakari-geiko</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Equipment</p>
              <ul>
                <li>Bokken / bokuto</li>
                <li>Armor</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
