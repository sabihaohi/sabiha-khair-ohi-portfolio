import { Box, Button, Container, Link, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";

const Hero = () => {

    return (
        <Container p={'0px'} maxW={{ base: 'container.sm', md: 'container.lg', lg: 'container.lg' }} mx={'auto'} >

            <Box p={{ base: '25px 25px 80px 25px', md: '0', lg: '0' }} mt={{ base: '30px', md: '70px', lg: '80px' }} >
                <Text fontSize={{ base: '16px', md: '16px', lg: '16px' }}>Hello there, this is</Text>

                <Text fontSize={{ base: '40px', md: '80px', lg: '80px' }} fontWeight={'bold'} >Sabiha Khair Ohi</Text>

                <Text fontSize={{ base: '35px', md: '40px', lg: '40px' }} fontWeight={'bold'} color={'gray'} >Commited my thinking to building websites.</Text>

                <Text mt={'15px'} fontSize={{ base: '16px', md: '18px', lg: '20px' }} w={{ base: '90%', md: '60%', lg: '50%' }}>I am Front-end developer with great passion of   programming.I want to utilize my knowledge  and  personal  skills  in Full-Stack web developer.</Text>


                <Link href='https://drive.google.com/file/d/1zXnbCvDSg1af0wsZMgULLi2jknYhKnQ7/view?usp=sharing' target={'_blank'} textDecoration={'none'} _hover={{ textDecoration: 'none' }}>
                    <Button _focus={{ bgColor: 'transparent' }} _hover={{ bgColor: 'white', color: 'black' }} mt={'50px'} variant={'outline'} borderRadius={'3'} p={'28px 28px'}>Checkout my resume
                    </Button>
                </Link>

            </Box>




            {/* side bio */}
            <Box position={'fixed'} bottom={'0'} left={'12'} display={{ base: 'none', md: 'block' }}>
                <UnorderedList listStyleType={'none'} width={'40px'}>
                    <ListItem ><Link _hover={{ textDecoration: 'none', textColor: 'gray' }} target={'_blank'} href='https://github.com/sabihaohi' ><FiGithub fontSize={'30px'} /></Link></ListItem> <br />
                    <ListItem><Link _hover={{ textDecoration: 'none', textColor: 'gray' }} target={'_blank'} href='https://www.instagram.com/sabihaohi/'><FiInstagram fontSize={'30px'} /></Link></ListItem> <br />
                    <ListItem><Link _hover={{ textDecoration: 'none', textColor: 'gray' }} target={'_blank'} href='https://www.linkedin.com/in/sabiha-ohi/'><FiLinkedin fontSize={'30px'} /></Link></ListItem> <br />
                    <ListItem><Link _hover={{ textDecoration: 'none', textColor: 'gray' }} target={'_blank'} href='#'><FiTwitter fontSize={'30px'} /></Link></ListItem> <br />
                    <ListItem w={'25px'} >
                        <Text height={'100px'} w={"2px"} mx={'auto'} bg={'white'}></Text>
                    </ListItem>
                </UnorderedList>

            </Box>

            <Box position={'fixed'} bottom={'0'} right={'12'} display={{ base: 'none', md: 'block' }} >
                <UnorderedList listStyleType={'none'} width={'40px'}>

                    <ListItem ><Link target={'_blank'} href='mailto:ohiislam3@gmail.com' fontSize={'20px'} className={'side-gmail'} _hover={{ textDecoration: 'none', textColor: 'gray' }} >ohiislam3@gmail.com</Link></ListItem> <br />

                    <ListItem w={'25px'} >
                        <Text height={'100px'} w={"2px"} mx={'auto'} bg={'white'}></Text>
                    </ListItem>
                </UnorderedList>

            </Box>


        </Container>
    );
};

export default Hero;