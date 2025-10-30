import { Star } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Adebayo Okonkwo",
      role: "Small Business Owner",
      location: "Lagos, Nigeria",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ad0e575-a6e7-47c2-96a4-5c6f723cc517-demo-v2-achromatic-dev/assets/images/philip_grant-3.webp",
      quote: "YouFi gave me access to capital when traditional banks wouldn't. I borrowed ₦500K using my crypto savings as collateral and grew my business by 40%.",
    },
    {
      name: "Jennifer Okafor",
      role: "Crypto Investor",
      location: "Abuja, Nigeria",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ad0e575-a6e7-47c2-96a4-5c6f723cc517-demo-v2-achromatic-dev/assets/images/victoria_ballard-4.webp",
      quote: "As a lender, I've earned consistent returns while helping entrepreneurs. The platform's collateral security gives me complete peace of mind.",
    },
    {
      name: "Chukwudi Eze",
      role: "Freelance Developer",
      location: "Port Harcourt, Nigeria",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ad0e575-a6e7-47c2-96a4-5c6f723cc517-demo-v2-achromatic-dev/assets/images/gabriel_fischer-6.webp",
      quote: "The instant matching system is incredible. I got my loan funded in under 2 hours. The mobile app makes managing everything seamless.",
    },
    {
      name: "Amara Nwosu",
      role: "E-commerce Entrepreneur",
      location: "Enugu, Nigeria",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ad0e575-a6e7-47c2-96a4-5c6f723cc517-demo-v2-achromatic-dev/assets/images/sofia_muller-7.webp",
      quote: "YouFi's transparent fee structure and competitive rates beat any other lending option I explored. Highly recommend for anyone with crypto assets.",
    },
    {
      name: "Oluwaseun Adeleke",
      role: "Tech Startup Founder",
      location: "Ibadan, Nigeria",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/9ad0e575-a6e7-47c2-96a4-5c6f723cc517-demo-v2-achromatic-dev/assets/images/vivian_casey-5.webp",
      quote: "The KYC process was smooth and the multi-chain wallet support is a game-changer. I can use USDC, USDT across different networks.",
    },
  ];

  return (
    <section className="border-b bg-background py-20 lg:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
            What Our Users Say
          </h2>
          <p className="mt-4 text-body-lg text-muted-foreground">
            Real experiences from borrowers and lenders in our beta community
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-body-md text-muted-foreground mb-6">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-3">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <div className="text-sm font-semibold">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role} • {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}