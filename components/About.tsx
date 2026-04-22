'use client'

import Image from 'next/image'
import { CheckCircle, Users, MapPin, Award } from 'lucide-react'

export function About() {
  const values = [
    {
      icon: CheckCircle,
      title: 'Reliability & Professionalism',
      description: 'You can count on us to show up on time, every time. We take pride in our professional approach to every job.'
    },
    {
      icon: Users,
      title: 'Expert & Friendly',
      description: 'Our team consists of highly skilled, Gas Safe-registered engineers who treat your home with respect.'
    },
    {
      icon: MapPin,
      title: 'Local Expertise',
      description: 'Serving the local communities for over 5 years, we understand Northern Ireland heating needs.'
    },
    {
      icon: Award,
      title: 'Quality Guaranteed',
      description: 'All work comes with guarantees and our commitment to your satisfaction is absolute.'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Story */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Meet David & the Team
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                For over 5 years, First Choice Heating has been the trusted name for boiler servicing, maintenance, and repair across Lisburn, Belfast, Antrim, Ballymena, and surrounding areas of Northern Ireland. What started as a commitment to providing honest, reliable heating services has grown into a reputation built on excellence and customer care.
              </p>
              <p>
                David Cameron leads the team with a passion for helping families stay warm and comfortable. With extensive experience in gas, oil, and LPG heating systems, David and his team understand that a broken boiler isn't just an inconvenience—it's a crisis. That's why we're available 24/7 for emergencies and always treat every job with the urgency and care it deserves.
              </p>
              <p>
                Our customers consistently praise us for our responsiveness, transparent pricing, and willingness to go the extra mile. Whether it's a routine service, an urgent repair, or a complete system installation, we approach every project as if it's our own home.
              </p>
              <p>
                We're Gas Safe registered and OFTEC qualified, holding all necessary certifications to serve your heating needs safely and professionally. More importantly, we're neighbors helping neighbors—committed to building long-term relationships with the families we serve.
              </p>
            </div>
          </div>

          {/* Right side - Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/meet-david-radiator.png"
                alt="Quality radiator and heating work"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/486454320_629335533405895_8273094764118529478_n-RZTC8Y4BxoB6E0rpSzAIzIPIXHupZN.jpg"
                alt="Professional boiler installation"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/486280069_628688916803890_4039723130359365761_n-iWqtAizAtbdEIaqkSI2o7teMZhxhKS.jpg"
                alt="Modern heating system"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/485804081_629639033375545_4194678057454071420_n-li5uDWwdBTrnoE6fAe50ZHNO8IgT2r.jpg"
                alt="Heating system inspection and testing"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gray-50 rounded-lg p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-12 text-center">
            Why Choose First Choice Heating?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-500 text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-blue-900 mb-2">
                      {value.title}
                    </h4>
                    <p className="text-gray-700">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Service Area */}
        <div className="mt-16 bg-blue-900 text-white rounded-lg p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Serving Your Community
              </h3>
              <p className="text-blue-100 mb-6 text-lg">
                Based in Lisburn, we proudly serve customers across Northern Ireland. Our coverage area includes major towns and cities within 30 miles, ensuring we can respond quickly to your heating needs.
              </p>
              <div className="space-y-3">
                {['Lisburn', 'Belfast', 'Antrim', 'Ballymena', 'Lurgan', 'Armagh', 'Craigavon', 'Dungannon'].map((town) => (
                  <div key={town} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    <span>{town}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h4 className="text-lg font-bold text-blue-900 mb-4">
                Our Coverage Zone
              </h4>
              <div className="bg-gray-100 rounded-lg p-4 text-center">
                <div className="text-sm text-gray-600 mb-2">30-mile radius from Lisburn</div>
                <div className="text-3xl font-bold text-blue-900">+20 Towns</div>
                <div className="text-sm text-gray-600 mt-2">Northern Ireland</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
