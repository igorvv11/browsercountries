import { Button, Container, Text, Title } from '@mantine/core';

export function HeroImageRight() {
  return (
    <div
      className="bg-cover bg-center pt-24 pb-24 h-screen"
      style={{
        backgroundColor: '#11284b',
        backgroundImage:
          'linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8&auto=format&fit=crop&w=1080&q=80)',
      }}
    >
      <Container size="lg">
        <div className="flex justify-between md:flex-col">
          <div className="pt-16 pb-16 mr-24 md:mr-0">
            <Title className="text-white text-5xl md:text-3xl">
              Tudo{' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'pink', to: 'yellow' }}
              >
                o que você
              </Text> precisa saber
            </Title>

            <Text
              className="w-100"
              mt={30}
              c="white" >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eum ab aliquam sequi ad cum tempore, quam iure illo quibusdam quidem! Cumque harum quis non nobis laudantium a veritatis quaerat.
            </Text>

            <Button
              className=""
              variant="gradient"
              gradient={{ from: 'pink', to: 'yellow' }}
              size="xl"
              mt={40}
              component="a"
              href="/buscar"
            >
              Buscar
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
