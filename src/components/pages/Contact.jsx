import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaPaperPlane } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { HiSparkles } from "react-icons/hi";
import { MdCheckCircle } from "react-icons/md";
import { fStore } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

/* =======================
   SOCIAL LINKS DATA
======================= */
const socials = [
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    sub: "Connect professionally",
    href: "https://www.linkedin.com/in/apurba-pal-642729265/",
    color: "#0A66C2",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    sub: "See my code",
    href: "https://github.com/apurba-pal",
    color: "#e5e7eb",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    sub: "Follow my journey",
    href: "https://www.instagram.com/apurba__pal/",
    color: "#E1306C",
  },
  {
    icon: SiGmail,
    label: "Email",
    sub: "palapurba2004@gmail.com",
    href: "mailto:palapurba2004@gmail.com",
    color: "#EA4335",
  },
];

/* =======================
   ANIMATION VARIANTS
======================= */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const formVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

/* =======================
   SOCIAL CARD
======================= */
const SocialCard = ({ icon: Icon, label, sub, href, color }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    variants={itemVariants}
    whileHover={{ x: 6, scale: 1.02 }}
    transition={{ duration: 0.2 }}
    className="group flex items-center gap-4 p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-yellow-500/40 hover:bg-white/[0.07] transition-all duration-300"
  >
    {/* Icon bubble */}
    <div
      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
      style={{ background: `${color}18`, border: `1px solid ${color}30` }}
    >
      <Icon className="text-xl" style={{ color }} />
    </div>

    {/* Text */}
    <div className="flex flex-col min-w-0">
      <span className="text-sm font-semibold text-white">{label}</span>
      <span className="text-xs text-gray-500 truncate group-hover:text-gray-400 transition-colors">{sub}</span>
    </div>

    {/* Arrow */}
    <svg
      className="ml-auto text-gray-600 group-hover:text-yellow-500 group-hover:translate-x-1 transition-all duration-300 shrink-0"
      width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
      strokeLinecap="round" strokeLinejoin="round"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  </motion.a>
);

/* =======================
   MAIN COMPONENT
======================= */
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const contactsCollection = collection(fStore, "contacts");
      await addDoc(contactsCollection, { name, email, message });
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3500);
    } catch (error) {
      console.error("Error submitting data:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen text-white px-4 sm:px-8 py-16 sm:py-24 overflow-hidden"
    >
      {/* Background glow accents */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[350px] h-[350px] bg-orange-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">

        {/* ── Section heading ── */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 text-yellow-500 text-xs font-bold uppercase tracking-[0.25em] mb-3">
            <HiSparkles />
            <span>Get In Touch</span>
            <HiSparkles />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Talk
            </span>
          </h1>
          <p className="text-gray-500 mt-3 text-sm sm:text-base max-w-md mx-auto">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </motion.div>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-start">

          {/* ── Left: Social links ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-3 lg:pr-10 lg:border-r border-yellow-500/25"
          >
            {/* Blurb */}
            <motion.div variants={itemVariants} className="mb-2">
              <h2 className="text-lg font-bold text-white mb-1">Find me on</h2>
              <p className="text-sm text-gray-500">Reach out through any of these platforms.</p>
            </motion.div>

            {socials.map((s) => (
              <SocialCard key={s.label} {...s} />
            ))}
          </motion.div>

          {/* ── Right: Contact form ── */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:pl-10"
          >
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl">
              <h2 className="text-lg font-bold text-white mb-1">Send a message</h2>
              <p className="text-sm text-gray-500 mb-6">I'll get back to you as soon as possible.</p>

              {/* Success banner */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="mb-5 flex items-center gap-3 bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium rounded-xl px-4 py-3"
                >
                  <MdCheckCircle className="text-lg shrink-0" />
                  Message sent! I'll be in touch soon.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name + Email row */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Name</label>
                    <input
                      type="text"
                      placeholder="Apurba Pal"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="
                        w-full px-4 py-3 rounded-xl text-sm text-white
                        bg-white/[0.05] border border-white/10
                        placeholder:text-gray-600
                        focus:outline-none focus:border-yellow-500/60 focus:bg-white/[0.08]
                        transition-all duration-200
                      "
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="
                        w-full px-4 py-3 rounded-xl text-sm text-white
                        bg-white/[0.05] border border-white/10
                        placeholder:text-gray-600
                        focus:outline-none focus:border-yellow-500/60 focus:bg-white/[0.08]
                        transition-all duration-200
                      "
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Message</label>
                  <textarea
                    placeholder="Hey Apurba, I'd love to work with you on..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    required
                    className="
                      w-full px-4 py-3 rounded-xl text-sm text-white
                      bg-white/[0.05] border border-white/10
                      placeholder:text-gray-600
                      focus:outline-none focus:border-yellow-500/60 focus:bg-white/[0.08]
                      transition-all duration-200 resize-none
                    "
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                    w-full flex items-center justify-center gap-2.5
                    px-6 py-3.5 rounded-xl
                    text-sm font-semibold text-black
                    bg-gradient-to-r from-yellow-400 to-orange-500
                    shadow-[0_4px_20px_rgba(234,179,8,0.30)]
                    hover:shadow-[0_6px_28px_rgba(234,179,8,0.50)]
                    hover:scale-[1.02]
                    disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100
                    transition-all duration-300
                  "
                >
                  <FaPaperPlane className={`text-sm ${isSubmitting ? "animate-bounce" : ""}`} />
                  {isSubmitting ? "Sending…" : "Send Message"}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
