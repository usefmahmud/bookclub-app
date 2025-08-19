'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useReward } from 'react-rewards';

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const { reward, isAnimating } = useReward('waiting-btn', 'confetti', {
    elementCount: 100,
    spread: 60,
    lifetime: 200,
  });

  return (
    <div className='flex min-h-screen flex-col items-center justify-center gap-4'>
      <h1 className='font-libre text-3xl'>
        Welcome to <span className='font-semibold'>BookClub</span>
      </h1>
      <Button
        className='px-10'
        disabled={isAnimating}
        id='waiting-btn'
        onClick={reward}
      >
        I'm Waiting
      </Button>

      <button
        className='absolute top-5 right-5 cursor-pointer select-none'
        onClick={() => {
          document.body?.classList.toggle('dark');
          setIsDark(document.body.classList.contains('dark'));
        }}
      >
        {isDark ? 'LIGHT' : 'DARK'}
      </button>
    </div>
  );
}
