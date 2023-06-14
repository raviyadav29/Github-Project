import React from 'react'
import Details from './Details'
import Profile from './Profile'
import Search from './Search'
import { Box, Container, Flex } from "@chakra-ui/react"

function Home() {
    return (
        <Container boxShadow='dark-lg' maxW="1200px" mt="10px">
            <Box mb="10px">
                <Search />
            </Box>

            <Flex>
                <Box w="30%"  >
                    <Profile />
                </Box>
                <Box w="70%" >
                    <Details />
                </Box>
            </Flex>
        </Container>
    )
}

export default Home