import { Wrench, Cpu, Camera, Zap, HardDrive, Shield } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Wrench,
      title: 'Computer Repair',
      description: 'Professional repair services for all types of computers and laptops. Blue Screen fixes, hardware replacement, and diagnostics.'
    },
    {
      icon: Cpu,
      title: 'Gaming PC Assembly',
      description: 'Custom-built gaming PCs tailored to your budget and performance needs. Expert consultation and quality components.'
    },
    {
      icon: Camera,
      title: 'CCTV Installation',
      description: 'Professional CCTV security system installation and configuration for homes and businesses.'
    },
    {
      icon: HardDrive,
      title: 'Data Recovery',
      description: 'Recover lost data from damaged hard drives and storage devices with professional expertise.'
    },
    {
      icon: Zap,
      title: 'Component Upgrades',
      description: 'RAM, SSD, and other component upgrades to boost your computer performance.'
    },
    {
      icon: Shield,
      title: 'Security Solutions',
      description: 'Complete security system setup including CCTV cameras, network configuration, and monitoring.'
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive computer and security solutions</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="bg-blue-600 rounded-lg p-3 w-fit mb-4">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-blue-50 rounded-lg p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex space-x-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-md bg-blue-600 text-white">✓</div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Expert Technicians</h4>
                <p className="text-gray-600">Highly skilled and experienced professionals</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-md bg-blue-600 text-white">✓</div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Quality Parts</h4>
                <p className="text-gray-600">Original and high-quality components only</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-md bg-blue-600 text-white">✓</div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Friendly Service</h4>
                <p className="text-gray-600">Polite and professional customer service</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-md bg-blue-600 text-white">✓</div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Competitive Pricing</h4>
                <p className="text-gray-600">Fair and transparent pricing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
