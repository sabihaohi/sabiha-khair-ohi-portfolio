import React from "react";

import {
    chakra,
    Box,
    Flex,
    useColorModeValue,
    VisuallyHidden,
    HStack,
    Button,
    useDisclosure,
    VStack,
    IconButton,
    CloseButton,
    Img,
    Link,

} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../../images/logo.webp"

export default function Nav() {
    const bg = useColorModeValue("black", "gray.800");
    const mobileNav = useDisclosure();

    return (
        <React.Fragment>
            <chakra.header
                w="full"
                px={{ base: 2, sm: 4 }}
                py={4}

            >
                <Flex alignItems="center" justifyContent="space-between" mx="auto" mt={'3'}>
                    <Flex>
                        <chakra.a
                            href="/"
                            title="Choc Home Page"
                            display="flex"
                            alignItems="center"
                        >

                            <VisuallyHidden>Choc</VisuallyHidden>
                        </chakra.a>
                        <chakra.h1 fontSize="xl" fontWeight="medium" ml="10" data-aos="flip-left">
                            <Img  src={logo} alt='logo' height={{ base: '30px', md: '50px' }} w={{ base: '30px', md: '50px' }} />
                        </chakra.h1>
                    </Flex>
                    <HStack display="flex" alignItems="center" spacing={1}>
                        <HStack
                            fontSize={'13px'}
                            spacing={1}
                            mr={5}
                            color="brand.500"
                            display={{ base: "none", md: "inline-flex" }}
                        >
                            <Button _focus={{ bgColor: 'transparent' }} _hover={{ bg: 'tranparent', color: 'gray' }} variant="ghost">Home</Button>

                            <Link _hover={{ textDecoration: 'none' }} href="#about"> <Button _focus={{ bgColor: 'transparent' }} _hover={{ bg: 'tranparent', color: 'gray' }} variant="ghost" >About</Button> </Link>

                            <Link _hover={{ textDecoration: 'none' }} href="#experience"><Button _focus={{ bgColor: 'transparent' }} _hover={{ bg: 'tranparent', color: 'gray' }} variant="ghost">Experience</Button>
                            </Link>

                            <Link _hover={{ textDecoration: 'none' }} href="#project">
                                <Button _focus={{ bgColor: 'transparent' }} _hover={{ bg: 'tranparent', color: 'gray' }} variant="ghost">Projects</Button>
                            </Link>

                            <Link href="#contact" _hover={{ textDecoration: 'none' }}>
                                <Button _focus={{ bgColor: 'transparent' }} _hover={{ bg: 'tranparent', color: 'gray' }} variant="ghost">Contact</Button>
                            </Link>
                        </HStack>

                        <Box display={{ base: "inline-flex", md: "none" }} margin={'0px'}>
                            <IconButton
                                display={{ base: "flex", md: "none" }}
                                aria-label="Open menu"
                                fontSize="20px"
                                color="white"
                                _dark={{ color: "inherit" }}
                                variant="ghost"
                                icon={<AiOutlineMenu />}
                                onClick={mobileNav.onOpen}

                            />

                            <VStack
                                pos="absolute"
                                top={0}
                                left={0}
                                right={0}
                                display={mobileNav.isOpen ? "flex" : "none"}
                                flexDirection="column"
                                p={2}
                                pb={4}
                                m={0}
                                bg={bg}
                                spacing={3}
                                rounded="sm"
                                shadow="sm"
                            >
                                <CloseButton
                                    aria-label="Close menu"
                                    onClick={mobileNav.onClose}

                                />

                                <Button _focus={{ bgColor: 'transparent' }} _hover={{ bg: 'tranparent', color: 'gray' }} variant="ghost">Home</Button>

                                <Link _hover={{ textDecoration: 'none' }} href="#about"> <Button _focus={{ bgColor: 'transparent' }} _hover={{ bg: 'tranparent', color: 'gray' }} variant="ghost" >About</Button> </Link>

                                <Link _hover={{ textDecoration: 'none' }} href="#experience"><Button _focus={{ bgColor: 'transparent' }} _hover={{ bg: 'tranparent', color: 'gray' }} variant="ghost">Experience</Button>
                                </Link>

                                <Link _hover={{ textDecoration: 'none' }} href="#project">
                                    <Button _focus={{ bgColor: 'transparent' }} _hover={{ bg: 'tranparent', color: 'gray' }} variant="ghost">Projects</Button>
                                </Link>

                                <Link href="#contact" _hover={{ textDecoration: 'none' }}>
                                    <Button _focus={{ bgColor: 'transparent' }} _hover={{ bg: 'tranparent', color: 'gray' }} variant="ghost">Contact</Button>
                                </Link>
                            </VStack>
                        </Box>
                    </HStack>
                </Flex>
            </chakra.header>
        </React.Fragment>
    );
};
