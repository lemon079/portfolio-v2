import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="max-w-4xl mx-auto px-16 py-12 space-y-8">
        {/* Divider */}
        <div className="border-t border-text-subtle/30" />
        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-text-muted text-xs">
          <p>&copy; {currentYear} Bilal Tahir. All rights reserved.</p>
          <p>
            Designed & Built with ♡
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
