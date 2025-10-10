import svgPaths from "../imports/svg-k73wl4kmgb";

export default function PageDecorations() {
  return (
    <>
      {/* Left Decoration - Hidden on mobile */}
      <div className="hidden xl:block absolute left- top-1/2 -translate-y-1/2 -translate-x-[26px] pointer-events-none">
        <div className="h-[276px] w-[341px] rotate-180 scale-y-[-100%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 342 278">
            <g opacity="0.1">
              <path d={svgPaths.p3f5f6800} fill="#5DBA47" />
              <path d={svgPaths.p3a1e6f00} fill="#5DBA47" />
              <path d={svgPaths.pcbd8300} fill="#5DBA47" />
              <path d={svgPaths.p11225a00} fill="#5DBA47" />
              <path d={svgPaths.pc435c80} fill="#5DBA47" />
              <path d={svgPaths.p3eac00} fill="#5DBA47" />
              <path d={svgPaths.pf4a1000} fill="#5DBA47" />
              <path d={svgPaths.p3de1e000} stroke="#5DBA47" strokeWidth="2" />
            </g>
          </svg>
        </div>
      </div>

      {/* Right Decoration - Hidden on mobile */}
      <div className="hidden xl:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-[26px] pointer-events-none">
        <div className="h-[276px] w-[341px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 342 278">
            <g opacity="0.1">
              <path d={svgPaths.p3f5f6800} fill="#5DBA47" />
              <path d={svgPaths.p3a1e6f00} fill="#5DBA47" />
              <path d={svgPaths.pcbd8300} fill="#5DBA47" />
              <path d={svgPaths.p11225a00} fill="#5DBA47" />
              <path d={svgPaths.pc435c80} fill="#5DBA47" />
              <path d={svgPaths.p3eac00} fill="#5DBA47" />
              <path d={svgPaths.pf4a1000} fill="#5DBA47" />
              <path d={svgPaths.p3de1e000} stroke="#5DBA47" strokeWidth="2" />
            </g>
          </svg>
        </div>
      </div>
    </>
  );
}
