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
        src="https://media.discordapp.net/attachments/904748872423841803/1231003012558753952/69f9152c1e740d00.png?ex=66355fe5&is=6622eae5&hm=c68e86a5eae6997531f7a2984cc06f6c7a59128a663bf388cb456bd45c3d5aba&=&format=webp&quality=lossless&width=44&height=44"
        alt="Chevrolet Icon"
        class="h-8 w-8 transition-all hover:h-10"
      />
    </a>
  );
};
