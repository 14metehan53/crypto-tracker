import React, { useEffect, useState } from 'react';
import { Moon, SunDimIcon } from 'lucide-react';

const ThemeMenuSwitcher = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (!storedTheme) {
      localStorage.setItem('theme', 'light');
    }
    const prefersDark = window.matchMedia(
      '(prefers-color-schema: dark)'
    ).matches;

    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleTheme = (): void => {
    const newTheme = isDark ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);

    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    setIsDark(!isDark);
  };

  return (
    <div onClick={toggleTheme}>
      {isDark ? (
        <div className='flex items-center gap-x-1'>
          <SunDimIcon
            size={40}
            className={`hover:bg-[#121318]/10 text-[#121318] dark:text-[#eaecef] rounded-full cursor-pointer hover:text-white`}
          />
          Light theme
        </div>
      ) : (
        <div className='flex items-center gap-x-1'>
          <Moon
            size={40}
            className={`hover:bg-[#121318]/10 text-[#121318] dark:text-[#eaecef] rounded-full cursor-pointer hover:text-[#121318] dark:hover:text-white`}
          />
          Dark theme
        </div>
      )}
    </div>
  );
};

export default ThemeMenuSwitcher;
