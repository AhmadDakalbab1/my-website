import svgPaths from "./svg-ja2gi46o25";

// Replace figma:asset imports with Unsplash images
const imgPlaceholderImage = "https://images.unsplash.com/photo-1588268393007-068bc70a443d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyZ2VuY3klMjBicmVha2luZyUyMG5ld3MlMjBkaXNhc3RlcnxlbnwxfHx8fDE3NjE1NjM4NDh8MA&ixlib=rb-4.1.0&q=80&w=1080";
const imgPlaceholderImage1 = "https://images.unsplash.com/photo-1760129957276-248197c00497?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXNhc3RlciUyMGNyaXNpcyUyMGpvdXJuYWxpc218ZW58MXx8fHwxNzYxNTY0MjMwfDA&ixlib=rb-4.1.0&q=80&w=1080";

function LogoWide1() {
  return (
    <div className="absolute h-[36px] left-[calc(50%-0.333px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[70px]" data-name="Logo-wide 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 36">
        <g clipPath="url(#clip0_3_665)" id="Logo-wide 1">
          <path d={svgPaths.p2a3a6680} fill="var(--fill-0, #0C0C09)" id="Vector" />
          <path d={svgPaths.p611b180} fill="var(--fill-0, #0C0C09)" id="Vector_2" />
          <path d={svgPaths.pf19e700} fill="var(--fill-0, #0C0C09)" id="Vector_3" />
          <path d={svgPaths.p3342b000} fill="var(--fill-0, #0C0C09)" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.p16e9bf00} fill="var(--fill-0, #0C0C09)" fillRule="evenodd" id="Vector_5" />
        </g>
        <defs>
          <clipPath id="clip0_3_665">
            <rect fill="white" height="36" width="70" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CompanyLogo() {
  return (
    <div className="h-[36px] overflow-clip relative shrink-0 w-[84px]" data-name="Company Logo">
      <LogoWide1 />
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Content">
      <CompanyLogo />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Link">
      <p className="font-['Cabin:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0c0c09] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Crisis
      </p>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Link">
      <p className="font-['Cabin:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0c0c09] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Reporting
      </p>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Link">
      <p className="font-['Cabin:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0c0c09] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tools
      </p>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Chevron Down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Chevron Down">
          <path clipRule="evenodd" d={svgPaths.pee47f00} fill="var(--fill-0, #0C0C09)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function NavLinkDropdown() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Nav Link Dropdown">
      <p className="font-['Cabin:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0c0c09] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Resources
      </p>
      <ChevronDown />
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Link">
      <NavLinkDropdown />
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Column">
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#f65d5d] box-border content-stretch flex gap-[8px] items-center justify-center px-[10px] py-[4px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#f65d5d] border-solid inset-[-1px] pointer-events-none" />
      <p className="font-['Cabin:Medium',_sans-serif] font-medium leading-[1.5] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Explore
      </p>
    </div>
  );
}

function Actions() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Actions">
      <Button />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[32px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Content />
      <Column />
      <Actions />
    </div>
  );
}

function Navbar2() {
  return (
    <div className="bg-white h-[72px] relative shrink-0 w-full" data-name="Navbar / 2 /">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col h-[72px] items-center justify-center px-[64px] py-0 relative w-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

function TaglineWrapper() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Tagline Wrapper">
      <p className="font-['Cabin:SemiBold',_sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#0c0c09] text-[16px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Urgent
      </p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-[#0c0c09] text-center w-full" data-name="Content">
      <p className="font-['Aleo:Medium',_sans-serif] font-medium leading-[1.2] relative shrink-0 text-[72px] tracking-[-0.72px] w-full">Crisis reporting essentials</p>
      <p className="font-['Cabin:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Navigate complex disaster scenarios with precision and compassion. Understand the critical steps for responsible and effective reporting.
      </p>
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper />
      <Content1 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#f65d5d] box-border content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[6px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#f65d5d] border-solid inset-[-1px] pointer-events-none" />
      <p className="font-['Cabin:Medium',_sans-serif] font-medium leading-[1.5] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Download
      </p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[rgba(12,12,9,0.05)] box-border content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[6px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-[-1px] pointer-events-none" />
      <p className="font-['Cabin:Medium',_sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c0c09] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Learn
      </p>
    </div>
  );
}

function Actions1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Actions">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Component">
      <SectionTitle />
      <Actions1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Component />
    </div>
  );
}

