import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useMemo } from "react";

const categories = [
  { icon: "⭐", name: "Trending" },
  { icon: "🎭", name: "Acting & Performing Arts" },
  { icon: "💼", name: "Business & Entrepreneurship" },
  { icon: "🏛️", name: "Community & Government" },
  { icon: "🍽️", name: "Food & Drink" },
  { icon: "🎨", name: "Art & Design" },
  { icon: "🎮", name: "Games & Digital Media" },
  { icon: "🎬", name: "Film & TV" },
  { icon: "💪", name: "Health & Wellness" },
  { icon: "🎵", name: "Music" },
  { icon: "🏃", name: "Outdoor Adventures & Events" },
  { icon: "🔬", name: "Science & Technology" },
  { icon: "⚽", name: "Sports & Athletics" },
  { icon: "✍️", name: "Writing" },
];

const instructors = [
  {
    name: "Rosalind Brewer",
    title: "Business Innovation",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    categories: ["Business & Entrepreneurship", "Trending"],
    duration: "1hr 30minutes",
  },
  {
    name: "Robert Reffkin",
    title: "Buying and Selling Real Estate",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    categories: ["Business & Entrepreneurship"],
    duration: "2hr 15minutes",
  },
  {
    name: "Paul Krugman",
    title: "Economics and Society",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    categories: ["Business & Entrepreneurship", "Community & Government"],
    duration: "1hr 45minutes",
  },
  {
    name: "Doris Kearns Goodwin",
    title: "U.S. Presidential History and Leadership",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    categories: ["Community & Government", "Writing"],
    duration: "2hr",
  },
  {
    name: "Whitney Wolfe Herd",
    title: "Rewriting the Rules of Business",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
    categories: ["Business & Entrepreneurship", "Trending"],
    duration: "1hr 20minutes",
  },
  {
    name: "Meryl Streep",
    title: "The Art of Acting",
    image:
      "https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1101&q=80",
    categories: ["Acting & Performing Arts", "Film & TV"],
    duration: "2hr 30minutes",
  },
  {
    name: "Gordon Ramsay",
    title: "Cooking Techniques",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    categories: ["Food & Drink", "Trending"],
    duration: "1hr 50minutes",
  },
  {
    name: "Banksy",
    title: "Street Art Mastery",
    image:
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    categories: ["Art & Design"],
    duration: "1hr 40minutes",
  },
  {
    name: "Shigeru Miyamoto",
    title: "Game Design Principles",
    image:
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    categories: ["Games & Digital Media"],
    duration: "2hr 10minutes",
  },
  {
    name: "Jane Fonda",
    title: "Fitness and Wellness Fundamentals",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    categories: ["Health & Wellness"],
    duration: "1hr 15minutes",
  },
  {
    name: "Hans Zimmer",
    title: "Film Scoring Masterclass",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    categories: ["Music", "Film & TV"],
    duration: "2hr 45minutes",
  },
  {
    name: "Bear Grylls",
    title: "Outdoor Survival Techniques",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    categories: ["Outdoor Adventures & Events"],
    duration: "1hr 55minutes",
  },
  {
    name: "Neil Degrasse Tyson",
    title: "Scientific Thinking and Communication",
    image:
      "https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    categories: ["Science & Technology"],
    duration: "2hr 20minutes",
  },
  {
    name: "Serena Williams",
    title: "Tennis Mastery",
    image:
      "https://images.unsplash.com/photo-1531315630201-bb15abeb1653?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    categories: ["Sports & Athletics"],
    duration: "1hr 40minutes",
  },
  {
    name: "Margaret Atwood",
    title: "Creative Writing Workshop",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80",
    categories: ["Writing"],
    duration: "2hr 5minutes",
  },
  {
    name: "Elon Musk",
    title: "Future of Technology and Innovation",
    image:
      "https://images.unsplash.com/photo-1562114808-b4b33cf60f4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80",
    categories: [
      "Science & Technology",
      "Business & Entrepreneurship",
      "Trending",
    ],
    duration: "2hr 30minutes",
  },
  {
    name: "Michelle Obama",
    title: "Leadership and Public Service",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    categories: ["Community & Government", "Trending"],
    duration: "1hr 45minutes",
  },
  {
    name: "David Attenborough",
    title: "Nature and Wildlife Conservation",
    image:
      "https://images.unsplash.com/photo-1589656966895-2f33e7653819?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    categories: ["Science & Technology", "Trending"],
    duration: "2hr 15minutes",
  },
  {
    name: "Simone Biles",
    title: "Gymnastics and Mental Toughness",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    categories: ["Sports & Athletics", "Health & Wellness", "Trending"],
    duration: "1hr 30minutes",
  },
  {
    name: "Malala Yousafzai",
    title: "Education Advocacy and Human Rights",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    categories: ["Community & Government", "Trending"],
    duration: "2hr",
  },
];

export default function EducationPlatform() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Trending");

  const filteredInstructors = useMemo(() => {
    if (selectedCategory === "Trending") {
      return instructors.filter((instructor) =>
        instructor.categories.includes("Trending"),
      );
    }
    return instructors.filter((instructor) =>
      instructor.categories.includes(selectedCategory),
    );
  }, [selectedCategory]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= filteredInstructors.length ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? filteredInstructors.length - 1 : prevIndex - 1,
    );
  };

  const getCategoryTitle = (category) => {
    switch (category) {
      case "Trending":
        return "Explore trending courses";
      case "Business & Entrepreneurship":
        return "Build leadership skills";
      case "Community & Government":
        return "Understand society and politics";
      case "Writing":
        return "Enhance your writing skills";
      default:
        return `Discover ${category.toLowerCase()} courses`;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold max-w-2xl mx-auto leading-tight">
          A dose of inspiration,
          <br />
          whenever you need it.
        </h1>
      </div>

      {/* Categories */}
      <div className="mb-12">
        <div className="flex flex-wrap gap-4">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-4 py-2 rounded-md flex items-center gap-2 text-sm
                ${
                  category.name === selectedCategory
                    ? category.name === "Trending"
                      ? "bg-transparent border-2 border-yellow-400 text-white"
                      : "bg-white text-black"
                    : "border border-gray-700 hover:border-gray-500"
                }`}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Leadership Section */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">
            {getCategoryTitle(selectedCategory)}
          </h2>
          <button className="text-sm text-gray-400 hover:text-white">
            See all
          </button>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex gap-4">
            {filteredInstructors
              .slice(currentIndex, currentIndex + 5)
              .map((instructor, index) => (
                <div key={index} className="relative flex-none w-[240px] group">
                  <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-lg">
                    {instructor.categories.includes("Trending") && (
                      <div className="absolute top-2 left-2 bg-white text-black text-xs font-bold px-2 py-1 rounded-full z-10">
                        New
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70 rounded-lg group-hover:opacity-75 transition-opacity duration-300" />
                    <img
                      src={instructor.image}
                      alt={instructor.name}
                      className="object-cover w-full h-full rounded-lg transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-4 flex flex-col justify-end">
                      <h3 className="font-semibold text-xl leading-tight mb-2 text-white">
                        {instructor.title}
                      </h3>
                      <p className="text-sm text-gray-300">{instructor.name}</p>
                      <p className="text-xs text-gray-400 mt-1">
                        {instructor.duration}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-md p-2"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-md p-2"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-1 mt-4">
            {Array.from({ length: filteredInstructors.length }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full ${
                    index === currentIndex ? "bg-white" : "bg-gray-600"
                  }`}
                />
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
