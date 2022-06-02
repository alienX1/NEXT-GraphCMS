import Link from 'next/link';

export default function BlogCard({
  title,
  datePublished,
  description,
  photo,
  author,
  slug,
}) {
  return (
    <div className="flex rounded-lg max-w-lg shadow my-5 mx-3 hover:opacity-95 hover:shadow-md bg-slate-50 border-t-2">
      <div>
        <Link href="posts/[slug]" as={`posts/${slug}`}>
          <img
            src={photo.url}
            alt={title}
            className="rounded-lg object-cover"
          />
        </Link>

        <p className="text-gray-500 text-sm mt-2 ml-2 mb-2">
          Published at {datePublished} by {author.author}
        </p>
      </div>
      <div className="ml-2">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <hr />
        <p className="text-gray-800 text-xs my-2 md:text-sm hover:text-gray-600 h-32 md:h-36 overflow-hidden leading-4">
          {description}
        </p>
        <span>...</span>
      </div>
    </div>
  );
}