function Header62() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Header / 62 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[80px] items-center px-[64px] py-[112px] relative w-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function BreakingNews() {
  return (
    <div className="relative shrink-0 size-[80px]" data-name="breaking_news">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="breaking_news">
          <path d={svgPaths.p3be4a670} fill="var(--fill-0, #0C0C09)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TaglineWrapper1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
      <p className="font-['Cabin:SemiBold',_sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#0c0c09] text-[16px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Quick
      </p>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-[#0c0c09] text-center w-full" data-name="Content">
      <p className="font-['Aleo:Medium',_sans-serif] font-medium leading-[1.2] relative shrink-0 text-[52px] tracking-[-0.52px] w-full">Breaking-news checklist for journalists</p>
      <p className="font-['Cabin:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        A concise, practical guide developed by Internews and BBC. Essential protocols for accurate and ethical reporting in crisis moments.
      </p>
    </div>
  );
}

function SectionTitle1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper1 />
      <Content2 />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[rgba(12,12,9,0.05)] relative shrink-0" data-name="Button">
      <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[inherit]">
        <p className="font-['Cabin:Medium',_sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c0c09] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Preview
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-[-1px] pointer-events-none" />
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chevron_right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron_right">
          <path d={svgPaths.p116eba00} fill="var(--fill-0, #0C0C09)" id="Vector" stroke="var(--stroke-0, #0C0C09)" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative shrink-0" data-name="Button">
      <p className="font-['Cabin:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0c0c09] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Access
      </p>
      <ChevronRight />
    </div>
  );
}

function Actions2() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Actions">
      <Button3 />
      <Button4 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Content">
      <BreakingNews />
      <SectionTitle1 />
      <Actions2 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Content3 />
      <div className="aspect-[1280/738] relative shrink-0 w-full" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPlaceholderImage} />
      </div>
    </div>
  );
}

function Layout145() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Layout / 145 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[80px] items-center px-[64px] py-[112px] relative w-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function SelfCare() {
  return (
    <div className="relative shrink-0 size-[80px]" data-name="self_care">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="self_care">
          <path d={svgPaths.p15814a80} fill="var(--fill-0, #0C0C09)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TaglineWrapper2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
      <p className="font-['Cabin:SemiBold',_sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#0c0c09] text-[16px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Sensitive
      </p>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-[#0c0c09] text-center w-full" data-name="Content">
      <p className="font-['Aleo:Medium',_sans-serif] font-medium leading-[1.2] relative shrink-0 text-[52px] tracking-[-0.52px] w-full">Interviewing survivors with respect and care</p>
      <p className="font-['Cabin:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Navigate the delicate process of survivor interviews. Learn trauma-informed techniques that prioritize human dignity and emotional safety.
      </p>
    </div>
  );
}

function SectionTitle2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper2 />
      <Content4 />
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[rgba(12,12,9,0.05)] relative shrink-0" data-name="Button">
      <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[inherit]">
        <p className="font-['Cabin:Medium',_sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c0c09] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Guide
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-[-1px] pointer-events-none" />
    </div>
  );
}

function ChevronRight1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chevron_right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron_right">
          <path d={svgPaths.p116eba00} fill="var(--fill-0, #0C0C09)" id="Vector" stroke="var(--stroke-0, #0C0C09)" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative shrink-0" data-name="Button">
      <p className="font-['Cabin:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0c0c09] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Resources
      </p>
      <ChevronRight1 />
    </div>
  );
}

function Actions3() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Actions">
      <Button5 />
      <Button6 />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Content">
      <SelfCare />
      <SectionTitle2 />
      <Actions3 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Content5 />
      <div className="aspect-[1280/738] relative shrink-0 w-full" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPlaceholderImage} />
      </div>
    </div>
  );
}

function Layout146() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Layout / 145 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[80px] items-center px-[64px] py-[112px] relative w-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function TaglineWrapper3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
      <p className="font-['Cabin:SemiBold',_sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#0c0c09] text-[16px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Comprehensive
      </p>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-[#0c0c09] text-center w-full" data-name="Content">
      <p className="font-['Aleo:Medium',_sans-serif] font-medium leading-[1.2] relative shrink-0 text-[52px] tracking-[-0.52px] w-full">Hazard reporting playbooks</p>
      <p className="font-['Cabin:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Detailed guides for reporting across multiple disaster scenarios. Understand critical communication strategies before, during, and after emergencies.
      </p>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Content">
      <TaglineWrapper3 />
      <Content6 />
    </div>
  );
}

