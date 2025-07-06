"use client";
import Image from "next/image";
// Asset imports - Logo and hero images
import Logo from "@/app/assets/logo.webp";
import Speakers from "@/app/assets/speakers-hero.webp";
// Icon imports - Warning and sad icons for UI elements
import Warningicon from "@/app/assets/icons/icon-warning.png";
import SadIcon from "@/app/assets/icons/icon-sad.png";
import JerryPicture from "@/app/assets/jerry-picture.webp";
import WomenSpeaker from "@/app/assets/women-speaker.webp";
import ProgramTitle from "@/app/assets/program-speaking-master-title.webp";
import Laptop from "@/app/assets/laptop.webp";
import Beginner from "@/app/assets/beginner.webp";
import Intermediate from "@/app/assets/intermediate.webp";
import Advanced from "@/app/assets/advanced.webp";
import BenefitIcon1 from "@/app/assets/icons/icon-benefit1.png";
import BenefitIcon2 from "@/app/assets/icons/icon-benefit2.png";
import BenefitIcon3 from "@/app/assets/icons/icon-benefit3.png";
import CheckCircleIcon from "@/app/assets/icons/icon-check-circle.svg";
import CheckCircleFilledIcon from "@/app/assets/icons/icon-check-circle-filled.svg";
import CloseIcon from "@/app/assets/icons/icon-close-filled.svg";
import Accent from "@/app/assets/accent.svg";
import Accent3 from "@/app/assets/accent3.svg";
import Accent2 from "@/app/assets/accent2.svg";
import Client1 from "@/app/assets/client1.webp";
import Client2 from "@/app/assets/client2.webp";
import Client3 from "@/app/assets/client3.webp";
import Client4 from "@/app/assets/client4.webp";
import BlueBackround from "@/app/assets/blue-background.webp";

