// Illustration of the maximum entropy principle for the IRL MaxEnt blog post:
// Two solutions p and q contain the same baseline information (the
// constraints), but q contains more additional information, i.e., a larger
// bias, and thus has lower entropy. Drawn as SVG to scale cleanly and to adapt
// to the color scheme.

const GROUND = 315     // y-coordinate of the ground line
const BASELINE = 214   // y-coordinate of the baseline (information of constraints)
const GAP = 3          // half-gap at the baseline cutting through the bars

const bars = [
  { label: 'p', x: 282, top: 163 },
  { label: 'q', x: 487, top: 62 },
]

const BAR_WIDTH = 146

// Vertical double-headed arrow from y1 to y2 (y1 < y2) with end ticks.
function Span({ x, y1, y2 }: { x: number, y1: number, y2: number }) {
  return (
    <g>
      <line x1={x} y1={y1 + 1} x2={x} y2={y2 - 1} markerStart='url(#mep-head)' markerEnd='url(#mep-head)' />
      <line x1={x - 8} y1={y1} x2={x + 8} y2={y1} />
      <line x1={x - 8} y1={y2} x2={x + 8} y2={y2} />
    </g>
  )
}

export default function MaxEntPrinciple() {
  return (
    <figure className='not-prose my-8'>
      <svg
        viewBox='0 0 920 365'
        role='img'
        aria-labelledby='mep-title'
        className='
          w-full h-auto
          stroke-slate-700 dark:stroke-slate-300
          fill-slate-700 dark:fill-slate-300
          text-[22px]
        '
      >
        <title id='mep-title'>
          Illustration of the maximum entropy principle: Two distributions p and q share the
          same baseline information, but q contains a larger bias, i.e., more information
          beyond the baseline, and thus has lower entropy.
        </title>

        <defs>
          <marker id='mep-head' viewBox='0 0 10 10' refX='5' refY='5' markerWidth='7' markerHeight='7' orient='auto-start-reverse'>
            <path d='M 0 0 L 10 5 L 0 10 z' className='stroke-none' />
          </marker>
          <marker id='mep-arrow' viewBox='0 0 10 10' refX='5' refY='5' markerWidth='5' markerHeight='5' orient='auto-start-reverse'>
            <path d='M 0 0 L 10 5 L 0 10 z' className='stroke-none' />
          </marker>
        </defs>

        <g strokeWidth={1.5} fill='none'>
          {/* Ground line */}
          <line x1={26} y1={GROUND} x2={894} y2={GROUND} />

          {/* Information axis */}
          <line x1={81} y1={GROUND} x2={81} y2={42} strokeWidth={3} markerEnd='url(#mep-arrow)' />

          {/* Entropy axis */}
          <line x1={833} y1={42} x2={833} y2={GROUND - 4} strokeWidth={3} markerEnd='url(#mep-arrow)' />

          {/* Baseline and its span */}
          <line x1={252} y1={BASELINE} x2={663} y2={BASELINE} />
          <Span x={231} y1={BASELINE} y2={GROUND} />
        </g>

        {/* Bars, split at the baseline */}
        <g className='fill-sky-700 dark:fill-sky-600 stroke-sky-900 dark:stroke-sky-400' strokeWidth={1}>
          {
            bars.map((bar) => (
              <g key={bar.label}>
                <rect x={bar.x} y={bar.top} width={BAR_WIDTH} height={BASELINE - GAP - bar.top} />
                <rect x={bar.x} y={BASELINE + GAP} width={BAR_WIDTH} height={GROUND - BASELINE - GAP} />
              </g>
            ))
          }
        </g>

        {/* Bias spans of both bars */}
        <g strokeWidth={1.5} fill='none'>
          <Span x={674} y1={bars[0].top} y2={BASELINE} />
          <Span x={700} y1={bars[1].top} y2={BASELINE} />
        </g>

        {/* Labels */}
        <g className='stroke-none'>
          <text x={0} y={0} transform='translate(58 178) rotate(-90)' textAnchor='middle' fontSize={32}>Information</text>
          <text x={0} y={0} transform='translate(868 178) rotate(-90)' textAnchor='middle' fontSize={32}>Entropy</text>
          <text x={212} y={250} textAnchor='end'>baseline</text>
          <text x={212} y={280} textAnchor='end'>(solutions)</text>
          <text x={718} y={146}>bias</text>
          {
            bars.map((bar) => (
              <text key={bar.label} x={bar.x + BAR_WIDTH / 2} y={346} textAnchor='middle' fontSize={28} className='font-serif italic'>
                {bar.label}
              </text>
            ))
          }
        </g>
      </svg>
    </figure>
  )
}
