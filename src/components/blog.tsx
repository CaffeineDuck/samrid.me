import { ArrowLink } from "./arrow-link";

export interface BlogProps {
  date: Date;
  title: string;
  description: string;
  link: string;
  tags: string[];
}

export const Blog = (props: BlogProps) => {
  // Format the date as YYYY-MM-DD
  const dateString = props.date.toISOString().split('T')[0];

  return (
    <article class="w-full">
      <a href={props.link} class="block h-full">
        <div class="flex flex-col h-full justify-between transition-all hover:shadow-md rounded-lg border-slate-200 border p-4">
          <div>
            <div class="flex items-center gap-x-4 text-xs">
              <time dateTime={dateString} class="text-gray-500">
                {dateString}
              </time>
              <span class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                Python
              </span>
            </div>
            <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-600 group-hover:text-gray-900">
              {props.title}
            </h3>
            <p class="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
              {props.description}
            </p>
          </div>
          <div class="mt-4">
            <ul class="text-sm leading-4 flex flex-wrap text-slate-800 mb-2">
              {props.tags.slice(0, 3).map(tag => (
                <li class="mr-2 mb-2 border p-1 rounded-lg">{tag}</li>
              ))}
            </ul>
            <div class="flex justify-end mt-2">
              <ArrowLink href={props.link} label="Read" />
            </div>
          </div>
        </div>
      </a>
    </article>
  );
};
