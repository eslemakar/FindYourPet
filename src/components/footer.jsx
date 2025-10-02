// Footer.jsx
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#27277d] text-gray-300 py-4 border-t border-gray-600">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* Sol kısım - Logo / Site Adı */}
        <div className="mb-4 md:mb-0 ">
          <h1 className="text-2xl font-bold text-white">FindYourPet</h1>
          <p className="text-sm text-gray-400">
            Kayıp ve bulunan hayvanlar için güvenilir platform! 
          </p>
        </div>

        {/* Orta kısım - Linkler */}
        <div className="flex gap-6 text-sm mb-4 md:mb-0">
          <a href="#" className="hover:text-white">Hakkında</a>
          <a href="#" className="hover:text-white">İletişim</a>
          <a href="#" className="hover:text-white">Gizlilik</a>
        </div>

        {/* Sağ kısım - Sosyal Medya */}
        <div className="flex gap-4 text-xl">
          <a href="#" className="hover:text-white"><FaGithub /></a>
          <a href="#" className="hover:text-white"><FaTwitter /></a>
          <a href="#" className="hover:text-white"><FaInstagram /></a>
        </div>
      </div>

      {/* Alt Kısım */}
      <div className=" mt-6 pt-4 text-center text-sm">
        <p>© {new Date().getFullYear()} FindYourPet. Tüm hakları saklıdır.</p>
        <p className="mt-1 text-gray-400">developed by: <span className="text-white font-semibold">Eslem Akar ᥫ᭡</span></p>
      </div>
    </footer>
  );
};

export default Footer;
