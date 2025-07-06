"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
// import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    text: "Materinya mudah dipahami dan cara mengajar Miss Icha bikin kelas terasa lebih hidup dan menyenangkan.",
    author: "Chitra Indah Sari",
    role: "Dosen UIN Mahmud Yunus Batusangkar & Mahasiswa S3 UPSI Kuala Lumpur",
    rating: 4.5,
  },
  {
    id: 2,
    text: "Praktiknya banyak, materinya simpel dan relevan buat kebutuhan kerja saya.",
    author: "Resty Tesowati",
    role: "CS Project Management, Shopee Express",
    rating: 5.0,
  },
  {
    id: 3,
    text: "Metode impromptu-nya menantang, tapi justru bikin saya makin lancar dan terbiasa.",
    author: "Diah Paramita Amirtawati",
    role: "Mahasiswa Pascasarjana, UIN Prof. K.H. Saifuddin Zuhri",
    rating: 4.0,
  },
  {
    id: 4,
    text: "Belajar dengan Mr. Lang Lang bikin saya makin pede ngomong Inggris.",
    author: "Septian Masna Putra",
    role: "Illustrator Merchandise Resmi Avenged Sevenfold",
    rating: 5.0,
  },
  {
    id: 5,
    text: "Sudah lima kali ikut kelas di Sudut Bahasa, dan di Speaking Master, belajar menyusun argumen untuk presentasi kerja berguna sekali untuk saya.",
    author: "Shinta Fitrihany",
    role: "Pegawai Startup",
    rating: 4.0,
  },
  {
    id: 6,
    text: "Kelas ini bikin saya lebih terbiasa bicara spontan. Suasananya yang suportif bikin saya makin semangat untuk terus latihan dan memperbaiki kemampuan speaking.",
    author: "Jessica",
    role: "Entrepreneur",
    rating: 4.0,
  },
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0
    const stars = []

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="w-4 h-4 text-yellow-400" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          </div>
        </div>,
      )
    }

    const remainingStars = 5 - Math.ceil(rating)
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-400" />)
    }

    return stars
  }

  return (
    <div className="relative w-full ">
      {/* Navigation Arrows */}
      <button

        className="absolute left-0 top-1/2 z-10 text-white hover:bg-white/10 h-12 w-8"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-8 w-8 lg:w-16 lg:h-16 text-purple-600" />
      </button>

      <button
        className="absolute right-0 top-1/2 z-10 text-white hover:bg-white/10 h-12 w-8"
        onClick={nextSlide}
      >
        <ChevronRight className="h-8 w-8 lg:w-16 lg:h-16 text-purple-600" />
      </button>

      {/* Testimonial Card */}
      <div className="max-w-3xl mx-auto">
        <div className="bg-gradient-to-b from-[#20062E] to-[#360F4C] backdrop-blur-sm border-3 border-pink-500/70 rounded-4xl px-8 py-16 text-white">
          <div className="mb-6">
            <p className="text-lg lg:text-3xl leading-relaxed">"{testimonials[currentIndex].text}"</p>
          </div>

          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-lg">{testimonials[currentIndex].author}</h4>
              <p className="text-white/80 text-sm">{testimonials[currentIndex].role}</p>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">{renderStars(testimonials[currentIndex].rating)}</div>
              <span className="text-sm font-medium">{testimonials[currentIndex].rating}/5</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-3 lg:-bottom-12 left-1/2 transform -translate-x-1/2 flex gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white" : "bg-white/40 hover:bg-white/60"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}