function TabLink() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative self-stretch shrink-0 z-[6]" data-name="Tab link">
      <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(12,12,9,0.15)] border-solid bottom-0 left-0 pointer-events-none right-[-1px] top-0" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-center justify-center px-[32px] py-[24px] relative size-full">
          <p className="font-['Aleo:Medium',_sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#0c0c09] text-[22px] text-center tracking-[-0.22px] w-full">Floods</p>
        </div>
      </div>
    </div>
  );
}

function TabLink1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative self-stretch shrink-0 z-[5]" data-name="Tab link">
      <div aria-hidden="true" className="absolute border-[0px_1px_1px_0px] border-[rgba(12,12,9,0.15)] border-solid bottom-[-1px] left-0 pointer-events-none right-[-1px] top-0" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-center justify-center px-[32px] py-[24px] relative size-full">
          <p className="font-['Aleo:Medium',_sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#0c0c09] text-[22px] text-center tracking-[-0.22px] w-full">Heat</p>
        </div>
      </div>
    </div>
  );
}

function TabLink2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative self-stretch shrink-0 z-[4]" data-name="Tab link">
      <div aria-hidden="true" className="absolute border-[0px_1px_1px_0px] border-[rgba(12,12,9,0.15)] border-solid bottom-[-1px] left-0 pointer-events-none right-[-1px] top-0" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-center justify-center px-[32px] py-[24px] relative size-full">
          <p className="font-['Aleo:Medium',_sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#0c0c09] text-[22px] text-center tracking-[-0.22px] w-full">Wildfire</p>
        </div>
      </div>
    </div>
  );
}

function TabLink3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative self-stretch shrink-0 z-[3]" data-name="Tab link">
      <div aria-hidden="true" className="absolute border-[0px_1px_1px_0px] border-[rgba(12,12,9,0.15)] border-solid bottom-[-1px] left-0 pointer-events-none right-[-1px] top-0" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-center justify-center px-[32px] py-[24px] relative size-full">
          <p className="font-['Aleo:Medium',_sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#0c0c09] text-[22px] text-center tracking-[-0.22px] w-full">Storms</p>
        </div>
      </div>
    </div>
  );
}

function TabLink4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative self-stretch shrink-0 z-[2]" data-name="Tab link">
      <div aria-hidden="true" className="absolute border-[0px_1px_1px_0px] border-[rgba(12,12,9,0.15)] border-solid bottom-[-1px] left-0 pointer-events-none right-[-1px] top-0" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-center justify-center px-[32px] py-[24px] relative size-full">
          <p className="font-['Aleo:Medium',_sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#0c0c09] text-[22px] text-center tracking-[-0.22px] w-full">Earthquakes</p>
        </div>
      </div>
    </div>
  );
}

function TabLink5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative self-stretch shrink-0 z-[1]" data-name="Tab link">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(12,12,9,0.15)] border-solid bottom-[-1px] left-0 pointer-events-none right-0 top-0" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-center justify-center px-[32px] py-[24px] relative size-full">
          <p className="font-['Aleo:Medium',_sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#0c0c09] text-[22px] text-center tracking-[-0.22px] w-full">Tsunamis</p>
        </div>
      </div>
    </div>
  );
}

function TabsMenu() {
  return (
    <div className="content-stretch flex isolate items-start relative shrink-0 w-full z-[2]" data-name="Tabs Menu">
      <TabLink />
      <TabLink1 />
      <TabLink2 />
      <TabLink3 />
      <TabLink4 />
      <TabLink5 />
    </div>
  );
}

function TaglineWrapper4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
      <p className="font-['Cabin:SemiBold',_sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#0c0c09] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Preparedness
      </p>
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 text-[#0c0c09] w-full" data-name="Content">
      <p className="font-['Aleo:Medium',_sans-serif] font-medium leading-[1.2] relative shrink-0 text-[44px] tracking-[-0.44px] w-full">Reporting strategies for each disaster type</p>
      <p className="font-['Cabin:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Understand unique challenges and communication protocols for specific hazards. Develop targeted reporting approaches.
      </p>
    </div>
  );
}

