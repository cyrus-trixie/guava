'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

// ✅ Add types
type Link = {
  label: string;
  href: string;
};

type Section = {
  title: string;
  links: Link[];
};

type SocialIcon = {
  label: string;
  href: string;
  path: string;
};

const footerSections: Section[] = [
  {
    title: 'Product',
    links: [
      { label: 'Web Applications', href: '#' },
      { label: 'Mobile Apps', href: '#' },
      { label: 'ERP Solutions', href: '#' },
      { label: 'M-Pesa Integrations', href: '#' },
      { label: 'Business Tools', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '#' },
      { label: 'Support', href: '#' },
      { label: 'FAQs', href: '#' },
      { label: 'Case Studies', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  },
  {
    title: 'Social',
    links: [
      { label: 'X (Twitter)', href: '#' },
      { label: 'LinkedIn', href: '#' },
      { label: 'GitHub', href: '#' },
      { label: 'Instagram', href: '#' },
    ],
  },
];

const socialIcons: SocialIcon[] = [
  {
    label: 'X (Twitter)',
    href: '#',
    path: 'M4 4l16 16M20 4L4 20',
  },
  {
    label: 'LinkedIn',
    href: '#',
    path: 'M4 4h16v16H4V4zm3.5 6.5v6M7.5 7.5v.5M12 16.5v-4c0-1.1.7-2 2-2s2 .9 2 2v4',
  },
  {
    label: 'GitHub',
    href: '#',
    path: 'M9 19c-4.5 1.5-4.5-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2-.2 4-1 4-4.5 0-1-.4-2-1-2.7.1-.3.5-1.5-.1-3 0 0-1.2-.4-3.4 1.2a11 11 0 0 0-6 0C5.8 4.9 4.6 5.3 4.6 5.3c-.6 1.5-.2 2.7-.1 3-.6.7-1 1.7-1 2.7 0 3.5 2 4.3 4 4.5-.4.4-.4 1-.5 2V21',
  },
  {
    label: 'Instagram',
    href: '#',
    path: 'M4 4h16v16H4V4zm8 4.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM16.5 7.5h0',
  },
];


type FooterLinkProps = {
  href: string;
  children: React.ReactNode;
};

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <a
      href={href}
      className="text-sm text-gray-500 transition-colors duration-200 hover:text-[#DB3246]"
    >
      {children}
    </a>
  );
}


type AccordionSectionProps = {
  section: Section;
  isOpen: boolean;
  onToggle: () => void;
};

function AccordionSection({ section, isOpen, onToggle }: AccordionSectionProps) {
  return (
    <div className="border-b border-gray-100">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between py-4 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
          {section.title}
        </span>
        <ChevronDown
          className={`size-4 text-gray-400 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <ul className="min-h-0 space-y-3 pb-4">
          {section.links.map((link: Link) => (
            <li key={link.label}>
              <FooterLink href={link.href}>{link.label}</FooterLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Footer() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-16">
          {/* Brand */}
          <div className="lg:max-w-xs">
            <div className="flex items-center gap-2">
              <span className="inline-block size-2.5 rounded-sm bg-[#DB3246]" />
              <span className="text-base font-bold text-gray-900">NuruTek</span>
            </div>
            <p className="mt-3 text-sm text-gray-500">
              Web, mobile, and business software built for companies across
              East Africa.
            </p>
          </div>

          {/* Mobile: accordion */}
          <div className="sm:hidden">
            {footerSections.map((section, i) => (
              <AccordionSection
                key={section.title}
                section={section}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>

          {/* Tablet/Desktop: expanded grid */}
          <div className="hidden grid-cols-2 gap-10 sm:grid sm:grid-cols-3 lg:grid-cols-5 lg:gap-8">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  {section.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <FooterLink href={link.href}>{link.label}</FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center gap-4 border-t border-gray-100 pt-6 sm:flex-row sm:justify-between">
          <p className="text-xs text-gray-400">
            &copy; {year} NuruTek. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialIcons.map((icon) => (
              <a
                key={icon.label}
                href={icon.href}
                aria-label={icon.label}
                className="text-gray-400 transition-colors duration-200 hover:text-[#DB3246]"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="size-4"
                >
                  <path
                    d={icon.path}
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}