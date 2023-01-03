import { Link, Image, Heading } from '@chakra-ui/react'

const AffImg = ({ img, url, caption, heading }) => {
  return (
    <Link href={url} isExternal>
      <Image class='affimg' src={`img/` + img} alt={caption} />
      <Heading as={'h6'} size='xs' mt={4}>{heading}</Heading>
    </Link>
  )
}

export default AffImg