function ContentTop() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content Top">
      <TaglineWrapper4 />
      <Content8 />
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[rgba(12,12,9,0.05)] relative shrink-0" data-name="Button">
      <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[inherit]">
        <p className="font-['Cabin:Medium',_sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c0c09] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Learn
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-[-1px] pointer-events-none" />
    </div>
  );
}

function ChevronRight2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chevron_right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron_right">
          <path d={svgPaths.p116eba00} fill="var(--fill-0, #0C0C09)" id="Vector" stroke="var(--stroke-0, #0C0C09)" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative shrink-0" data-name="Button">
      <p className="font-['Cabin:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0c0c09] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Download
      </p>
      <ChevronRight2 />
    </div>
  );
}

function Actions4() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Actions">
      <Button7 />
      <Button8 />
    </div>
  );
}

function Content9() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[32px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <ContentTop />
      <Actions4 />
    </div>
  );
}

function TabPane1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Tab Pane 1">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[80px] items-center p-[48px] relative w-full">
          <Content9 />
          <div className="aspect-[552/552] basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Placeholder Image">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPlaceholderImage1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function TabsContent() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full z-[1]" data-name="Tabs Content">
      <TabPane1 />
    </div>
  );
}

function TabContainer() {
  return (
    <div className="bg-[#f2f2f2] relative shrink-0 w-full" data-name="Tab container">
      <div className="content-stretch flex flex-col isolate items-center justify-center overflow-clip relative rounded-[inherit] w-full">
        <TabsMenu />
        <TabsContent />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(12,12,9,0.15)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Content7 />
      <TabContainer />
    </div>
  );
}

function Layout507() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Layout / 507 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[80px] items-center px-[64px] py-[112px] relative w-full">
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function TaglineWrapper5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
      <p className="font-['Cabin:SemiBold',_sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#0c0c09] text-[16px] text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Strategic
      </p>
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-[#0c0c09] text-center w-full" data-name="Content">
      <p className="font-['Aleo:Medium',_sans-serif] font-medium leading-[1.2] relative shrink-0 text-[52px] tracking-[-0.52px] w-full">Broadcast formats and public service announcements</p>
      <p className="font-['Cabin:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Develop clear, impactful communication strategies for crisis communication.
      </p>
    </div>
  );
}

function SectionTitle3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center max-w-[768px] relative shrink-0 w-full" data-name="Section Title">
      <TaglineWrapper5 />
      <Content10 />
    </div>
  );
}

function TaglineWrapper6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tagline Wrapper">
      <p className="font-['Cabin:SemiBold',_sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#0c0c09] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Media
      </p>
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 text-[#0c0c09] w-full" data-name="Content">
      <p className="font-['Aleo:Medium',_sans-serif] font-medium leading-[1.2] relative shrink-0 text-[44px] tracking-[-0.44px] w-full">Effective communication techniques</p>
      <p className="font-['Cabin:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Create compelling narratives that inform and engage audiences during critical moments. Understand the power of strategic messaging.
      </p>
    </div>
  );
}

function ContentTop1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Content Top">
      <TaglineWrapper6 />
      <Content11 />
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[rgba(12,12,9,0.05)] relative shrink-0" data-name="Button">
      <div className="box-border content-stretch flex gap-[8px] items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[inherit]">
        <p className="font-['Cabin:Medium',_sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#0c0c09] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
          Explore
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-[-1px] pointer-events-none" />
    </div>
  );
}

function ChevronRight3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="chevron_right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron_right">
          <path d={svgPaths.p116eba00} fill="var(--fill-0, #0C0C09)" id="Vector" stroke="var(--stroke-0, #0C0C09)" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center overflow-clip relative shrink-0" data-name="Button">
      <p className="font-['Cabin:Regular',_sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#0c0c09] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Templates
      </p>
      <ChevronRight3 />
    </div>
  );
}

function Actions5() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Actions">
      <Button9 />
      <Button10 />
    </div>
  );
}

function Content12() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Content">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] items-start justify-center p-[48px] relative size-full">
          <ContentTop1 />
          <Actions5 />
        </div>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-end justify-center min-h-px min-w-px relative shrink-0" data-name="Image">
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Placeholder Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPlaceholderImage1} />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="basis-0 bg-[#f2f2f2] grow h-[640px] min-h-px min-w-px relative shrink-0" data-name="Card">
      <div className="content-stretch flex h-[640px] items-start overflow-clip relative rounded-[inherit] w-full">
        <Content12 />
        <Image />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(12,12,9,0.15)] border-solid inset-[-1px] pointer-events-none" />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Row">
      <Card />
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Component">
      <Row />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-center max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <SectionTitle3 />
      <Component1 />
    </div>
  );
}

