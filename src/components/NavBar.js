import dojoData from '../data/dojo.json'
import { useRef } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  Menu, MenuButton, MenuList, MenuItem, IconButton, Drawer, DrawerBody, DrawerOverlay,
  DrawerContent, DrawerCloseButton, useDisclosure, Image, Link, Flex, Spacer
} from '@chakra-ui/react'
import { HamburgerIcon, ExternalLinkIcon } from '@chakra-ui/icons'

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <Flex as={'nav'} p={3}>
      <Image src={`img/` + dojoData.logo} alt="logo" w='35px' h='40px' />
      <Spacer />
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label='Options'
          icon={<HamburgerIcon />}
          variant='outline'
          onClick={onOpen}
          ref={btnRef}
        />
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          closeOnOverlayClick={true}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody mt={5}>
              <Flex direction='column' align='center'>
                <Link as={RouterLink} to='/' className='nav-link'>Home</Link>
                <Link as={RouterLink} to='/about' className='nav-link'>About</Link>
                <Link as={RouterLink} to='/faq' className='nav-link'>FAQ</Link>
                <Menu closeOnSelect={true}>
                  <MenuButton className='nav-link'>Resources</MenuButton>
                  <MenuList>
                    <Link as={RouterLink} to='/terms'><MenuItem>Terms</MenuItem></Link>
                    <Link href='https://youtu.be/cpidZRL5ZbI' isExternal><MenuItem>Warmup<ExternalLinkIcon mx='2px' /></MenuItem></Link>
                  </MenuList>
                </Menu>
                <Link href={dojoData.calendar} isExternal className='nav-link'>
                  Calendar <ExternalLinkIcon mx='2px' />
                </Link>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Menu>
    </Flex >
  )
}

export default NavBar