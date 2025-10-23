import { motion } from 'framer-motion';
import { 
  MapPin, Navigation, Car, Train, 
  Bus, Clock, Phone, ExternalLink
} from 'lucide-react';

const ContactMap = () => {
  const transportOptions = [
    {
      icon: Train,
      type: 'Metro',
      details: 'Churchgate Station - 5 min walk',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Bus,
      type: 'Bus',
      details: 'Multiple bus routes available',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Car,
      type: 'Car',
      details: 'Parking available on premises',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const nearbyLandmarks = [
    'Reserve Bank of India - 2 min walk',
    'Bombay Stock Exchange - 5 min walk',
    'State Bank of India HQ - 3 min walk',
    'HDFC Bank Corporate Office - 4 min walk'
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Visit Our Campus
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Located in the heart of Mumbai's financial district, our campus is easily accessible and surrounded by major banking institutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Our Location</h3>
                    <p className="text-gray-600">Elite BIFS Institute Campus</p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors duration-200"
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Get Directions
                </motion.button>
              </div>

              {/* Interactive Map Placeholder */}
              <div className="relative bg-white rounded-xl overflow-hidden shadow-inner border-2 border-gray-200 mb-6">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
                  {/* Map Placeholder with Interactive Elements */}
                  <div className="relative w-full h-full">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
                        {Array.from({ length: 48 }).map((_, i) => (
                          <div key={i} className="border border-gray-300"></div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Main Location Marker */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    >
                      <div className="relative">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-6 h-6 bg-red-500 rounded-full border-4 border-white shadow-lg"
                        ></motion.div>
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap">
                          Elite BIFS Institute
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Nearby Landmarks */}
                    {[
                      { name: 'RBI', position: 'top-1/3 left-1/3' },
                      { name: 'BSE', position: 'top-2/3 right-1/3' },
                      { name: 'SBI HQ', position: 'bottom-1/3 left-1/4' }
                    ].map((landmark, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                        className={`absolute ${landmark.position}`}
                      >
                        <div className="w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-md"></div>
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                          {landmark.name}
                        </div>
                      </motion.div>
                    ))}

                    {/* Roads */}
                    <div className="absolute inset-0">
                      <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-400 opacity-60"></div>
                      <div className="absolute top-0 bottom-0 left-1/2 w-2 bg-gray-400 opacity-60"></div>
                    </div>
                  </div>
                </div>
                
                {/* Map Controls */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2">
                  <button className="p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <span className="text-lg font-bold">+</span>
                  </button>
                  <button className="p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <span className="text-lg font-bold">-</span>
                  </button>
                </div>
              </div>

              {/* Address Details */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Complete Address</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Elite BIFS Institute<br />
                      1st Floor Mohota Complex, Above State Bank Of India<br />
                      Katol Road, Chhaoni Rd<br />
                      Nagpur, Maharashtra, 440013<br />
                      India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Location Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Transportation */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">How to Reach</h3>
              <div className="space-y-4">
                {transportOptions.map((transport, index) => {
                  const IconComponent = transport.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
                    >
                      <div className={`bg-gradient-to-r ${transport.color} p-3 rounded-lg`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{transport.type}</div>
                        <div className="text-gray-600 text-sm">{transport.details}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Nearby Landmarks */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Nearby Landmarks</h3>
              <div className="space-y-3">
                {nearbyLandmarks.map((landmark, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 text-gray-700"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span>{landmark}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h3>
              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-between p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-green-600" />
                    <span className="font-medium text-gray-900">Call for Directions</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-between p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span className="font-medium text-gray-900">Schedule Campus Visit</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-between p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex items-center space-x-3">
                    <Navigation className="w-5 h-5 text-purple-600" />
                    <span className="font-medium text-gray-900">Open in Google Maps</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;