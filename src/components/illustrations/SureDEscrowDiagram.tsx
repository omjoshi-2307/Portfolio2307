import type { SVGProps } from 'react';

export function SureDEscrowDiagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 720 430"
      role="img"
      aria-labelledby="sured-diagram-title sured-diagram-description"
      className="block h-auto w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title id="sured-diagram-title">SureD rental deposit escrow workflow</title>
      <desc id="sured-diagram-description">
        Tenant and landlord confirm a rental agreement. The tenant funds the
        deposit into a Soroban escrow contract. After the rental condition is
        reviewed and both parties confirm, the deposit is released or refunded.
      </desc>

      <defs>
        <linearGradient id="sured-flow-line" x1="0" y1="0" x2="720" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#737373" stopOpacity=".25" />
          <stop offset=".5" stopColor="#E5E5E5" stopOpacity=".8" />
          <stop offset="1" stopColor="#737373" stopOpacity=".25" />
        </linearGradient>
        <filter id="sured-node-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <text x="28" y="30" fill="#737373" fontSize="10" letterSpacing="2.2" fontFamily="monospace">
        RENTAL DEPOSIT LIFECYCLE
      </text>
      <text x="692" y="30" textAnchor="end" fill="#A3A3A3" fontSize="10" letterSpacing="1.5" fontFamily="monospace">
        SOROBAN ESCROW
      </text>
      <path d="M28 45H692" stroke="#292929" />

      {/* Participants */}
      <g>
        <rect x="28" y="70" width="196" height="66" rx="8" fill="#111111" stroke="#404040" />
        <circle cx="57" cy="103" r="13" stroke="#D4D4D4" strokeWidth="1.3" />
        <path d="M49 108C51 102 63 102 65 108" stroke="#D4D4D4" strokeWidth="1.3" strokeLinecap="round" />
        <text x="80" y="98" fill="#737373" fontSize="9" letterSpacing="1.4" fontFamily="monospace">PARTY 01</text>
        <text x="80" y="116" fill="#F5F5F5" fontSize="13" fontWeight="600" fontFamily="sans-serif">TENANT</text>
      </g>
      <g>
        <rect x="496" y="70" width="196" height="66" rx="8" fill="#111111" stroke="#404040" />
        <circle cx="525" cy="103" r="13" stroke="#D4D4D4" strokeWidth="1.3" />
        <path d="M517 108C519 102 531 102 533 108" stroke="#D4D4D4" strokeWidth="1.3" strokeLinecap="round" />
        <text x="548" y="98" fill="#737373" fontSize="9" letterSpacing="1.4" fontFamily="monospace">PARTY 02</text>
        <text x="548" y="116" fill="#F5F5F5" fontSize="13" fontWeight="600" fontFamily="sans-serif">LANDLORD</text>
      </g>

      {/* Agreement confirmation */}
      <path d="M126 136V166H360V184M594 136V166H360" stroke="#737373" strokeWidth="1.2" strokeDasharray="4 5" />
      <rect x="266" y="184" width="188" height="58" rx="7" fill="#171717" stroke="#737373" />
      <text x="360" y="207" textAnchor="middle" fill="#737373" fontSize="9" letterSpacing="1.5" fontFamily="monospace">01 / CREATE</text>
      <text x="360" y="225" textAnchor="middle" fill="#F5F5F5" fontSize="12" fontWeight="600" fontFamily="sans-serif">RENTAL AGREEMENT</text>

      {/* Deposit funding */}
      <path d="M360 242V271" stroke="url(#sured-flow-line)" strokeWidth="1.5" />
      <path d="M355 265L360 272L365 265" stroke="#A3A3A3" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="266" y="273" width="188" height="54" rx="7" fill="#111111" stroke="#525252" />
      <text x="360" y="294" textAnchor="middle" fill="#737373" fontSize="9" letterSpacing="1.5" fontFamily="monospace">02 / FUND</text>
      <text x="360" y="312" textAnchor="middle" fill="#F5F5F5" fontSize="12" fontWeight="600" fontFamily="sans-serif">DEPOSIT TO ESCROW</text>

      {/* Escrow state */}
      <path d="M266 300H164V355H266M454 300H556V355H454" stroke="#525252" strokeWidth="1.2" strokeDasharray="4 5" />
      <rect x="28" y="337" width="238" height="66" rx="7" fill="#0D0D0D" stroke="#404040" />
      <path d="M49 359H69V379H49V359ZM54 359V353C54 346 64 346 64 353V359" stroke="#D4D4D4" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <text x="83" y="362" fill="#737373" fontSize="9" letterSpacing="1.4" fontFamily="monospace">03 / CUSTODY</text>
      <text x="83" y="381" fill="#F5F5F5" fontSize="12" fontWeight="600" fontFamily="sans-serif">SOROBAN ESCROW</text>
      <text x="83" y="393" fill="#737373" fontSize="8" fontFamily="monospace">FUNDS HELD SECURELY</text>

      <rect x="454" y="337" width="238" height="66" rx="7" fill="#0D0D0D" stroke="#404040" />
      <path d="M477 354L489 359V369C489 377 483 382 477 385C471 382 465 377 465 369V359L477 354Z" stroke="#D4D4D4" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M472 369L476 373L483 365" stroke="#D4D4D4" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <text x="501" y="362" fill="#737373" fontSize="9" letterSpacing="1.4" fontFamily="monospace">04 / CONFIRM</text>
      <text x="501" y="381" fill="#F5F5F5" fontSize="12" fontWeight="600" fontFamily="sans-serif">BOTH PARTIES</text>
      <text x="501" y="393" fill="#737373" fontSize="8" fontFamily="monospace">CONDITION &amp; APPROVAL</text>

      {/* Settlement */}
      <path d="M147 403V416H360M573 403V416H360V403" stroke="#737373" strokeWidth="1.1" />
      <circle cx="360" cy="416" r="3" fill="#E5E5E5" filter="url(#sured-node-glow)" />
      <text x="360" y="429" textAnchor="middle" fill="#A3A3A3" fontSize="8" letterSpacing="1.2" fontFamily="monospace">
        05 / RELEASE OR REFUND
      </text>
    </svg>
  );
}

export default SureDEscrowDiagram;
