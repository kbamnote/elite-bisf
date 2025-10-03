import { Construction, Mail, Clock } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center space-y-8">
        {/* Logo/Title Section */}
        <div className="space-y-4">
          <div className="flex justify-center mb-6">
            <img 
              src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=400&h=400&fit=crop" 
              alt="Construction" 
              className="w-32 h-32 rounded-full object-cover border-4 border-purple-500 shadow-2xl shadow-purple-500/50"
            />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight">
            Elite BISF
          </h1>
          <div className="flex items-center justify-center gap-3 text-purple-300">
            <Construction className="w-6 h-6 animate-pulse" />
            <p className="text-2xl md:text-3xl font-light">Under Construction</p>
            <Construction className="w-6 h-6 animate-pulse" />
          </div>
        </div>

        {/* Main Message */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20 shadow-2xl">
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
            We're working hard to bring you something amazing. 
            Our website is currently under construction and will be launching soon.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <Clock className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Coming Soon</h3>
            <p className="text-gray-300 text-sm">Stay tuned for our launch</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <Construction className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">In Progress</h3>
            <p className="text-gray-300 text-sm">Building something special</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Get Notified</h3>
            <p className="text-gray-300 text-sm">Be the first to know</p>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-8 text-gray-400 text-sm">
          <p>© 2025 Elite BISF. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default App;