import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Clock, 
  Shield, 
  AlertCircle, 
  Droplet, 
  Activity, 
  CheckCircle2, 
  Printer, 
  Menu,
  X,
  ChevronRight,
  Info,
  Lock,
  ArrowRight,
  KeyRound
} from 'lucide-react';

// --- CONFIGURATION ---
// ⬇️ CHANGE THIS to the password you want to sell to customers
const ACCESS_CODE = "CARE4U"; 

// --- Login Component ---
const LoginScreen = ({ onLogin }) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // specific check (case insensitive)
    if (input.trim().toUpperCase() === ACCESS_CODE) {
      onLogin();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-stone-200 overflow-hidden">
        <div className="bg-teal-600 p-8 text-center">
          <div className="inline-flex p-3 bg-white/20 rounded-full text-white mb-4">
            <Lock size={32} />
          </div>
          <h1 className="text-2xl font-serif font-bold text-white">Caregiver Confidence</h1>
          <p className="text-teal-100 text-sm mt-1">Premium Digital Guide</p>
        </div>
        
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Enter Access Code
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-400">
                  <KeyRound size={20} />
                </div>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors ${
                    error ? 'border-rose-300 bg-rose-50' : 'border-stone-300'
                  }`}
                  placeholder="e.g. CARE2024"
                />
              </div>
              {error && (
                <p className="mt-2 text-sm text-rose-600 flex items-center gap-1 animate-pulse">
                  <AlertCircle size={14} />
                  Incorrect access code. Please try again.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-stone-800 hover:bg-stone-700 text-white font-medium py-3 px-4 rounded-lg transition-colors group"
            >
              Unlock Guide
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-xs text-stone-400">
              Don't have a code? <a href="#" className="underline hover:text-teal-600">Purchase access here</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Components ---

const SectionHeader = ({ icon: Icon, title, subtitle }) => (
  <div className="mb-6 border-b border-stone-200 pb-4 break-inside-avoid">
    <div className="flex items-center gap-3 mb-2">
      <div className="p-2 bg-teal-50 rounded-lg text-teal-700">
        <Icon size={24} />
      </div>
      <h2 className="text-2xl font-serif text-stone-800">{title}</h2>
    </div>
    <p className="text-stone-500 italic ml-1">{subtitle}</p>
  </div>
);

const Card = ({ title, children, className = "" }) => (
  <div className={`bg-white rounded-xl shadow-sm border border-stone-100 p-6 ${className} print:shadow-none print:border-stone-300 break-inside-avoid`}>
    {title && <h3 className="text-lg font-semibold text-stone-700 mb-4">{title}</h3>}
    {children}
  </div>
);

// --- Content Sections ---

const PressureMap = () => (
  <div className="flex flex-col md:flex-row gap-8 items-center justify-center py-8">
    <div className="relative w-64 h-96 bg-stone-100 rounded-3xl flex items-center justify-center border-2 border-stone-200 print:border-stone-400">
      {/* Abstract Body Representation */}
      <div className="absolute top-4 w-16 h-16 rounded-full bg-white border-2 border-stone-300 flex items-center justify-center text-xs text-stone-400">Head</div>
      <div className="absolute top-24 w-32 h-40 rounded-2xl bg-white border-2 border-stone-300"></div>
      <div className="absolute top-64 w-10 h-28 left-16 bg-white border-2 border-stone-300 rounded-full"></div>
      <div className="absolute top-64 w-10 h-28 right-16 bg-white border-2 border-stone-300 rounded-full"></div>

      {/* Hotspots */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-6 h-6 bg-rose-100 border border-rose-400 rounded-full flex items-center justify-center group cursor-help print:border-2">
        <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse print:animate-none"></span>
        <div className="hidden group-hover:block absolute left-8 bg-stone-800 text-white text-xs p-2 rounded w-32 z-10">Back of Head (Occiput)</div>
      </div>
      <div className="absolute top-28 left-12 w-6 h-6 bg-rose-100 border border-rose-400 rounded-full flex items-center justify-center group cursor-help print:border-2">
        <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse print:animate-none"></span>
        <div className="hidden group-hover:block absolute left-8 bg-stone-800 text-white text-xs p-2 rounded w-32 z-10">Shoulder Blades (Scapula)</div>
      </div>
      <div className="absolute top-28 right-12 w-6 h-6 bg-rose-100 border border-rose-400 rounded-full flex items-center justify-center group cursor-help print:border-2">
        <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse print:animate-none"></span>
        <div className="hidden group-hover:block absolute left-8 bg-stone-800 text-white text-xs p-2 rounded w-32 z-10">Elbows</div>
      </div>
      <div className="absolute top-52 left-1/2 -translate-x-1/2 w-8 h-8 bg-rose-100 border border-rose-400 rounded-full flex items-center justify-center group cursor-help print:border-2">
        <span className="w-3 h-3 bg-rose-500 rounded-full animate-pulse print:animate-none"></span>
        <div className="hidden group-hover:block absolute left-8 bg-stone-800 text-white text-xs p-2 rounded w-32 z-10">Tailbone (Sacrum) - *Highest Risk*</div>
      </div>
      <div className="absolute bottom-4 left-20 w-6 h-6 bg-rose-100 border border-rose-400 rounded-full flex items-center justify-center group cursor-help print:border-2">
        <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse print:animate-none"></span>
        <div className="hidden group-hover:block absolute left-8 bg-stone-800 text-white text-xs p-2 rounded w-32 z-10">Heels</div>
      </div>
    </div>
    
    <div className="space-y-4 max-w-sm">
      <h4 className="font-bold text-stone-700">High Risk Zones</h4>
      <p className="text-stone-600 text-sm">Pressure injuries occur when bone presses skin against a surface (bed or chair), reducing blood flow.</p>
      <ul className="space-y-2 text-sm text-stone-600">
        <li className="flex items-center gap-2"><div className="w-3 h-3 bg-rose-500 rounded-full print:bg-stone-800"></div> <strong>Sacrum (Tailbone):</strong> Most common site.</li>
        <li className="flex items-center gap-2"><div className="w-3 h-3 bg-rose-500 rounded-full print:bg-stone-800"></div> <strong>Heels:</strong> Skin is very thin here.</li>
        <li className="flex items-center gap-2"><div className="w-3 h-3 bg-rose-500 rounded-full print:bg-stone-800"></div> <strong>Hips:</strong> Risk when lying on side.</li>
      </ul>
      <div className="bg-blue-50 p-3 rounded-lg border border-blue-100 text-xs text-blue-800 print:border-stone-300 print:bg-stone-50 print:text-stone-800">
        <strong>Tip:</strong> "Float" the heels by placing a pillow under the calves, ensuring heels hang freely in the air.
      </div>
    </div>
  </div>
);

const RepositioningSchedule = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card title="The 2-Hour Rule" className="bg-teal-50 border-teal-100 print:bg-white print:border-stone-300">
        <p className="text-stone-700 mb-4">
          Skin needs relief from pressure at least every 2 hours while in bed. In a chair, weight should be shifted every 15-30 minutes.
        </p>
        <div className="flex items-center gap-2 text-teal-800 font-bold print:text-stone-800">
          <Clock size={20} />
          <span>Every 2 Hours: Turn & Check</span>
        </div>
      </Card>
      <Card title="The 30-Degree Tilt">
        <p className="text-stone-700 text-sm mb-4">
          Avoid lying directly on the hip bone (90 degrees). Instead, use pillows to support the back at a 30-degree angle.
        </p>
        <div className="bg-stone-100 h-24 rounded-lg flex items-center justify-center relative overflow-hidden print:border print:border-stone-300">
             {/* Simple Visualization of 30 degree tilt */}
             <div className="w-32 h-4 bg-stone-300 rounded rotate-12 absolute bottom-8"></div>
             <div className="w-12 h-12 bg-white rounded-full border-2 border-stone-400 absolute bottom-10 left-1/2 -ml-6 z-10 flex items-center justify-center text-xs">Body</div>
             <div className="w-8 h-8 bg-teal-200 rounded-full absolute bottom-6 left-1/2 ml-4 rotate-12 print:bg-stone-300"></div>
             <span className="text-xs text-teal-700 absolute bottom-2 right-4 print:text-stone-600">Pillow Wedge</span>
        </div>
      </Card>
    </div>

    <Card title="Daily Log Template">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-stone-600">
          <thead className="text-xs text-stone-700 uppercase bg-stone-50 print:bg-stone-100">
            <tr>
              <th className="px-4 py-3">Time</th>
              <th className="px-4 py-3">Position</th>
              <th className="px-4 py-3">Skin Check?</th>
              <th className="px-4 py-3">Initials</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100 print:divide-stone-300">
            {[
              { time: "08:00 AM", pos: "Left Side 30°" },
              { time: "10:00 AM", pos: "Back (Supine)" },
              { time: "12:00 PM", pos: "Chair (Up)" },
              { time: "02:00 PM", pos: "Right Side 30°" },
              { time: "04:00 PM", pos: "Left Side 30°" },
              { time: "06:00 PM", pos: "Back (Supine)" },
            ].map((row, idx) => (
              <tr key={idx} className="bg-white">
                <td className="px-4 py-3 font-medium">{row.time}</td>
                <td className="px-4 py-3">{row.pos}</td>
                <td className="px-4 py-3"><div className="w-4 h-4 border border-stone-300 rounded"></div></td>
                <td className="px-4 py-3"><div className="w-8 h-4 border-b border-stone-300"></div></td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-xs text-stone-400 mt-2 text-center print:block hidden">Print this page to use as a daily bedside log.</p>
      </div>
    </Card>
  </div>
);

const HygieneChecklist = () => {
  const [checked, setChecked] = useState({});

  const toggle = (id) => {
    setChecked(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const items = [
    { id: 1, text: "Use warm water (not hot) for bathing to prevent drying skin." },
    { id: 2, text: "Pat skin dry gently. Do not rub vigorously." },
    { id: 3, text: "Apply barrier cream to sacrum/groin if incontinence is present." },
    { id: 4, text: "Moisturize dry skin daily (legs, arms), but AVOID between toes." },
    { id: 5, text: "Keep bed linens smooth and wrinkle-free." },
    { id: 6, text: "Check catheter tubing (if applicable) is not under the leg." }
  ];

  return (
    <Card title="Daily Hygiene & Protection Protocol">
      <div className="space-y-3">
        {items.map((item) => (
          <div 
            key={item.id} 
            onClick={() => toggle(item.id)}
            className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-colors ${checked[item.id] ? 'bg-teal-50 border-teal-200 print:border-stone-300' : 'hover:bg-stone-50 border border-transparent'} print:border print:border-stone-200`}
          >
            <div className={`mt-0.5 w-5 h-5 rounded border flex items-center justify-center ${checked[item.id] ? 'bg-teal-600 border-teal-600 print:bg-stone-600 print:border-stone-600' : 'border-stone-300 bg-white'}`}>
              {checked[item.id] && <CheckCircle2 size={14} className="text-white" />}
            </div>
            <span className={`text-sm ${checked[item.id] ? 'text-teal-800 print:text-stone-800' : 'text-stone-600'}`}>{item.text}</span>
          </div>
        ))}
      </div>
      <div className="mt-6 bg-amber-50 p-4 rounded-lg border border-amber-100 flex gap-3 print:bg-white print:border-stone-300">
        <AlertCircle className="text-amber-600 shrink-0 print:text-stone-600" size={20} />
        <div className="text-sm text-amber-800 print:text-stone-800">
          <strong>The "Blanch Test":</strong> If you see a red area, press it gently with a finger. If it turns white (blanches) and then red again, blood flow is intact. If it <em>stays red</em>, it is a Stage 1 Pressure Injury. Keep all pressure off this area!
        </div>
      </div>
    </Card>
  );
};

