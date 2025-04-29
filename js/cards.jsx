export default function CardGrid() {
  const cards = [
    { id: 1, image: "https://via.placeholder.com/300", title: "Первая карточка" },
    { id: 2, image: "https://via.placeholder.com/300", title: "Вторая карточка" },
    { id: 3, image: "https://via.placeholder.com/300", title: "Третья карточка" },
    { id: 4, image: "https://via.placeholder.com/300", title: "Четвёртая карточка" },
    { id: 5, image: "https://via.placeholder.com/300", title: "Пятая карточка" },
    { id: 6, image: "https://via.placeholder.com/300", title: "Шестая карточка" },
  ];

  return (


    
    <div className="max-w-5xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div key={card.id} className="relative group rounded-2xl overflow-hidden shadow-lg">
            {/* Картинка */}
            <img src={card.image} alt={card.title} className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105" />

            {/* Затемнение + контент */}
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-xl font-semibold text-center">{card.title}</h3>
              <button className="mt-4 px-5 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
                Подробнее
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
