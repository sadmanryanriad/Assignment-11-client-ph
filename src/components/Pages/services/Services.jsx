import ServiceCard from "./ServiceCard";


const services = [
    {
      id: 1,
      title: 'Luxury Rooms',
      image: 'https://i.ibb.co/JrgbcRc/luxury-room.png',
    },
    {
      id: 2,
      title: 'Fine Dining',
      image: 'https://i.ibb.co/jhP15Ky/Fine-Dining.png',
    },
    {
      id: 3,
      title: 'Spa & Wellness',
      image: 'https://i.ibb.co/kBXpNHr/spa.png',
    },
    {
      id: 4,
      title: 'Event Spaces',
      image: 'https://i.ibb.co/wybYrpD/event.png',
    },
    {
      id: 5,
      title: 'Swimming Pool',
      image: 'https://i.ibb.co/MBbTT5f/swimming-pool.png',
    },
    {
      id: 6,
      title: 'Fitness Center',
      image: 'https://i.ibb.co/VC44z20/treadmill.png',
    },
    {
      id: 7,
      title: 'Concierge Services',
      image: 'https://i.ibb.co/D9dSZNB/concierge.png',
    },
    {
      id: 8,
      title: 'Business Center',
      image: 'https://i.ibb.co/QjTsDGC/business.png',
    },
  ];



  const Services = () => {
    return (
      <div id="services" className="max-w-7xl mx-auto pt-16 md:pt-24">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-12 text-center dark:text-slate-300">
          Services
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              image={service.image}
            />
          ))}
        </div>
      </div>
    );
  };
  
export default Services;