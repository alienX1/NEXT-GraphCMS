import { gql, GraphQLClient } from 'graphql-request';

const graphcms = new GraphQLClient(
  'https://api-ap-south-1.graphcms.com/v2/cl3u4a6ukd93t01z66012bbpb/master'
);

const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      description
      photo {
        url
      }
      author {
        author
      }
      datePublished
      slug
    }
  }
`;

const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

export async function getStaticPaths() {
  const { posts } = await graphcms.request(SLUGLIST);
  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await graphcms.request(QUERY, { slug });
  const post = data.post;
  return {
    props: {
      post,
    },
    revalidate: 30,
  };
}

export default function BlogPost({ post }) {
  return (
    <div className="w-11/12 mx-auto shadow-lg mt-16">
      <h1 className="text-4xl font-semibold">{post.title}</h1>
      <hr />
      <p className="text-gray-500 text-sm my-2 hover:text-gray-900">
        Posted by {post.author.author} on {post.datePublished}
      </p>
      <hr />
      <img
        className="rounded-lg object-cover lg:w-2/3"
        src={post.photo.url}
        alt={post.title}
      />
      <p className="text-lg ml-3 mt-5 pb-5">{post.description}</p>
    </div>
  );
}
