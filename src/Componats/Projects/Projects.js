import { Box, Container, Flex, Text, } from '@chakra-ui/react';
import React from 'react';
import lipsy from '../../images/Lipsy.png'
import gosee from '../../images/Gosee.png'
import Power from '../../images/Power-Surge.png'
import Project from './Project';
import LeftPictureProject from './LeftPictureProject';
const Projects = (props) => {
    return (

        <Container id='project' maxW={{ base: 'container.sm', md: 'container.lg', lg: 'container.lg' }} padding={{ base: '70px 25px 80px 25px', md: '100px 0px', lg: '100px 0px' }} >
            <Flex alignItems={'center'} >
                <Text fontSize={{ base: '22px', md: '32px', lg: '32px' }} fontWeight={'bold'} margin={{ base: '0px', md: '0px 0px 40px' }} data-aos="fade-up" >Some Things I’ve Built</Text>
                <Text data-aos="fade-up" mt={{ base: '1', md: '-8' }} ms={'6'} w={{ base: '20%', md: '20%', lg: '20%' }} h={'0.25'} bg={'white'}></Text>
            </Flex>
            <Box mt={{ base: '0', md: '10' }} data-aos="fade-up" >
                <Project img={lipsy} title={'Lipstick Shop'} imglink={'https://lipsy-caf19.web.app/'} link={'https://lipsy-caf19.web.app/'} des={'A complete niche product website with email and password login.There is a dashboard for admins and another dashboards for users.An admin can add or remove products and mange orders.'} />
            </Box>

            <Box mt={{ base: '20px', md: '40', lg: '40' }} data-aos="fade-up" >
                <LeftPictureProject mt={'10'} imglink={'https://power-surge-c4f02.web.app/'} link={'https://power-surge-c4f02.web.app/'} img={Power} title={'Healthcare Related Website'} des={'A complete healthcare website with google, email and password login.A fully responsive website including tablets and smartphone.Users can make an appoitment using appoitment form.'} />
            </Box>

            <Box mt={{ base: '20px', md: '40', lg: '40' }} data-aos="fade-up">
                <Project mt={'10'} img={gosee} imglink={'https://go-see-fc074.web.app/'} link={'https://go-see-fc074.web.app/'} title={'Travel website'} des={'A complete travel agency management system with google login.There is a dashboard for admin to manage bookings, plans etc.Users can create an account, book a package etc.'} />
            </Box>


        </Container>


    );
};


export default Projects;