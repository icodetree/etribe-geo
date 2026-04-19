import { motion } from 'motion/react';
import { Eyebrow } from '../components/ui/Eyebrow';
import { ScrollDivider } from '../components/ui/ScrollDivider';

type Tool = {
  title: string;
  eng: string;
  lead: string;
  body: string;
  span: string;
  accent?: boolean;
};

const TOOLS: Tool[] = [
  {
    title: 'MARS',
    eng: 'Multi Agent Recipe System',
    lead: 'GEO 운영을 자동화한 멀티에이전트 파이프라인',
    body: '크롤링 → AI 가시성 분석 → SOV 분석 → 기술진단 → 레포트. 사람이 하던 14일을 48시간으로 압축합니다.',
    span: 'md:col-span-6 lg:col-span-4 lg:row-span-2',
    accent: true,
  },
  {
    title: 'GEO 대시보드',
    eng: 'Monitoring Console',
    lead: 'AI 가시성 점수 · 플랫폼별 인용률 · 경쟁사 SOV',
    body: '부서별 현황까지 한 화면. 숫자로 보고, 숫자로 움직입니다.',
    span: 'md:col-span-6 lg:col-span-2',
  },
  {
    title: '엔티티 회침기',
    eng: 'Entity Probe',
    lead: 'LLM에게 직접 묻는 지식공백 진단기',
    body: 'AI가 우리 브랜드에 대해 무엇을 알고, 무엇을 모르는지. 공백을 드러내야 채울 수 있습니다.',
    span: 'md:col-span-6 lg:col-span-3',
  },
  {
    title: '인텐트 나침반',
    eng: 'Intent Compass',
    lead: '인텐트별 인용률 히트맵',
    body: '어느 인텐트가 강하고 어디가 공백인지 한눈에. 우선순위는 지도가 결정합니다.',
    span: 'md:col-span-6 lg:col-span-3',
  },
  {
    title: 'GEO 콘텐츠 생성기',
    eng: 'Content Forge',
    lead: '인텐트 선택 → 포맷 자동 분기 → GEO 최적화 콘텐츠 생성',
    body: '정보탐색=설명서 · 추천=FAQ · 비교=비교표 · 가격=데이터테이블. 인텐트가 포맷을 정합니다.',
    span: 'md:col-span-6 lg:col-span-6',
  },
];

