import React from 'react';
import { Box, Flex, Grid, GridItem, Icon, Image, Link, Text } from '@chakra-ui/react';
import { FiGithub } from "react-icons/fi";
import { TbBrandCodepen } from "react-icons/tb";
const LeftPictureProject = (props) => {
    return (
        <Box>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(2, 1fr)' }} gap={'5'}  >
                <GridItem>
                    <Box>
                        <Text color={'gray'} fontSize={'13px'} margin={'10px 0px'}>Featured Project</Text>
                        <Text fontWeight={'bold'} fontSize={"28px"}>{props.title}</Text>

                        <Box position={'relative'}>
                            <Box position={{ md: 'absolute', lg: 'absolute' }} zIndex={'50'} marginRight={{ base: '0', md: '-50px', lg: '-50px' }} padding={'25px'} mt={'5'} bg={'#112240'} fontSize={'15px'} borderRadius={'5px'} boxShadow={'md'}  >
                                {props.des}
                            </Box>
                        </Box>
                        <Grid mt={{ base: 0, md: '150', lg: '150' }} templateColumns='repeat(3, 1fr)' fontSize={'15px'}   >
                            <GridItem>
                                <Text>React</Text>
                            </GridItem>
                            <GridItem>
                                <Text>React-Router</Text>
                            </GridItem>
                            <GridItem>
                                <Text>Hook Form</Text>
                            </GridItem>
                            <GridItem>
                                <Text>Netlify</Text>
                            </GridItem>
                            <GridItem>
                                <Text>React Bootstrap</Text>
                            </GridItem>
                        </Grid>

                        <Flex mt={'5'} gap={'2'} me={'1'}>
                            <Link href='#'>
                                <Icon as={FiGithub} w={6} h={6} />
                            </Link>
                            <Link href={props.link} target={'_blank'}>
                                <Icon as={TbBrandCodepen} w={6} h={6} />
                            </Link>

                        </Flex>

                    </Box>
                </GridItem>
                <GridItem>
                    <Box>
                        <Link href={props.imglink} target={'_blank'}>

                            <Image src={props.img} alt="lipsy image" height={{ base: 'auto', md: '350px', lg: '350px' }} width={{ base: '100%', md: '600px' }} />
                        </Link>
                    </Box>
                </GridItem>
            </Grid>

        </Box>
    );
};

export default LeftPictureProject;