const MedicalSupport = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <Card title="When to Seek Help" className="bg-rose-50 border-rose-100 print:bg-white print:border-stone-300">
      <ul className="space-y-3 text-sm text-rose-800 print:text-stone-800">
        <li className="flex items-start gap-2">
          <ChevronRight size={16} className="mt-0.5" />
          Redness on a bony area that does not go away after 30 minutes of pressure relief.
        </li>
        <li className="flex items-start gap-2">
          <ChevronRight size={16} className="mt-0.5" />
          Blisters, cracks, or open sores on the skin.
        </li>
        <li className="flex items-start gap-2">
          <ChevronRight size={16} className="mt-0.5" />
          Skin feels hot, spongy, or hard to the touch.
        </li>
        <li className="flex items-start gap-2">
          <ChevronRight size={16} className="mt-0.5" />
          Signs of infection (fever, foul odor, drainage).
        </li>
      </ul>
    </Card>
    <Card title="Prevention Supplies to Ask For">
      <ul className="space-y-3 text-sm text-stone-600">
        <li className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-teal-500 rounded-full print:bg-stone-600"></div>
          Barrier creams (Zinc oxide based)
        </li>
        <li className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-teal-500 rounded-full print:bg-stone-600"></div>
          Foam dressings (for fragile skin protection)
        </li>
        <li className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-teal-500 rounded-full print:bg-stone-600"></div>
          Pressure-redistributing mattress
        </li>
        <li className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-teal-500 rounded-full print:bg-stone-600"></div>
          Heel suspension boots or pillows
        </li>
      </ul>
    </Card>
  </div>
);