export function Tools() {
  return (
    <section id="tools" className="relative py-28 sm:py-32 lg:py-40 bg-ink-950">
      <ScrollDivider />
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
        {/* Header Area exactly mimicking the image layout */}
        <div className="flex flex-col items-center justify-center text-center mb-16 lg:mb-24">
          <div className="mb-6">
            <Eyebrow>Built In-House</Eyebrow>
          </div>

          <h2
            className="reveal text-[2rem] leading-[1.15] font-semibold tracking-tight text-white mb-5 sm:text-[2.75rem] lg:text-[3.5rem]"
            style={{ ['--i' as string]: 0 }}
          >
            제안하기 전에, 직접 만들어 <span className="font-extrabold text-brand-red">운영</span>했습니다
          </h2>

          <p
            className="reveal max-w-[640px] text-[16px] leading-relaxed text-ink-300 break-keep sm:text-[18px]"
            style={{ ['--i' as string]: 1 }}
          >
            eTribe AX Force는 GEO를 클라이언트에 제안하기 전, 자체 시스템을 먼저
            구축하고 실측 데이터를 축적했습니다. 이 다섯 가지 도구가 그 증거입니다.
          </p>
        </div>

        {/* Bento Grid layout: 3 cols, 2 rows exactly matching image */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          
          {/* Card 1: MARS (col-span-2) - Text at TOP, Graphic at BOTTOM */}
          <article
            className="reveal relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-white/10 bg-[#0e0e0e] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] md:col-span-2"
            style={{ ['--i' as string]: 2 }}
          >
            <div className="relative z-10 p-8 pb-0 lg:p-10 lg:pb-0 text-left max-w-[600px]">
              <h3 className="text-[20px] lg:text-[22px] font-bold text-white mb-3">
                MARS (Multi Agent Recipe System)
              </h3>
              <p className="text-[14px] lg:text-[15px] leading-relaxed text-ink-400 font-medium">
                GEO 운영을 자동화한 멀티에이전트 파이프라인. 크롤링부터 분석, 기술진단, 레포트까지 사람이 하던 14일을 48시간으로 압축합니다.
              </p>
            </div>

            <div className="relative h-[280px] lg:h-[340px] w-full mt-4 flex items-center justify-center">
              <div className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none" />
              
              {/* Graphic: Branching Orthogonal Node Graph */}
              <div className="relative w-full h-full max-w-[700px] mx-auto text-white/10">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 700 340" fill="none" preserveAspectRatio="none">
                  {/* Background Lines (Orthogonal) */}
                  <g stroke="currentColor" strokeWidth="1">
                    <path d="M120,170 L200,170 L200,100 L280,100" />
                    <path d="M120,170 L200,170 L200,240 L280,240" />
                    <path d="M280,100 L360,100 L360,170 L440,170" />
                    <path d="M280,240 L360,240 L360,170 L440,170" />
                    <path d="M440,170 L580,170" />
                  </g>
                  
                  {/* Animated White Beams */}
                  <g stroke="url(#beam-white-mars)" strokeWidth="1" strokeLinecap="round">
                    <path d="M120,170 L200,170 L200,100 L280,100" />
                    <path d="M120,170 L200,170 L200,240 L280,240" />
                    <path d="M280,100 L360,100 L360,170 L440,170" />
                    <path d="M280,240 L360,240 L360,170 L440,170" />
                    <path d="M440,170 L580,170" />
                  </g>
                  
                  <defs>
                    <linearGradient id="beam-white-mars" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="white" stopOpacity="0">
                        <animate attributeName="offset" values="-0.8; 1.2" dur="3s" repeatCount="indefinite" />
                      </stop>
                      <stop offset="0.1" stopColor="white" stopOpacity="0.8">
                        <animate attributeName="offset" values="-0.7; 1.3" dur="3s" repeatCount="indefinite" />
                      </stop>
                      <stop offset="0.2" stopColor="white" stopOpacity="0">
                        <animate attributeName="offset" values="-0.6; 1.4" dur="4s" repeatCount="indefinite" />
                      </stop>
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Nodes (Glass Boxes) */}
                <div className="absolute left-[8%] top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full border border-white/10 bg-[#141414] px-4 py-2 shadow-xl">
                  <span className="text-[10px] font-black tracking-widest text-white uppercase opacity-90">eTribe x MARS</span>
                </div>

                <div className="absolute left-[36%] top-[29%] -translate-y-1/2 flex h-[48px] w-[48px] items-center justify-center rounded-[10px] border border-white/[0.08] bg-[#141414] shadow-lg">
                  <div className="w-4 h-4 rounded-[3px] bg-white/20"></div>
                </div>
                <div className="absolute left-[36%] top-[70%] -translate-y-1/2 flex h-[48px] w-[48px] items-center justify-center rounded-[10px] border border-white/[0.08] bg-[#141414] shadow-lg">
                  <div className="w-4 h-4 rounded-[3px] bg-white/20"></div>
                </div>
                <div className="absolute left-[63%] top-1/2 -translate-y-1/2 flex h-[60px] w-[60px] items-center justify-center rounded-[10px] border border-brand-red/40 bg-gradient-to-b from-[#2a080a] to-[#120405] shadow-[0_0_30px_rgba(252,0,17,0.2)]">
                  <svg className="w-7 h-7 text-brand-red" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2z"/></svg>
                </div>
                <div className="absolute left-[82%] top-1/2 -translate-y-1/2 flex h-[48px] w-[48px] items-center justify-center rounded-[10px] border border-white/[0.08] bg-[#141414] shadow-lg">
                  <div className="w-4 h-4 rounded-[3px] bg-brand-red/80"></div>
                </div>
              </div>
            </div>
          </article>

          {/* Card 2: GEO Dashboard (col-span-1) - Graphic at TOP, Text at BOTTOM */}
          <article
            className="reveal relative flex flex-col overflow-hidden rounded-[24px] border border-white/10 bg-[#0e0e0e] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
            style={{ ['--i' as string]: 3 }}
          >
            {/* ── Updated Graph Visualization ── */}
            <div className="relative flex-1 w-full min-h-[300px] flex items-center justify-center overflow-hidden">
              <div className="p-8 overflow-hidden h-full w-full">
                <div className="flex flex-col gap-4 items-center justify-center h-full relative">
                  
                  {/* Message/Tooltip - Premium Glassmorphism */}
                  <div 
                    className="absolute inset-x-0 mx-auto top-6 w-fit rounded-full px-4 py-1.5 z-30"
                    style={{
                      background: 'rgba(20,20,20,0.6)',
                      boxShadow: '0px 0px 8px 0px rgba(248,248,248,0.15) inset, 0px 16px 24px -12px rgba(0,0,0,0.6)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      backdropFilter: 'blur(12px)'
                    }}
                  >
                    <p className="text-[10px] sm:text-xs text-white/90 font-medium tracking-tight">+115% 가시성 향상</p>
                  </div>

                  {/* Main Graph SVG - 3 Peaks Shape, White Base, Red Beam */}
                  <div className="relative w-[335px] h-[163px] z-10">
                    <svg width="335" height="163" viewBox="0 0 335 163" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-neutral-600 absolute inset-0">
                      <g opacity="0.6" filter="url(#graph-glow-white)">
                        <path 
                          d="M0 65H10C30 65 40 85 62 85C85 85 95 52 115 52C140 52 145 80 167.5 80C190 80 195 34 218 34C240 34 245 69 270 69C300 69 315 5 335 5" 
                          stroke="currentColor" 
                          strokeWidth="1.2"
                        />
                      </g>
                      {/* Red Animated Beam */}
                      <path 
                        d="M0 65H10C30 65 40 85 62 85C85 85 95 52 115 52C140 52 145 80 167.5 80C190 80 195 34 218 34C240 34 245 69 270 69C300 69 315 5 335 5" 
                        stroke="url(#beam-red-v3)" 
                        strokeWidth="1" 
                        strokeLinecap="round"
                      />
                      <defs>
                        <filter id="graph-glow-white" x="-10" y="-10" width="360" height="190" filterUnits="userSpaceOnUse">
                          <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
                          <feComposite in2="SourceGraphic" operator="out" />
                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0" />
                          <feBlend mode="plus-lighter" in2="SourceGraphic" />
                        </filter>
                        <linearGradient id="beam-red-v3" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stopColor="#fc0011" stopOpacity="0">
                            <animate attributeName="offset" values="-0.5; 1.2" dur="4s" repeatCount="indefinite" />
                          </stop>
                          <stop offset="0.05" stopColor="#ff5555" stopOpacity="0.9">
                            <animate attributeName="offset" values="-0.45; 1.25" dur="4s" repeatCount="indefinite" />
                          </stop>
                          <stop offset="0.1" stopColor="#fc0011" stopOpacity="0">
                            <animate attributeName="offset" values="-0.4; 1.3" dur="4s" repeatCount="indefinite" />
                          </stop>
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Area Fill - Exactly aligned without shift, White Theme */}
                    <svg width="335" height="163" viewBox="0 0 335 163" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 pointer-events-none opacity-20">
                      <path 
                        d="M0 65H10C30 65 40 85 62 85C85 85 95 52 115 52C140 52 145 80 167.5 80C190 80 195 34 218 34C240 34 245 69 270 69C300 69 315 5 335 5V163H0V65Z" 
                        fill="url(#paint_fill_white)"
                      />
                      <defs>
                        <linearGradient id="paint_fill_white" x1="167.5" y1="34" x2="167.5" y2="163" gradientUnits="userSpaceOnUse">
                          <stop stopColor="white" stopOpacity="0.5" />
                          <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* Vertical Dots & Glass Indicator */}
                  <svg width="36" height="320" viewBox="0 0 36 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-x-0 top-0 h-full w-full pointer-events-none z-20">
                    <path opacity="0.1" d="M18.75 4.5C18.75 4.08579 18.4142 3.75 18 3.75C17.5858 3.75 17.25 4.08579 17.25 4.5L18.75 4.5M17.25 4.5L17.25 8.56522L18.75 8.56522L18.75 4.5L17.25 4.5ZM17.25 16.6957L17.25 24.8261L18.75 24.8261L18.75 16.6957L17.25 16.6957ZM17.25 32.9565L17.25 41.087L18.75 41.087L18.75 32.9565L17.25 32.9565ZM17.25 49.2174L17.25 57.3478L18.75 57.3478L18.75 49.2174L17.25 49.2174ZM17.25 65.4783L17.25 73.6087L18.75 73.6087L18.75 65.4783L17.25 65.4783ZM17.25 81.7391L17.25 89.8696L18.75 89.8696L18.75 81.7391L17.25 81.7391ZM17.25 98L17.25 106.13L18.75 106.13L18.75 98L17.25 98ZM17.25 114.261L17.25 122.391L18.75 122.391L18.75 114.261L17.25 114.261ZM17.25 130.522L17.25 138.652L18.75 138.652L18.75 130.522L17.25 130.522ZM17.25 146.783L17.25 154.913L18.75 154.913L18.75 146.783L17.25 146.783ZM17.25 163.043L17.25 171.174L18.75 171.174L18.75 163.043L17.25 163.043ZM17.25 179.304L17.25 187.435L18.75 187.435L18.75 179.304L17.25 179.304ZM17.25 195.565L17.25 203.696L18.75 203.696L18.75 195.565L17.25 195.565ZM17.25 211.826L17.25 219.956L18.75 219.956L18.75 211.826L17.25 211.826ZM17.25 228.087L17.25 236.217L18.75 236.217L18.75 228.087L17.25 228.087ZM17.25 244.348L17.25 252.478L18.75 252.478L18.75 244.348L17.25 244.348ZM17.25 260.609L17.25 268.739L18.75 268.739L18.75 260.609L17.25 260.609ZM17.25 276.87L17.25 285L18.75 285L18.75 276.87L17.25 276.87ZM17.25 293.13L17.25 301.261L18.75 301.261L18.75 293.13L17.25 293.13ZM17.25 309.391L17.25 317.522L18.75 317.522L18.75 309.391L17.25 309.391ZM17.25 325.652L17.25 333.783L18.75 333.783L18.75 325.652L17.25 325.652ZM17.25 341.913L17.25 350.043L18.75 350.043L18.75 341.913L17.25 341.913ZM17.25 358.174L17.25 366.304L18.75 366.304L18.75 358.174L17.25 358.174ZM17.25 374.435L17.25 378.5L18.75 378.5L18.75 374.435L17.25 374.435Z" fill="#F8F8F8" />
                    <g filter="url(#indicator-glow-white)">
                      <circle cx="18" cy="158" r="10" fill="#121212" fillOpacity="0.4" />
                      <circle cx="18" cy="158" r="9.5" stroke="white" strokeOpacity="0.1" />
                    </g>
                    <circle cx="18" cy="158" r="4.5" fill="white" />
                    <defs>
                      <filter id="indicator-glow-white" x="-10" y="126" width="56" height="56" filterUnits="userSpaceOnUse">
                        <feGaussianBlur stdDeviation="5" />
                        <feComposite in2="SourceGraphic" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0" />
                        <feBlend mode="plus-lighter" in2="SourceGraphic" />
                      </filter>
                    </defs>
                  </svg>

                  {/* Cursor - Red maintained */}
                  <div className="absolute inset-x-0 bottom-[35%] mx-auto translate-x-5 -translate-y-4 m-auto h-5 w-5 z-40">
                    <svg viewBox="0 0 19 19" fill="none" className="w-full h-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                      <path d="M3.08365 1.18326C2.89589 1.11581 2.70538 1.04739 2.54453 1.00558C2.39192 0.965918 2.09732 0.900171 1.78145 1.00956C1.41932 1.13497 1.13472 1.41956 1.00932 1.78169C0.899927 2.09756 0.965674 2.39216 1.00533 2.54477C1.04714 2.70562 1.11557 2.89613 1.18301 3.0839L5.9571 16.3833C6.04091 16.6168 6.12128 16.8408 6.2006 17.0133C6.26761 17.1591 6.42 17.4781 6.75133 17.6584C7.11364 17.8555 7.54987 17.8612 7.91722 17.6737C8.25317 17.5021 8.41388 17.1873 8.48469 17.0433C8.56852 16.8729 8.65474 16.6511 8.74464 16.4198L10.8936 10.8939L16.4196 8.74489C16.6509 8.655 16.8726 8.56879 17.043 8.48498C17.187 8.41416 17.5018 8.25346 17.6734 7.91751C17.8609 7.55016 17.8552 7.11392 17.6581 6.75162C17.4778 6.42029 17.1589 6.2679 17.0131 6.20089C16.8405 6.12157 16.6165 6.0412 16.383 5.9574L3.08365 1.18326Z" fill="#fc0011" stroke="#ff5555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 p-8 pt-0 lg:p-10 lg:pt-0 text-left mt-auto">
              <h3 className="text-[19px] lg:text-[21px] font-bold text-white mb-2">GEO 대시보드</h3>
              <p className="text-[13px] lg:text-[14px] leading-relaxed text-ink-400 font-medium">
                AI 가시성 점수, 인용률, 경쟁사 SOV. 부서별 현황을 하나의 화면으로 조망합니다.
              </p>
            </div>
          </article>

          {/* Row 2: Card 3, 4, 5 (all spanning 1 col, graphic TOP, text BOTTOM) */}
          
          {/* Card 3: Entity Probe */}
          <article
            className="reveal relative flex flex-col overflow-hidden rounded-[24px] border border-white/10 bg-[#0e0e0e] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
            style={{ ['--i' as string]: 4 }}
          >
            <div className="relative flex-1 w-full min-h-[220px] flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(252,0,17,0.05),transparent_70%)] pointer-events-none" />
              
            <div className="relative flex items-center justify-center w-full h-[250px] mt-4">
              {/* Static Orbit Lines */}
              <div className="absolute w-[180px] h-[180px] rounded-full border border-white/[0.04]" />
              <div className="absolute w-[120px] h-[120px] rounded-full border border-white/[0.08]" />
              
              {/* Center Core */}
              <div className="absolute w-[60px] h-[60px] rounded-full border border-brand-red/30 bg-brand-red/5 flex items-center justify-center text-brand-red shadow-[0_0_20px_rgba(252,0,17,0.1)] z-10">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a10 10 0 1 0 10 10H12V2z"/></svg>
              </div>

              {/* Outer Orbit (180px) - Gray Node */}
              <motion.div 
                className="absolute w-[180px] h-[180px] pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <div 
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/40 shadow-[0_0_10px_rgba(255,255,255,0.2)]" 
                  style={{ top: '0%' }}
                />
              </motion.div>

              {/* Inner Orbit (120px) - Smallest Red Node */}
              <motion.div 
                className="absolute w-[120px] h-[120px] pointer-events-none"
                animate={{ rotate: -360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <div 
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[6px] h-[6px] rounded-full bg-brand-red shadow-[0_0_12px_rgba(252,0,17,0.8)]" 
                  style={{ top: '0%' }}
                />
              </motion.div>

              {/* Extra static subtle nodes */}
              <div className="absolute bottom-[20%] right-[10%] w-1 h-1 rounded-full bg-white/10" />
            </div>
            </div>

            <div className="relative z-10 p-8 pt-0 lg:p-10 lg:pt-0 text-left mt-auto">
              <h3 className="text-[19px] lg:text-[21px] font-bold text-white mb-2">엔티티 회침기</h3>
              <p className="text-[13px] lg:text-[14px] leading-relaxed text-ink-400 font-medium">
                LLM에게 직접 묻는 지식공백 진단기. AI가 브랜드에 대해 무엇을 아는지 확인합니다.
              </p>
            </div>
          </article>

          {/* Card 4: Intent Compass */}
          <article
            className="group reveal relative flex flex-col overflow-hidden rounded-[24px] border border-white/10 bg-[#0e0e0e] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
            style={{ ['--i' as string]: 5 }}
          >
            <div className="relative flex-1 w-full min-h-[220px] flex flex-col items-center justify-center">
              <div className="absolute top-0 inset-x-0 h-full bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.02),transparent_60%)] pointer-events-none" />
              
              <div className="relative flex flex-col items-center gap-3 w-full px-10">
                <div className="absolute top-0 bottom-0 w-px bg-white/5" />
                <div className="relative rounded-[8px] border border-white/10 bg-[#161616] px-5 py-2 text-[12px] font-medium text-white/40 w-[140px] text-center z-10 transition-colors">추천 쿼리 진단</div>
                
                <motion.div 
                  className="relative rounded-[8px] border border-white/10 bg-[#161616] px-5 py-2 text-[12px] font-medium text-white/40 w-[160px] text-center z-10"
                  animate={{
                    color: ["#ffffff66", "#fc0011", "#fc0011", "#ffffff66", "#ffffff66"],
                    borderColor: ["rgba(255,255,255,0.1)", "rgba(252,0,17,0.4)", "rgba(252,0,17,0.4)", "rgba(255,255,255,0.1)", "rgba(255,255,255,0.1)"],
                    backgroundColor: ["#161616", "#250a0a", "#250a0a", "#161616", "#161616"],
                    boxShadow: [
                      "0 0 0px rgba(252,0,17,0)",
                      "0 0 20px rgba(252,0,17,0.15)",
                      "0 0 20px rgba(252,0,17,0.15)",
                      "0 0 0px rgba(252,0,17,0)",
                      "0 0 0px rgba(252,0,17,0)"
                    ]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    times: [0, 0.05, 0.25, 0.3, 1],
                    ease: "easeInOut"
                  }}
                >
                  인텐트 패스 분석
                  <motion.svg 
                    className="absolute -bottom-2 -left-2 w-4 h-4" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                    animate={{
                      x: [-48, 0, 0, -48, -48],
                      opacity: [0, 1, 1, 0, 0],
                      color: ["#ffffff1a", "#fc0011", "#fc0011", "#ffffff1a", "#ffffff1a"]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      times: [0, 0.05, 0.25, 0.3, 1],
                      ease: "easeOut"
                    }}
                  >
                    <path d="M22 2L2 9.5l9 3 3 9L22 2z" />
                  </motion.svg>
                </motion.div>

                <div className="relative rounded-[8px] border border-white/10 bg-[#161616] px-5 py-2 text-[12px] font-medium text-white/40 w-[140px] text-center z-10 transition-colors">매핑 최적화</div>
              </div>
            </div>

            <div className="relative z-10 p-8 pt-0 lg:p-10 lg:pt-0 text-left mt-auto">
              <h3 className="text-[19px] lg:text-[21px] font-bold text-white mb-2">인텐트 나침반</h3>
              <p className="text-[13px] lg:text-[14px] leading-relaxed text-ink-400 font-medium">
                인텐트별 인용률 히트맵. 어느 인텐트가 강하고 공백인지 우선순위 지도를 설계합니다.
              </p>
            </div>
          </article>

          {/* Card 5: Content Forge */}
          <article
            className="reveal relative flex flex-col overflow-hidden rounded-[24px] border border-white/10 bg-[#0e0e0e] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
            style={{ ['--i' as string]: 6 }}
          >
            <div className="relative flex-1 w-full min-h-[220px] flex items-center justify-center pt-6">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03),transparent_60%)] pointer-events-none" />
              
              {/* Graphic: Document / Profile Card */}
              <div className="relative flex flex-col items-center">
                <div className="flex h-[64px] w-[64px] items-center justify-center rounded-[16px] border border-white/[0.08] bg-[#1a1a1a] shadow-xl mb-4">
                  <svg className="w-7 h-7 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="text-[14px] font-semibold text-white/90">포맷 엔진 활성화</div>
                <div className="text-[11px] text-brand-red/90 mt-1 mb-4 font-medium">AI 최적화 문서 • Ready</div>
              </div>
            </div>

            <div className="relative z-10 p-8 pt-0 lg:p-10 lg:pt-0 text-left mt-auto">
              <h3 className="text-[19px] lg:text-[21px] font-bold text-white mb-2">GEO 콘텐츠 생성기</h3>
              <p className="text-[13px] lg:text-[14px] leading-relaxed text-ink-400 font-medium">
                인텐트에 맞는 포맷으로 콘텐츠 타겟 분기 생성. JSON-LD와 스키마를 완벽히 준수합니다.
              </p>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}
