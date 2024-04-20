export type ArrowLinkProps = {
  href: string;
  label: string;
};

export const ArrowLink = ({ href, label }: ArrowLinkProps) => {
  return (
    <a
      href={href}
      class="text-sm flex ml-auto gap-1 justify-center items-center font-semibold text-primary-500 group-hover:text-primary-800 hover:text-primary-800 transition-colors"
    >
      {label}
      <svg
        class="size-4"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M5 12h14"></path>
        <path d="m12 5 7 7-7 7"></path>
      </svg>
    </a>
  );
};
