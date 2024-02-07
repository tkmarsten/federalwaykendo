"use client";
import {
  Link,
  Divider,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

export default function Page() {
  return (
    <main className="space-y-4">
      <h1 className="text-6xl">
        Purchasing and Caring for Your Kendo Equipment
      </h1>
      <Divider />
      <section>
        <p>Table of Contents</p>
        <ol className="list-decimal list-inside">
          <li>
            <Link href="#vendors">Kendo Vendors</Link>
          </li>
          <li>
            <Link href="#equipment">Kendo Equipment</Link>
          </li>
          <li>
            <Link href="#shinai1">Purchasing Shinai</Link>
          </li>
          <li>
            <Link href="#shinai2">Shinai Care</Link>
          </li>
          <li>
            <Link href="#uniform1">Purchasing Uniform</Link>
          </li>
          <li>
            <Link href="#uniform2">Uniform Care</Link>
          </li>
          <li>
            <Link href="#bogu">Purchasing Bogu</Link>
          </li>
          <li>
            <Link href="#rental">Purchasing Bogu</Link>
          </li>
          <li>
            <Link href="#measurements">Sizing Bogu</Link>
          </li>
        </ol>
      </section>
      <section id="vendors">
        <h2 className="text-2xl">List of vendors</h2>
        <ul>
          <li>
            <Link href="https://maruyamakendosupply.com/" isExternal>
              Maruyama Kendo Supply
            </Link>
          </li>
          <li>
            <Link href="https://www.e-bogu.com/" isExternal>
              e-bogu
            </Link>
          </li>
          <li>
            <Link href="https://kendostar.com/" isExternal>
              KendoStar
            </Link>
          </li>
          <li>
            <Link href="https://tozandoshop.com/" isExternal>
              Tozando
            </Link>
          </li>
          <li>
            <Link href="https://alljapanbudogu.world/" isExternal>
              All Japan Budogu
            </Link>
          </li>
          <li>
            <Link href="https://californiabudogu.com/" isExternal>
              California Budogu
            </Link>
          </li>
          <li>
            <Link href="https://budogu-zen.ca/" isExternal>
              Budogu Zen
            </Link>
          </li>
        </ul>
      </section>
      <section id="equipment">
        <h2 className="text-2xl">Kendo Equipment</h2>
        <p>
          Below is a list of equipment that is required to have a full set of
          bogu. These are most often purchased as a set, but can also be ordered
          by part.
        </p>
        <ul className="list-disc list-inside">
          <li>Men (helmet)</li>
          <li>Kote (gloves)</li>
          <li>Dou (chest plate)</li>
          <li>Tare (kilt)</li>
        </ul>
      </section>
      <section id="shinai1" className="space-y-2">
        <p className="text-2xl">Purchasing Shinai</p>
        <p>
          For buying additional shinai, the simplest option is to purchase
          shinai directly from the club. In the case you would like to make your
          own external purchase, all of the vendors listed offer shinai for
          sale. Please DO NOT buy any shinai from companies like Amazon because
          they will often be fake and unusable.
          <br />
          We only require one shinai for students that are still in the
          beginning and continuing class. When you begin to hit people in bogu,
          attend tournaments and rank testings, you will need two shinai in case
          one breaks.
        </p>
        <p className="font-medium">Shinai Sizing</p>
        <p>
          Shinai sizing is dependant on gender and age. For youth (18 years and
          younger), sizing can also be dependant on the child&apos;s height.
          Children that are the same age may use a shinai that is shorter or
          longer than what is typical.
        </p>
        <Table aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>Age</TableColumn>
            <TableColumn>Size</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>7-9</TableCell>
              <TableCell>28, 30, 32</TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>10-12</TableCell>
              <TableCell>32, 34, 36</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>13-15 (Middle School)</TableCell>
              <TableCell>36, 37</TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>16-18 (High School)</TableCell>
              <TableCell>37, 38</TableCell>
            </TableRow>
            <TableRow key="5">
              <TableCell>18+</TableCell>
              <TableCell>38 (Female), 39 (Male)</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
      <section id="shinai2">
        <p className="text-2xl">Shinai Care</p>
        <p>
          The shinai is very durable, being made from bamboo. They often do not
          require much care except the occasional check-up. Shinai are prone to
          splintering and breakage through frequent use and are more vulnerable
          to those that strike hard. For splinters, you may use some sand paper
          to lightly shave off and frayed pieces. Be careful to not sand off the
          coating on the outside of the shinai as it keeps it hydrated. In the
          case your shinai is completely broken, for example a chunk falls off
          or it splits, you must throw it away as it is a safety hazard and no
          longer usable. You may save any unbroken staves as a budget way to
          create more shinai when you build up your spare stave collection.
        </p>
      </section>
      <section id="uniform1">
        <h2 className="text-2xl">Purchasing Uniform</h2>
        <p>
          Uniforms can run around $120-$150 for both the keiko-gi and hakama.
          The material can either be synthetic (polyester) or made from cotton.
          Both have their benefits and disadvantages, and is really just
          preference for each person.
        </p>
        <div className="mt-2">
          <div className="grid grid-cols-3 gap-4">
            <div></div>
            <h3 className="text-lg">Polyester uniforms</h3>
            <h3 className="text-lg">Cotton uniforms</h3>
            <p>Pros</p>
            <ul>
              <li>Lighter / thinner (better for warm temperatures)</li>
              <li>Easy to take care of and wash</li>
            </ul>
            <ul>
              <li>Thinner material may lead to more bruises</li>
              <li>Requires ironing to keep the pleats</li>
              <li>May produce an odor more easily after use</li>
            </ul>
            <p>Cons</p>
            <ul>
              <li>Offers more protection from thicker material</li>
              <li>Often looks more professional</li>
            </ul>
            <ul>
              <li>More prone to heat (feeling warm or overheating)</li>
              <li>Requires proper care for washing the hakama</li>
              <li>May produce an odor more easily after use</li>
            </ul>
          </div>
        </div>
      </section>
      <section id="uniform2" className="space-y-2">
        <p className="text-2xl">Uniform Care</p>
        <p>
          Properly caring for your uniform can vary and depend on which material
          you have. Polyster is much easier to care for in general. We recommend
          that you wash your kendo uniform by itself and not with any other
          clothing. Polyster usually does not bleed, but cotton uniforms will
          bleed aizome (indigo dye) and ruins your other clothing if washed in
          the same load. Everything should be hanged dried on a rack or hanger.
        </p>
        <p className="font-medium">Keiko-gi (Top)</p>
        <p>
          For both polyster and cotton, you may just put them in a washing
          machine on gentle settings and cold water. The frequency of washing is
          different for every person, as well as the material. Polyster does not
          soak up sweat as much, making it more prone to odor. In general, we
          find that men will have to wash their keiko-gi more often, especially
          teenagers and older. Your keiko-gi should never physically produce an
          odor. If it does, you need to wash it!
          <br />
          Drying time for polyster is about 1-2 days, while cotton may take up
          to 3 days.
        </p>
        <p className="font-medium">Hakama (Bottom)</p>
        <p>
          The hakama requires a lot more after care to ensure it retains its
          condition. Polyster hakama may also be put in the washing machine on
          gentle settings. The hakama will take up to 2 days to dry completely.
          After drying, you may need to use an iron to re-pleat the hakama.
          <br />
          Cotton hakama should be washed in a bathtub or some large tub of
          water.
        </p>
      </section>
      <section id="bogu">
        <h2 className="text-2xl">Purchasing your first bogu set</h2>
        <p>
          Those purchasing their first set of armor can expect around $400-$500
          for a basic entry level set. Bogu sets can be expensive up front, but
          are an investment and will last decades if taken care of properly.
          Please use the links above to the vendors to search for a set, or if
          you find another reputable vendor, send it to use and we can verify
          them for you!
        </p>
      </section>
      <section id="rental">
        <p className="text-2xl">Bogu Rental</p>
        <p>
          As a service to our younger club members, we offer the option to rent
          bogu from us for $30 per quarter. It is often more viable to rent
          rather than purchase bogu sets every couple of years for children that
          are still growing. For adults, we strongly recommend you to buy your
          own set. For those that are still unsure or hesitant, you may talk to
          use about trialing armor before getting your own set!
        </p>
      </section>
      <section id="measurements">
        <h2 className="text-2xl">Getting your measurements</h2>
        <p>
          Every vendor or website will have their own way of taking measurements
          and which ones they need. Please use that vendor&apos;s guide to
          accurately measure yourself. If you ever need help, you may always ask
          us to help measure you at the dojo. Centimeters are the typical unit
          and may result in some half measurements. When in doubt, it is usually
          better to size up, rather than down.
        </p>
      </section>
    </main>
  );
}