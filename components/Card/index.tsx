"use client";

import { AspectRatio, Card, Container, Image, SimpleGrid, Text, Loader, Center } from '@mantine/core';
import { useEffect, useState } from 'react';

export function ArticlesCardsGrid() {
  const [countries, setCountries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [busca, setBusca] = useState<any>('');

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('/api/countries');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCountries(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  if (loading) {
    return (
      <Center style={{ height: '200px' }}>
        <Loader />
      </Center>
    );
  }

  if (error) {
    return <Text c="red">Error loading countries: {error}</Text>;
  }  

  

  const filteredCountries = busca.length > 0
    ? countries.filter(country => country.name.common.toLowerCase().includes(busca.toLowerCase()))
    : countries;

  const cards = filteredCountries.map((country) => (
    <Card
      key={country.name.common}
      p="md"
      radius="md"
      component="a"
      href="#"
      className="transition-transform duration-200 ease-in-out hover:scale-105"
    >
      <AspectRatio ratio={1920 / 1080}>
        <Image src={country.flags.png} alt={country.flags.alt || `Flag of ${country.name.common}`} radius="md" />
      </AspectRatio>
      {/* Assuming 'date' is not available, using a placeholder or omitting */}
      <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md">País</Text>
      <Text className="text-lg font-bold mt-1"><b>{country.name.common}</b></Text>
    </Card>
  ));


  return (
    
    <Container py="xl">
      <div>
        <input type="text" placeholder="Busque o país" className="bg-gray-600" onChange={(e) => setBusca(e.target.value)} value={busca}/>
      </div>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={{ base: 0, sm: 'md' }}>
        {cards}
      </SimpleGrid>
    </Container>
  );
}
export default ArticlesCardsGrid;
