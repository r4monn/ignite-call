import { Heading, Text } from '@flawless-ui/react'
import { Container, Hero, Preview } from './styles'
import previewImage from '../../assets/app_preview.png'
import Image from 'next/image'
import { ClaimUsernameForm } from './components/ClaimUsernameForm'


export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading size="4xl">Agendamento descomplicado</Heading>

        <Text size="lg">
          Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre.
        </Text>

        <ClaimUsernameForm />
      </Hero>

      <Preview>
        <Image 
          src={previewImage} 
          height={400} 
          quality={100} 
          priority 
          alt='Calendário simbolização aplicação em funcionamento' 
        />
      </Preview>
    </Container>
  )
}