// --- Main App Component ---

const App = () => {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Check for previous login session
  useEffect(() => {
    setIsClient(true);
    const storedAuth = localStorage.getItem('caregiver_auth');
    if (storedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('caregiver_auth', 'true');
  };

  // Main App Logic
  const [activeTab, setActiveTab] = useState('pressure');
  const [showAllForPrint, setShowAllForPrint] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tabs = [
    { id: 'pressure', label: 'Pressure Map', icon: Activity, component: PressureMap },
    { id: 'schedule', label: 'Turning Schedule', icon: Clock, component: RepositioningSchedule },
    { id: 'hygiene', label: 'Hygiene & Care', icon: Droplet, component: HygieneChecklist },
    { id: 'medical', label: 'Medical Signs', icon: Shield, component: MedicalSupport },
  ];

  // Print Handling
  useEffect(() => {
    if (showAllForPrint) {
      setTimeout(() => {
        window.print();
      }, 100);
    }
  }, [showAllForPrint]);

  // If not logged in, show Login Screen
  if (isClient && !isAuthenticated) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  // Otherwise, show the full app
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800 selection:bg-teal-100">
      
      {/* Navigation Bar - Hidden when printing */}
      <nav className="bg-white border-b border-stone-200 sticky top-0 z-50 print:hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setShowAllForPrint(false)}>
              <div className="bg-teal-600 text-white p-1.5 rounded-lg">
                <Heart size={20} />
              </div>
              <span className="font-serif font-bold text-xl tracking-tight text-stone-800">Caregiver<span className="text-teal-600">Confidence</span></span>
            </div>
            
            {/* Desktop Tabs */}
            {!showAllForPrint && (
              <div className="hidden md:flex space-x-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`inline-flex items-center px-4 border-b-2 text-sm font-medium transition-colors h-full ${
                        activeTab === tab.id
                          ? 'border-teal-600 text-teal-800 bg-teal-50/50'
                          : 'border-transparent text-stone-500 hover:text-stone-700 hover:border-stone-300'
                      }`}
                    >
                      <Icon size={16} className="mr-2" />
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Actions */}
            <div className="flex items-center gap-2">
              {!showAllForPrint ? (
                <button 
                  onClick={() => setShowAllForPrint(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-stone-800 text-white rounded-lg text-sm font-medium hover:bg-stone-700 transition-colors shadow-sm"
                  title="Generate Full PDF"
                >
                  <Printer size={16} />
                  <span className="hidden sm:inline">Print Full Guide</span>
                </button>
              ) : (
                <button 
                  onClick={() => setShowAllForPrint(false)}
                  className="flex items-center gap-2 px-4 py-2 border border-stone-300 bg-white text-stone-700 rounded-lg text-sm font-medium hover:bg-stone-50 transition-colors"
                >
                  <X size={16} />
                  <span>Exit Print View</span>
                </button>
              )}

              {!showAllForPrint && (
                <button 
                  className="md:hidden p-2 text-stone-500"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && !showAllForPrint && (
          <div className="md:hidden border-t border-stone-100 bg-white">
            <div className="pt-2 pb-3 space-y-1 px-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                    activeTab === tab.id
                      ? 'bg-teal-50 text-teal-700'
                      : 'text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 py-8 print:p-0 print:max-w-none">
        
        {/* Intro / Header for Print */}
        <div className="mb-8 text-center print:text-left print:mb-6">
          <div className="print:flex justify-between items-start">
            <div>
              <span className="text-xs font-bold tracking-widest text-teal-600 uppercase mb-2 block print:text-stone-600">Product 5 — Skin Care Series</span>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-4">Protecting Skin & Comfort at Home</h1>
            </div>
            {/* Logo for Print only */}
            <div className="hidden print:block text-right">
               <div className="flex items-center gap-2 justify-end mb-1">
                 <Heart size={18} className="text-stone-400" />
                 <span className="font-serif font-bold text-stone-600">Caregiver Confidence</span>
               </div>
               <p className="text-xs text-stone-400">Digital Care Guide</p>
            </div>
          </div>
          
          <p className="text-lg text-stone-600 max-w-2xl mx-auto print:max-w-none print:text-sm print:text-stone-500">
            Evidence-based practices to prevent pressure injuries and maintain dignity in hygiene care.
          </p>
        </div>

        {/* View Switching Logic */}
        <div className="space-y-8 min-h-[500px] print:block">
          
          {showAllForPrint ? (
            // PRINT VIEW: Render ALL sections stacked
            <div className="space-y-12 print:space-y-8">
               {tabs.map((tab) => {
                 const Component = tab.component;
                 return (
                   <div key={tab.id} className="break-inside-avoid print:break-inside-avoid page-break-after-auto">
                     <SectionHeader 
                       icon={tab.icon} 
                       title={tab.label} 
                       subtitle={tab.id === 'pressure' ? 'High risk zones map' : 
                                 tab.id === 'schedule' ? 'Turning & log sheets' :
                                 tab.id === 'hygiene' ? 'Daily care protocol' : 'Warning signs'} 
                     />
                     <Component />
                     <div className="h-8 print:hidden"></div> {/* Spacer for screen view */}
                     <div className="hidden print:block w-full border-b border-stone-200 my-8"></div>
                   </div>
                 );
               })}
            </div>
          ) : (
            // APP VIEW: Render active tab only
            <div className="animate-in fade-in duration-300">
               {tabs.map((tab) => {
                 if (tab.id !== activeTab) return null;
                 const Component = tab.component;
                 return (
                   <div key={tab.id}>
                      <SectionHeader 
                        icon={tab.icon} 
                        title={tab.label === 'Pressure Map' ? 'Understanding Pressure' : 
                               tab.label === 'Turning Schedule' ? 'Repositioning Schedule' :
                               tab.label === 'Hygiene & Care' ? 'Hygiene & Moisture' : 'Medical Safety'}
                        subtitle={tab.id === 'pressure' ? 'Why skin breakdown happens and where to look.' : 
                                  tab.id === 'schedule' ? 'The key to prevention is movement.' :
                                  tab.id === 'hygiene' ? 'Gentle cleaning and barrier protection.' : 'Knowing when to call for professional help.'}
                      />
                      <Component />
                   </div>
                 );
               })}
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-stone-200 text-center text-stone-500 text-sm print:mt-8 break-inside-avoid">
          <p className="font-semibold text-stone-700">Caregiver Confidence Starter Collection</p>
          <p className="mt-2">Inspired by prevention-focused nursing approaches used in long-life elder-care communities.</p>
          <div className="mt-4 flex justify-center gap-2 items-center print:hidden">
             <Info size={14} />
             <span>Always consult with your primary healthcare provider regarding specific medical conditions.</span>
          </div>
          <p className="hidden print:block mt-4 text-xs text-stone-400">
            © Caregiver Confidence. For personal home use only.
          </p>
        </footer>

      </main>

      {/* Print Styles Injection */}
      <style>{`
        @media print {
          @page { margin: 2cm; }
          body { background: white; color: black; -webkit-print-color-adjust: exact; }
          nav, button { display: none !important; }
          .print\\:block { display: block !important; }
          .print\\:hidden { display: none !important; }
          .print\\:shadow-none { box-shadow: none !important; }
          .print\\:border-stone-300 { border-color: #d6d3d1 !important; }
          .print\\:p-0 { padding: 0 !important; }
          .print\\:max-w-none { max-width: none !important; }
          .print\\:border { border-width: 1px !important; }
          .print\\:bg-white { background-color: white !important; }
          
          /* Typography Tweaks for Paper */
          h1 { font-size: 24pt !important; }
          h2 { font-size: 18pt !important; margin-top: 0 !important; }
          p, li { font-size: 11pt !important; line-height: 1.4 !important; }
          
          /* Color adjustments for saving ink */
          .bg-stone-50 { background-color: transparent !important; }
          .text-teal-700 { color: #333 !important; }
          
          /* Prevent awkward breaks */
          .break-inside-avoid { break-inside: avoid; }
        }
      `}</style>
    </div>
  );
};

export default App;
