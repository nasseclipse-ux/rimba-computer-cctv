import { Star } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      name: 'Rizky Syahhputra',
      rating: 5,
      text: 'Pelayanan ramah dan sopan kualitas barang oke',
      timeAgo: '3 weeks ago'
    },
    {
      name: 'Sri Lestari',
      rating: 5,
      text: 'Bisa ganti baterai asus x42j ga?berapaan?',
      timeAgo: '4 months ago'
    },
    {
      name: 'Sandi Pendul',
      rating: 5,
      text: 'Produk original dan berkualitas',
      timeAgo: '2 months ago'
    },
    {
      name: 'Customer',
      rating: 5,
      text: 'Bang ada kabel internet ke Pc ga??',
      timeAgo: 'Recently'
    },
    {
      name: 'Customer',
      rating: 5,
      text: 'Bang bisa atasi layar Blue Screen of Death gaa?',
      timeAgo: 'Recently'
    },
    {
      name: 'Local Guide',
      rating: 4,
      text: 'Great service and friendly staff. Highly recommended for computer repairs and upgrades.',
      timeAgo: '1 month ago'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
      />
    ));
  };

  return (
    <section id="reviews" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex space-x-1">
              {renderStars(5)}
            </div>
            <span className="text-3xl font-bold text-gray-900">4.8</span>
            <span className="text-gray-600">(34 Reviews)</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Customer Reviews</h2>
          <p className="text-xl text-gray-600">Trusted by over 1000+ satisfied customers</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.timeAgo}</p>
                </div>
              </div>
              <div className="flex space-x-1 mb-3">
                {renderStars(review.rating)}
              </div>
              <p className="text-gray-700">{review.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Want to share your experience?</p>
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700">
            Leave a Review on Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
