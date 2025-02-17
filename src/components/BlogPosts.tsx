import React, { useState, useEffect, useRef } from "react";
import "./BlogPosts.css";

// Define Post interface
interface Post {
  id: number;
  title: { rendered: string };
  date: string;
  content: { rendered: string };
  _embedded: {
    "wp:featuredmedia"?: { source_url: string }[];
  };
}

// Define interface for months with posts
interface MonthWithPosts {
  year: number;
  month: number;
  posts: Post[];
}

const BlogPosts = () => {
  const apiEndpoint = "https://nicolemanalang.com/wp-json/wp/v2/posts"; // Replace with your WordPress API endpoint
  const customApiEndpoint =
    "https://nicolemanalang.com/wp-json/custom-api/v1/months-with-posts"; // Custom endpoint for fetching months

  const [posts, setPosts] = useState<Post[]>([]);
  const [yearsWithPosts, setYearsWithPosts] = useState<number[]>([]); // Years with posts
  const [monthsWithPosts, setMonthsWithPosts] = useState<MonthWithPosts[]>([]); // Months with posts (with year)
  const [selectedYear, setSelectedYear] = useState<number | null>(null); // Selected year
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null); // Selected month
  const [loading, setLoading] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [expandedPost, setExpandedPost] = useState<number | null>(null); // Post for modal view
  const [error, setError] = useState<string | null>(null); // For error handling

  const monthsFetched = useRef(false);

  // Fetch available months from custom endpoint
  const fetchAvailableMonths = async () => {
    setLoading(true);
    try {
      const response = await fetch(customApiEndpoint);
      if (!response.ok) throw new Error("Failed to fetch months");
      const data: MonthWithPosts[] = await response.json();
      setMonthsWithPosts(data);

      // Extract years from the fetched months and set the years with posts
      const years = [...new Set(data.map((item) => item.year))];
      setYearsWithPosts(years); // Update years with available posts
    } catch (error) {
      console.error(error);
      setError("Failed to load months. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch posts for the current year and month
  const fetchPosts = async (
    page: number,
    year: number | null,
    month: number | null
  ) => {
    setLoading(true);
    let query = `${apiEndpoint}?page=${page}&per_page=6&_embed`;

    // If year is selected, filter posts by year
    if (year) {
      const startDate = new Date(year, 0, 1).toISOString(); // First day of the selected year
      const endDate = new Date(year + 1, 0, 0).toISOString(); // Last day of the selected year
      query += `&after=${startDate}&before=${endDate}`;
    }

    // If both year and month are selected, filter posts by year and month
    if (month && year) {
      const startDate = new Date(year, month - 1, 1).toISOString(); // First day of the selected month
      const endDate = new Date(year, month, 0).toISOString(); // Last day of the selected month
      query += `&after=${startDate}&before=${endDate}`;
    }

    try {
      const response = await fetch(query);
      if (!response.ok) throw new Error("Failed to fetch posts");

      const postsData: Post[] = await response.json();
      setPosts(postsData);
      setTotalPages(parseInt(response.headers.get("X-WP-TotalPages") || "1"));

      if (!monthsFetched.current) {
        monthsFetched.current = true; // Mark months as fetched
      }
    } catch (error) {
      console.error(error);
      setError("Failed to load posts. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Handle year change
  const handleYearChange = (year: number) => {
    setSelectedYear(year);
    setSelectedMonth(null); // Reset month when year changes
    setCurrentPage(1); // Reset to first page
  };

  // Handle month change
  const handleMonthChange = (month: number) => {
    setSelectedMonth(month);
    setCurrentPage(1); // Reset to first page on month change
  };

  // Reset filters
  const resetFilters = () => {
    setSelectedYear(null);
    setSelectedMonth(null);
    setCurrentPage(1);
  };

  // Pagination handler
  const changePage = (direction: number) => {
    setCurrentPage((prevPage) => {
      const nextPage = prevPage + direction;
      return Math.min(Math.max(nextPage, 1), totalPages);
    });
  };

  // Open modal for selected post
  const openModal = (postId: number) => {
    setExpandedPost(postId);
  };

  // Close modal
  const closeModal = () => {
    setExpandedPost(null);
  };

  useEffect(() => {
    fetchAvailableMonths();
    fetchPosts(currentPage, selectedYear, selectedMonth);
  }, [currentPage, selectedYear, selectedMonth]);

  return (
    <div className="flex justify-center items-start min-h-screen rounded-lg p-6">
      <div className="flex w-full max-w-screen-xl flex-col lg:flex-row">
        {/* Left Column: Year and Month Filters */}
        <div className="w-full lg:w-1/5 p-6 border-b lg:border-r lg:border-b-0 border-gray-300">
          <h2 className="text-left text-2xl border-b pb-4 font-bold mb-8 text-gray-700">
            Latest AI News
          </h2>
          <p className="text-gray-600">
            Select a year and month to view posts.
          </p>

          <div className="mt-6">
            <h3 className="text-lg font-semibold">Filter by Year</h3>
            <ul className="list-none p-0 mt-4">
              {yearsWithPosts.map((year) => (
                <li
                  key={year}
                  className={`text-lg mb-4 cursor-pointer transition-colors duration-300 hover:text-orange-600 ${
                    selectedYear === year
                      ? "text-orange-600 font-bold"
                      : "text-gray-600"
                  }`}
                  onClick={() => handleYearChange(year)}
                  role="button"
                  tabIndex={0}
                >
                  {year}
                </li>
              ))}
            </ul>

            {selectedYear && (
              <>
                <h3 className="text-lg font-semibold mt-6">Filter by Month</h3>
                <ul className="list-none p-0 mt-4">
                  {monthsWithPosts
                    .filter((item) => item.year === selectedYear)
                    .map((month) => (
                      <li
                        key={month.month}
                        className={`text-lg mb-4 cursor-pointer transition-colors duration-300 hover:text-orange-600 ${
                          selectedMonth === month.month
                            ? "text-orange-600 font-bold"
                            : "text-gray-600"
                        }`}
                        onClick={() => handleMonthChange(month.month)}
                        role="button"
                        tabIndex={0}
                      >
                        {new Date(0, month.month - 1).toLocaleString("en-US", {
                          month: "long",
                        })}
                      </li>
                    ))}
                </ul>
              </>
            )}
          </div>

          {/* Reset Filter Button */}
          <div className="mt-6">
            <button
              onClick={resetFilters}
              className="w-full py-2 bg-gray-300 text-gray-700 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-400"
            >
              Reset Filters
            </button>
          </div>
        </div>

        {/* Right Column: Blog posts */}
        <div className="w-full lg:w-4/5 p-6 overflow-y-auto lg:pl-6">
          {/* Loading Indicator */}
          {loading && (
            <div className="text-center text-xl text-gray-500">Loading...</div>
          )}

          {/* Error Message */}
          {error && (
            <div className="text-center text-xl text-red-500">{error}</div>
          )}

          {/* Display posts */}
          <div
            id="recent-post"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
          >
            {posts.length > 0 ? (
              posts.map((post) => {
                const { title, date, content, id, _embedded } = post;
                const postDate = new Date(date);
                const formattedDate = postDate.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                });

                return (
                  <div
                    key={id}
                    className="bg-white border rounded-lg shadow-lg flex flex-col justify-between"
                  >
                    <div className="relative">
                      <img
                        src={
                          _embedded["wp:featuredmedia"]
                            ? _embedded["wp:featuredmedia"][0].source_url
                            : "/default-image.jpg"
                        }
                        alt={title.rendered}
                        className="rounded-t-lg w-full h-48 object-cover"
                      />
                      <div className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded-md">
                        {formattedDate}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-lg font-bold">{title.rendered}</h3>
                      <div className="mt-auto">
                        <button
                          className="mt-4 text-orange-600 hover:text-orange-800"
                          onClick={() => openModal(id)}
                        >
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-center text-gray-500">No posts available.</p>
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

      {/* Modal for Full Post */}
      {expandedPost && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-3/4 lg:w-1/2 p-6 rounded-lg shadow-lg overflow-y-auto max-h-screen">
            {/* Featured Image */}
            <img
              src={
                posts.find((post) => post.id === expandedPost)?._embedded[
                  "wp:featuredmedia"
                ]
                  ? posts.find((post) => post.id === expandedPost)?._embedded[
                      "wp:featuredmedia"
                    ]![0].source_url
                  : "/default-image.jpg"
              }
              alt="Featured"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            {/* Post Title */}
            <h2 className="text-2xl font-bold mb-4">
              {posts.find((post) => post.id === expandedPost)?.title.rendered}
            </h2>
            {/* Post Content */}
            <div
              className="post-content mt-4 text-gray-700"
              dangerouslySetInnerHTML={{
                __html:
                  posts.find((post) => post.id === expandedPost)?.content
                    .rendered || "",
              }}
            ></div>

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="w-full py-2 mt-4 bg-gray-300 text-gray-700 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-400"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPosts;
