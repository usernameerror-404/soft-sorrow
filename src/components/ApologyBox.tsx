import { useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';

const ApologyBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
         style={{ background: 'var(--gradient-sweet)' }}>
      
      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles className="absolute top-20 left-20 text-heart-glow animate-sparkle opacity-40" size={24} />
        <Sparkles className="absolute top-40 right-32 text-primary animate-float opacity-50" size={16} />
        <Sparkles className="absolute bottom-32 left-32 text-secondary animate-sparkle opacity-35" size={20} />
        <Sparkles className="absolute bottom-20 right-20 text-accent animate-bounce-gentle opacity-45" size={18} />
        <Sparkles className="absolute top-1/2 left-10 text-heart-glow animate-swing opacity-30" size={14} />
        <Sparkles className="absolute top-1/3 right-10 text-primary animate-float opacity-40" size={22} />
        <div className="absolute top-16 right-16 text-2xl animate-float">✨</div>
        <div className="absolute bottom-24 left-16 text-xl animate-bounce-gentle">💕</div>
        <div className="absolute top-1/3 left-1/4 text-lg animate-sparkle">🌸</div>
        <div className="absolute bottom-1/3 right-1/4 text-xl animate-swing">💫</div>
      </div>

      <div className="relative z-10 text-center max-w-lg mx-auto">
        
        {/* Initial closed box */}
        {!isOpen && (
          <div 
            className="cursor-pointer transition-all duration-300 hover:scale-105"
            onClick={handleClick}
          >
            {/* Main apology box */}
            <div className="relative">
              <div 
                className="w-64 h-64 mx-auto rounded-3xl bg-box-closed border-4 border-white/30 
                          shadow-lg hover:shadow-xl transition-all duration-300 
                          flex items-center justify-center backdrop-blur-sm"
                style={{ boxShadow: 'var(--shadow-soft)' }}
              >
                <div className="text-center space-y-4">
                  <Heart className="mx-auto text-white animate-pulse-heart" size={48} />
                  <div className="text-white font-medium text-lg px-6">
                    Click to open my apology 💌
                  </div>
                  <div className="text-white/80 text-sm animate-bounce-gentle">
                    💝✨💕
                  </div>
                </div>
              </div>
              
              {/* Decorative ribbon */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2
                            w-16 h-8 bg-heart-glow rounded-b-lg border-2 border-white/30
                            flex items-center justify-center">
                <Heart className="text-white" size={16} />
              </div>
            </div>

            {/* Instructions */}
            <p className="mt-8 text-foreground/70 text-sm animate-float">
              I have something important to tell you...
            </p>
          </div>
        )}

        {/* Opened apology message */}
        {isOpen && (
          <div className="animate-box-open">
            <div 
              className="bg-card/90 backdrop-blur-md rounded-3xl p-8 border border-white/20 
                        shadow-2xl max-w-md mx-auto"
              style={{ boxShadow: 'var(--shadow-glow)' }}
            >
              <div className="text-center space-y-6">
                {/* Header with animated heart */}
                <div className="space-y-4">
                  <Heart className="mx-auto text-heart-glow animate-pulse-heart" size={64} />
                  <h1 className="text-3xl font-bold text-foreground animate-bounce-gentle">
                    I'm Sorry 😔💔
                  </h1>
                </div>

                {/* Main apology message */}
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  <p className="text-lg font-medium text-primary">
                    Hey Mannat, I am truly sorry for what happened that night. 😟
                  </p>
                  
                  <p>
                    I should have never sent that voice note at that time. 📱💔
                  </p>
                  
                  <p>
                    You also missed your mom's call because of that. 📞😢
                  </p>
                  
                  <p className="font-semibold text-primary">
                    I am truly sorry for that and I hope you will forgive me, Mannat. 🥰💕
                  </p>
                  
                  <div className="bg-primary/10 rounded-2xl p-4 mt-6">
                    <p className="text-sm text-foreground/70 italic">
                      I know I messed up, and I can't take back what happened. 😞 
                      But I want you to know that I care about you deeply and I'll be more 
                      thoughtful in the future. You mean so much to me! ✨💖
                    </p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="flex justify-center space-x-4 pt-4">
                  <div className="text-xl animate-sparkle">🌸</div>
                  <Sparkles className="text-primary animate-float" size={20} />
                  <div className="text-xl animate-bounce-gentle">💫</div>
                </div>

                {/* Final message */}
                <p className="text-sm text-foreground/60 italic animate-swing">
                  Please forgive me... our friendship means everything to me 🌟💕✨
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApologyBox;