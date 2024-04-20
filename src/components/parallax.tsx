export type ParallaxProps = {
  backgroundUrl: string;
};

export const Parallax = ({ backgroundUrl }: ParallaxProps) => {
  return (
    <section
      class="parallax h-72"
      style={{ "background-image": `url(${backgroundUrl})` }}
    ></section>
  );
};
