export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="text-white p-4">
      <div className="container mx-auto">
        <hr className="text-[#009b5f] p-1" />
        <p className="text-center text-gray-400 text-sm">
          © {year} Thomas De Clerck. All rights reserved.
        </p>
        <p className="text-center text-gray-400 text-sm pb-2">
          Some texts and supporting documents in this portfolio were created with AI assistance. All content was reviewed, and approved by me.
        </p>
      </div>
    </footer>
  );
}