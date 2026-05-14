import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export const ArrowIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const ArrowLeftIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </svg>
);

export const ArrowDownIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" {...p}>
    <path d="M12 5v14M6 13l6 6 6-6" />
  </svg>
);

export const LeafIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M21 3c-9 1-15 6-15 14 0 2 1 4 1 4M21 3c-1 9-5 13-9 14M21 3c-4 1-7 3-9 5" />
  </svg>
);

export const RecycleIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M7 8l-3 5 3 5M17 8l3 5-3 5M9 5l3-2 3 2M12 3v8M5 13h8M16 18l-4 0M11 11l-3 5h6" />
  </svg>
);

export const PinIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M12 22s7-7 7-13a7 7 0 10-14 0c0 6 7 13 7 13z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

export const PhoneIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
  </svg>
);

export const MailIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="3" y="5" width="18" height="14" rx="1.5" />
    <path d="M3 7l9 7 9-7" />
  </svg>
);

export const IgIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17" cy="7" r="1" fill="currentColor" />
  </svg>
);

export const FbIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
    <path d="M14 8h2.5V5H14c-2 0-3.5 1.5-3.5 3.5V11H8v3h2.5v7h3v-7H16l.5-3h-3V9c0-.5.5-1 1-1z" />
  </svg>
);

export const WaIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.1-1.2-.4-2.3-1.4-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.3 5.1 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.6 1.4 5.2L2 22l4.9-1.3c1.5.8 3.2 1.3 5.1 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
  </svg>
);

export const CheckIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M5 12.5l4 4 10-10" />
  </svg>
);

export const StarIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 2.5l2.6 6 6.4.5-4.9 4.2 1.5 6.3L12 16.2 6.4 19.5l1.5-6.3L3 9l6.4-.5z" />
  </svg>
);

export const BrushIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M14 3l7 7-9 9-3-3M7 17l-3 4 4-3M9 12l3 3" />
  </svg>
);

export const TruckIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M3 7h11v8H3zM14 10h4l3 3v2h-7M6 19a2 2 0 100-4 2 2 0 000 4zM17 19a2 2 0 100-4 2 2 0 000 4z" />
  </svg>
);

export const TagIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M3 12V4h8l10 10-8 8L3 12z" />
    <circle cx="7.5" cy="7.5" r="1.3" />
  </svg>
);

export const LayersIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5M3 17l9 5 9-5" />
  </svg>
);

export const AwardIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <circle cx="12" cy="9" r="6" />
    <path d="M9 14l-2 7 5-3 5 3-2-7" />
  </svg>
);

export const BurgerIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" {...p}>
    <path d="M4 8h16M4 16h16" />
  </svg>
);

export const XIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const PlusIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" {...p}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const MinusIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" {...p}>
    <path d="M5 12h14" />
  </svg>
);

export const QuoteIcon = (p: IconProps) => (
  <svg viewBox="0 0 32 32" fill="currentColor" {...p}>
    <path d="M10 8c-3 0-6 3-6 7v9h9v-9H8c0-2 1-4 3-5l-1-2zm14 0c-3 0-6 3-6 7v9h9v-9h-5c0-2 1-4 3-5l-1-2z" />
  </svg>
);

export const FactoryIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M3 21V10l5 3V10l5 3V8l8-3v16H3zM7 17h2M11 17h2M15 17h2" />
  </svg>
);

export const HeartIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M12 21s-7-4.5-9-9c-1.5-3.5 1-7 4.5-7 1.8 0 3.4 1 4.5 2.5C13.1 6 14.7 5 16.5 5 20 5 22.5 8.5 21 12c-2 4.5-9 9-9 9z" />
  </svg>
);

export const SunIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" />
  </svg>
);

export type IconName =
  | "arrow"
  | "arrowLeft"
  | "arrowDown"
  | "leaf"
  | "recycle"
  | "pin"
  | "phone"
  | "mail"
  | "ig"
  | "fb"
  | "wa"
  | "check"
  | "star"
  | "brush"
  | "truck"
  | "tag"
  | "layers"
  | "award"
  | "burger"
  | "x"
  | "plus"
  | "minus"
  | "quote"
  | "factory"
  | "heart"
  | "sun";

export const Icons: Record<IconName, (p: IconProps) => JSX.Element> = {
  arrow: ArrowIcon,
  arrowLeft: ArrowLeftIcon,
  arrowDown: ArrowDownIcon,
  leaf: LeafIcon,
  recycle: RecycleIcon,
  pin: PinIcon,
  phone: PhoneIcon,
  mail: MailIcon,
  ig: IgIcon,
  fb: FbIcon,
  wa: WaIcon,
  check: CheckIcon,
  star: StarIcon,
  brush: BrushIcon,
  truck: TruckIcon,
  tag: TagIcon,
  layers: LayersIcon,
  award: AwardIcon,
  burger: BurgerIcon,
  x: XIcon,
  plus: PlusIcon,
  minus: MinusIcon,
  quote: QuoteIcon,
  factory: FactoryIcon,
  heart: HeartIcon,
  sun: SunIcon,
};
