import { Star, User } from "lucide-react";

const reviews = [
  {
    name: "John Smith",
    rating: 5,
    text: "Excellent service! Fast response and professional work.",
  },
  {
    name: "Sarah Johnson",
    rating: 5,
    text: "Very reliable and trustworthy. Highly recommend!",
  },
  {
    name: "Mike Davis",
    rating: 5,
    text: "Great experience with emergency lockout service.",
  },
];

export const Reviews = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          Customer Reviews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <User className="h-10 w-10 text-primary-gold" />
                <div className="ml-3">
                  <h3 className="font-semibold">{review.name}</h3>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-primary-gold fill-current"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};