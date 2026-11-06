export function TechIcon({ name, className = 'w-4 h-4' }: { name: string; className?: string }) {
  const norm = name.toLowerCase().replace(/[^a-z0-9]/g, '');

  switch (norm) {
    // 01 — Programming Languages
    case 'c':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 17.5c-4.14 0-7.5-3.36-7.5-7.5s3.36-7.5 7.5-7.5c2.47 0 4.67 1.2 6.03 3.05l-2.45 1.7C14.78 7.97 13.48 7.3 12 7.3c-2.59 0-4.7 2.11-4.7 4.7s2.11 4.7 4.7 4.7c1.48 0 2.78-.67 3.63-1.95l2.45 1.7C16.67 18.3 14.47 19.5 12 19.5z" />
        </svg>
      );

    case 'cpp':
    case 'cplusplus':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M11.5 2C6.26 2 2 6.26 2 11.5S6.26 21 11.5 21c3.15 0 5.95-1.53 7.69-3.88l-2.42-1.78C15.65 16.91 13.69 18 11.5 18c-3.59 0-6.5-2.91-6.5-6.5S7.91 5 11.5 5c2.19 0 4.15 1.09 5.27 2.66l2.42-1.78C17.45 3.53 14.65 2 11.5 2zm7 7v2h-2v2h2v2h2v-2h2v-2h-2V9h-2zm-3.5 0v2h-2v2h2v2h2v-2h2v-2h-2V9h-2z" />
        </svg>
      );

    case 'python':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.006 2.752h5.814v.826H3.92S0 5.79 0 11.906c0 6.115 3.42 5.914 3.42 5.914h2.04v-2.868s-.11-3.42 3.364-3.42h5.786s3.255.053 3.255-3.15V2.656S18.232 0 11.914 0zm-3.1 1.705a1.007 1.007 0 1 1 0 2.014 1.007 1.007 0 0 1 0-2.014zM12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.006-2.752h-5.814v-.826h8.1s3.92.444 3.92-5.672c0-6.115-3.42-5.914-3.42-5.914h-2.04v2.868s.11 3.42-3.364 3.42h-5.786s-3.255-.053-3.255 3.15v5.728S5.768 24 12.086 24zm3.1-1.705a1.007 1.007 0 1 1 0-2.014 1.007 1.007 0 0 1 0 2.014z" />
        </svg>
      );

    case 'javascript':
    case 'js':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M3 3h18v18H3V3zm13.725 14.615c1.455 0 2.505-.72 2.505-2.22 0-1.425-.87-1.95-2.31-2.58l-.45-.195c-.81-.345-1.155-.66-1.155-1.275 0-.645.51-1.125 1.305-1.125.795 0 1.275.345 1.575.915l1.62-.99c-.585-1.095-1.605-1.695-3.195-1.695-1.875 0-3.075 1.155-3.075 2.82 0 1.545.96 2.19 2.475 2.835l.45.195c.795.345 1.23.69 1.23 1.365 0 .765-.675 1.245-1.635 1.245-1.14 0-1.8-.585-2.19-1.425l-1.665.96c.645 1.44 1.875 2.145 3.945 2.145zm-6.84 0c1.08 0 1.95-.51 2.37-1.395l-1.65-.96c-.24.42-.585.645-1.02.645-.63 0-1.035-.45-1.035-1.455V8.535H7.53v5.82c0 2.175 1.245 3.26 2.955 3.26z" />
        </svg>
      );

    case 'typescript':
    case 'ts':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M3 3h18v18H3V3zm10.74 14.615c1.455 0 2.505-.72 2.505-2.22 0-1.425-.87-1.95-2.31-2.58l-.45-.195c-.81-.345-1.155-.66-1.155-1.275 0-.645.51-1.125 1.305-1.125.795 0 1.275.345 1.575.915l1.62-.99c-.585-1.095-1.605-1.695-3.195-1.695-1.875 0-3.075 1.155-3.075 2.82 0 1.545.96 2.19 2.475 2.835l.45.195c.795.345 1.23.69 1.23 1.365 0 .765-.675 1.245-1.635 1.245-1.14 0-1.8-.585-2.19-1.425l-1.665.96c.645 1.44 1.875 2.145 3.945 2.145zM6.6 8.535h7.2v1.92h-2.58v7.16H9.18v-7.16H6.6V8.535z" />
        </svg>
      );

    // 02 — Frontend Development
    case 'html':
    case 'html5':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M2.99 2h18.02l-1.64 18.39L12 23l-7.37-2.61L2.99 2zm15.1 4.54H5.91l.36 4.09h10.08l-.37 4.15-3.98 1.1-3.99-1.1-.26-2.91H5.66l.5 5.67 5.84 1.62 5.84-1.62.8-8.99.1-1.11.25-2.8z" />
        </svg>
      );

    case 'css':
    case 'css3':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M2.99 2h18.02l-1.64 18.39L12 23l-7.37-2.61L2.99 2zm14.15 4.55H6.86l.24 2.73h9.79l-.3 3.42-4.59 1.27-4.59-1.27-.18-2.05H5.16l.36 4.1 6.48 1.8 6.48-1.8.84-9.45.14-1.55.23-2.62z" />
        </svg>
      );

    case 'react':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <circle cx="12" cy="12" r="2.2" />
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            d="M12 21.6c4.97 0 9-4.3 9-9.6s-4.03-9.6-9-9.6-9 4.3-9 9.6 4.03 9.6 9 9.6z"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            d="M3.69 16.8c2.49 4.3 6.94 6.87 11.53 4.22s5.85-8.21 3.36-12.51S11.64 1.64 7.05 4.29s-5.85 8.21-3.36 12.51z"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            d="M3.69 7.2c-2.49 4.3-1.23 9.86 3.36 12.51s9.04.08 11.53-4.22 1.23-9.86-3.36-12.51S6.18 2.9 3.69 7.2z"
          />
        </svg>
      );

    case 'tailwindcss':
    case 'tailwind':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
        </svg>
      );

    case 'vite':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="m23.414 4.086-11 20a.75.75 0 0 1-1.32.016l-4.5-8.25-5.992-10.985A.75.75 0 0 1 1.258 3.8l8.472 1.059a.75.75 0 0 1 .632.554L11.83 11.2l1.625-7.311a.75.75 0 0 1 .678-.585l8.528-.426a.75.75 0 0 1 .753.953z" />
        </svg>
      );

    // 03 — Backend & Databases
    case 'nodejs':
    case 'node':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M12 2 2.5 7.5v11L12 24l9.5-5.5v-11L12 2zm7.5 15.35-7.5 4.35-7.5-4.35V8.65l7.5-4.35 7.5 4.35v8.7z" />
          <path d="M11 9.5h2v5h-2z" />
        </svg>
      );

    case 'expressjs':
    case 'express':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M2 5h6.5v2H4.5v3.5h3.5v2H4.5v4.5h4V19H2V5zm10.5 4.5L16 14.5 19.5 9.5H22l-4.5 6 4.5 6h-2.5L16 16.5 12.5 21.5H10l4.5-6-4.5-6h2.5z" />
        </svg>
      );

    case 'restapis':
    case 'restapi':
    case 'rest':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <path d="m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98" />
        </svg>
      );

    case 'mongodb':
    case 'mongo':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M12.01 0c-.28 0-.54.12-.73.34C9.53 2.37 5 7.9 5 13.58 5 18.78 8.13 23.4 11.53 24h.94C15.87 23.4 19 18.78 19 13.58c0-5.68-4.53-11.21-6.28-13.24A.98.98 0 0 0 12.01 0zm.04 2.5c1.62 2.1 4.95 6.75 4.95 11.08 0 3.73-2.14 7.42-4.95 8.16-.03-2.48-.04-4.96-.04-7.44V2.5z" />
        </svg>
      );

    case 'postgresql':
    case 'postgres':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
        </svg>
      );

    // 04 — Cybersecurity & Networking
    case 'linux':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M12.012 0c-3.053 0-4.938 2.05-4.938 4.622 0 1.25.438 2.797 1.047 3.938-1.594.844-2.75 2.516-2.75 4.484 0 1.031.328 1.984.875 2.781-1.453 1.36-2.375 3.328-2.375 5.516 0 .422.047.828.109 1.234C5.109 23.375 7.89 24 11.234 24c3.812 0 7.031-.812 8.281-2.031.063-.406.109-.813.109-1.235 0-2.188-.922-4.156-2.375-5.515.547-.797.875-1.75.875-2.781 0-1.969-1.156-3.64-2.75-4.485.609-1.14 1.047-2.687 1.047-3.937C16.953 2.05 15.068 0 12.012 0zm-1.89 4.313a.92.92 0 1 1 0 1.844.92.92 0 0 1 0-1.844zm3.78 0a.92.92 0 1 1 0 1.844.92.92 0 0 1 0-1.844zm-1.89 2.562c1.234 0 2.25.828 2.25 1.844 0 .391-.172.734-.438 1.016-.484.5-1.125.828-1.812.828s-1.328-.328-1.812-.828c-.266-.282-.438-.625-.438-1.016 0-1.016 1.016-1.844 2.25-1.844z" />
        </svg>
      );

    case 'tcpip':
    case 'tcp':
    case 'ip':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <rect x="2" y="2" width="20" height="8" rx="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
          <path d="M12 10v4" />
        </svg>
      );

    case 'networkingfundamentals':
    case 'networking':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <rect x="9" y="2" width="6" height="6" rx="1" />
          <rect x="2" y="16" width="6" height="6" rx="1" />
          <rect x="16" y="16" width="6" height="6" rx="1" />
          <path d="M12 8v5M5 16v-3h14v3" />
        </svg>
      );

    case 'authentication':
    case 'auth':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );

    case 'cryptographyfundamentals':
    case 'cryptography':
    case 'crypto':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          <circle cx="12" cy="16" r="1.5" fill="currentColor" />
        </svg>
      );

    // 05 — Tools & Platforms
    case 'git':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M23.54 11.45 12.55.46a1.5 1.5 0 0 0-2.12 0L8.35 2.54l3.18 3.18a1.78 1.78 0 0 1 2.25 2.26l3.05 3.05a1.78 1.78 0 1 1-1.07 1.07l-2.83-2.83v4.61a1.79 1.79 0 1 1-1.5 0V8.77a1.78 1.78 0 0 1-.95-.95L7.3 4.64.46 11.48a1.5 1.5 0 0 0 0 2.12l10.99 10.99a1.5 1.5 0 0 0 2.12 0l10-10a1.5 1.5 0 0 0-.03-2.14z" />
        </svg>
      );

    case 'github':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      );

    case 'vscode':
    case 'visualstudiocode':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M17.58 2.05a1.5 1.5 0 0 0-.96.34L7.54 10.1 3.84 7.23a.85.85 0 0 0-1.17.18l-1.4 1.8a.85.85 0 0 0 .18 1.18l4.47 3.52-4.47 3.52a.85.85 0 0 0-.18 1.18l1.4 1.8a.85.85 0 0 0 1.17.18l3.7-2.87 9.08 7.71a1.5 1.5 0 0 0 2.48-1.14V3.19a1.5 1.5 0 0 0-1.52-1.14zM16.5 6.45v11.1l-6-5.55 6-5.55z" />
        </svg>
      );

    case 'antigravity':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(-30 12 12)" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      );

    case 'docker':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185zm-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185zm0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.186.185.186zm-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.186.185.186zm-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.186.186.186zm5.893 2.715h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185zm-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186H8.1a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185zm-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H5.136a.186.186 0 0 0-.186.185v1.888c0 .102.084.185.186.185zm-2.928 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H2.208a.186.186 0 0 0-.186.185v1.888c0 .102.084.185.186.185zM23.79 12.06c-.463-.338-1.528-.465-2.31-.383-.16-.927-.723-1.688-1.583-2.118l-.513-.257-.352.463c-.58.76-.84 1.706-.757 2.65-.67.315-1.488.352-2.37.112l-.372-.1v2.333c0 3.824-3.15 6.974-6.974 6.974-2.502 0-4.66-1.34-5.834-3.328-.316.035-.63.053-.948.053-1.042 0-2.023-.193-2.924-.543l-.438-.17-.184.43c-.482 1.134-1.34 2.066-2.428 2.646-.224.12-.348.368-.315.618.034.25.216.452.465.513 1.956.48 4.02.735 6.17.735 7.73 0 14-6.27 14-14 0-.183-.004-.366-.01-.548.815-.35 1.503-.947 1.83-1.688l.195-.443-.45-.254z" />
        </svg>
      );

    case 'figma':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M8 2a4 4 0 0 0-4 4 4 4 0 0 0 4 4h4V2H8zM4 10a4 4 0 0 0 4 4 4 4 0 0 0 4-4v-4H8a4 4 0 0 0-4 4zm8 8a4 4 0 0 1-4-4h4v4zm0-16h4a4 4 0 0 1 4 4 4 4 0 0 1-4 4h-4V2zm4 8a4 4 0 0 1 4 4 4 4 0 0 1-4 4h-4v-8h4z" />
        </svg>
      );

    case 'vercel':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M12 1 24 22H0L12 1z" />
        </svg>
      );

    // 06 — Emerging Technologies & Hardware
    case 'arduino':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <circle cx="7" cy="12" r="5" />
          <circle cx="17" cy="12" r="5" />
          <path d="M5 12h4M7 10v4M15 12h4" />
        </svg>
      );

    case 'embeddedc':
    case 'embeddedcpp':
    case 'embedded':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
        </svg>
      );

    case 'stellar':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M22.95 9.17a10.95 10.95 0 0 0-.74-2.58l-8.62 4.98a1 1 0 0 1-1 .01L2.24 5.92A11.02 11.02 0 0 0 .54 11.9a11.05 11.05 0 0 0 7.85 10.42l4.83-9.67a1 1 0 0 1 .9-.55h.09a1 1 0 0 1 .89.57l4.7 9.4A11.05 11.05 0 0 0 22.95 9.17zM12 2C7.23 2 3.23 5.38 2.24 9.94l8.84 5.1 8.84-5.1C18.93 5.38 14.93 2 12 2z" />
        </svg>
      );

    case 'soroban':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <circle cx="8" cy="6" r="1" fill="currentColor" />
          <circle cx="16" cy="6" r="1" fill="currentColor" />
          <circle cx="8" cy="14" r="1" fill="currentColor" />
          <circle cx="16" cy="14" r="1" fill="currentColor" />
          <circle cx="8" cy="18" r="1" fill="currentColor" />
          <circle cx="16" cy="18" r="1" fill="currentColor" />
        </svg>
      );

    case 'opencv':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M12 1.5a5.5 5.5 0 0 0-4.76 8.27l2.17-1.25a3 3 0 1 1 5.18 0l2.17 1.25A5.5 5.5 0 0 0 12 1.5zm-5.75 10a5.5 5.5 0 0 0-4.75 2.73 5.5 5.5 0 0 0 4.75 8.27 5.5 5.5 0 0 0 4.76-2.75L8.84 18.5a3 3 0 1 1 0-6l2.17-1.25a5.5 5.5 0 0 0-4.76-.75zm11.5 0a5.5 5.5 0 0 0-4.76.75l2.17 1.25a3 3 0 1 1 0 6l-2.17 1.25a5.5 5.5 0 0 0 4.76 2.75 5.5 5.5 0 0 0 4.75-8.27 5.5 5.5 0 0 0-4.75-2.73z" />
        </svg>
      );

    case 'yolo':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" strokeDasharray="4 2" />
          <path d="M8 3v4M16 3v4M8 17v4M16 17v4M3 8h4M17 8h4M3 16h4M17 16h4" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      );

    case 'aitooling':
    case 'ai':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          <circle cx="12" cy="12" r="3" fill="currentColor" />
        </svg>
      );

    case 'freighter':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
          <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
          <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
        </svg>
      );

    case 'atmega':
    case 'atmega328p':
    case 'microcontroller':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
        </svg>
      );

    case 'hcsr04':
    case 'ultrasonic':
    case 'sensor':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <rect x="2" y="6" width="20" height="12" rx="3" />
          <circle cx="7.5" cy="12" r="3" />
          <circle cx="16.5" cy="12" r="3" />
          <circle cx="7.5" cy="12" r="1" fill="currentColor" />
          <circle cx="16.5" cy="12" r="1" fill="currentColor" />
        </svg>
      );

    case 'l298n':
    case 'motor':
    case 'motordriver':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
          <path d="M7.76 7.76l2.83 2.83M13.41 13.41l2.83 2.83M7.76 16.24l2.83-2.83M13.41 10.59l2.83-2.83" />
          <circle cx="12" cy="12" r="2.5" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      );
  }
}
