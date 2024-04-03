import {
  Link,
  Card,
  CardBody,
  CardFooter,
  Image,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

export function TableOfContents() {
  const links = [
    {
      href: "vendors",
      title: "Kendo Vendors",
    },
    {
      href: "equipment",
      title: "Kendo Equipment",
    },
    {
      href: "shinai1",
      title: "Purchasing Shinai",
    },
    {
      href: "shinai2",
      title: "Shinai Care",
    },
    {
      href: "uniform1",
      title: "Purchasing Uniform",
    },
    {
      href: "uniform2",
      title: "Uniform Care",
    },
    {
      href: "bogu",
      title: "Purchasing Bogu",
    },
    {
      href: "rental",
      title: "Bogu Rental",
    },
    {
      href: "measurements",
      title: "Sizing Bogu",
    },
  ];

  return (
    <ol className="list-decimal list-inside">
      {links.map((link, index) => (
        <li key={index}>
          <Link href={`#${link.href}`}>{link.title}</Link>
        </li>
      ))}
    </ol>
  );
}

export function VendorList() {
  const list = [
    {
      vendor: "Maruyama Kendo Supply",
      href: "https://maruyamakendosupply.com/",
    },
    {
      vendor: "e-bogu",
      href: "https://www.e-bogu.com/",
    },
    {
      vendor: "KendoStar",
      href: "https://kendostar.com/",
    },
    {
      vendor: "Tozando",
      href: "https://tozandoshop.com/",
    },
    {
      vendor: "All Japan Budogu",
      href: "https://alljapanbudogu.world/",
    },
    {
      vendor: "California Budogu",
      href: "https://californiabudogu.com/",
    },
    {
      vendor: "Budogu Zen",
      href: "https://budogu-zen.ca/",
    },
  ];

  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>
          <Link href={item.href} isExternal>
            {item.vendor}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function BoguList() {
  const list = [
    {
      title: "Men",
      img: "men.jpg",
      caption: "Helmet",
    },
    {
      title: "Kote",
      img: "kote.jpg",
      caption: "Gloves",
    },
    {
      title: "Dou",
      img: "dou.jpg",
      caption: "Chest armor",
    },
    {
      title: "Tare",
      img: "tare.jpg",
      caption: "Hip armor",
    },
  ];

  return (
    <>
      {list.map((item, index) => (
        <Card shadow="sm" key={index}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[180px]"
              src={"/bogu/" + item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.caption}</p>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}

export function ShinaiTable() {
  return (
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
  );
}
