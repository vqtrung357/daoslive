export const Footer = () => {
  return (
    <footer className="border-t border-fairy-lavender/10 mt-20 py-8">
      <div className="container mx-auto text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Fairy Launch. All rights reserved.</p>
        <p className="mt-2 text-sm">A magical UI demo built with love.</p>
      </div>
    </footer>
  );
};