export default function NewsSection() {
  const newsItems = [
    {
      id: 1,
      image: "https://via.placeholder.com/300",
      title: "Первая новость",
      date: "3 февраля 2025",
      link: "#",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300",
      title: "Вторая новость",
      date: "2 февраля 2025",
      link: "#",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/300",
      title: "Третья новость",
      date: "1 февраля 2025",
      link: "#",
    },
  ];

  return (


    
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {newsItems.map((news) => (
          <div key={news.id} className="bg-white shadow-lg rounded-2xl overflow-hidden">
            <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <p className="text-gray-500 text-sm">{news.date}</p>
              <h3 className="text-lg font-semibold mt-2">{news.title}</h3>
              <a
                href={news.link}
                className="block mt-4 text-blue-600 font-medium hover:underline"
              >
                Читать далее →
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8 gap-4">
        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
          Загрузить ещё
        </button>
        <a href="/news" className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg shadow-md hover:bg-gray-300">
          Все новости
        </a>
      </div>
    </div>
  );
}
