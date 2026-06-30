import React, { useState } from 'react';

// ==================== DATA PRODUK ANDA ====================
const headers = ["No", "Nama Produk", "Kategori", "Harga", "Aksi"];

const initialProducts = [
  { id: 1, name: "Laptop Asus", category: "Elektronik", price: "Rp 8.000.000" },
  { id: 2, name: "Sepatu Sport", category: "Fashion", price: "Rp 450.000" },
  { id: 3, name: "Jam Tangan", category: "Aksesoris", price: "Rp 799.000" }
];

// ==================== SUB-KOMPONEN DENGAN FALLBACK STYLE ====================

function Container({ children, className }) {
  return (
    <div 
      style={{ padding: '16px', borderRadius: '12px', backgroundColor: '#f3f4f6', marginBottom: '20px', border: '1px solid #e5e7eb', textAlign: 'left' }}
      className={`p-4 rounded-xl bg-gray-100 mb-6 text-left ${className}`}
    >
      {children}
    </div>
  );
}

function Avatar({ name }) {
  const initial = name ? name.charAt(0).toUpperCase() : '?';
  const colors = { L: '#3b82f6', S: '#ec4899', J: '#f59e0b' };
  const bgColor = colors[initial] || '#6366f1';

  return (
    <div 
      style={{ width: '36px', height: '36px', backgroundColor: bgColor, color: 'white', fontWeight: 'bold', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', border: '2px solid white', fontSize: '14px', marginLeft: '-10px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}
      className="w-9 h-9 text-white font-bold rounded-full flex items-center justify-center border-2 border-white shadow-sm uppercase text-xs mx-0.5"
    >
      {initial}
    </div>
  );
}

function Button({ type, children, onClick }) {
  let bg = '#4f46e5';
  if (type === 'success') bg = '#10b981';
  if (type === 'danger') bg = '#ef4444';

  return (
    <button 
      onClick={onClick} 
      style={{ backgroundColor: bg, color: 'white', padding: '8px 16px', borderRadius: '8px', border: 'none', fontWeight: '500', cursor: 'pointer', fontSize: '14px', flex: 1, margin: '4px' }}
      className="px-4 py-2 rounded-lg text-white font-medium text-sm transition-all active:scale-95 flex-1"
    >
      {children}
    </button>
  );
}

// ==================== KOMPONEN UTAMA (PRAKSUL) ====================
export default function Praksul() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState(initialProducts);

  return (
    // Style pembungkus luar agar semuanya berada di tengah, rapi, dan tidak membesar memenuhi layar
    <div 
      style={{ minHeight: '100vh', backgroundColor: '#f9fafb', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', fontFamily: 'sans-serif' }}
      className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 font-sans"
    >
      {/* Box Utama Card - Dibatasi lebarnya agar tidak mekar raksasa */}
      <div 
        style={{ backgroundColor: 'white', padding: '24px', borderRadius: '16px', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)', maxWidth: '600px', width: '100%', border: '1px solid #f3f4f6' }}
        className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl max-w-2xl w-full border border-gray-100"
      >
        
        {/* Header atas: Badge & Avatar */}
        <div 
          style={{ display: 'flex', justifyContent: 'between', alignItems: 'center', marginBottom: '20px', width: '100%' }}
          className="flex justify-between items-center mb-6"
        >
          <span 
            style={{ backgroundColor: '#e0e7ff', color: '#3730a3', fontSize: '11px', fontWeight: '600', padding: '4px 12px', borderRadius: '9999px', textTransform: 'uppercase' }}
            className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider"
          >
            Komponen Praksul
          </span>
          <div style={{ display: 'flex', paddingLeft: '10px' }} className="flex">
            <Avatar name="Budi" />
            <Avatar name="Siti" />
          </div>
        </div>

        {/* Container Daftar Produk */}
        <Container>
          <h1 
            style={{ fontSize: '24px', fontWeight: 'bold', margin: '0 0 4px 0', color: '#111827' }}
            className="text-2xl font-bold mb-1 text-gray-900 tracking-tight"
          >
            Daftar Produk
          </h1>
          <p 
            style={{ fontSize: '14px', color: '#4b5563', margin: 0 }}
            className="text-gray-500 text-sm"
          >
            Berikut adalah daftar produk terbaru.
          </p>
        </Container>

        {/* TABEL DATA PRODUK */}
        {products.length > 0 ? (
          <div 
            style={{ width: '100%', overflowX: 'auto', borderRadius: '8px', border: '1px solid #e5e7eb', marginTop: '16px' }}
            className="w-full overflow-x-auto rounded-xl border border-gray-200 shadow-sm mt-4"
          >
            <table 
              style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}
              className="w-full text-sm text-left text-gray-500"
            >
              <thead 
                style={{ backgroundColor: '#f3f4f6', color: '#374151', textTransform: 'uppercase', fontSize: '12px' }}
                className="text-xs text-gray-700 uppercase bg-gray-100 border-b"
              >
                <tr>
                  {headers.map((header, i) => (
                    <th key={i} style={{ padding: '10px 12px', fontWeight: '600' }} className="px-4 py-2.5">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody style={{ backgroundColor: 'white' }} className="divide-y divide-gray-200">
                {products.map((product, index) => (
                  <tr key={product.id} style={{ borderBottom: '1px solid #f3f4f6' }} className="hover:bg-gray-50">
                    <td style={{ padding: '12px', color: '#6b7280' }} className="px-4 py-3">{index + 1}</td>
                    <td style={{ padding: '12px', color: '#111827', fontWeight: '600' }} className="px-4 py-3 font-semibold">{product.name}</td>
                    <td style={{ padding: '12px' }} className="px-4 py-3">
                      <span style={{ backgroundColor: '#f3f4f6', padding: '2px 8px', borderRadius: '4px', fontSize: '12px', color: '#374151' }}>
                        {product.category}
                      </span>
                    </td>
                    <td style={{ padding: '12px', color: '#4f46e5', fontWeight: 'bold' }} className="px-4 py-3 font-bold text-indigo-600">{product.price}</td>
                    <td style={{ padding: '12px' }} className="px-4 py-3">
                      <button 
                        onClick={() => {
                          setCount(count + 1);
                          alert(`${product.name} ditambahkan ke keranjang!`);
                        }}
                        style={{ backgroundColor: '#e0e7ff', color: '#4f46e5', border: 'none', padding: '4px 10px', borderRadius: '6px', fontSize: '12px', fontWeight: '600', cursor: 'pointer' }}
                        className="bg-indigo-50 text-indigo-600 hover:bg-indigo-100 text-xs px-2.5 py-1.5 rounded-md font-semibold"
                      >
                        Pilih
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '24px', color: '#9ca3af', border: '1px dashed #d1d5db', borderRadius: '8px' }}>
            Tidak ada produk yang tersedia.
          </div>
        )}

        {/* Panel Kontrol Bawah (Keranjang & Tombol Aksi) */}
        <div 
          style={{ marginTop: '20px', padding: '16px', backgroundColor: '#f9fafb', borderRadius: '12px', border: '1px solid #f3f4f6', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}
          className="mt-6 p-4 bg-gray-50 rounded-xl border flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div style={{ textAlign: 'left' }}>
            <p style={{ margin: 0, fontSize: '11px', color: '#9ca3af', textTransform: 'uppercase', fontWeight: 'bold' }}>Total Keranjang</p>
            <p style={{ margin: '2px 0 0 0', fontSize: '20px', fontWeight: '900', color: '#4f46e5' }}>{count} Produk</p>
          </div>
          
          <div style={{ display: 'flex', gap: '8px' }} className="flex gap-2">
            <Button type="success" onClick={() => alert(`Berhasil menyimpan ${count} produk!`)}>
              Simpan
            </Button>
            <Button type="danger" onClick={() => { setProducts([]); setCount(0); }}>
              Hapus Semua
            </Button>
          </div>
        </div>

        {/* Footer */}
        <footer 
          style={{ marginTop: '24px', fontSize: '11px', textAlign: 'center', color: '#9ca3af', borderTop: '1px solid #f3f4f6', paddingTop: '12px' }}
          className="mt-6 text-xs text-center text-gray-400 border-t pt-4"
        >
          Dibuat dengan React & Tailwind CSS © 2026
        </footer>

      </div>
    </div>
  );
}