export type ButtonProps = {
  link: string;
  cta: string;
};

export const Button = ({ link, cta }: ButtonProps) => {
  return (
    <>
      <a href={link}>
        <button
          type="button"
          class="my-3 mx-3 pb-1 hover:border-b-2 hover:border-slate-600 inline-flex items-center gap-x-2 text-sm font-medium border-gray-200 bg-white text-gray-800 disabled:opacity-50 disabled:pointer-events-none"
        >
          {cta}
          <svg
            class="flex-shrink-0 size-4"
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
        </button>
      </a>
    </>
  );
};
