"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function Faqs() {
  const [openItem, setOpenItem] = useState("item-1")

  const faqData = [
    {
      id: "item-1",
      question: "Apakah saya harus bisa bahasa Inggris dulu untuk ikut?",
      answer: "Tidak. Level Beginner dirancang untuk Anda yang benar-benar baru mulai.",
    },
    {
      id: "item-2",
      question: "Apakah ada praktik langsung?",
      answer: "Ya. Setiap sesi selalu ada latihan berbicara dan feedback dari pengajar.",
    },
    {
      id: "item-3",
      question: "Apakah saya bisa lanjut ke level berikutnya?",
      answer: "Tentu. Anda bisa langsung daftar ke periode berikutnya setelah menyelesaikan program.",
    },
    {
      id: "item-4",
      question: "Apakah saya bisa request jadwal program?",
      answer: "Bisa. Jika Anda mendaftar program private, Anda dapat memilih jam belajar di luar jadwal reguler (19.00 WIB).",
    },
    {
      id: "item-5",
      question: "Kelasnya diadakan setiap hari apa saja?",
      answer: "Kelas reguler berlangsung setiap Senin sampai Jumat.",
    },
    {
      id: "item-6",
      question: "Apakah bisa ambil kelas di akhir pekan (weekend)?",
      answer: "Bisa, khusus untuk peserta program private. Kelas dapat diatur pada hari Sabtu dan Minggu, dengan ketentuan 1 hari terdiri dari 2 sesi belajar.",
    },
    {
      id: "item-7",
      question: "Apakah ada pilihan jam belajar?",
      answer: "Tentu. Berikut pilihan jadwal yang tersedia:\n● Reguler:\n➔ 19.00–20.00 WIB\n● Private:\n➔ 15.30–16.30 WIB\n➔ 18.00–19.00 WIB\n➔ 19.00–20.00 WIB\n➔ 20.00–21.00 WIB\n➔ 21.00–22.00 WIB",
    },
    {
      id: "item-8",
      question: "Apakah Sudut Bahasa menyediakan placement test?",
      answer: "Ya. Kami menyediakan placement test untuk mengukur kemampuan bahasa Inggris, baik pasif (menulis & membaca) maupun aktif (speaking).",
    },
    {
      id: "item-9",
      question: "Kapan placement test dilakukan?",
      answer: "Test dilakukan setelah Anda menyelesaikan proses pendaftaran dan pembayaran program.",
    },
  ]

  const toggleItem = (itemId) => {
    setOpenItem(openItem === itemId ? null : itemId)
  }

  return (
    <div className="w-full lg:max-w-3xl max-w-full mx-auto mt-12"> 
      <div>
        <div className="space-y-3">
          {faqData.map((item) => (
            <div
              key={item.id}
              className={`border border-slate-100 rounded-xl transition-all duration-200 ${
                openItem === item.id ? "bg-[#0F1143]" : "bg-[#0F1143] hover:bg-purple-700/30"
              }`}
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-4 py-4 text-left flex items-center justify-between rounded-xl"
              >
                <span className="text-white font-semibold text-sm lg:text-2xl leading-relaxed pr-4">{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-white transition-transform duration-200 flex-shrink-0 ${
                    openItem === item.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-200 ease-in-out ${
                  openItem === item.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 pb-4">
                  <p className="text-slate-100 text-sm lg:text-2xl leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
