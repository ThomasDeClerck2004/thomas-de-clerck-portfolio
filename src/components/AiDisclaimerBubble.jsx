import { useState } from "react";

export default function AiDisclaimerBubble() {
  const [open, setOpen] = useState(false);

  return (
    <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label="AI disclaimer"
        className={`group fixed right-4 bottom-5 z-50 flex items-center overflow-hidden border border-[#2a2a2a] bg-[#1a1a1a]/95 text-gray-300 shadow-lg shadow-black/30 backdrop-blur-md transition-all duration-300 hover:border-[#009b5f] hover:text-white ${
            open
            ? "max-w-[calc(100vw-2rem)] px-4 py-3 [border-radius:1rem]"
            : "h-12 p-0 [border-radius:999px]"
        }`}
        >
        {open ? (
        <span className="block w-[18rem] max-w-[calc(100vw-4rem)] text-left text-xs sm:text-sm leading-relaxed">
        Some texts and supporting documents in this portfolio were created with AI assistance.
        All content was reviewed and approved by me.
        </span>
        ) : (
            <>
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#009b5f] text-xs font-bold text-white">
                AI
            </span>

            <span className="w-0 overflow-hidden whitespace-nowrap text-xs font-medium opacity-0 transition-all duration-300 group-hover:w-[4.7rem] group-hover:pl-2 group-hover:pr-3 group-hover:opacity-100">
                Disclaimer
            </span>
            </>
        )}
    </button>
  );
}