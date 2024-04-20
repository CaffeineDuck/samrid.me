export type ParallaxProps = {
  backgroundUrl: string;
};

export const Parallax = ({ backgroundUrl }: ParallaxProps) => {
  return (
    <section
      class="h-60 md:h-96 relative overflow-hidden md:bg-fixed bg-center bg-no-repeat bg-cover"
      style={{ "background-image": `url(${backgroundUrl})` }}
    >
      <div class="absolute inset-0 bg-[rgba(0,0,0,0.1)] backdrop-blur-sm"></div>
      <p class="absolute inset-0 flex flex-col justify-center items-center text-center my-1 tracking-wider drop-shadow-sm">
        <span class="text-2xl max-w-64 md:max-w-fit md:text-4xl">
          I've been{" "}
          <span class="text-primary-800 font-semibold">Tinkering</span> with{" "}
          <span class="text-primary-800 underline underline-offset-4">
            Computers
          </span>
        </span>
        <span class="text-lg md:text-2xl mt-6 text-secondary-800">Since 2020</span>
      </p>
    </section>
  );
};
