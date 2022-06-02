import { gql, GraphQLClient } from 'graphql-request';
import BlogCard from '../components/BlogCard';

const graphcms = new GraphQLClient(
  'https://api-ap-south-1.graphcms.com/v2/cl3u4a6ukd93t01z66012bbpb/master'
);

const QUERY = gql`
  {
    posts {
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

export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY);

  return {
    props: {
      posts,
    },
    revalidate: 30,
  };
}

export default function Home({ posts }) {
  return (
    <>
      <div className="flex flex-wrap justify-center mt-16">
        {posts.map((post) => (
          <BlogCard
            key={post.id}
            title={post.title}
            description={post.description}
            photo={post.photo}
            author={post.author}
            datePublished={post.datePublished}
            slug={post.slug}
          />
        ))}
      </div>
    </>
  );
}
