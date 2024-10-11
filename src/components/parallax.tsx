export type ParallaxProps = {
  backgroundUrl: string;
};

export const Parallax = ({ backgroundUrl }: ParallaxProps) => {
  return (
    <div>
      <section
        class="h-64 overflow-hidden bg-cover bg-no-repeat bg-center lg:bg-[center_top_-11rem] sm:bg-[center_top_-5rem]"
        style={{ "background-image": `url(${backgroundUrl})` }}
      >
        <p class="flex flex-col justify-center items-center text-center my-1 tracking-wider drop-shadow-sm">
          <span class="text-2xl max-w-64 md:max-w-fit md:text-4xl  text-secondary-800">
            I've been {" "}
            <span class="text-rose-700 font-semibold">Tinkering</span> with{" "}
            <span class="text-rose-700 underline underline-offset-4">
              Computers
            </span>
          </span>
          <span class="text-lg md:text-2xl mt-6 text-secondary-800">
            Since 2020
          </span>
        </p>
      </section>
    </div>
  );
};
