import React from 'react';
import { Mail, Linkedin, Instagram, MessageCircle, Music2 } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    {
      name: 'Email',
      href: 'mailto:qaiosity@gmail.com',
      icon: <Mail className="w-5 h-5" />,
    },
    // {
    //   name: 'LinkedIn',
    //   href: 'https://linkedin.com/in/username',
    //   icon: <Linkedin className="w-5 h-5" />,
    // },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/6282371662911',
      icon: <MessageCircle className="w-5 h-5" />,
    },
    {
      name: 'TikTok',
      href: 'https://www.tiktok.com/@qaiosity1?_r=1&_t=ZS-93VShgZ5gG4',
      icon: <Music2 className="w-5 h-5" />,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/qaiosity?igsh=MWFwZjRubjU0M2owYw==',
      icon: <Instagram className="w-5 h-5" />,
    },
  ];

  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col items-center">
        {/* Container Logo */}
        <div className="flex items-center gap-6 mb-6">
          {socialLinks.map((social) => (
            <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" 
            className="text-gray-400 hover:text-blue-900 transition-colors" aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} QAIOSITY. All rights reserved.
        </div>
      </div>
    </footer>
  );
}