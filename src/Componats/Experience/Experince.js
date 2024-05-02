import { Box, Container, Flex, Link, List, ListIcon, ListItem, Text } from '@chakra-ui/react';
import React from 'react';
import { MdCheckCircle } from 'react-icons/md';

const Experince = () => {
    return (

        <Container data-aos="fade-up" id='experience' maxW={{ base: 'container.sm', md: 'container.lg', lg: 'container.lg' }} padding={{ base: '0px 25px', md: '100px 0px', lg: '100px 0px' }} >
            <Flex alignItems={'center'}  >
                <Text fontSize={{ base: '24px', md: '32px', lg: '32px' }} fontWeight={'bold'} margin={'0px 0px 40px'} >Where I’ve Worked</Text>
                <Text mt={'-8'} ms={'6'} w={{ base: '20%', md: '20%', lg: '20%' }} h={'0.25'} bg={'white'}></Text>
            </Flex>
            <Box data-aos="fade-up" mt={'-10px'} w={{ base: '100%', md: '700px', lg: '700px' }} h={'340px'} >
                <Text fontSize={'22px'} fontWeight={'bold'}>Front-End Developer at <Link href='https://www.flyfarint.com/' target={'_blank'} _hover={{ textDecoration: 'none' }}>FlyFar International</Link></Text>
                <Text fontSize={'13px'} mt={'1'}>19 February 2022 - 31 May 2022</Text>

                <List spacing={3} mt={'3'}>
                    <ListItem fontSize={'18px'}>
                        <ListIcon as={MdCheckCircle} color='gray' />
                        Write modern, performant, maintainable code for a diverse array of client and internal projects
                    </ListItem>

                    <ListItem fontSize={'18px'}>
                        <ListIcon as={MdCheckCircle} color='gray' />
                        Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify
                    </ListItem>

                </List>

            </Box>
        </Container>

    );
};

export default Experince;