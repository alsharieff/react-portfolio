import wordpress from "./assets/certificate/wordpress-certificate.jpg";
import href from "./assets/certificate/href.jpg";
import zuitt from "./assets/certificate/zuitt.png";
import devnet from "./assets/certificate/devnet-associate.png";
import enterprise from "./assets/certificate/cisco-enterprise.png";
import switching from "./assets/certificate/cisco-switching.png";
import ccnav7 from "./assets/certificate/cisco-ccnav7.png";

function Certificate() {
  const certificates = [
    {
      image: wordpress,
      title: "Wordpress & Elementor Mastery 2025",
      issuer: "Udemy",
      year: "2026",
      link: "https://www.udemy.com/certificate/UC-08137616-4357-4e91-a149-14f21e6b8338/",
    },
    {
      image: href,
      title: "Ahrefs SEO Certification",
      issuer: "Ahrefs",
      year: "2025",
      link: "https://ahrefs.com/academy/certificate/37ff30dc5c304bf6a6675b4316a3b785",
    },
    {
      image: zuitt,
      title: "Full-Stack Web Development Bootcamp",
      issuer: "Zuitt",
      year: "2022",
      link: "https://alsharieff.github.io/portfolio/assets/zuitt-bootcamp.pdf",
    },
    {
      image: devnet,
      title: "DevNet Associate",
      issuer: "Cisco",
      year: "2023",
      link: "https://alsharieff.github.io/portfolio/assets/cisco-devnet-associate.pdf",
    },
    {
      image: enterprise,
      title: "Enterprise Networking, Security & Automation",
      issuer: "Cisco",
      year: "2023",
      link: "https://alsharieff.github.io/portfolio/assets/cisco-enterprise-networking-security-and-automation.pdf",
    },
    {
      image: switching,
      title: "Switching, Routing & Wireless Essentials",
      issuer: "Cisco",
      year: "2023",
      link: "https://alsharieff.github.io/portfolio/assets/cisco-switching-routing-and-wireless-essentials.pdf",
    },
    {
      image: ccnav7,
      title: "Introduction to Networks",
      issuer: "Cisco",
      year: "2023",
      link: "https://alsharieff.github.io/portfolio/assets/cisco-introduction-to-networks.pdf",
    },
  ];

  return (
    <section className="py-16 bg-[#0B0F19]">
      <div className="mx-auto max-w-[1200px] overflow-hidden px-2 md:px-4">
        {/* Header */}
        <div className="mb-8 text-center">
          <p className="text-sm font-medium text-[#1A73E8] uppercase tracking-wider">
            Achievements
          </p>
          <h2 className="mt-2 text-lg sm:text-2xl md:text-3xl uppercase font-extrabold tracking-wide text-[#E5E7EB]">
            Professional Credentials
          </h2>
        </div>

        {/* Marquee */}
        <div className="overflow-hidden">
          <div className="flex animate-marquee gap-2 md:gap-6">
            {certificates.concat(certificates).map((cert, index) => (
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-[180px] bg-[#111827] rounded-2xl p-2 md:p-4 text-center"
              >
                {/* Image 100% width */}
                <div className="w-full bg-[#0F172A] rounded-lg mb-4">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-auto object-contain"
                  />
                </div>

                <h3 className="text-[12px] md:text-sm font-semibold text-[#E5E7EB] leading-snug">
                  {cert.title}
                </h3>
                <p className="mt-1 text-[10px] md:text-xs text-gray-400">
                  {cert.issuer} • {cert.year}
                </p>

                <div className="mt-2 h-[2px] w-6 mx-auto bg-[#1A73E8]" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind Animation */}
      <style jsx>{`
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}

export default Certificate;
