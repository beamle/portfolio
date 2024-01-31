import { Carousel } from '@mantine/carousel';

export function MantineCarousel() {
  return (
    <Carousel slideSize="70%" height={200} slideGap="md" loop dragFree withControls={false}>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
    </Carousel>
  );
}