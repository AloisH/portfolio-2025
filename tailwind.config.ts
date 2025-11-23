export default {
  theme: {
    extend: {
      fontFamily: {
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      spacing: {
        '64': '16rem',
        '80': '20rem',
      },
      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.025em',
        'wide': '0.025em',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      colors: {
        accent: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#3b82f6',
          600: '#2563eb',
        }
      },
      backgroundImage: {
        'gradient-purple-cyan': 'linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)',
        'gradient-orange-gold': 'linear-gradient(135deg, #f97316 0%, #fbbf24 100%)',
        'gradient-pink-orange': 'linear-gradient(135deg, #ec4899 0%, #f97316 100%)',
        'gradient-blue-purple': 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
        'gradient-dark': 'linear-gradient(180deg, #000000 0%, #1a1a1a 100%)',
      }
    }
  }
}
