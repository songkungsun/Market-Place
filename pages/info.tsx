import { Container, Heading, Text } from '@chakra-ui/react'
import { useAddress } from '@thirdweb-dev/react'

export default function Info() {
  const address = useAddress()

  return (
    <Container maxW={'1200px'} p={5} bg="red.100">
      <Heading> Infomation </Heading>
      <Text>
        Developed by 송경선. <br />
        deployed by using 0x2861B128BF568527b93ffcE7420095682f60fBC9 (Account 4){' '}
        <br />
        Technology : Thirdweb, Ethers, Next.js, ChakraUI, Typescript
        <br />
      </Text>
      <br />
      <Heading> Contract Addresses </Heading>
      <Text>
        - MARKETPLACE_ADDRESS : 0x2861B128BF568527b93ffcE7420095682f60fBC9{' '}
        <br />
        - NFT_COLLECTION_ADDRESS : 0x05A644CDd658A10E436F37801a11fEaf453004bb
        <br />
        - TOKEN_DROP_ADDRESS : 0xD2607567e85DCb00F86F0f21CeA1768e89778AdD <br />
      </Text>
      <br />
      <Heading> Current Wallet </Heading>
      <Text>{address}</Text>
    </Container>
  )
}