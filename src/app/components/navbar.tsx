'use client';

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiMenuAltRight } from "react-icons/bi";
import { MdClose } from "react-icons/md";

type NavigationLink = {
  label: string;
  href: string;
  external?: boolean;
  dropdown?: "services" | "training";
};

const navigationLinks: NavigationLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#aboutus" },
  { label: "Our Services", href: "/#services", dropdown: "services" },
  { label: "Training & Development", href: "/#trainingprogram", dropdown: "training" },
  { label: "Regulatory Resource Centre", href: "/regulatory-resource-centre" },
  { label: "Programme Gallery", href: "/archive" },
  { label: "Contact Us", href: "/#contactus" },
];

const serviceLinks = [
  { label: "Regulatory Compliance & Policy Advisory", id: "regulatory-compliance-policy-advisory" },
  { label: "Management Development Programmes", id: "management-development-programmes" },
  { label: "Credit & Investment Management", id: "credit-investment-management" },
  { label: "Recovery & Stressed Asset Management", id: "recovery-stressed-asset-management" },
  { label: "Risk Management & Internal Controls", id: "risk-management-internal-controls" },
  { label: "Staff Training & Capacity Building", id: "staff-training-capacity-building" },
  { label: "Technology Risk & Cybersecurity Awareness", id: "technology-risk-cybersecurity-awareness" },
];

const trainingLinks = [
  { label: "Management Development Programme", id: "training-management-development" },
  { label: "Capacity Building for UCB Staff", id: "training-capacity-building" },
  { label: "Governance & Board Effectiveness", id: "training-governance-board-effectiveness" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<"services" | "training" | null>(null);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="relative z-50 w-full border-b-[3px] border-[#07569b] bg-white shadow-sm">
      <div className="relative isolate w-full overflow-hidden bg-gradient-to-br from-[#064b88] via-[#07569b] to-[#0b3d72] text-white">
        <div className="container relative z-10 mx-auto grid min-h-[116px] grid-cols-[64px_minmax(0,1fr)] items-center gap-x-3 gap-y-1 px-4 py-1.5 text-center sm:min-h-[128px] sm:grid-cols-[80px_minmax(0,1fr)] sm:gap-x-4 sm:gap-y-2 md:px-8 md:py-2">
          <Link
            href="/"
            aria-label="Center for Management of UCBs home"
            className="row-span-2 flex shrink-0 items-center justify-start"
          >
            <Image
              src="/cmucblogo.jpg"
              alt="Center for Management of UCBs logo"
              width={144}
              height={144}
              priority
              className="h-16 w-16 object-contain drop-shadow-[0_8px_16px_rgba(13,62,112,0.12)] sm:h-20 sm:w-20"
            />
          </Link>
          <div className="col-start-2 flex min-w-0 flex-col items-center text-center">
            <h1 className="text-lg font-extrabold leading-tight tracking-tight text-white sm:text-xl md:text-2xl lg:text-3xl">
              Center for Management of UCBs
            </h1>
            <div className="mt-1.5 flex w-full max-w-[700px] flex-col items-stretch rounded-2xl border border-white/25 bg-white/10 px-3 py-0.5 text-xs text-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] sm:flex-row sm:items-center sm:justify-center sm:rounded-full sm:px-4 sm:py-1 sm:text-sm md:mt-2">
              <a href="mailto:cmucbs@gmail.com" className="flex min-w-0 items-center justify-center gap-2 rounded-xl px-2 py-1 font-semibold hover:text-[#06335d] sm:flex-1 sm:py-0.5">
                <svg className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="truncate">cmucbs@gmail.com</span>
              </a>
              <span aria-hidden="true" className="mx-auto h-px w-full bg-white/35 sm:mx-2 sm:h-6 sm:w-px" />
              <a href="tel:+919870265838" className="flex min-w-0 items-center justify-center gap-2 rounded-xl px-2 py-1 font-semibold hover:text-[#06335d] sm:flex-1 sm:py-0.5">
                <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.173-1.289.173-1.413-.074-.074-.272-.272-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="whitespace-nowrap">+91 9870265838</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 py-1.5 sm:px-8 lg:px-10 md:flex md:items-center md:justify-center">
        <div className="flex items-center justify-end md:hidden">
          <button
            type="button"
            className="rounded p-2 text-[#004281] focus:outline-none focus:ring-2 focus:ring-[#004281] md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <MdClose size={30} /> : <BiMenuAltRight size={30} />}
          </button>
        </div>

        <div className={`${isMenuOpen ? "block" : "hidden"} mt-3 md:mt-0 md:block md:w-full lg:flex lg:items-center lg:justify-center lg:gap-4`}>
          <ul className="flex flex-col gap-2 md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-x-5 md:gap-y-2 lg:gap-x-5 xl:flex-nowrap xl:gap-x-6">
            {navigationLinks.map(({ label, href, external, dropdown }) => {
              if (dropdown) {
                const isOpen = openDropdown === dropdown;
                const items = dropdown === "services" ? serviceLinks : trainingLinks;

                return (
                  <li key={label} className="relative">
                    <button
                      type="button"
                      onClick={() => setOpenDropdown(isOpen ? null : dropdown)}
                      aria-expanded={isOpen}
                      aria-controls={`${dropdown}-submenu`}
                      className="flex cursor-pointer items-center gap-1 py-1 text-sm font-bold text-[#004281] hover:text-[#DE466C] lg:text-base"
                    >
                      {label}
                      <svg className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                        <path d="m6 9 6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {isOpen && (
                      <ul id={`${dropdown}-submenu`} className="mt-2 space-y-1 rounded-lg bg-white py-2 shadow-lg ring-1 ring-black/10 md:absolute md:left-0 md:top-full md:z-50 md:mt-1 md:w-80">
                        {items.map(({ label: itemLabel, id }) => (
                          <li key={id}>
                            <Link
                              href={`/#${id}`}
                              onClick={() => {
                                setOpenDropdown(null);
                                closeMenu();
                              }}
                              className="block px-4 py-2 text-sm font-medium leading-5 text-[#004281] hover:bg-blue-50 hover:text-[#DE466C]"
                            >
                              {itemLabel}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              }

              return (
                <li key={label}>
                  <Link
                    href={href}
                    onClick={closeMenu}
                    className="flex items-center py-1 text-sm font-bold text-[#004281] hover:text-[#DE466C] lg:text-base"
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                href="https://forms.gle/ExCvt9jbBhp7tzg68"
                onClick={closeMenu}
                className="inline-flex rounded-full bg-[#004281] px-5 py-2 text-lg font-medium text-white transition duration-300 hover:bg-gradient-to-r hover:from-[#DE466C] hover:to-[#004281]"
              >
                Nominations
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
