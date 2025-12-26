const getCurrentYear = new Date().getFullYear();
function Footer() {
  return (
   <div className="text-center py-4 bg-secondary text-white">
     &copy; {getCurrentYear} Sudeshkar. All rights reserved.
   </div>
  );
}
export default Footer;