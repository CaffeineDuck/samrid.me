import chevroletIcon from "../assets/chevrolet.png";

export type ChevroletProps = {
  href: string;
};

export const Chevrolet = (props: ChevroletProps) => {
  return (
    <a
      href={props.href}
      class="font-extrabold text-5xl p-3 -mt-[80px] mb-[60px] hidden justify-center md:flex items-center z-10"
    >
      <img
        src={ chevroletIcon }
        alt="Chevrolet Icon"
        class="h-8 w-8 transition-all transform hover:scale-150"
      />
    </a>
  );
};
