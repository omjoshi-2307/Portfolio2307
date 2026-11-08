import type { SVGProps } from 'react';

type DiagramProps = SVGProps<SVGSVGElement>;

const Frame = ({ children, title, description, ...props }: DiagramProps & {
  title: string;
  description: string;
}) => (
  <svg
    viewBox="0 0 760 470"
    role="img"
    aria-label={title}
    className="block h-auto w-full"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>{title}</title>
    <desc>{description}</desc>
    {children}
  </svg>
);

function Backdrop() {
  return (
    <>
      <rect width="760" height="470" rx="14" fill="#090909" />
      <path
        d="M24 78H736M24 102H736M24 126H736M24 150H736M24 174H736M24 198H736M24 222H736M24 246H736M24 270H736M24 294H736M24 318H736M24 342H736M24 366H736M24 390H736M24 414H736M24 438H736"
        stroke="#FFFFFF"
        strokeOpacity=".025"
        strokeWidth=".7"
      />
      <path d="M24 54H736" stroke="#343434" />
      <circle cx="30" cy="28" r="3" fill="#737373" />
      <circle cx="43" cy="28" r="3" fill="#525252" />
      <circle cx="56" cy="28" r="3" fill="#404040" />
    </>
  );
}

function Header({ index, name, tag }: { index: string; name: string; tag: string }) {
  return (
    <g fontFamily="monospace">
      <text x="28" y="32" fill="#F5F5F5" fontSize="10" letterSpacing="2">{index} / {name}</text>
      <text x="732" y="32" textAnchor="end" fill="#737373" fontSize="9" letterSpacing="1.5">{tag}</text>
    </g>
  );
}

