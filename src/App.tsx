/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  FileText, 
  Linkedin, 
  Mail, 
  Phone,
  MapPin, 
  Award, 
  Check, 
  Copy, 
  Coffee,
  ShieldAlert,
  Users,
  Compass,
  Sparkles,
  BookOpen,
  Building2,
  Calendar
} from 'lucide-react';

/* --- Delicate Botanical Vine with Pastel Pink Cherry Blossoms & Leaves --- */
function BotanicalVineHeader({ className = "" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 600 44" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full max-w-lg mx-auto ${className}`}
      aria-hidden="true"
    >
      {/* Organic vine path */}
      <path 
        d="M20 22 C 120 12, 180 32, 300 22 C 420 12, 480 32, 580 22" 
        stroke="#6B8871" 
        strokeWidth="1.25" 
        strokeLinecap="round" 
        opacity="0.45"
      />
      {/* Sage leaves along vine */}
      <path d="M85 18 C 80 11, 70 13, 75 20 C 80 22, 87 21, 85 18 Z" fill="#6B8871" opacity="0.6" />
      <path d="M140 24 C 146 31, 156 29, 150 22 C 145 20, 138 21, 140 24 Z" fill="#6B8871" opacity="0.6" />
      <path d="M210 18 C 205 11, 195 13, 200 20 C 205 22, 212 21, 210 18 Z" fill="#6B8871" opacity="0.6" />
      <path d="M265 25 C 272 32, 281 29, 276 23 C 270 21, 263 22, 265 25 Z" fill="#6B8871" opacity="0.6" />
      <path d="M335 18 C 330 11, 320 13, 325 20 C 330 22, 337 21, 335 18 Z" fill="#6B8871" opacity="0.6" />
      <path d="M390 25 C 396 32, 406 30, 401 23 C 395 21, 388 22, 390 25 Z" fill="#6B8871" opacity="0.6" />
      <path d="M460 18 C 455 11, 445 13, 450 20 C 455 22, 462 21, 460 18 Z" fill="#6B8871" opacity="0.6" />
      <path d="M515 25 C 521 32, 531 30, 526 23 C 520 21, 513 22, 515 25 Z" fill="#6B8871" opacity="0.6" />

      {/* Pastel pink blossoms and delicate flower buds */}
      <circle cx="112" cy="16" r="3.5" fill="#F4A8BA" opacity="0.85" />
      <circle cx="112" cy="16" r="1.5" fill="#FFF0F3" />
      
      <circle cx="236" cy="27" r="3.5" fill="#F4A8BA" opacity="0.85" />
      <circle cx="236" cy="27" r="1.5" fill="#FFF0F3" />

      <circle cx="362" cy="15" r="4" fill="#F7B2C2" opacity="0.9" />
      <circle cx="362" cy="15" r="1.5" fill="#FFF0F3" />

      <circle cx="486" cy="28" r="3.5" fill="#F4A8BA" opacity="0.85" />
      <circle cx="486" cy="28" r="1.5" fill="#FFF0F3" />
    </svg>
  );
}

function LeafAndPetalSprig({ className = "w-4 h-4 text-[#D87D94]" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-hidden="true"
    >
      {/* Leaf curve */}
      <path 
        d="M4 20C4 20 7.5 18 11 14.5C14.5 11 18.5 6.5 20.5 3.5C20.5 3.5 16.5 4.5 12 7C7.5 9.5 4 13.5 4 20Z" 
        stroke="#6B8871" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      {/* Central vein */}
      <path 
        d="M11 14.5C8.5 13.5 6.5 11.5 6.5 8.5C9 8.5 11 10.5 12 13.5" 
        stroke="#6B8871" 
        strokeWidth="1.2" 
        strokeLinecap="round" 
      />
      {/* Soft pastel blossom petal */}
      <path 
        d="M14.5 11C14.5 8 16.5 6 19.5 6C19.5 9 17.5 11 14.5 11Z" 
        fill="#F4A8BA" 
        opacity="0.8"
      />
    </svg>
  );
}

function BotanicalPinkDivider() {
  return (
    <div className="flex items-center justify-center gap-3 py-1 opacity-70" aria-hidden="true">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#F2CAD5] to-transparent" />
      <LeafAndPetalSprig className="w-4 h-4" />
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#F2CAD5] to-transparent" />
    </div>
  );
}

