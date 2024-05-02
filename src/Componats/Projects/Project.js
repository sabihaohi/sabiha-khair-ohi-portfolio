import { Box, Flex, Grid, GridItem, Icon, Image, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { FiGithub } from "react-icons/fi";
import { TbBrandCodepen } from "react-icons/tb";
const Project = (props) => {
    return (
        <Box>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(2, 1fr)' }} gap={'5'} textAlign={{ base: 'left', md: 'right', lg: 'right' }} >
                <GridItem >
                    <Box display={{ base: 'none', md: 'block' }} >
                        <Link href={props.imglink} target={'_blank'}>
                            <Image cursor={'pointer'} src={props.img} alt="lipsy image" height={'350px'} width={'600px'} />
                        </Link>
                    </Box>
                </GridItem>

                <GridItem>
                    <Box>
                        <Text color={'gray'} fontSize={'13px'} margin={{ base: '0px', md: '10px 0px', lg: '10px 0px' }}>Featured Project</Text>
                        <Text fontWeight={'bold'} fontSize={"28px"}>{props.title}</Text>

                        <Box marginLeft={{ base: '0', md: '-50px', lg: '-50px' }} padding={'25px'} mt={'5'} bg={'#112240'} fontSize={'15px'} borderRadius={'5px'} cursor={'pointer'}>
                            {props.des}
                        </Box>
                        <Grid mt={'2'} templateColumns='repeat(3, 1fr)' fontSize={'15px'}   >
                            <GridItem>
                                <Text>Node js</Text>
                            </GridItem>
                            <GridItem>
                                <Text>Express js</Text>
                            </GridItem>
                            <GridItem>
                                <Text>MongoDB</Text>
                            </GridItem>
                            <GridItem>
                                <Text>Firebase</Text>
                            </GridItem>
                            <GridItem>
                                <Text>React Bootstrap</Text>
                            </GridItem>
                            <GridItem>
                                <Text>Heroku</Text>
                            </GridItem>
                        </Grid>

                        <Flex mt={'5'} gap={'2'} justifyContent={'end'} me={'1'}>
                            <Link href='#'>
                                <Icon as={FiGithub} w={6} h={6} />
                            </Link>
                            <Link href={props.link} target={'_blank'}>
                                <Icon as={TbBrandCodepen} w={6} h={6} />
                            </Link>

                        </Flex>

                    </Box>
                </GridItem>

                <GridItem >
                    <Box display={{ base: 'block', md: 'none' }}>
                        <Link href={props.imglink} target={'_blank'}>
                            <Image cursor={'pointer'} src={props.img} alt="lipsy image" height={'auto'} width={'100%'} />
                        </Link>
                    </Box>
                </GridItem>
            </Grid>
        </Box>
    );
};

export default Project;