export function SureDEscrowDiagram(props: DiagramProps) {
  return (
    <Frame
      title="SureD blockchain escrow lifecycle"
      description="A detailed rental deposit flow from tenant and landlord agreement through wallet funding, Soroban escrow custody, dual confirmation and settlement."
      {...props}
    >
      <Backdrop />
      <Header index="01" name="SURED / ESCROW LIFECYCLE" tag="STELLAR · SOROBAN" />
      <g opacity=".65" stroke="#4B4B4B" strokeWidth="1">
        <path d="M135 154V191H380V218M625 154V191H380" strokeDasharray="4 6" />
        <path d="M380 294V326" />
        <path d="M286 361H190V397H286M474 361H570V397H474" strokeDasharray="4 5" />
      </g>
      <g>
        <rect x="38" y="82" width="194" height="72" rx="9" fill="#151515" stroke="#555" />
        <circle cx="75" cy="118" r="19" fill="#222" stroke="#777" />
        <circle cx="75" cy="111" r="5" stroke="#E5E5E5" strokeWidth="1.4" />
        <path d="M65 128C67 119 83 119 85 128" stroke="#E5E5E5" strokeWidth="1.4" strokeLinecap="round" />
        <text x="108" y="111" fill="#737373" fontSize="9" fontFamily="monospace" letterSpacing="1.5">PARTY 01</text>
        <text x="108" y="132" fill="#F5F5F5" fontSize="15" fontWeight="600">TENANT</text>
        <rect x="528" y="82" width="194" height="72" rx="9" fill="#151515" stroke="#555" />
        <circle cx="565" cy="118" r="19" fill="#222" stroke="#777" />
        <circle cx="565" cy="111" r="5" stroke="#E5E5E5" strokeWidth="1.4" />
        <path d="M555 128C557 119 573 119 575 128" stroke="#E5E5E5" strokeWidth="1.4" strokeLinecap="round" />
        <text x="598" y="111" fill="#737373" fontSize="9" fontFamily="monospace" letterSpacing="1.5">PARTY 02</text>
        <text x="598" y="132" fill="#F5F5F5" fontSize="15" fontWeight="600">LANDLORD</text>
      </g>
      <g>
        <rect x="258" y="218" width="244" height="76" rx="10" fill="#171717" stroke="#777" />
        <rect x="274" y="234" width="42" height="42" rx="8" fill="#292929" stroke="#555" />
        <path d="M285 246H305M285 253H305M285 260H299" stroke="#E5E5E5" strokeWidth="1.5" strokeLinecap="round" />
        <text x="332" y="247" fill="#858585" fontSize="9" fontFamily="monospace" letterSpacing="1.5">01 / AGREEMENT</text>
        <text x="332" y="268" fill="#F5F5F5" fontSize="14" fontWeight="600">CREATE &amp; CONFIRM</text>
        <rect x="258" y="326" width="244" height="70" rx="10" fill="#171717" stroke="#777" />
        <rect x="274" y="340" width="42" height="42" rx="8" fill="#292929" stroke="#555" />
        <path d="M286 350H304V372H286ZM290 346H300" stroke="#E5E5E5" strokeWidth="1.4" strokeLinejoin="round" />
        <text x="332" y="354" fill="#858585" fontSize="9" fontFamily="monospace" letterSpacing="1.5">02 / FUNDING</text>
        <text x="332" y="375" fill="#F5F5F5" fontSize="14" fontWeight="600">WALLET → ESCROW</text>
      </g>
      <g>
        <rect x="38" y="397" width="248" height="52" rx="8" fill="#111" stroke="#454545" />
        <path d="M57 416H77V434H57ZM61 416V410C61 402 73 402 73 410V416" stroke="#D4D4D4" strokeWidth="1.4" strokeLinejoin="round" />
        <text x="91" y="418" fill="#737373" fontSize="8" fontFamily="monospace" letterSpacing="1.2">03 / CUSTODY</text>
        <text x="91" y="436" fill="#F5F5F5" fontSize="12" fontWeight="600">SOROBAN CONTRACT</text>
        <rect x="474" y="397" width="248" height="52" rx="8" fill="#111" stroke="#454545" />
        <path d="M495 409L507 414V424C507 432 501 437 495 440C489 437 483 432 483 424V414L495 409Z" stroke="#D4D4D4" strokeWidth="1.4" />
        <path d="M490 424L494 428L501 420" stroke="#D4D4D4" strokeWidth="1.4" strokeLinecap="round" />
        <text x="521" y="418" fill="#737373" fontSize="8" fontFamily="monospace" letterSpacing="1.2">04 / SETTLEMENT</text>
        <text x="521" y="436" fill="#F5F5F5" fontSize="12" fontWeight="600">DUAL CONFIRMATION</text>
      </g>
      <g>
        <path d="M286 423H380V445H474" stroke="#888" strokeWidth="1.2" strokeDasharray="3 5" />
        <circle cx="380" cy="445" r="4" fill="#F5F5F5" />
        <text x="380" y="464" textAnchor="middle" fill="#A3A3A3" fontSize="8" fontFamily="monospace" letterSpacing="1.2">05 / RELEASE OR REFUND</text>
      </g>
    </Frame>
  );
}

