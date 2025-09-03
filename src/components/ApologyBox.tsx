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
        <Sparkles className="absolute top-20 left-20 text-heart-glow animate-pulse-heart opacity-30" size={24} />
        <Sparkles className="absolute top-40 right-32 text-primary animate-float opacity-40" size={16} />
        <Sparkles className="absolute bottom-32 left-32 text-secondary animate-pulse-heart opacity-25" size={20} />
        <Sparkles className="absolute bottom-20 right-20 text-accent animate-float opacity-35" size={18} />
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
                    Click to open my apology
                  </div>
                  <div className="text-white/80 text-sm">
                    💝
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
                  <h1 className="text-3xl font-bold text-foreground">
                    I'm Sorry
                  </h1>
                </div>

                {/* Apology message */}
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  <p>
                    I want you to know that I'm truly sorry for what happened. 
                    Your friendship means the world to me, and I hate that my actions 
                    may have hurt you.
                  </p>
                  
                  <p>
                    I've been thinking about this a lot, and I realize I was wrong. 
                    I should have been more thoughtful and considerate of your feelings.
                  </p>
                  
                  <p className="font-medium text-primary">
                    You deserve better from me, and I promise to do better going forward.
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="flex justify-center space-x-4 pt-4">
                  <Heart className="text-heart-glow animate-pulse-heart" size={20} />
                  <Sparkles className="text-primary animate-float" size={20} />
                  <Heart className="text-heart-glow animate-pulse-heart" size={20} />
                </div>

                {/* Final message */}
                <p className="text-sm text-foreground/60 italic">
                  I hope you can forgive me. Our friendship is precious to me. 💕
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