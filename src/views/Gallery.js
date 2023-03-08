import { Box, Heading, Image, Grid, GridItem, Text } from '@chakra-ui/react'

const Gallery = () => {
  return (
    <Box align='center' my='4rem'>
      <Heading as='h1' mb='2rem'>Gallery</Heading>
      <Grid templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }} placeItems='center'>
        <GridItem position='relative' maxWidth={600} className='galleryItem'>
          <Image src={'img/gallery/pnkf2022.jpg'} className='galleryImg' />
          <Text position='absolute' top='50%' left='50%' transform='translate(-50%,-50%)' className='galleryCaption'>PNKF Taikai 2022</Text>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default Gallery