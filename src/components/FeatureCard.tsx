import React from 'react';
import svgPaths from '../imports/svg-smqeqw6krr';

interface FeatureCardProps {
  title: string;
  description: string;
  iconType: 'analytics' | 'loyalty' | 'sales' | 'integration' | 'competitive' | 'queue';
}

export default function FeatureCard({ title, description, iconType }: FeatureCardProps) {
  return (
    <div className="relative w-full max-w-[351px] rounded-[15px] bg-white px-4 pb-4 pt-10 shadow-[0px_2px_6px_0px_rgba(0,0,0,0.1)] mx-auto">
      {/* Icon */}
      <div className="absolute left-1/2 top-[-40px] flex size-20 -translate-x-1/2 items-center justify-center rounded-full bg-white p-2.5">
        <div className="size-[55px]">
          {iconType === 'analytics' && (
            <svg className="size-full" fill="none" viewBox="0 0 55 55">
              <path d={svgPaths.p28b1a400} fill="#5DBA47" />
            </svg>
          )}
          {iconType === 'loyalty' && (
            <svg className="size-full" fill="none" viewBox="0 0 55 55">
              <path d={svgPaths.p1bd6ba80} fill="#5DBA47" />
            </svg>
          )}
          {iconType === 'sales' && (
            <svg className="size-full" fill="none" viewBox="0 0 80 80">
              <rect fill="white" height="80" rx="40" width="80" />
              <path
                d={svgPaths.p1baa5500}
                stroke="#5DBA47"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
              />
            </svg>
          )}
          {iconType === 'integration' && (
            <svg className="size-full" fill="none" viewBox="0 0 50 50">
              <path d={svgPaths.p1c246400} fill="#5DBA47" />
              <path d={svgPaths.p2571d900} fill="#5DBA47" opacity="0.5" />
            </svg>
          )}
          {iconType === 'competitive' && (
            <svg className="size-full" fill="none" viewBox="0 0 55 55">
              <path d={svgPaths.p2e7fcc00} fill="#5DBA47" />
              <path
                d="M7.44792 34.9479H39.5312"
                stroke="#5DBA47"
                strokeLinecap="round"
                strokeWidth="1.5"
              />
            </svg>
          )}
          {iconType === 'queue' && (
            <svg className="size-full" fill="none" viewBox="0 0 55 55">
              <path clipRule="evenodd" d={svgPaths.pd7fa480} fill="#5DBA47" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p38f60600} fill="#5DBA47" fillRule="evenodd" />
            </svg>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center gap-1.5 text-center">
        <h3 className="text-[20px] text-[#2c4653]" dir="rtl">
          {title}
        </h3>
        <p className="text-[18px] text-[rgba(44,70,83,0.8)]" dir="rtl">
          {description}
        </p>
      </div>
    </div>
  );
}
