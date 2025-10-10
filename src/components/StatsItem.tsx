import svgPaths from "../imports/svg-smqeqw6krr";

interface StatsItemProps {
  title: string;
  value: string;
  iconType: "growth" | "customers" | "operations" | "branches" | "stores";
}

export default function StatsItem({ title, value, iconType }: StatsItemProps) {
  return (
    <div className="flex w-full h-[120px] sm:h-[140px] md:h-[160px] lg:h-[180px] xl:h-[200px] lg:w-[180px] xl:w-[200px] flex-col items-center justify-center gap-1 sm:gap-1.5 md:gap-2.5 rounded-[8px] sm:rounded-[10px] md:rounded-[15px] bg-[rgba(44,70,83,0.03)] p-2 sm:p-3">
      {/* Icon */}
      <div className="size-6 sm:size-8 md:size-10 lg:size-12">
        {iconType === "growth" && (
          <svg className="size-full" fill="none" viewBox="0 0 48 48">
            <path d={svgPaths.p5c0f990} stroke="#5DBA47" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          </svg>
        )}
        {iconType === "customers" && (
          <svg className="size-full" fill="none" viewBox="0 0 48 48">
            <g>
              <path d={svgPaths.p5b88a80} fill="#5DBA47" />
              <path clipRule="evenodd" d={svgPaths.p12054200} fill="#5DBA47" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p29f02880} fill="#5DBA47" fillRule="evenodd" />
            </g>
          </svg>
        )}
        {iconType === "operations" && (
          <svg className="size-full" fill="none" viewBox="0 0 48 48">
            <path d={svgPaths.pf813b00} stroke="#5DBA47" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
            <path d={svgPaths.p23f2180} stroke="#5DBA47" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          </svg>
        )}
        {iconType === "branches" && (
          <svg className="size-full" fill="none" viewBox="0 0 48 48">
            <path d={svgPaths.p28229e80} stroke="#5DBA47" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
            <path d={svgPaths.p236da780} stroke="#5DBA47" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
            <path d={svgPaths.p7f06170} stroke="#5DBA47" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          </svg>
        )}
        {iconType === "stores" && (
          <svg className="size-full" fill="none" viewBox="0 0 54 54">
            <path d={svgPaths.p12a26700} stroke="#5DBA47" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          </svg>
        )}
      </div>

      {/* Text */}
      <div className="flex flex-col items-center text-center">
        <p className="text-[11px] sm:text-[13px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-[#2c4653] leading-tight font-medium" dir="rtl">{title}</p>
        <p className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[rgba(44,70,83,0.8)] leading-tight" dir="rtl">{value}</p>
      </div>
    </div>
  );
}