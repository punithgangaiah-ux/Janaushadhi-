import React from "react";
import { User } from "firebase/auth";
import { LayoutDashboard, TrendingDown, Wallet, Heart, Info, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export default function DashboardScreen({ user }: { user: User | null }) {
  if (!user) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-8 space-y-6 text-center">
        <div className="w-20 h-20 bg-teal-50 rounded-3xl flex items-center justify-center text-teal-600">
          <LayoutDashboard size={40} />
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-display font-bold text-slate-800">Savings Insights</h2>
          <p className="text-slate-500 text-sm">Please login to see your healthcare savings and personalized impact reports.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 pb-20 space-y-8 mt-2">
      <div className="space-y-1">
        <h2 className="text-2xl font-display font-bold text-slate-800">Your Health Savings</h2>
        <p className="text-slate-500 text-sm">Realizing the impact of generic switches.</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <StatCard 
          title="Total Saved" 
          value="₹1,240" 
          icon={<Wallet className="text-emerald-500" size={16} />} 
          trend="+₹120 this month"
          color="emerald"
        />
        <StatCard 
          title="Price Diff" 
          value="~74%" 
          icon={<TrendingDown className="text-rose-500" size={16} />} 
          trend="Avg. per purchase"
          color="rose"
        />
      </div>

      <div className="bg-slate-900 rounded-3xl p-6 text-white shadow-xl shadow-slate-200 relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-teal-500/20 rounded-full blur-3xl" />
        <div className="relative space-y-4">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-teal-500/20 text-teal-400 rounded-lg">
              <Heart size={16} />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400">Impact Goal</span>
          </div>
          <h3 className="text-xl font-bold leading-tight">By choosing Jan-Aushadhi, you've supported affordable healthcare.</h3>
          <div className="w-full bg-slate-800 rounded-full h-2 mt-4">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "65%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="bg-teal-500 h-full rounded-full"
            />
          </div>
          <p className="text-[10px] text-slate-400 font-medium">65% towards your "Healthcare Hero" badge</p>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="font-bold text-slate-700 px-1">Health Literacy Corner</h4>
        <div className="space-y-3">
          <InfoItem 
            title="Quality Assurance" 
            text="Every batch at Jan-Aushadhi store is NABL laboratory tested for international quality standards." 
          />
          <InfoItem 
            title="What is Generic?" 
            text="Generic medicines contain the same active ingredients as branded ones but cost significantly less." 
          />
        </div>
      </div>
      
      <div className="p-4 bg-teal-50 rounded-2xl border border-teal-100 flex items-center justify-between">
         <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-teal-600 shadow-sm">
                <CheckCircle2 size={24} />
            </div>
            <div>
               <p className="text-xs font-bold text-slate-800 font-display">Verified Quality</p>
               <p className="text-[10px] text-teal-700">ISO 9001:2015 Standards</p>
            </div>
         </div>
         <ArrowUpRight className="text-teal-400" size={20} />
      </div>
    </div>
  );
}

function StatCard({ title, value, icon, trend, color }: { title: string, value: string, icon: React.ReactNode, trend: string, color: string }) {
  return (
    <div className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm space-y-1">
      <div className="flex items-center gap-2 mb-2">
        <div className={`p-1.5 bg-${color}-50 rounded-lg`}>
          {icon}
        </div>
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{title}</span>
      </div>
      <p className="text-2xl font-display font-bold text-slate-800">{value}</p>
      <p className="text-[10px] font-medium text-slate-500">{trend}</p>
    </div>
  );
}

function InfoItem({ title, text }: { title: string, text: string }) {
  return (
    <div className="p-4 bg-white border border-slate-100 rounded-2xl space-y-2 group hover:border-teal-500 transition-colors">
      <h5 className="text-sm font-bold text-slate-800 flex items-center justify-between">
        {title}
        <Info size={14} className="text-slate-300 group-hover:text-teal-500" />
      </h5>
      <p className="text-[11px] text-slate-500 leading-relaxed italic">{text}</p>
    </div>
  );
}
