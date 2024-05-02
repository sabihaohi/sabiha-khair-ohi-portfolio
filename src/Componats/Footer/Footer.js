import { Box, Link, Text } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
    return (
        <Box >
            <Text p={'60px 60px 20px 60px'} textAlign={'center'}>
                Designed & Built by <Link href="https://github.com/sabihaohi" target={'_blank'} fontWeight={'bold'}>Sabiha Khair Ohi</Link>
            </Text>

        </Box>
    );
};

export default Footer;