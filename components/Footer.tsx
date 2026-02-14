import { Link } from "wouter";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-white border-t border-[rgba(12,12,9,0.15)]">
      <div className="max-w-[1280px] mx-auto px-16 py-20">
        <div className="flex flex-col gap-20">
          {/* Main Footer Content */}
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-1">
              <div className="h-[130px] w-auto max-w-[280px]">
                <img
                  src="/logo.png"
                  alt="University of Sharjah"
                  className="h-[130px] w-auto object-contain group-hover:opacity-90 transition-opacity"
                />
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-8 font-['Cabin'] justify-center">
              <Link href="/about" className="text-[#0c0c09] hover:underline">
                {t('footer.about')}
              </Link>
              <Link href="/crisis-reporting" className="text-[#0c0c09] hover:underline">
                {t('footer.resources')}
              </Link>
              <Link href="/training" className="text-[#0c0c09] hover:underline">
                {t('footer.training')}
              </Link>
              <Link href="/submit" className="text-[#0c0c09] hover:underline">
                {t('footer.contact')}
              </Link>
              <Link href="/submit" className="text-[#0c0c09] hover:underline">
                {t('footer.support')}
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 justify-end flex-1">
              <a
                href="#"
                className="text-[#0c0c09] hover:text-[#f65d5d]"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-[#0c0c09] hover:text-[#f65d5d]"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-[#0c0c09] hover:text-[#f65d5d]"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-[#0c0c09] hover:text-[#f65d5d]"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-[#0c0c09] hover:text-[#f65d5d]"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col gap-8">
            <div className="border-t border-[rgba(12,12,9,0.15)]" />
            <div className="flex gap-6 font-['Cabin'] text-[#0c0c09]">
              <p>{t('footer.copyright')}</p>
              <Link href="/site-classification" className="underline hover:text-[#f65d5d]">
                {t('footer.siteClassification')}
              </Link>
              <a href="#" className="underline hover:text-[#f65d5d]">
                {t('footer.privacy')}
              </a>
              <a href="#" className="underline hover:text-[#f65d5d]">
                {t('footer.terms')}
              </a>
              <a href="#" className="underline hover:text-[#f65d5d]">
                {t('footer.cookies')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
