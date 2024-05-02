import { Button, Container, Link, Text } from '@chakra-ui/react';
import React from 'react';

const Contact = () => {
    return (
        <Container id='contact' textAlign={'center'}
            padding={{ base: '25px 25px 80px 25px', md: '100px 0px', lg: '100px 0px' }} data-aos="fade-up" >

            <Text fontSize={'17px'} color={'gray'} margin={'10px 0px 20px'} data-aos="fade-up">
                What's Next?
            </Text>
            <Text margin={'0px 0px 10px'} fontSize={{ base: '30px', md: '60px' }} fontWeight={'bold'} data-aos="fade-up">
                Get In Touch
            </Text>
            <Text fontSize={'20px'} data-aos="fade-up">
                I’m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
            </Text>
            <Link href='mailto:ohiislam3@gmail.com' textDecoration={'none'} _hover={{ textDecoration: 'none' }} data-aos="fade-up">
                <Button _hover={{ textDecoration: 'none', color: 'black', bg: 'white' }} mt={'5'} bg={'transparent'} border={'1px solid white'} borderRadius={'0px'} color={'white'} fontWeight={'bold'} p={'6'}>
                    Say Hello
                </Button>

            </Link>
        </Container>

    );
};

export default Contact;