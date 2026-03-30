/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Twitter, 
  Send, 
  Copy, 
  Check, 
  ExternalLink, 
  TrendingUp, 
  Shield, 
  Zap,
  Menu,
  X
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const LOGO_URL = "https://pbs.twimg.com/media/HEqNXCYbwAAFhuV?format=png&name=small";
const CA = "D4FkqpdYVy4uJQ5VEtpJoCRT9h8zVL78z8ZLeQykpump";
const X_LINK = "https://x.com/i/communities/2038593604625793348";
const TG_LINK = "https://t.me/MemescopeMon";

const XLogo = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.933zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z" />
  </svg>
);

export default function App() {
  const [copied, setCopied] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-meme-dark selection:bg-meme-green selection:text-meme-dark">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-meme-dark/80 backdrop-blur-md border-b-4 border-meme-green">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={LOGO_URL} alt="Logo" className="w-12 h-12 rounded-full border-2 border-meme-green" />
            <span className="font-display font-bold text-xl hidden sm:block uppercase tracking-tighter">
              $MEMESCOPE
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-display font-bold uppercase">
            <a href="#about" className="hover:text-meme-green transition-colors">About</a>
            <a href="#chart" className="hover:text-meme-green transition-colors">Chart</a>
            <a href="#how-to-buy" className="hover:text-meme-green transition-colors">How to Buy</a>
            <a href="#tokenomics" className="hover:text-meme-green transition-colors">Tokenomics</a>
            <a href={X_LINK} target="_blank" rel="noreferrer" className="hover:text-meme-green transition-colors">
              <XLogo size={20} />
            </a>
            <a href={TG_LINK} target="_blank" rel="noreferrer" className="hover:text-meme-green transition-colors">Telegram</a>
          </div>

          <button 
            className="md:hidden text-meme-green"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>

          <a 
            href={`https://jup.ag/swap/SOL-${CA}`} 
            target="_blank" 
            rel="noreferrer"
            className="hidden md:block brutalist-button py-2 px-6 text-sm"
          >
            Buy Now
          </a>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-meme-dark pt-24 px-4 md:hidden"
          >
            <div className="flex flex-col gap-6 font-display font-bold text-2xl uppercase text-center">
              <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#chart" onClick={() => setIsMenuOpen(false)}>Chart</a>
              <a href="#how-to-buy" onClick={() => setIsMenuOpen(false)}>How to Buy</a>
              <a href="#tokenomics" onClick={() => setIsMenuOpen(false)}>Tokenomics</a>
              <div className="flex justify-center gap-8 pt-4">
                <a href={X_LINK} target="_blank" rel="noreferrer"><XLogo size={32} /></a>
                <a href={TG_LINK} target="_blank" rel="noreferrer"><Send size={32} /></a>
              </div>
              <a 
                href={`https://jup.ag/swap/SOL-${CA}`} 
                target="_blank" 
                rel="noreferrer"
                className="brutalist-button mt-4"
              >
                Buy Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 relative overflow-hidden">
        {/* Animated Background Blobs */}
        <motion.div 
          animate={{ 
            x: [0, 50, -50, 0],
            y: [0, -30, 30, 0],
            scale: [1, 1.2, 0.9, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-meme-green/20 blur-[120px] rounded-full pointer-events-none" 
        />
        <motion.div 
          animate={{ 
            x: [0, -60, 60, 0],
            y: [0, 40, -40, 0],
            scale: [1, 0.8, 1.1, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-meme-green/20 blur-[120px] rounded-full pointer-events-none" 
        />
        
        {/* Marquee Ticker */}
        <div className="absolute top-24 left-0 right-0 overflow-hidden bg-meme-green py-2 border-y-4 border-meme-dark z-20 -rotate-1">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap gap-12 items-center"
          >
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-meme-dark font-display font-black text-xl uppercase italic">
                1 MONDAY CAN CHANGE YOUR LIFE • MEMESCOPE BULLISH • $MEMESCOPE TO THE MOON • 
              </span>
            ))}
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="mb-8"
          >
            <motion.img 
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              src={LOGO_URL} 
              alt="Memescope" 
              className="w-48 h-48 mx-auto rounded-full border-8 border-meme-green shadow-[0_0_50px_rgba(0,255,0,0.3)]" 
            />
          </motion.div>

          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-8xl font-display font-black mb-4 leading-none"
          >
            1 MONDAY CAN <br />
            <span className="text-meme-green italic">CHANGE YOUR LIFE</span>
          </motion.h1>

          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl font-bold mb-12 text-gray-400 uppercase tracking-widest"
          >
            The Ticker is <span className="text-meme-white">$MEMESCOPE</span>
          </motion.p>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <div className="flex items-center gap-2 bg-meme-white/5 border-2 border-meme-green/30 p-2 rounded-xl w-full max-w-md">
              <span className="text-xs md:text-sm font-mono truncate pl-2">{CA}</span>
              <button 
                onClick={copyToClipboard}
                className="ml-auto bg-meme-green text-meme-dark p-2 rounded-lg hover:scale-105 transition-transform"
              >
                {copied ? <Check size={20} /> : <Copy size={20} />}
              </button>
            </div>
            
            <div className="flex gap-4">
              <a href={X_LINK} target="_blank" rel="noreferrer" className="brutalist-button p-4">
                <XLogo size={24} />
              </a>
              <a href={TG_LINK} target="_blank" rel="noreferrer" className="brutalist-button p-4">
                <Send size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bullish Marquee Bottom */}
      <div className="bg-meme-dark border-y-4 border-meme-green py-4 overflow-hidden">
        <motion.div 
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-12 items-center"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-meme-green font-display font-black text-4xl uppercase opacity-50">
              1 MONDAY CAN CHANGE YOUR LIFE • $MEMESCOPE • 1 MONDAY CAN CHANGE YOUR LIFE • $MEMESCOPE •
            </span>
          ))}
        </motion.div>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 bg-meme-white text-meme-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="brutalist-border overflow-hidden rotate-[-2deg]">
                <img 
                  src={LOGO_URL} 
                  alt="Memescope Monday" 
                  className="w-full h-auto grayscale-0 hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-meme-green brutalist-border p-4 rotate-[5deg] hidden md:block">
                <span className="font-display font-black text-2xl uppercase">MEMESCOPE MONDAY!</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-6xl leading-tight">
                THIS MONDAY IS <br />
                <span className="bg-meme-green px-2">MEMESCOPE MONDAY</span>
              </h2>
              <p className="text-xl font-bold leading-relaxed">
                They say Mondays are for the weak. We say Mondays are for the <span className="underline decoration-meme-green decoration-4">LEGENDS</span>. 
                1 Monday can change your life. If you hold $MEMESCOPE, you're not just holding a coin, 
                you're holding the keys to the kingdom.
              </p>
              <p className="text-lg opacity-80">
                Stop waiting for the weekend. The real action happens when the market opens and the memes start flowing. 
                Join the most professional humorous community on Solana.
              </p>
              <div className="pt-4">
                <a href={TG_LINK} target="_blank" rel="noreferrer" className="brutalist-button">
                  Join the Cult
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <section id="chart" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl mb-4">LIVE CHART</h2>
            <p className="text-meme-green font-bold uppercase tracking-widest">Watch the green candles grow</p>
          </div>
          
          <div className="brutalist-border bg-white h-[600px] w-full overflow-hidden relative">
            <iframe 
              src={`https://dexscreener.com/solana/${CA}?embed=1&theme=light&trades=0&info=0`}
              className="w-full h-full border-none"
              title="Dexscreener Chart"
            />
            <div className="absolute top-4 right-4 bg-meme-green text-meme-dark px-3 py-1 font-display font-bold text-xs brutalist-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              LIVE DATA
            </div>
          </div>
        </div>
      </section>

      {/* How to Buy Section */}
      <section id="how-to-buy" className="py-20 bg-meme-dark text-meme-white border-y-4 border-meme-green">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-8xl mb-4 italic">HOW TO BUY</h2>
            <p className="text-meme-green font-bold uppercase tracking-widest">ON PUMP.FUN</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "GET PHANTOM", desc: "Download Phantom wallet from the app store or phantom.app" },
              { step: "02", title: "GET SOME SOL", desc: "Buy SOL on an exchange and send it to your wallet address" },
              { step: "03", title: "GO TO PUMP.FUN", desc: "Search for $MEMESCOPE or paste the CA on pump.fun" },
              { step: "04", title: "APE IN", desc: "Swap your SOL for $MEMESCOPE and wait for Monday!" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-meme-white/5 p-8 brutalist-border border-meme-green/50 relative group hover:bg-meme-green/10 transition-colors"
              >
                <span className="absolute -top-6 -left-4 text-6xl font-display font-black text-meme-green/20 group-hover:text-meme-green/40 transition-colors">
                  {item.step}
                </span>
                <h3 className="text-2xl mb-4 relative z-10">{item.title}</h3>
                <p className="text-gray-400 font-bold relative z-10">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a 
              href={`https://pump.fun/coin/${CA}`} 
              target="_blank" 
              rel="noreferrer"
              className="brutalist-button text-2xl"
            >
              BUY ON PUMP.FUN NOW
            </a>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-20 bg-meme-green text-meme-dark">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl md:text-8xl text-center mb-16">TOKENOMICS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <TrendingUp size={40} />, title: "1B SUPPLY", desc: "Enough for everyone to change their life" },
              { icon: <Shield size={40} />, title: "LP BURNT", desc: "Safe as your grandma's cookie jar" },
              { icon: <Zap size={40} />, title: "0% TAX", desc: "We don't like taxes, we like memes" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="brutalist-card text-center flex flex-col items-center gap-4"
              >
                <div className="bg-meme-green p-4 rounded-full border-4 border-meme-dark">
                  {item.icon}
                </div>
                <h3 className="text-2xl">{item.title}</h3>
                <p className="font-bold opacity-70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t-4 border-meme-green">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-8 mb-8">
            <a href={X_LINK} target="_blank" rel="noreferrer" className="hover:text-meme-green transition-colors">
              <XLogo size={32} />
            </a>
            <a href={TG_LINK} target="_blank" rel="noreferrer" className="hover:text-meme-green transition-colors">
              <Send size={32} />
            </a>
          </div>
          <p className="font-display font-bold uppercase tracking-widest text-gray-500">
            © 2026 $MEMESCOPE - 1 MONDAY CAN CHANGE YOUR LIFE
          </p>
          <p className="text-xs mt-4 opacity-30 max-w-2xl mx-auto">
            Memecoins are highly volatile. This is not financial advice. 
            Only invest what you can afford to lose. $MEMESCOPE is for entertainment purposes only.
          </p>
        </div>
      </footer>
    </div>
  );
}