export default function App() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const email = 'bilberry.3@osu.edu';
  const phone = '614-403-4065';

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#FFF9FA] text-[#2C2226] font-sans antialiased selection:bg-pink-100 selection:text-pink-900">
      {/* Top pastel pink & botanical ambient rule */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#FBCFE8] via-[#F4A8BA] to-[#BCE0C5]" />

      {/* Main Single Centered Column (max-w-2xl) */}
      <main className="max-w-2xl mx-auto px-6 py-10 sm:py-14 space-y-10">

        {/* Botanical Vine with pink petals */}
        <div className="pt-1">
          <BotanicalVineHeader className="h-7" />
        </div>
        
        {/* 1. Header */}
        <header className="space-y-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h1 className="text-3xl sm:text-4xl font-serif font-medium tracking-tight text-[#241A1E]">
                Shelby Bilberry
              </h1>
              
              {/* Highlight badge for incoming Huntington internship */}
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono text-[#832B45] bg-[#FFF0F4] border border-[#F7C6D2] shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E05378] animate-pulse" />
                Incoming Data Tech Intern @ Huntington Bank
              </span>
            </div>
            
            <p className="text-sm sm:text-[15px] text-[#6A5861] font-normal leading-relaxed">
              B.S. in Data Analytics &amp; Minor in Business at The Ohio State University · Mentorship Coordinator at ACM-W
            </p>
          </div>

          {/* Contact / Links Row (Clean, unboxed links with pastel pink hover accents) */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-[#6A5861] pt-2 border-b border-[#F4D7DF] pb-4">
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#2C2226] hover:text-[#C53F67] transition-colors underline decoration-[#F4A8BA] underline-offset-4"
            >
              <FileText className="w-3.5 h-3.5 text-[#D8728D]" />
              <span>Resume PDF</span>
              <span className="text-[10px]">↗</span>
            </a>
            
            <span className="text-[#E7C6CF]">·</span>

            <a 
              href="https://linkedin.com/in/shelby-bilberry" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#2C2226] hover:text-[#C53F67] transition-colors underline decoration-[#F4A8BA] underline-offset-4"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#D8728D]" />
              <span>LinkedIn</span>
              <span className="text-[10px]">↗</span>
            </a>

            <span className="text-[#E7C6CF]">·</span>

            {/* Email with copy helper */}
            <div className="inline-flex items-center gap-1">
              <a 
                href={`mailto:${email}`}
                className="inline-flex items-center gap-1 text-[#2C2226] hover:text-[#C53F67] transition-colors underline decoration-[#F4A8BA] underline-offset-4"
              >
                <Mail className="w-3.5 h-3.5 text-[#D8728D]" />
                <span>{email}</span>
                <span className="text-[10px]">↗</span>
              </a>
              <button 
                onClick={handleCopyEmail}
                title="Copy email to clipboard"
                className="p-1 rounded text-[#7D6670] hover:text-[#2C2226] hover:bg-[#FCECF0] transition-colors"
                aria-label="Copy email address"
              >
                {copiedEmail ? <Check className="w-3 h-3 text-[#3B6B44]" /> : <Copy className="w-3 h-3" />}
              </button>
            </div>

            <span className="text-[#E7C6CF]">·</span>

            {/* Phone with copy helper */}
            <div className="inline-flex items-center gap-1">
              <a 
                href={`tel:${phone.replace(/-/g, '')}`}
                className="inline-flex items-center gap-1 text-[#2C2226] hover:text-[#C53F67] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#D8728D]" />
                <span>{phone}</span>
              </a>
              <button 
                onClick={handleCopyPhone}
                title="Copy phone to clipboard"
                className="p-1 rounded text-[#7D6670] hover:text-[#2C2226] hover:bg-[#FCECF0] transition-colors"
                aria-label="Copy phone number"
              >
                {copiedPhone ? <Check className="w-3 h-3 text-[#3B6B44]" /> : <Copy className="w-3 h-3" />}
              </button>
            </div>

            <span className="text-[#E7C6CF]">·</span>

            <span className="inline-flex items-center gap-1 text-[#6A5861]">
              <MapPin className="w-3.5 h-3.5 text-[#A58B95]" />
              Columbus, OH
            </span>
          </div>
        </header>

        {/* 2. Bio */}
        <section className="space-y-2">
          <p className="text-sm sm:text-[15px] leading-relaxed text-[#352B30] font-normal">
            Data Analytics student at The Ohio State University and incoming Data Technology Intern on the Risk Team at Huntington Bank. Mentorship coordinator with ACM-W and youth coding instructor passionate about quantitative modeling, risk analytics, and creating collaborative tech communities.
          </p>
        </section>

        {/* 3. Education & Academic Honors */}
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-[#F4D7DF] pb-2">
            <div className="flex items-center gap-2">
              <LeafAndPetalSprig className="w-4 h-4 text-[#D8728D]" />
              <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#6A5861]">
                Education &amp; Academic Honors
              </h2>
            </div>
            <span className="text-[11px] font-mono text-[#8C747F]">2024 — 2029</span>
          </div>

          <div className="space-y-4">
            {/* The Ohio State University */}
            <div className="space-y-2 bg-[#FFF4F7]/80 p-4 rounded-lg border border-[#F4D7DF]">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-base font-serif font-medium text-[#241A1E]">
                    The Ohio State University
                  </h3>
                  <p className="text-xs text-[#5D4B53] font-medium mt-0.5">
                    Bachelor of Science: Major in Data Analytics, Minor in Business
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-xs font-mono text-[#6A5861]">Expected Graduation: May 2029</p>
                  <p className="text-[11px] font-mono text-[#8C747F]">Columbus, Ohio</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono bg-[#FFF0F4] text-[#8C2C47] border border-[#F7C6D2] font-medium">
                  <Award className="w-3 h-3 text-[#D8728D]" />
                  GPA: 3.69
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[11px] font-mono bg-[#F2F7F3] text-[#2F4D35] border border-[#CFDFD2] font-medium">
                  Dean’s List
                </span>
              </div>

              <p className="text-xs text-[#5D4B53] pt-1 leading-relaxed">
                <strong className="font-mono text-[11px] font-medium text-[#2C2226]">Relevant Coursework:</strong> Introduction to Probability, Software I, Foundations of Accounting, Macroeconomics.
              </p>
            </div>

            {/* National African American Recognition Program */}
            <div className="bg-[#FFF8FA] p-3.5 rounded-lg border border-[#F4D7DF] flex items-start justify-between gap-3">
              <div className="space-y-1">
                <h4 className="text-xs font-semibold text-[#241A1E] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#D8728D]" />
                  National African American Recognition Program
                </h4>
                <p className="text-xs text-[#6A5861] leading-relaxed">
                  Recipient · Earned national academic recognition awarded to top-performing students based on exceptional performance in AP/Honors coursework and standardized exams.
                </p>
              </div>
              <span className="text-xs font-mono text-[#7D6670] shrink-0">August 2024</span>
            </div>

            {/* New Albany High School */}
            <div className="px-3.5 py-2 rounded border border-[#F7DFE6] text-xs text-[#6A5861] flex flex-wrap items-center justify-between gap-2">
              <span className="font-medium text-[#2C2226]">New Albany High School — High School Diploma (Graduated with Honors)</span>
              <span className="font-mono text-[11px] text-[#8C747F]">New Albany, Ohio</span>
            </div>
          </div>
        </section>

        <BotanicalPinkDivider />

        {/* 4. Experience & Leadership: Distinctly Separated */}
        <section className="space-y-8">
          
          {/* Main Section Header */}
          <div className="flex items-center justify-between border-b border-[#F4D7DF] pb-2">
            <div className="flex items-center gap-2">
              <LeafAndPetalSprig className="w-4 h-4 text-[#D8728D]" />
              <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#6A5861]">
                Experience &amp; Leadership
              </h2>
            </div>
            <span className="text-[11px] font-mono text-[#8C747F]">Work &amp; Campus</span>
          </div>

          {/* Group 1: Work Experience (Now includes Huntington Bank & The Morning Ritual) */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Building2 className="w-3.5 h-3.5 text-[#C53F67]" />
              <h3 className="text-xs font-mono font-semibold text-[#8C2C47] tracking-wide uppercase">
                Work Experience
              </h3>
            </div>

            <div className="space-y-6 pl-2 sm:pl-3 border-l-2 border-[#F7C6D2]">
              
              {/* Role 1: Huntington National Bank (Incoming Data Tech Intern) */}
              <article className="space-y-2 pl-2">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-semibold text-[#241A1E]">
                        Huntington National Bank
                      </h4>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-[#FFF0F4] text-[#A63254] border border-[#F7C6D2]">
                        Incoming Internship
                      </span>
                    </div>
                    <p className="text-xs font-medium text-[#C53F67]">
                      Data Technology Intern — Risk Team
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-xs font-mono text-[#6A5861]">June 2027 – July 2027</p>
                    <p className="text-[11px] font-mono text-[#8C747F]">Columbus, Ohio</p>
                  </div>
                </div>

                <ul className="text-xs text-[#352B30] space-y-1.5 pl-4 list-disc marker:text-[#E89BAE]">
                  <li className="leading-relaxed">
                    Analyze enterprise risk datasets and validate data pipeline integrity to support quantitative risk modeling, credit exposure monitoring, and regulatory compliance frameworks.
                  </li>
                  <li className="leading-relaxed">
                    Collaborate with cross-functional data engineers and risk analysts to streamline audit datasets, build intuitive visualization dashboards, and translate complex risk metrics into actionable business insights.
                  </li>
                </ul>
              </article>

              {/* Role 2: The Morning Ritual / The Goat */}
              <article className="space-y-2 pl-2 pt-3 border-t border-dashed border-[#F4D7DF]">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="text-sm font-semibold text-[#241A1E]">
                      The Morning Ritual / The Goat
                    </h4>
                    <p className="text-xs font-medium text-[#7D5A4C]">Barista and Host</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-xs font-mono text-[#6A5861]">January 2024 – August 2026</p>
                    <p className="text-[11px] font-mono text-[#8C747F]">New Albany, Ohio</p>
                  </div>
                </div>

                <ul className="text-xs text-[#352B30] space-y-1.5 pl-4 list-disc marker:text-[#E89BAE]">
                  <li className="leading-relaxed">
                    Provided customer service in a coffee shop and restaurant, addressing diverse guest needs to create a welcoming and positive experience.
                  </li>
                  <li className="leading-relaxed">
                    Trained new team members on beverage preparation, order management, and guest service standards, ensuring consistency and building a collaborative work environment.
                  </li>
                </ul>
              </article>

            </div>
          </div>

          {/* Group 2: College Leadership & Campus Involvement (Clearly Separated) */}
          <div className="space-y-4 pt-4 border-t border-[#F4D7DF]">
            <div className="flex items-center gap-2">
              <Users className="w-3.5 h-3.5 text-[#4E7754]" />
              <h3 className="text-xs font-mono font-semibold text-[#3D5E43] tracking-wide uppercase">
                College Leadership &amp; Campus Involvement
              </h3>
            </div>

            <div className="space-y-5 pl-2 sm:pl-3 border-l-2 border-[#D2E4D5]">
              
              {/* Role 1: ACM-W Mentorship Coordinator */}
              <article className="space-y-2 pl-2">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="text-sm font-semibold text-[#241A1E]">
                      Association of Computing Machinery – Women’s Chapter
                    </h4>
                    <p className="text-xs font-medium text-[#4E7754]">Mentorship Coordinator</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-xs font-mono text-[#6A5861]">May 2025 – Present</p>
                    <p className="text-[11px] font-mono text-[#8C747F]">New Albany / Columbus, Ohio</p>
                  </div>
                </div>

                <ul className="text-xs text-[#352B30] space-y-1.5 pl-4 list-disc marker:text-[#7EA784]">
                  <li className="leading-relaxed">
                    Coordinate mentor-mentee pairings for <strong className="font-semibold text-[#241A1E]">25+ ACM-W members</strong>, fostering professional development, academic support, and community engagement.
                  </li>
                  <li className="leading-relaxed">
                    Organize <strong className="font-semibold text-[#241A1E]">12 mentorship events</strong>, networking opportunities, and program initiatives to strengthen member connections and increase participation within the chapter.
                  </li>
                </ul>
              </article>

              {/* Role 2: Buck-i-Code (Volunteer Coding Mentor) */}
              <article className="space-y-2 pl-2 pt-2 border-t border-dashed border-[#E5DFD5]">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="text-sm font-semibold text-[#241A1E]">
                      Buck-i-Code
                    </h4>
                    <p className="text-xs font-medium text-[#4E7754]">Volunteer Coding Mentor</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-xs font-mono text-[#6A5861]">March 2026</p>
                    <p className="text-[11px] font-mono text-[#8C747F]">Columbus, Ohio</p>
                  </div>
                </div>

                <ul className="text-xs text-[#352B30] space-y-1.5 pl-4 list-disc marker:text-[#7EA784]">
                  <li className="leading-relaxed">
                    Mentored <strong className="font-semibold text-[#241A1E]">15+ students aged 10–15</strong> in foundational programming principles, guiding them through hands-on Python, HTML, and block-based coding workshops.
                  </li>
                  <li className="leading-relaxed">
                    Selected to continue participating as a dedicated program volunteer in spring 2027.
                  </li>
                </ul>
              </article>

              {/* Role 3: Big Data and Analytics Association (Member) */}
              <article className="space-y-2 pl-2 pt-2 border-t border-dashed border-[#E5DFD5]">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="text-sm font-semibold text-[#241A1E]">
                      Big Data and Analytics Association
                    </h4>
                    <p className="text-xs font-medium text-[#4E7754]">Member</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-xs font-mono text-[#6A5861]">August 2025 – Present</p>
                    <p className="text-[11px] font-mono text-[#8C747F]">Columbus, Ohio</p>
                  </div>
                </div>

                <ul className="text-xs text-[#352B30] space-y-1.5 pl-4 list-disc marker:text-[#7EA784]">
                  <li className="leading-relaxed">
                    Engage in corporate tech talks and hands-on workshops to gain industry insights and strengthen core skills in data analysis and visualization.
                  </li>
                  <li className="leading-relaxed">
                    Team up with peers to research datasets and develop an upcoming data analytics project using Python.
                  </li>
                </ul>
              </article>

            </div>
          </div>

        </section>

        <BotanicalPinkDivider />

        {/* 5. Skills (Directly from Resume) */}
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-[#F4D7DF] pb-2">
            <div className="flex items-center gap-2">
              <LeafAndPetalSprig className="w-4 h-4 text-[#D8728D]" />
              <h2 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#6A5861]">
                Skills &amp; Competencies
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            {/* Technical Skills */}
            <div className="bg-[#FFF4F7]/80 p-4 rounded-lg border border-[#F4D7DF] space-y-2.5">
              <div className="flex items-center gap-2 text-[#8C2C47]">
                <BookOpen className="w-3.5 h-3.5 text-[#D8728D]" />
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider">
                  Technical Skills
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-[#2C2226]">
                {['Java', 'R', 'Excel', 'CoPilot', 'Word', 'PowerPoint'].map((skill) => (
                  <span 
                    key={skill}
                    className="bg-[#FFFFFF] px-2.5 py-1 rounded text-[#38262E] border border-[#F4D0D9] shadow-2xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-[#F8FAF8] p-4 rounded-lg border border-[#DCE8DE] space-y-2.5">
              <div className="flex items-center gap-2 text-[#3D5E43]">
                <Compass className="w-3.5 h-3.5 text-[#547559]" />
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider">
                  Soft Skills
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-[#2C2226]">
                {['Communication', 'Adaptability', 'Leadership', 'Initiative', 'Organization'].map((skill) => (
                  <span 
                    key={skill}
                    className="bg-[#FFFFFF] px-2.5 py-1 rounded text-[#2E4033] border border-[#D5E4D8] shadow-2xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. Footer */}
        <footer className="pt-6 border-t border-[#F4D7DF] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#7D6670]">
          <div className="flex items-center gap-2">
            <LeafAndPetalSprig className="w-3.5 h-3.5 text-[#D8728D]" />
            <span className="font-medium text-[#241A1E]">Shelby Bilberry</span>
            <span>·</span>
            <span>Data Analytics @ The Ohio State University</span>
          </div>

          <div className="flex items-center gap-3 font-mono text-[11px]">
            <a 
              href="#top" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-[#241A1E] transition-colors"
            >
              Back to top ↑
            </a>
          </div>
        </footer>

      </main>
    </div>
  );
}