import TestimonialSlider from "./components/testimonial-slider";
import Faqs from "./components/faqs";
export default function Home() {
  // Data: Common problems students face when learning English
  // This array is used to dynamically render the problems section
  const problemsWhenLearning = [
    "Paham teori, tapi tetap gugup dan tiba-tiba blank saat harus berbicara.",
    "Sering kesulitan merespons karena tidak terbiasa berbicara secara spontan.",
    "Masih bingung menyesuaikan cara berkomunikasi di situasi formal dan informal.",
    "Program yang Anda ikuti terlalu fokus pada hafalan, bukan praktik speaking secara nyata.",
  ];

  // Data: Benefits of choosing Speaking Master program
  // This array contains the key benefits with icons, titles, and descriptions
  const benefits = [
    {
      id: 1,
      icon: BenefitIcon1,
      title: "Pengajar Berpengalaman",
      description:
        "Belajar langsung dari pengajar yang sudah lebih dari lima tahun mengajar di Kampung Inggris dan terbiasa menangani berbagai level peserta.",
      altText: "benefit-icon-1",
    },
    {
      id: 2,
      icon: BenefitIcon2,
      title: "Kelas Interaktif",
      description:
        "Setiap sesi dirancang interaktif, jadi Anda tidak hanya mendengarkan, tapi aktif berbicara dan mendapat koreksi secara real-time.",
      altText: "benefit-icon-2",
    },
    {
      id: 3,
      icon: BenefitIcon3,
      title: "Materi Bertahap & Terstruktur",
      description:
        "Disusun untuk membantu Anda berkembang secara progresif, dari dasar hingga mampu bicara lancar dalam berbagai situasi.",
      altText: "benefit-icon-3",
    },
  ];

  const features = [
    "Kelas kecil (maks. 4–7 peserta tergantung paket yang dipilih)*",
    "60 menit belajar + 15 menit tanya jawab",
    "Modul sistematis & laporan progres",
    "Mentoring one-on-one",
    "E-certificate resmi",
    "Jadwal kelas: 19.00–20.00 WIB",
    "Garansi uang kembali**",
    "Rekaman video pembelajaran***",
  ];

  const packages = [
    {
      duration: "2 Minggu",
      meetings: 10,
      description: "10 pertemuan selama 2 minggu",
      promo_note: "Promo berakhir 5 hari lagi",
      original_price: 450000,
      discount_percent: 45,
      discounted_price: 275000,
    },
    {
      duration: "1 Bulan",
      meetings: 20,
      description: "20 pertemuan selama 1 bulan",
      promo_note: "Promo berakhir 5 hari lagi",
      original_price: 918000,
      discount_percent: 45,
      discounted_price: 500000,
    },
    {
      duration: "1,5 Bulan",
      meetings: 30,
      description: "30 pertemuan selama 1,5 bulan",
      promo_note: "Promo berakhir 5 hari lagi",
      original_price: 1377000,
      discount_percent: 45,
      discounted_price: 775000,
    },
  ];

  // Data: Video testimonials and learning atmosphere demonstrations
  // This array contains video testimonials and class demonstrations
  const videoTestimonials = [
    {
      id: 1,
      title: "Winda Khair – Artis FTV",
      videoId: "v3mtkmR8ACE",
      embedUrl: "https://www.youtube.com/embed/V3L7KkYbleI?si=-QfSEBD7OrCTdmKR",
      description:
        "Testimoni dari artis FTV tentang pengalaman belajar di Speaking Master",
    },
    {
      id: 2,
      title: "Speaking Master - Advanced Level",
      videoId: "v3mtkmR8ACE",
      embedUrl: "https://www.youtube.com/embed/u5HNFRT27y8?si=jVjhshQqlc0B0jkl",
      description:
        "Suasana pembelajaran di kelas Advanced Level Speaking Master",
    },
    {
      id: 3,
      title: "One-on-One (Private) Session",
      videoId: "v3mtkmR8ACE",
      embedUrl: "https://www.youtube.com/embed/TECW9qhLPTg?si=VYhCpF80KvHyRjVZ",
      description: "Sesi pembelajaran private one-on-one dengan mentor",
    },
  ];

  const suitableCriteria = [
    "Ingin belajar bahasa Inggris dari nol.",
    "Siap belajar secara konsisten dan menghargai proses.",
    "Ingin terbiasa berbicara spontan, bukan hanya paham teori.",
    "Butuh praktik nyata dan feedback langsung setiap sesi.",
  ];

  const unSuitableCriteria = [
    "Belajar hanya untuk terlihat hebat di depan orang lain.",
    "Ingin hasil instan tanpa usaha.",
    "Tidak siap menerima feedback atau arahan.",
    "Tidak berkomitmen ikut kelas secara rutin.",
  ];

  return (
    <>
      <section className="custom-container space-y-8 md:space-y-12 lg:space-y-16 px-4 md:px-6 lg:px-8 py-8 md:py-24 lg:py-32">
        {/* SECTION 1: BRANDING - Logo display at the top */}
        <div className="text-center">
          <Image
            src={Logo}
            alt="logo"
            className="mx-auto w-24 md:w-32 lg:w-48 h-auto"
          ></Image>
        </div>

        {/* SECTION 2: HERO SECTION - Main title and value proposition */}
        <div className="text-center space-y-4 md:space-y-6 lg:space-y-8">
          <h2 className="section-title text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center px-2 md:px-4 leading-tight">
            <span className="italic">Speaking</span> Lancar Dimulai dari{" "}
            <span className="italic">Trial, Error,</span> dan Bimbingan yang
            Tepat
          </h2>
          <p className="text-center text-xl md:text-2xl lg:text-3xl xl:text-5xl text-white px-2 md:px-4 leading-tight font-thin">
            Praktik langsung. <span className="italic">Feedback real-time</span>
            . Hasil nyata yang bisa Anda rasakan.
          </p>
          <div className="mt-6 md:mt-8">
            <Image
              src={Speakers}
              alt="speakers"
              className="w-full h-auto rounded-lg"
            ></Image>
          </div>
        </div>

        {/* SECTION 3: PHILOSOPHY - Core learning philosophy explanation */}
        <div className="px-2 md:px-4 lg:-translate-y-[100px]">
          <p className="text-[#535353] text-lg md:text-xl lg:text-2xl xl:text-4xl font-medium leading-relaxed text-center ">
            Kemampuan{" "}
            <span className="text-white">
              speaking tidak didapat secara instan, tapi dari proses trial and
              error yang konsisten.
            </span>{" "}
            Jika mau terus mencoba, menerima feedback, dan memperbaiki diri,{" "}
            <span className="text-white">hasil akhirnya jauh lebih</span> baik
            daripada yang hanya mencoba sekali lalu berhenti.
          </p>
        </div>

        {/* SECTION 4: ATTENTION BOX - Important reminder with neon styling */}
        <div className="w-full mt-8 md:mt-12 lg:mt-4 px-2 md:px-4">
          <div
            className="relative rounded-lg p-2 md:p-6 lg:p-8 bg-transparent"
            style={{
              border: "2px solid #ff3333",
              boxShadow:
                "0 0 25px rgba(255, 51, 51, 0.4), 0 0 50px rgba(255, 51, 51, 0.2)",
            }}
          >
            {/* Warning icon and label positioned absolutely */}
            <div className="bg-[#020B19] rounded-sm px-2 md:px-4 lg:px-6 absolute -top-6 md:-top-8 lg:-top-12 left-4 md:left-6 lg:left-8 flex items-center gap-2">
              <Image
                src={Warningicon}
                alt="warning icon"
                className="w-8 md:w-16 lg:w-24 h-auto"
              ></Image>
              <p className="neon-warning-text text-3xl md:text-4xl lg:text-[60px]">
                INGAT
              </p>
            </div>
            {/* Warning message content */}
            <div className="flex-1 pt-6 md:pt-8 lg:pt-12 px-2 md:px-4">
              <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-white leading-relaxed">
                Tidak harus sempurna sejak awal. Yang penting, Anda konsisten
                praktik, siap menerima feedback, dan mau berkembang.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 5: COMPANY INTRODUCTION - About Sudut Bahasa */}
        <div className="px-2 md:px-4  mt-8 md:mt-12 lg:mt-16 xl:mt-32 ">
          <p className="text-[#535353] text-center text-lg md:text-xl lg:text-2xl xl:text-4xl font-medium leading-relaxed">
            <strong>Sudut Bahasa</strong>, lembaga kursus Bahasa Inggris yang
            berlokasi di Kediri, Jawa Timur, hadir untuk{" "}
            <span className="text-white">membantu Anda mencapai itu.</span>{" "}
            Saatnya mulai dengan kami.
          </p>
        </div>
      </section>

      <section>
        <div className="w-full relative">
          {/* SECTION 6: CALL TO ACTION - Primary registration button */}
          <div className="text-center px-4 w-full flex justify-center absolute bottom-0">
            <a
              href=""
              className="inline-block bg-[#DD1D5E] hover:bg-[#c1164f] transition-colors duration-300 rounded-full text-center px-6 md:px-8 lg:px-12 py-3 md:py-4 lg:py-6 text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold uppercase text-white "
            >
              Daftar Sekarang
            </a>
          </div>
          <Image src={Accent2} alt="accent-2" className="w-full"></Image>
        </div>

        <div className="relative">
          <Image
            src={BlueBackround}
            className="absolute -z-10 -translate-y-8 lg:-translate-y-32 xl:-translate-y-38 w-full h-full object-cover"
          />

          <div className="custom-container">
            {/* SECTION 7: PROBLEMS HEADER - Introduction to common learning problems */}
            <div className="px-2 md:px-4 pt-12 lg:pt-32">
              <p className="text-3xl md:text-4xl lg:text-5xl xl:text-8xl">
                <span className="section-title text-left block mb-2 md:mb-4">
                  Pernah Mengalami Ini saat Belajar Bahasa Inggris?
                </span>🫵
              </p>
            </div>

            {/* SECTION 8: PROBLEMS LIST - Dynamic rendering of learning problems */}
            <div className="space-y-4 md:space-y-6 px-2 md:px-4 mt-12 lg:mt-24">
              {problemsWhenLearning.map((problem, index) => (
                <div
                  className="flex items-start gap-3 md:gap-4 lg:gap-6"
                  key={index}
                >
                  <Image
                    src={SadIcon}
                    alt="sad-icon"
                    className="w-5 md:w-6 lg:w-20 h-auto mt-1 flex-shrink-0"
                  />
                  <p className="text-white text-base md:text-lg lg:text-xl xl:text-4xl font-light leading-relaxed">
                    {problem}
                  </p>
                </div>
              ))}
            </div>

            {/* SECTION 9: EMPATHY MESSAGE - Reassurance that they're not alone */}
            <div className="text-left mt-12 lg:mt-24">
              <div className="neon-yellow-text text-2xl lg:text-5xl font-bold">
                JIKA YA, ANDA TIDAK SENDIRI.
              </div>
            </div>

            {/* SECTION 10: PROBLEM EXPLANATION - Why speaking skills don't develop naturally */}
            <div className="text-left mt-3">
              <p className="text-white text-lg md:text-xl lg:text-2xl xl:text-4xl font-normal leading-relaxed">
                Tanpa ruang untuk mencoba, salah, lalu diperbaiki, kemampuan
                <span className="italic"> speaking </span>sulit berkembang
                secara alami.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        {/* SECTION 11: TRANSITION HEADER */}
        <div className="px-2 md:px-4 mt-12 lg:mt-24 custom-container">
          <h2 className="section-title text-2xl md:text-3xl lg:text-7xl text-center leading-tight">
            Ternyata Bukan Teori yang Bikin Lancar Speaking…
          </h2>
        </div>

        <div>
          <Image src={JerryPicture} alt="jerry-picture"></Image>
        </div>

        <div className="custom-container lg:-translate-y-[200px] text-center">
          <p className="text-white text-lg lg:text-4xl text-light">
            <strong>
              Jerry Uelsmann, dosen fotografi senior di{" "}
              <span className="italic">University of Florida, </span>
            </strong>
            pernah melakukan eksperimen sederhana. Beliau membagi mahasiswa
            menjadi dua grup: satu fokus pada <strong>kuantitas foto</strong>,
            satunya lagi pada
            <strong> kualitas.</strong>
          </p>

          <br />
          <br />

          <p className="text-white text-lg lg:text-4xl  text-light">
            Yang mengejutkan, <strong>hasil terbaik</strong> justru datang dari{" "}
            <strong>grup kuantitas</strong>
            yang lebih banyak mencoba dan gagal.
          </p>
        </div>
      </section>

      <section>
        <div className="mb-24 lg:mb-12 relative">
          <Image src={WomenSpeaker} alt="women-speaker-picture" />
          <div className="z-20 lg:absolute lg:top-1/4 left-0 w-full">
            <div className="custom-container">
              <h2 className="section-title text-2xl lg:text-7xl text-left mb-12 lg:w-[17ch]">
                Kenapa yang sering gagal justru menjadi yang terbaik?
              </h2>
              <p className="text-white text-lg lg:text-4xl font-normal lg:w-[27ch]">
                Karena dengan <strong>banyak mencoba, </strong>seseorang
                otomatis jadi{" "}
                <strong>
                  lebih peka, lebih terampil, dan lebih cepat belajar dari
                  kesalahan. 
                </strong>
              </p>
              <br />
              <p className="text-white text-lg lg:text-4xl text-light lg:w-[27ch]">
                Ini juga <strong>berlaku saat belajar </strong> Kalau Anda ingin
                lebih lancar, jangan tunggu sempurna dulu untuk mulai. Mulailah
                dulu, dan lihat sendiri progresnya.
              </p>
              <br />
              <p className="text-white text-lg lg:text-4xl text-ligh lg:w-[32ch]">
                Di program Speaking Master, Anda akan terbiasa bicara setiap
                hari dengan bimbingan, feedback, dan praktik yang konsisten.
              </p>
            </div>
          </div>
        </div>

        <div className="custom-container mt-10 lg:mt-0">
          <Image
            src={ProgramTitle}
            alt="program-speaking-master-title"
            className="mb-8"
          />
          <p className="text-lg lg:text-4xl text-center text-light text-[#535353]">
            Speaking Master adalah program{" "}
            <span className="text-white">
              kursus bahasa Inggris yang fokus pada praktik speaking
            </span>
            , bukan teori. Di sini, Anda dibiasakan bicara dengan percaya diri
            setiap hari.
            <br />
            <br />
            Dengan{" "}
            <strong>
              metode <span className="italic">Impromptu Speech</span>
            </strong>
            , Anda dilatih untuk berbicara secara spontan, melatih refleks, dan
            mengurangi rasa gugup dalam berbagai situasi.
          </p>
        </div>
      </section>

      <section className=" bg-gradient-to-t from-[#15072D]  to-[#010B18] pb-24 lg:mt-12">
        <div className="custom-container">
          <Image src={Laptop} alt="laptop" className="w-full h-auto my-16" />
          <h2 className="section-title text-2xl lg:text-7xl text-center mb-16">
            Materi Dipersonalisasi Sesuai Kemampuan Anda
          </h2>

          <div>
            <div className="flex flex-col lg:flex-row w-full items-start gap-4 lg:gap-10">
              <Image
                src={Beginner}
                alt="Beginner"
                className="w-full h-auto mt-12"
              />
              <div className="lg:pt-10">
                <h3 className="neon-yellow-text text-2xl lg:text-6xl">
                  Level Beginner
                </h3>
                <p className="text-light lg:text-4xl lg:mt-2 text-[#535353]">
                  Mulai dari nol dan bangun pondasi speaking yang kuat sejak
                  awal.{" "}
                  <span className="text-white">
                    Fokus pada daily conversation (termasuk pengucapan dan
                    kosakata dasar)
                  </span>{" "}
                  sebelum masuk ke formal situation.
                </p>
              </div>
            </div>
            <div className="flex flex-col-reverse lg:flex-row w-full items-start gap-4 lg:gap-10">
              <div className="lg:pt-10">
                <h3 className="neon-yellow-text text-2xl lg:text-6xl">
                  Level Intermediate
                </h3>
                <p className="lg:mt-2 text-[#535353] text-lg lg:text-3xl text-light">
                  <span className="text-white">
                    Bicara lebih lancar, lebih tepat, dan lebih percaya diri.
                  </span>{" "}
                  Cocok untuk memperluas kosakata, berbagai situasi.{" "}
                  <span className="text-white">
                    Anda juga dilatih menjawab pertanyaan secara spontan dengan
                    idea mapping,
                  </span>{" "}
                  yang sering menjadi tantangan karena belum terbiasa menyusun
                  ide dengan cepat.
                </p>
              </div>
              <Image
                src={Intermediate}
                alt="intermediate"
                className="w-full h-auto mt-12"
              />
            </div>
            <div className="flex flex-col lg:flex-row w-full items-start gap-4 lg:gap-10">
              <Image
                src={Advanced}
                alt="advanced"
                className="w-full h-auto mt-12"
              />
              <div className="lg:pt-10">
                <h3 className="neon-yellow-text text-2xl lg:text-6xl">
                  Level Advanced
                </h3>
                <p className="text-[#535353] text-lg lg:text-4xl text-light">
                  <span className="text-white">
                    Bicara secara profesional, akurat, dan siap tampil di forum
                    formal.
                  </span>{" "}
                  Berbicara seperti native speaker, dalam konteks akademik,
                  kerja, atau presentasi publik.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="custom-container mt-12 lg:pt-24">
        <h2 className="section-title text-4xl lg:text-8xl text-left">
          Kenapa Memilih Speaking Master?
        </h2>

        {/* SECTION: BENEFITS GRID - Dynamic rendering of program benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16 mt-12 lg:mt-32">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="text-[#D9D9D9] p-4">
              <Image
                src={benefit.icon}
                alt={benefit.altText}
                className="lg:w-[98px] w-[75px] h-auto"
              />
              <h3 className="lg:text-5xl text-2xl font-bold capitalize my-3 lg:my-6">
                {benefit.title}
              </h3>
              <p className="lg:text-3xl text-lg font-light">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="special-card border-r-2 border-l-2 border-white p-4 lg:p-12 text-[#D9D9D9] mt-12 lg:mt-32">
          <h2 className="section-title text-3xl lg:text-7xl text-left">
            Biaya dan Fasilitas Program Speaking Master
          </h2>
          <p className="text-xl lg:text-3xl my-6 font-normal">
            Program reguler berdurasi 2 minggu hingga 1,5 bulan, tergantung
            paket yang dipilih. Kelas dibuka setiap tanggal 10 (Beginner &
            Advanced) dan 25 (Intermediate).
          </p>
          <p className="text-xl lg:text-3xl font-normal mb-3">
            Fasilitas meliputi:
          </p>
          <div>
            {features.map((feature, index) => (
              <div
                key={feature + index}
                className="flex items-center gap-4 mb-6 "
              >
                <Image
                  src={CheckCircleIcon}
                  alt={feature}
                  className="w-[24px] h-auto"
                />
                <p className="text-xl lg:text-3xl font-normal">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        <h3 className="neon-yellow-text text-3xl lg:text-7xl mt-24 mb-12 text-center">
          Harga Paket
        </h3>

        {/* SECTION: PRICING CARDS - Dynamic rendering of all package options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((packageItem, index) => (
            <div
              key={index}
              className="relative w-full h-96 bg-gradient-to-br from-[#FFFBFB] to-[#A0A0A1] rounded-3xl border-4 gradient-border shadow-lg overflow-hidden border-pink-600"
            >
              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col">
                {/* Main heading */}
                <div className="text-center mb-4">
                  <h1 className="lg:text-5xl text-4xl font-bold text-black mb-2">
                    {packageItem.duration}
                  </h1>
                  <p className="lg:text-2xl text-xl text-black leading-tight">
                    {packageItem.meetings} pertemuan
                    <br />
                    selama {packageItem.duration.toLowerCase()}
                  </p>
                </div>

                {/* Promo badge */}
                <div className="flex justify-center mb-8">
                  <div className="bg-gradient-to-r from-[#DD1D5E] via-[#221D86] to-[#561467] text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {packageItem.promo_note}
                  </div>
                </div>

                {/* Pricing */}
                <div className="mt-auto text-center">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="text-lg text-black/60 line-through">
                      Rp{packageItem.original_price.toLocaleString("id-ID")}
                    </span>
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                      -{packageItem.discount_percent}%
                    </span>
                  </div>
                  <div className="text-4xl lg:text-5xl font-extrabold text-black">
                    Rp{packageItem.discounted_price.toLocaleString("id-ID")}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm lg:text-xl text-[#535353] my-12 lg:my-16">
          *Berlaku untuk kelas reguler, untuk kelas private maks. 1 siswa per
          kelas.
          <br />
          **Berlaku untuk paket tertentu.
          <br />
          ***Tersedia untuk paket 1-1,5 bulan, sedangkan untuk paket 2 minggu
          hanya tersedia jika diminta
        </p>
      </div>

      <div className="text-center px-4 w-full flex justify-center mt-12 lg:mt-24">
        <a
          href=""
          className="inline-block bg-[#DD1D5E] hover:bg-[#c1164f] transition-colors duration-300 rounded-full text-center px-6 md:px-8 lg:px-12 py-3 md:py-4 lg:py-6 text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold uppercase text-white "
        >
          Daftar Sekarang
        </a>
      </div>

      <Image src={Accent} alt="accent" className="w-full h-auto z-[9999]" />
      <div className="last-gradient">
        <div className="custom-container pt-32 lg:pt-12">
          <h2 className="section-title text-4xl mb-12 lg:text-7xl text-center">
            Seperti Apa Suasana Belajar di Speaking Master?
          </h2>

          {/* SECTION: VIDEO TESTIMONIALS - Dynamic rendering of video testimonials and class demonstrations */}
          <div className="space-y-24 lg:mt-24">
            {videoTestimonials.map((video) => (
              <div key={video.id}>
                <h3 className="section-title text-2xl lg:text-5xl text-center mb-8">
                  {video.title}
                </h3>
                <div className="border-4 p-2 border-pink-500 rounded-xl bg-[#010B18]">
                  <iframe
                    className="w-full h-[210px] lg:h-[600px] rounded-xl"
                    src={video.embedUrl}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="custom-container mt-24 lg:mt-32">
          <h2 className="section-title text-4xl lg:text-7xl text-center mb-12">
            Apa Kesan Para Alumni Speaking Master?
          </h2>

          <TestimonialSlider />

          <h2 className="neon-yellow-text text-4xl lg:text-7xl text-center mb-12 mt-12 lg:mt-64">
            Sebelum Daftar, Pastikan Program Ini Cocok untuk Anda
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 mt-24 relative">
            <div className="border-green-400 bg-gradient-to-t from-[#060721] to-[#2B1A57]  border-2 rounded-4xl p-6 lg:pb-48">
              <p className="text-xl md:text-2xl mb-2 text-white font-bold">
                Cocok untuk Anda yang:
              </p>
              <ul className="space-y-4">
                {suitableCriteria.map((item, index) => (
                  <li
                    key={index}
                    className="md:text-2xl text-white flex gap-4 items-center"
                  >
                    <Image
                      src={CheckCircleFilledIcon}
                      alt="icon"
                      className="w-[32px] h-auto"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-red-400 bg-gradient-to-t from-[#060721] to-[#2B1A57]  border-2 rounded-4xl p-6 lg:pb-48">
              <p className="text-xl md:text-2xl mb-2 text-white font-bold">
                Tidak Cocok untuk Anda yang:
              </p>
              <ul className="space-y-4">
                {unSuitableCriteria.map((item, index) => (
                  <li
                    key={index}
                    className="md:text-2xl text-white flex gap-4 items-start"
                  >
                    <Image
                      src={CloseIcon}
                      alt="icon"
                      className="w-[32px] h-auto"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="relative w-full lg:h-[100px] hidden lg:block">
          <Image
            src={Accent3}
            alt="accent"
            className="absolute lg:-bottom-64 z-10 left-0 w-full hidden lg:block"
          />
        </div>

        <div className="custom-container mt-24 z-20">
          <h2 className="section-title text-4xl lg:text-7xl text-center lg:mt-48">
            Kalau Anda merasa cocok, mulailah dengan kami!
          </h2>

          <p className="text-[#535353] text-xl md:text-4xl text-center mt-12 text-medium">
            Latihan rutin dan feedback langsung akan membantu Anda bicara lebih
            lancar dan alami. Mulai kelasnya, rasakan sendiri progresnya.
          </p>

          <div className="text-center px-4 w-full flex justify-center mt-12 my-24">
            <a
              href=""
              className="inline-block bg-[#DD1D5E] hover:bg-[#c1164f] transition-colors duration-300 rounded-full text-center px-6 md:px-8 lg:px-12 py-3 md:py-4 lg:py-6 text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold uppercase text-white "
            >
              Daftar Sekarang
            </a>
          </div>

          <h2 className="section-title text-4xl lg:text-7xl text-center my-12">
            Frequently Asked Questions
          </h2>
          <Faqs />

          <h2 className="section-title text-4xl lg:text-7xl text-center mt-32 mb-8">
            Our Clients
          </h2>

          <div className="grid grid-cols-2 gap-12 mt-12">
            <Image src={Client1} alt="client-1" className="w-full h-auto" />
            <Image src={Client2} alt="client-2" className="w-full h-auto" />
            <Image src={Client3} alt="client-3" className="w-full h-auto" />
            <Image src={Client4} alt="client-4" className="w-full h-auto" />
          </div>
        </div>
      </div>

      <footer className="bg-gradient-to-b from-[#0C0E40] to-[#060721] text-center text-xs lg:text-lg text-[#808080] py-8 mt-12">
        <p>CV. Sudut Bahasa Membangun Negeri | IO LKP 421.9/4307/418.20/2023</p>
        <p>Copyright © 2025 All rights reserved</p>
      </footer>
    </>
  );
}
