import React, { useEffect, useState } from 'react';
import { Moon, SunDimIcon } from 'lucide-react';

const ThemeSwitcher = () => {
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
        <SunDimIcon
          size={40}
          className={`hover:bg-[#121318] text-[#121318] dark:text-[#eaecef] rounded-full md:block hidden cursor-pointer hover:text-white p-2`}
        />
      ) : (
        <Moon
          size={40}
          className={`hover:bg-gray-100 text-[#121318] dark:text-[#eaecef] rounded-full md:block hidden cursor-pointer hover:text-[#121318] dark:hover:text-white p-2`}
        />
      )}
    </div>
  );
};

export default ThemeSwitcher;
