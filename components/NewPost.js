export default function NewPost() {
  return (
    <div className="flex flex-wrap justify-center mt-16">
      <div className="w-11/12 mx-auto shadow-lg">
        <h1 className="text-4xl font-semibold">New Post</h1>
        <hr />
        <form
          className="flex flex-wrap justify-center my-5"
          action="https://api-ap-south-1.graphcms.com/v2/cl3u4a6ukd93t01z66012bbpb/master/mutations"
          method="POST"
        >
          <input
            type="hidden"
            name="variables"
            value={JSON.stringify({
              input: {
                title: '',
                description: '',
                photo: {
                  url: '',
                },
              },
            })}
          />
          <input type="hidden" name="operationName" value="CreatePost" />
          <input
            type="hidden"
            name="query"
            value={`mutation CreatePost($input: PostInput!) {
                createPost(input: $input) {
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
            }`}
          />
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-title"
              >
                Title
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-title"
                type="text"
                placeholder="Title"
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-description"
              >
                Description
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-description"
                type="text"
                placeholder="Description"
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-photo"
              >
                Photo
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-photo"
                type="text"
                placeholder="Photo"
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-author"
              >
                Author
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-author"
                type="text"
                placeholder="Author"
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-datePublished"
              >
                Date Published
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-datePublished"
                type="text"
                placeholder="Date Published"
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-slug"
              >
                Slug
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-slug"
                type="text"
                placeholder="Slug"
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Create Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
