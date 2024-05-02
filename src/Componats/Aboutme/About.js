import { Box, Container, Flex, Grid, GridItem, Img, List, ListIcon, ListItem, Text, } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import mypicture from '../../images/myPhoto.jpg'
import { MdCheckCircle } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";


const About = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <Container id='about' maxW={{ base: 'container.sm', md: 'container.lg', lg: 'container.lg' }} padding={{ base: '25px 25px 80px 25px', md: '220px 0px', lg: '220px 0px' }} mx={'auto'}>
            <Flex alignItems={'center'} >
                <Text fontSize={{ base: '22px', md: '32px', lg: '32px' }} fontWeight={'bold'} margin={'0px 0px 40px'} data-aos="fade-up" >About me</Text>
                <Text mt={'-8'} ms={'6'} w={{ base: '50%', md: '20%', lg: '20%' }} h={'0.25'} bg={'white'} data-aos="fade-up"></Text>
            </Flex>

            <Grid templateColumns={{ base: '1fr', md: '1.5fr 1fr', lg: '1.5fr 1fr' }} gap={16}>
                <GridItem>
                    <Text fontSize={'20px'} data-aos="fade-up">
                        I am a Front End Developer with a great passion for programming. I specialize in React.js, JavaScript ES6, HTML5, CSS3, and Bootstrap5 and am comfortable with Firebase, Node.js, Express.js, MongoDB, Tailwind CSS, Material UI.<br /><br />
                        I also have some knowledge of Web Design. I have done many projects using these technologies. Some of them are listed in the Featured Section. Currently, I’m looking for opportunities to make the best use of my skills and learn more.<br /><br />
                        <Text data-aos="fade-up">
                            Here are a few technologies I’ve been working with recently:
                        </Text>
                        <Grid templateColumns={'1fr 1fr'} mt={'3'}>
                            <GridItem fontSize={'13px'} data-aos="fade-up">
                                <List spacing={3}>
                                    <ListItem>
                                        <ListIcon as={MdCheckCircle} color='gray' />
                                        HTML & HTML5
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={MdCheckCircle} color='gray' />
                                        CSS & CSS3
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={MdCheckCircle} color='gray' />
                                        JavaScript (ES6+)
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={MdCheckCircle} color='gray' />
                                        Bootstrap 5
                                    </ListItem>

                                </List>
                            </GridItem>

                            <GridItem fontSize={'13px'} data-aos="fade-up">
                                <List spacing={3}>
                                    <ListItem>
                                        <ListIcon as={MdCheckCircle} color='gray' />
                                        Tailwind CSS
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={MdCheckCircle} color='gray' />
                                        React.js
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={MdCheckCircle} color='gray' />
                                        Firebase
                                    </ListItem>
                                    <ListItem>
                                        <ListIcon as={MdCheckCircle} color='gray' />
                                        Chakra UI
                                    </ListItem>

                                </List>
                            </GridItem>
                        </Grid>
                    </Text>
                </GridItem>

                <GridItem data-aos="fade-up" mt={'5'} display={{ base: 'flex', md: 'block', lg: 'block' }} justifyContent={{ base: 'center' }} >
                    <Box pos={'relative'} w={'270px'} h={'300px'}>
                        <Box pos={'absolute'} left={'36px'} mt={'6'} h={'250px'} w={'250px'} border={'2px solid gray'} borderRadius={'5px'} > </Box>
                        <Img pos={'absolute'} top={'-10px'} src={mypicture} h={'250px'} w={'250px'} borderRadius={'5px'} />
                    </Box>

                </GridItem>

            </Grid>

        </Container>
    );
};

export default About;