function Layout358() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Layout / 358 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[80px] items-center px-[64px] py-[112px] relative w-full">
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function LogoWide2() {
  return (
    <div className="absolute h-[36px] left-[calc(50%-0.333px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[70px]" data-name="Logo-wide 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 36">
        <g clipPath="url(#clip0_3_665)" id="Logo-wide 1">
          <path d={svgPaths.p2a3a6680} fill="var(--fill-0, #0C0C09)" id="Vector" />
          <path d={svgPaths.p611b180} fill="var(--fill-0, #0C0C09)" id="Vector_2" />
          <path d={svgPaths.pf19e700} fill="var(--fill-0, #0C0C09)" id="Vector_3" />
          <path d={svgPaths.p3342b000} fill="var(--fill-0, #0C0C09)" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.p16e9bf00} fill="var(--fill-0, #0C0C09)" fillRule="evenodd" id="Vector_5" />
        </g>
        <defs>
          <clipPath id="clip0_3_665">
            <rect fill="white" height="36" width="70" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CompanyLogo1() {
  return (
    <div className="h-[36px] overflow-clip relative shrink-0 w-[84px]" data-name="Company Logo">
      <LogoWide2 />
    </div>
  );
}

function Logo() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Logo">
      <CompanyLogo1 />
    </div>
  );
}

function Links() {
  return (
    <div className="content-stretch flex font-['Cabin:SemiBold',_sans-serif] font-semibold gap-[32px] items-start justify-center leading-[1.5] relative shrink-0 text-[#0c0c09] text-[14px] text-nowrap whitespace-pre" data-name="Links">
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        About
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Resources
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Training
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Contact
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Support
      </p>
    </div>
  );
}

function Facebook() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Facebook">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Facebook">
          <path d={svgPaths.p2ed8fe00} fill="var(--fill-0, #0C0C09)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Instagram() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Instagram">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Instagram">
          <path clipRule="evenodd" d={svgPaths.p3f3f55f0} fill="var(--fill-0, #0C0C09)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function X() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="X">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="X">
          <path d={svgPaths.p214d7500} fill="var(--fill-0, #0C0C09)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LinkedIn() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="LinkedIn">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Instagram">
          <path clipRule="evenodd" d={svgPaths.p3f3f55f0} fill="var(--fill-0, #0C0C09)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Youtube() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Youtube">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Youtube">
          <path d={svgPaths.p35f23f00} fill="var(--fill-0, #0C0C09)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Social Links">
      <Facebook />
      <Instagram />
      <X />
      <LinkedIn />
      <Youtube />
    </div>
  );
}

function Content13() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full" data-name="Content">
      <Logo />
      <Links />
      <SocialLinks />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex font-['Cabin:Regular',_sans-serif] font-normal gap-[24px] items-start leading-[1.5] relative shrink-0 text-[#0c0c09] text-[14px] text-nowrap whitespace-pre" data-name="Row">
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        © 2024 Media Toolkit for Disaster Reporting
      </p>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid relative shrink-0 underline" style={{ fontVariationSettings: "'wdth' 100" }}>
        Privacy policy
      </p>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid relative shrink-0 underline" style={{ fontVariationSettings: "'wdth' 100" }}>
        Terms of service
      </p>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid relative shrink-0 underline" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cookie settings
      </p>
    </div>
  );
}

function Credits() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Credits">
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(12, 12, 9, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 1">
            <line id="Divider" stroke="var(--stroke-0, #0C0C09)" strokeOpacity="0.15" x2="1280" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Row1 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <Content13 />
      <Credits />
    </div>
  );
}

function Footer4() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Footer / 4 /">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[80px] items-center px-[64px] py-[80px] relative w-full">
          <Container6 />
        </div>
      </div>
    </div>
  );
}

export default function CrisisReportingDesktop() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Crisis Reporting • Desktop">
      <Navbar2 />
      <Header62 />
      <Layout145 />
      <Layout146 />
      <Layout507 />
      <Layout358 />
      <Footer4 />
    </div>
  );
}