export function DepthWizardDiagram(props: DiagramProps) {
  const stages = [
    { x: 32, title: 'RGB INPUT', sub: 'Single image', kind: 'image' },
    { x: 178, title: 'AI INFERENCE', sub: 'Depth model', kind: 'ai' },
    { x: 324, title: 'DEPTH MAP', sub: 'Relative depth', kind: 'depth' },
    { x: 470, title: 'DSM BUILD', sub: 'Surface model', kind: 'mesh' },
    { x: 616, title: '3D FLYTHROUGH', sub: 'Scene explore', kind: 'scene' },
  ];
  return (
    <Frame
      title="DepthWizard single-image to 3D pipeline"
      description="A five-stage computer vision pipeline transforms one RGB image into estimated depth, a digital surface model and an interactive 3D flythrough."
      {...props}
    >
      <Backdrop />
      <Header index="02" name="DEPTHWIZARD / VISION PIPELINE" tag="SIH26175 · ISRO" />
      <text x="32" y="84" fill="#737373" fontSize="9" fontFamily="monospace" letterSpacing="1.5">SINGLE-VIEW RECONSTRUCTION</text>
      <text x="728" y="84" textAnchor="end" fill="#737373" fontSize="9" fontFamily="monospace">INPUT → SPATIAL OUTPUT</text>
      <path d="M32 100H728" stroke="#333" />
      {stages.map((s, i) => (
        <g key={s.kind}>
          <rect x={s.x} y="143" width="112" height="194" rx="9" fill="#151515" stroke={i === 2 ? '#A3A3A3' : '#414141'} />
          <text x={s.x + 12} y="165" fill="#737373" fontSize="8" fontFamily="monospace">0{i + 1}</text>
          {i < 4 && <path d={`M${s.x + 116} 240H${s.x + 142}`} stroke="#777" strokeWidth="1.3" />}
          {i < 4 && <path d={`M${s.x + 136} 235L${s.x + 142} 240L${s.x + 136} 245`} stroke="#A3A3A3" strokeWidth="1.2" />}
          {s.kind === 'image' && (
            <g>
              <rect x={s.x + 15} y="190" width="82" height="66" rx="5" fill="#202020" stroke="#666" />
              <circle cx={s.x + 77} cy="205" r="7" fill="#A3A3A3" opacity=".8" />
              <path d={`M${s.x + 18} 247L${s.x + 42} 222L${s.x + 57} 237L${s.x + 72} 218L${s.x + 94} 247Z`} fill="#777" />
              <path d={`M${s.x + 15} 263H${s.x + 97}`} stroke="#555" />
            </g>
          )}
          {s.kind === 'ai' && (
            <g stroke="#BDBDBD" strokeWidth="1.1" fill="#242424">
              {Array.from({ length: 3 }, (_, row) => Array.from({ length: 3 }, (_, col) => (
                <circle key={row + '-' + col} cx={s.x + 35 + col * 22} cy={202 + row * 22} r="6" />
              )))}
              <path d={`M${s.x + 35} 202L${s.x + 57} 224L${s.x + 79} 246M${s.x + 79} 202L${s.x + 57} 224L${s.x + 35} 246M${s.x + 35} 246L${s.x + 79} 202`} stroke="#666" />
            </g>
          )}
          {s.kind === 'depth' && (
            <g>
              <rect x={s.x + 16} y="190" width="80" height="66" rx="4" fill="#222" />
              {Array.from({ length: 5 }, (_, j) => <path key={j} d={`M${s.x + 18} ${198 + j * 13}H${s.x + 94}`} stroke="#777" strokeWidth="1" opacity={.25 + j * .13} />)}
              <path d={`M${s.x + 20} 247L${s.x + 39} 229L${s.x + 54} 237L${s.x + 75} 204L${s.x + 92} 247Z`} fill="#BDBDBD" opacity=".8" />
            </g>
          )}
          {s.kind === 'mesh' && (
            <g stroke="#BDBDBD" strokeWidth="1" opacity=".9">
              <path d={`M${s.x + 18} 244L${s.x + 39} 213L${s.x + 58} 229L${s.x + 77} 197L${s.x + 95} 244Z`} />
              <path d={`M${s.x + 18} 244L${s.x + 95} 244M${s.x + 39} 213L${s.x + 77} 197M${s.x + 39} 213L${s.x + 58} 229L${s.x + 77} 197M${s.x + 28} 229L${s.x + 86} 220M${s.x + 48} 244L${s.x + 58} 229L${s.x + 67} 244`} />
            </g>
          )}
          {s.kind === 'scene' && (
            <g stroke="#D4D4D4" strokeWidth="1" fill="#222">
              <path d={`M${s.x + 17} 235L${s.x + 56} 211L${s.x + 96} 235L${s.x + 56} 258Z`} />
              <path d={`M${s.x + 17} 235V252L${s.x + 56} 276V258M${s.x + 96} 235V252L${s.x + 56} 276`} />
              <path d={`M${s.x + 56} 211V228M${s.x + 39} 222L${s.x + 56} 232L${s.x + 74} 221`} stroke="#777" />
            </g>
          )}
          <text x={s.x + 56} y="292" textAnchor="middle" fill="#F5F5F5" fontSize="9" fontFamily="monospace" fontWeight="600">{s.title}</text>
          <text x={s.x + 56} y="310" textAnchor="middle" fill="#858585" fontSize="8" fontFamily="monospace">{s.sub}</text>
          <circle cx={s.x + 56} cy="326" r="2" fill={i === 2 ? '#F5F5F5' : '#666'} />
        </g>
      ))}
      <rect x="32" y="376" width="696" height="56" rx="8" fill="#111" stroke="#393939" />
      <text x="52" y="399" fill="#737373" fontSize="8" fontFamily="monospace" letterSpacing="1.4">OUTPUT MODES</text>
      <text x="52" y="417" fill="#F5F5F5" fontSize="11" fontFamily="sans-serif" fontWeight="600">RELATIVE DSM</text>
      <path d="M206 390V419" stroke="#444" />
      <text x="230" y="399" fill="#737373" fontSize="8" fontFamily="monospace" letterSpacing="1.4">WHEN GEOREFERENCED INPUT IS AVAILABLE</text>
      <text x="230" y="417" fill="#F5F5F5" fontSize="11" fontFamily="sans-serif" fontWeight="600">ABSOLUTE METRIC DSM</text>
      <text x="708" y="417" textAnchor="end" fill="#737373" fontSize="8" fontFamily="monospace">TEAM SOCHX HORIZON</text>
    </Frame>
  );
}

