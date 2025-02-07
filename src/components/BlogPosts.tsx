import React, { useState, useEffect } from 'react';

interface Post {
  id: number;
  title: { rendered: string };
  date: string;
  content: { rendered: string };
  _embedded: {
    'wp:featuredmedia'?: { source_url: string }[];
  };
}

const BlogPosts = () => {
  const apiEndpoint = "https://nicolemanalang.com/wp-json/wp/v2/posts"; // Replace with your WordPress API endpoint

  const [posts, setPosts] = useState<Post[]>([]); // Define the posts state with the correct type
  const [currentMonth, setCurrentMonth] = useState<number>(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());
  const [loading, setLoading] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [expandedPost, setExpandedPost] = useState<number | null>(null); // Track which post's content is expanded

  // Fetch posts for the selected month
  useEffect(() => {
    fetchPostsForMonth(currentYear, currentMonth, currentPage);
  }, [currentMonth, currentPage, currentYear]);

  // Fetch posts for a given month and page
  const fetchPostsForMonth = async (year: number, month: number, page: number) => {
    setLoading(true);

    const startDate = new Date(year, month, 1).toISOString();
    const endDate = new Date(year, month + 1, 0).toISOString();

    try {
      const response = await fetch(
        `${apiEndpoint}?after=${startDate}&before=${endDate}&page=${page}&per_page=1&_embed`
      );
      if (!response.ok) throw new Error("Failed to fetch posts");

      const postsData: Post[] = await response.json(); // Define the posts data type
      setPosts(postsData);
      setTotalPages(parseInt(response.headers.get("X-WP-TotalPages") || "1"));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Handle month selection
  const handleMonthClick = (month: number) => {
    setCurrentMonth(month);
    setCurrentPage(1); // Reset to page 1 when changing month
  };

  // Change page for pagination
  const changePage = (direction: number) => {
    setCurrentPage((prevPage) => {
      const nextPage = prevPage + direction;
      return Math.min(Math.max(nextPage, 1), totalPages);
    });
  };

  // Toggle content visibility
  const toggleContent = (postId: number) => {
    setExpandedPost((prevExpandedPost) => (prevExpandedPost === postId ? null : postId));
  };

  return (
    <div className="flex justify-center items-start min-h-screen rounded-lg p-6">
      <div className="flex w-full max-w-screen-xl bg-white rounded-lg shadow-lg flex-col lg:flex-row">
        {/* Left Column: Months list with year */}
        <div className="w-full lg:w-1/5 bg-white p-6 border-b lg:border-r lg:border-b-0 rounded-l-lg lg:rounded-l-lg border-gray-300">
          <h2 className="text-left text-2xl border-b pb-4 font-bold mb-8 text-gray-700">Months in {currentYear}</h2>
          <ul className="list-none p-0">
            {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map((month, index) => (
              <li
                key={month}
                className={`text-lg mb-4 cursor-pointer transition-colors duration-300 hover:text-orange-600 ${
                  currentMonth === index ? "text-orange-600 font-bold" : "text-gray-600"
                }`}
                onClick={() => handleMonthClick(index)}
              >
                {month} {currentYear}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Most recent blog post */}
        <div className="w-full lg:w-4/5 p-6 overflow-y-auto lg:pl-6">
          {/* Loading Indicator */}
          {loading && <div className="text-center text-xl text-gray-500">Loading...</div>}

          <div id="recent-post">
            {posts.length > 0 ? (
              posts.map((post) => {
                const { title, date, content, id, _embedded } = post;
                const postDate = new Date(date).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                });

                // Get the featured image URL using _embedded['wp:featuredmedia']
                const featuredImageUrl = _embedded['wp:featuredmedia']?.[0]?.source_url;

                return (
                  <div key={id} className="bg-white p-6 rounded-lg shadow-md mb-8 hover:shadow-2xl transition-shadow duration-300">
                    {/* Featured Image */}
                    {featuredImageUrl && (
                      <div className="relative">
                        <img
                          src={featuredImageUrl}
                          alt="Post Thumbnail"
                          className="w-full h-100 object-cover rounded-md mb-6"
                        />
                        {/* Date Overlay */}
                        <div className="absolute top-0 right-0 m-4 bg-orange-600 text-white py-2 px-4 rounded-lg text-sm font-semibold">
                          {postDate}
                        </div>
                      </div>
                    )}

                    <h3
                      className="text-3xl text-center font-bold text-gray-800 cursor-pointer hover:text-orange-600"
                      onClick={() => toggleContent(id)} // Toggle content on title click
                    >
                      {title.rendered}
                    </h3>
                    {/* <p className="text-sm pt-4 text-gray-500 mt-2">{postDate}</p> */}

                    {/* Conditionally render the content if this post is expanded */}
                    {expandedPost === id && (
                      <div className="mt-6 text-lg" dangerouslySetInnerHTML={{ __html: content.rendered }}></div>
                    )}
                  </div>
                );
              })
            ) : (
              <p className="text-center text-gray-500">No posts available for this month.</p>
            )}
          </div>

          {/* Pagination */}
          {posts.length > 0 && (
            <div className="flex justify-center mt-6 space-x-4">
              <button
                onClick={() => changePage(-1)}
                disabled={currentPage === 1}
                className="px-6 py-3 bg-orange-600 text-white rounded-lg font-medium transition-all duration-300 hover:bg-orange-700 disabled:bg-gray-300"
              >
                Previous
              </button>
              <button
                onClick={() => changePage(1)}
                disabled={currentPage === totalPages}
                className="px-6 py-3 bg-orange-600 text-white rounded-lg font-medium transition-all duration-300 hover:bg-orange-700 disabled:bg-gray-300"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
