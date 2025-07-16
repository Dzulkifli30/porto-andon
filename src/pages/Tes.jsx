import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import photoPreview from '/imersive.png';
import videoPreview from '/imersive.png';
import animPreview from '/imersive.png';

const services = [
  { title: 'Photography', image: photoPreview, bg: 'bg-teal-500', accent: 'bg-teal-700' },
  { title: 'Videography', image: videoPreview, bg: 'bg-teal-500', accent: 'bg-teal-700' },
  { title: 'Animation', image: animPreview, bg: 'bg-orange-500', accent: 'bg-orange-600' },
];

export default function ServiceCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gradient-to-br from-teal-300 to-green-400 min-h-screen">
      {services.map((item, i) => (
        <div
          key={i}
          className={`relative rounded-[30px] overflow-hidden p-4 pb-6 ${item.bg} text-white shadow-lg group transition-transform hover:scale-105`}
        >
          <h2 className="text-xl font-semibold mb-4">{item.title}</h2>

          {/* Gambar preview */}
          <div className="bg-white/70 p-1 rounded-[25px] overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="rounded-[20px] object-cover w-full h-[160px]"
            />
          </div>

          {/* Tombol Icon Panah */}
          <div
            className={`absolute bottom-4 right-4 w-12 h-12 rounded-full ${item.accent} flex items-center justify-center`}
          >
            <ArrowUpRightIcon className="w-6 h-6 text-white" />
          </div>
        </div>
      ))}
    </div>
  );
}