export function WalleRobotDiagram(props: DiagramProps) {
  return (
    <Frame
      title="WALL-E autonomous robot hardware architecture"
      description="An ultrasonic sensor sends distance readings to an Arduino controller, which drives an L298N motor driver and two DC motors to steer around obstacles."
      {...props}
    >
      <Backdrop />
      <Header index="03" name="WALL-E / HARDWARE SYSTEM" tag="ARDUINO · EMBEDDED C++" />
      <text x="32" y="84" fill="#737373" fontSize="9" fontFamily="monospace" letterSpacing="1.5">SENSOR-DRIVEN AUTONOMOUS NAVIGATION</text>
      <g stroke="#777" strokeWidth="1.3" strokeLinejoin="round" strokeLinecap="round">
        <path d="M380 176V204M380 284V315M230 245H267M493 245H530M380 315H154V347M380 315H606V347" />
        <path d="M374 198L380 204L386 198M374 309L380 315L386 309" />
      </g>
      <g>
        <rect x="267" y="100" width="226" height="76" rx="10" fill="#151515" stroke="#777" />
        <rect x="287" y="117" width="48" height="42" rx="6" fill="#242424" stroke="#666" />
        <circle cx="303" cy="138" r="9" stroke="#E5E5E5" strokeWidth="1.5" />
        <circle cx="321" cy="138" r="9" stroke="#E5E5E5" strokeWidth="1.5" />
        <text x="354" y="129" fill="#858585" fontSize="9" fontFamily="monospace">INPUT / SENSOR</text>
        <text x="354" y="150" fill="#F5F5F5" fontSize="14" fontWeight="600">HC-SR04</text>
        <text x="380" y="193" textAnchor="middle" fill="#737373" fontSize="8" fontFamily="monospace">DISTANCE ECHO / TRIG</text>
        <rect x="267" y="204" width="226" height="80" rx="10" fill="#191919" stroke="#B0B0B0" />
        <rect x="287" y="222" width="48" height="44" rx="5" fill="#252525" stroke="#777" />
        <path d="M297 232H325M297 239H325M297 246H325M297 253H325" stroke="#AAA" strokeWidth="1" />
        <text x="354" y="235" fill="#858585" fontSize="9" fontFamily="monospace">CONTROL UNIT</text>
        <text x="354" y="257" fill="#F5F5F5" fontSize="14" fontWeight="600">ARDUINO UNO</text>
        <text x="380" y="303" textAnchor="middle" fill="#737373" fontSize="8" fontFamily="monospace">DIRECTION / PWM SIGNALS</text>
        <rect x="267" y="315" width="226" height="68" rx="10" fill="#151515" stroke="#777" />
        <rect x="287" y="330" width="48" height="38" rx="5" fill="#252525" stroke="#666" />
        <path d="M297 341H325M297 349H325M297 357H325" stroke="#AAA" strokeWidth="1" />
        <text x="354" y="343" fill="#858585" fontSize="9" fontFamily="monospace">MOTOR DRIVER</text>
        <text x="354" y="364" fill="#F5F5F5" fontSize="14" fontWeight="600">L298N DUAL H-BRIDGE</text>
      </g>
      <g>
        <rect x="32" y="347" width="244" height="72" rx="9" fill="#111" stroke="#444" />
        <circle cx="75" cy="383" r="18" stroke="#D4D4D4" strokeWidth="1.5" />
        <circle cx="75" cy="383" r="7" stroke="#777" />
        <path d="M75 365V401M57 383H93" stroke="#555" />
        <text x="108" y="377" fill="#737373" fontSize="9" fontFamily="monospace">OUTPUT A</text>
        <text x="108" y="398" fill="#F5F5F5" fontSize="13" fontWeight="600">LEFT DC MOTOR</text>
        <rect x="484" y="347" width="244" height="72" rx="9" fill="#111" stroke="#444" />
        <circle cx="527" cy="383" r="18" stroke="#D4D4D4" strokeWidth="1.5" />
        <circle cx="527" cy="383" r="7" stroke="#777" />
        <path d="M527 365V401M509 383H545" stroke="#555" />
        <text x="560" y="377" fill="#737373" fontSize="9" fontFamily="monospace">OUTPUT B</text>
        <text x="560" y="398" fill="#F5F5F5" fontSize="13" fontWeight="600">RIGHT DC MOTOR</text>
      </g>
      <rect x="32" y="435" width="696" height="20" rx="4" fill="#141414" />
      <text x="380" y="449" textAnchor="middle" fill="#A3A3A3" fontSize="8" fontFamily="monospace" letterSpacing="1.2">SENSE → DECIDE → DRIVE → AVOID</text>
    </Frame>
  );
}

