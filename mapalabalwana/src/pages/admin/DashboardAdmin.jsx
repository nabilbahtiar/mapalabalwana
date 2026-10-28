import React from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Newspaper,
  Store,
  Map,
  Image as ImageIcon,
  Settings,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const DashboardAdmin = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const userName = user?.name || "Admin Balwana";
  const userEmail = user?.email || "mapalabalwana2526@gmail.com";

  const cards = [
    {
      title: "Data Pengurus",
      description: "Kelola struktur organisasi, jabatan, divisi, angkatan, dan foto anggota.",
      link: "/admin/pengurus",
      icon: Users,
      color: "from-blue-600 to-indigo-600",
      badge: "Utama",
    },
    {
      title: "Portal Berita",
      description: "Tulis, edit, dan publikasikan artikel berita serta kegiatan terbaru.",
      link: "/admin/produk/portal-berita",
      icon: Newspaper,
      color: "from-emerald-500 to-teal-600",
      badge: "Konten",
    },
    {
      title: "Balwana Store",
      description: "Kelola katalog merchandise, harga produk, dan link pemesanan official.",
      link: "/admin/produk/balwana-store",
      icon: Store,
      color: "from-amber-500 to-orange-600",
      badge: "Katalog",
    },
    {
      title: "Sistem Informasi Geografi (GIS)",
      description: "Atur data pemetaan jalur pendakian, koordinat, dan ekspedisi alam.",
      link: "/admin/produk/gis",
      icon: Map,
      color: "from-cyan-500 to-blue-600",
      badge: "Peta & Jalur",
    },
    {
      title: "Galeri Dokumentasi",
      description: "Upload foto kegiatan, ekspedisi alam, dan momen kebersamaan Mapala.",
      link: "/admin/galeri",
      icon: ImageIcon,
      color: "from-violet-500 to-purple-600",
      badge: "Media",
    },
    {
      title: "Pengaturan Akun",
      description: "Ubah nama, email, dan kata sandi akun admin untuk keamanan sistem.",
      link: "/admin/settings",
      icon: Settings,
      color: "from-slate-600 to-slate-800",
      badge: "Keamanan",
    },
  ];

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-8 font-sans">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#3F5F9A] via-[#324f85] to-[#243c68] text-white p-8 md:p-10 shadow-xl">
        <div className="absolute -right-12 -top-12 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute right-24 -bottom-16 w-56 h-56 bg-blue-300/10 rounded-full blur-xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/15 backdrop-blur-md rounded-full text-xs font-semibold tracking-wide text-blue-100 border border-white/20">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Mapala Balwana Administrator</span>
            </div>
            <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight">
              Selamat Datang, {userName}! 👋
            </h1>
            <p className="text-blue-100 text-sm md:text-base max-w-2xl leading-relaxed">
              Panel kendali terpusat website resmi <strong>Mapala Balwana</strong>.
              Kelola data pengurus, postingan berita, katalog store, dan informasi organisasi dengan mudah.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/15 hover:bg-white/25 backdrop-blur-md text-white rounded-xl text-sm font-semibold transition-all border border-white/20"
            >
              <span>Lihat Website</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
            <Link
              to="/admin/pengurus"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#3F5F9A] hover:bg-blue-50 rounded-xl text-sm font-bold shadow-md transition-all hover:shadow-lg"
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Kelola Pengurus</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Account Info Pill */}
      <div className="bg-white rounded-2xl p-4 md:px-6 md:py-4 shadow-sm border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#3F5F9A] flex items-center justify-center font-bold text-base">
            {userName.charAt(0)}
          </div>
          <div>
            <p className="font-semibold text-slate-800">{userName}</p>
            <p className="text-xs text-slate-500">{userEmail}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 font-semibold rounded-full border border-emerald-100">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Online
          </span>
          <span className="inline-flex items-center px-3 py-1 bg-slate-100 text-slate-600 font-medium rounded-full">
            Role: ADMIN
          </span>
        </div>
      </div>

      {/* Menu Cards Grid */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-800">Menu Manajemen Utama</h2>
          <span className="text-xs text-slate-400">Pilih modul yang ingin dikelola</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <Link
                key={idx}
                to={card.link}
                className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-slate-100 hover:border-blue-200 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${card.color} text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider bg-slate-50 px-2.5 py-1 rounded-full border border-slate-100">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-800 group-hover:text-[#3F5F9A] transition-colors mb-1.5">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-50 flex items-center justify-between text-xs font-semibold text-[#3F5F9A]">
                  <span>Buka Menu</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;

