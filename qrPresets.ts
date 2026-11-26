// ============================================================
// INTERNAL QR STUDIO PRESETS — DO NOT IMPORT FROM ANY PAGE.
// ============================================================
// This file contains WiFi credentials. It must never be
// referenced by .astro components, layouts, or pages.
//
// Verify with:
// grep -R "qrPresets" src/pages src/components src/layouts
// Expected result: no matches.
//
// Types mirror the QR Studio authoritative schema.
// ============================================================
export type QRCategory = 'url' | 'wifi' | 'vcard' | 'text' | 'email' | 'sms';

export interface WifiPayload {
  ssid: string;
  password: string;
  encryption: 'WPA' | 'WEP' | 'nopass';
  hidden: boolean;
}

export interface VCardPayload {
  firstName: string;
  lastName: string;
  organization: string;
  title: string;
  phone: string;
  email: string;
  url: string;
  note: string;
}

export interface EmailPayload {
  to: string;
  subject: string;
  body: string;
}

export interface SmsPayload {
  phone: string;
  body: string;
}

export type QRPayloadData =
  | { category: 'url'; url: string }
  | { category: 'text'; text: string }
  | ({ category: 'wifi' } & WifiPayload)
  | ({ category: 'vcard' } & VCardPayload)
  | ({ category: 'email' } & EmailPayload)
  | ({ category: 'sms' } & SmsPayload);

export type DotStyle = 'square' | 'dots' | 'rounded' | 'extra-rounded' | 'classy';
export type CornerStyle = 'square' | 'dot' | 'extra-rounded';
export type ErrorCorrectionLevel = 'L' | 'M' | 'Q' | 'H';
export type FrameTemplate = 'none' | 'bottom-banner' | 'top-badge' | 'card-border';
export type TextSize = 'sm' | 'md' | 'lg';

export interface QRStyleConfig {
  fgColor: string;
  bgColor: string;
  dotStyle: DotStyle;
  cornerStyle: CornerStyle;
  errorCorrection: ErrorCorrectionLevel;
  logoDataUrl: string | null;
}

export interface QRFrameConfig {
  template: FrameTemplate;
  label: string;
  sublabel: string;
  fontFamily: 'sans' | 'serif' | 'mono';
  textSize: TextSize;
  frameBgColor: string;
  textColor: string;
}

export interface QRProjectState {
  payload: QRPayloadData;
  style: QRStyleConfig;
  frame: QRFrameConfig;
  exportSize: 512 | 1024 | 2048;
}

const PRINT_SAFE_STYLE: QRStyleConfig = {
  fgColor: '#0F172A',
  bgColor: '#FFFFFF',
  dotStyle: 'square',
  cornerStyle: 'square',
  errorCorrection: 'H',
  logoDataUrl: null,
};

const PRINT_SAFE_FRAME_BASE = {
  template: 'bottom-banner' as FrameTemplate,
  fontFamily: 'sans' as const,
  textSize: 'md' as TextSize,
  frameBgColor: '#FFFFFF',
  textColor: '#0F172A',
};

export const vannicaWifiPreset: QRProjectState = {
  payload: {
    category: 'wifi',
    ssid: 'Vannica',
    password: '0979019797',
    encryption: 'WPA',
    hidden: false,
  },
  style: { ...PRINT_SAFE_STYLE },
  frame: {
    ...PRINT_SAFE_FRAME_BASE,
    label: 'Guest WiFi',
    sublabel: 'Scan to connect',
  },
  exportSize: 2048,
};

export const whatsappBookingPreset: QRProjectState = {
  payload: {
    category: 'url',
    url: 'https://wa.me/855979019797?text=Hello%20Vanny,%20I%20would%20like%20to%20book%20a%20room.',
  },
  style: { ...PRINT_SAFE_STYLE },
  frame: {
    ...PRINT_SAFE_FRAME_BASE,
    label: 'Book Direct',
    sublabel: 'Message Vanny on WhatsApp',
  },
  exportSize: 2048,
};

export const telegramContactPreset: QRProjectState = {
  payload: {
    category: 'url',
    url: 'https://t.me/%2B85593733319',
  },
  style: { ...PRINT_SAFE_STYLE },
  frame: {
    ...PRINT_SAFE_FRAME_BASE,
    label: 'Telegram',
    sublabel: 'Message Vanny',
  },
  exportSize: 2048,
};

// ASSUMPTION: lastName "Hou" inferred from email local-part
// "houvannysun". This is NOT verified by the Architect.
// If incorrect, change lastName here and regenerate the QR.
export const guesthouseVCardPreset: QRProjectState = {
  payload: {
    category: 'vcard',
    firstName: 'Vanny',
    lastName: 'Hou',
    organization: "Vanny's Peaceful Guesthouse",
    title: 'Host / Management',
    phone: '+85512733319',
    email: 'houvannysun@hotmail.com',
    url: 'https://vannys-peaceful-guesthouse.example.com',
    note: 'Adults-only guesthouse near Russian Market, Phnom Penh.',
  },
  style: { ...PRINT_SAFE_STYLE },
  frame: {
    ...PRINT_SAFE_FRAME_BASE,
    label: 'Save Contact',
    sublabel: "Vanny's Peaceful Guesthouse",
  },
  exportSize: 2048,
};

// Fallback networks — for physical sign generation only.
// Not exported as active presets. Do not publish these credentials.
// Vannica 2 / 0979019797 / WPA / not hidden
// Vannica 3 / 0979019797 / WPA / not hidden
// Home 4 / 88889999 / WPA / not hidden