export function JalSanchaeeDiagram(props: DiagramProps) {
  return (
    <Frame
      title="Jal-Sanchaee water monitoring concept"
      description="A concept architecture showing tank-level sensor telemetry, monitoring and alerts, a dashboard, and community water-use insights from a rapid prototype."
      {...props}
    >
      <Backdrop />
      <Header index="04" name="JAL-SANCHAEE / WATER INTELLIGENCE" tag="AISSMS TECHATHON 3.0" />
      <text x="32" y="84" fill="#737373" fontSize="9" fontFamily="monospace" letterSpacing="1.5">CONCEPTUAL MONITORING ARCHITECTURE</text>
      <g>
        <rect x="34" y="123" width="202" height="270" rx="10" fill="#151515" stroke="#555" />
        <text x="54" y="151" fill="#858585" fontSize="9" fontFamily="monospace" letterSpacing="1.3">01 / WATER SOURCE</text>
        <path d="M93 190H177V330H93Z" stroke="#D4D4D4" strokeWidth="1.5" />
        <path d="M96 260C113 250 132 270 149 260C162 253 170 258 174 260V327H96Z" fill="#8A8A8A" opacity=".35" />
        <path d="M96 260C113 250 132 270 149 260C162 253 170 258 174 260" stroke="#D4D4D4" strokeWidth="1.3" />
        <path d="M135 176V211M128 176H142" stroke="#E5E5E5" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M135 211L130 218M135 211L140 218" stroke="#E5E5E5" strokeWidth="1.3" />
        <text x="135" y="354" textAnchor="middle" fill="#F5F5F5" fontSize="12" fontWeight="600">TANK LEVEL</text>
        <text x="135" y="372" textAnchor="middle" fill="#858585" fontSize="8" fontFamily="monospace">ULTRASONIC SENSOR</text>
        <rect x="282" y="123" width="196" height="270" rx="10" fill="#141414" stroke="#777" />
        <text x="302" y="151" fill="#858585" fontSize="9" fontFamily="monospace" letterSpacing="1.3">02 / PROCESSING</text>
        <circle cx="380" cy="236" r="53" stroke="#555" strokeWidth="1.2" />
        <circle cx="380" cy="236" r="38" stroke="#888" strokeWidth="1.2" strokeDasharray="3 5" />
        <path d="M380 201V236L405 252" stroke="#E5E5E5" strokeWidth="2" strokeLinecap="round" />
        <circle cx="380" cy="236" r="4" fill="#E5E5E5" />
        <text x="380" y="319" textAnchor="middle" fill="#F5F5F5" fontSize="12" fontWeight="600">TELEMETRY LOGIC</text>
        <text x="380" y="338" textAnchor="middle" fill="#858585" fontSize="8" fontFamily="monospace">THRESHOLDS · EVENTS</text>
        <text x="380" y="357" textAnchor="middle" fill="#858585" fontSize="8" fontFamily="monospace">OVERFLOW · LEAK ALERTS</text>
        <rect x="524" y="123" width="202" height="270" rx="10" fill="#151515" stroke="#555" />
        <text x="544" y="151" fill="#858585" fontSize="9" fontFamily="monospace" letterSpacing="1.3">03 / VISIBILITY</text>
        <rect x="548" y="178" width="154" height="104" rx="6" fill="#080808" stroke="#555" />
        <rect x="560" y="190" width="58" height="34" rx="4" fill="#252525" />
        <text x="589" y="204" textAnchor="middle" fill="#858585" fontSize="7" fontFamily="monospace">LEVEL</text>
        <text x="589" y="217" textAnchor="middle" fill="#F5F5F5" fontSize="12" fontWeight="600">72%</text>
        <rect x="626" y="190" width="64" height="34" rx="4" fill="#252525" />
        <text x="658" y="204" textAnchor="middle" fill="#858585" fontSize="7" fontFamily="monospace">STATUS</text>
        <text x="658" y="217" textAnchor="middle" fill="#F5F5F5" fontSize="9">NORMAL</text>
        <path d="M560 258L576 246L590 251L605 235L620 243L636 228L651 234L667 219L690 226" stroke="#D4D4D4" strokeWidth="1.6" />
        <path d="M560 258H690" stroke="#444" />
        <text x="625" y="319" textAnchor="middle" fill="#F5F5F5" fontSize="12" fontWeight="600">COMMUNITY DASHBOARD</text>
        <text x="625" y="338" textAnchor="middle" fill="#858585" fontSize="8" fontFamily="monospace">USAGE · ALERTS · INSIGHTS</text>
        <text x="625" y="357" textAnchor="middle" fill="#858585" fontSize="8" fontFamily="monospace">WATER CREDIT CONCEPT</text>
      </g>
      <g stroke="#A3A3A3" strokeWidth="1.4">
        <path d="M236 257H282M270 251L282 257L270 263" />
        <path d="M478 257H524M512 251L524 257L512 263" />
      </g>
      <rect x="34" y="414" width="692" height="35" rx="7" fill="#111" stroke="#3F3F3F" />
      <text x="380" y="436" textAnchor="middle" fill="#A3A3A3" fontSize="9" fontFamily="monospace" letterSpacing="1.3">SENSE WATER → INTERPRET SIGNALS → INFORM COMMUNITY</text>
    </Frame>
  );
}

export function CivicLoopDiagram(props: DiagramProps) {
  return (
    <Frame
      title="CivicLoop public complaint accountability concept"
      description="An early-stage proposed civic platform flow: citizens submit reports, similar reports are clustered, a ward team reviews them, and public status updates include evidence of resolution."
      {...props}
    >
      <Backdrop />
      <Header index="05" name="CIVICLOOP / ACCOUNTABILITY" tag="ANVESHANA 2026–27" />
      <text x="32" y="84" fill="#737373" fontSize="9" fontFamily="monospace" letterSpacing="1.5">PROPOSED SERVICE FLOW · EARLY-STAGE CONCEPT</text>
      <g>
        <rect x="32" y="137" width="150" height="186" rx="9" fill="#151515" stroke="#555" />
        <circle cx="107" cy="188" r="25" stroke="#BDBDBD" strokeWidth="1.4" />
        <path d="M96 190H118M107 179V201" stroke="#E5E5E5" strokeWidth="1.5" strokeLinecap="round" />
        <text x="107" y="244" textAnchor="middle" fill="#F5F5F5" fontSize="11" fontWeight="600">CITIZEN REPORT</text>
        <text x="107" y="263" textAnchor="middle" fill="#858585" fontSize="8" fontFamily="monospace">PHOTO · LOCATION</text>
        <text x="107" y="278" textAnchor="middle" fill="#858585" fontSize="8" fontFamily="monospace">ISSUE DETAILS</text>
        <rect x="214" y="137" width="150" height="186" rx="9" fill="#151515" stroke="#777" />
        <circle cx="289" cy="188" r="25" stroke="#BDBDBD" strokeWidth="1.4" />
        <circle cx="281" cy="183" r="5" stroke="#E5E5E5" />
        <circle cx="297" cy="183" r="5" stroke="#E5E5E5" />
        <path d="M277 198C281 190 297 190 301 198" stroke="#E5E5E5" strokeWidth="1.3" />
        <text x="289" y="244" textAnchor="middle" fill="#F5F5F5" fontSize="11" fontWeight="600">DUPLICATE CLUSTER</text>
        <text x="289" y="263" textAnchor="middle" fill="#858585" fontSize="8" fontFamily="monospace">SIMILARITY MATCH</text>
        <text x="289" y="278" textAnchor="middle" fill="#858585" fontSize="8" fontFamily="monospace">MERGE RELATED REPORTS</text>
        <rect x="396" y="137" width="150" height="186" rx="9" fill="#151515" stroke="#555" />
        <path d="M471 162L494 174V195C494 213 482 224 471 230C460 224 448 213 448 195V174L471 162Z" stroke="#D4D4D4" strokeWidth="1.5" />
        <path d="M460 194L468 202L483 185" stroke="#D4D4D4" strokeWidth="1.5" strokeLinecap="round" />
        <text x="471" y="244" textAnchor="middle" fill="#F5F5F5" fontSize="11" fontWeight="600">WARD REVIEW</text>
        <text x="471" y="263" textAnchor="middle" fill="#858585" fontSize="8" fontFamily="monospace">ASSIGN · INVESTIGATE</text>
        <text x="471" y="278" textAnchor="middle" fill="#858585" fontSize="8" fontFamily="monospace">STATUS UPDATE</text>
        <rect x="578" y="137" width="150" height="186" rx="9" fill="#151515" stroke="#777" />
        <rect x="620" y="165" width="66" height="48" rx="5" stroke="#D4D4D4" />
        <path d="M631 177H675M631 187H667M631 197H657" stroke="#A3A3A3" strokeWidth="1.3" strokeLinecap="round" />
        <text x="653" y="244" textAnchor="middle" fill="#F5F5F5" fontSize="11" fontWeight="600">PUBLIC TIMELINE</text>
        <text x="653" y="263" textAnchor="middle" fill="#858585" fontSize="8" fontFamily="monospace">EVIDENCE-BASED</text>
        <text x="653" y="278" textAnchor="middle" fill="#858585" fontSize="8" fontFamily="monospace">RESOLUTION RECORD</text>
      </g>
      <g stroke="#A3A3A3" strokeWidth="1.3">
        <path d="M182 229H214M204 223L214 229L204 235" />
        <path d="M364 229H396M386 223L396 229L386 235" />
        <path d="M546 229H578M568 223L578 229L568 235" />
      </g>
      <path d="M653 323V365H107V323" stroke="#555" strokeDasharray="4 5" />
      <rect x="205" y="349" width="350" height="57" rx="8" fill="#101010" stroke="#555" />
      <text x="380" y="371" textAnchor="middle" fill="#858585" fontSize="8" fontFamily="monospace" letterSpacing="1.4">PUBLIC ACCOUNTABILITY LOOP</text>
      <text x="380" y="390" textAnchor="middle" fill="#F5F5F5" fontSize="12" fontWeight="600">REPORT → ACTION → EVIDENCE → TRUST</text>
      <text x="380" y="437" textAnchor="middle" fill="#737373" fontSize="8" fontFamily="monospace">PROPOSED FEATURES · NOT YET IMPLEMENTED</text>
    </Frame>
  );
}
