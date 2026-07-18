import { motion } from 'framer-motion'
import './ReasonsSection.css'

const reasons = [
  { icon: '♡', text: 'لأنك أول حاجة بفكر فيها وأنا صاحي، وآخر حاجة قبل ما أنام' },
  { icon: '✦', text: 'لأن ضحكتك بتنسيني كل تعب يومي' },
  { icon: '☾', text: 'لأنك بيتي وأماني، مهما اتغيرت الدنيا حوالينا' },
  { icon: '❀', text: 'لأنك بتخليني أبقى أحسن نسخة مني' },
  { icon: '★', text: 'لأن قلبي مبيهدأش غير وأنا جنبك' },
  { icon: '✧', text: 'لأن يوم 14/7/2025، يوم ما اتقبلنا فيه، كان أهم وأجمل يوم في حياتي' },
  { icon: '☆', text: 'لأنك وعدي وسندي وأغلى حاجة عندي' },
  { icon: '♥', text: 'لأني مهما عشت وشفت، مش هلاقي زيك' },
]

export default function ReasonsSection() {
  return (
    <section className="reasons-section" id="reasons">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="section-tag">أسباب من قلبي</span>
        <h2 className="section-title">ليه انتي أغلى حاجة في حياتي</h2>
        <p className="section-subtitle">مش محتاجة صور عشان أوصفلك حبي.. الكلام يكفي ♥</p>
      </motion.div>

      <div className="reasons-list">
        {reasons.map((reason, i) => (
          <motion.div
            key={i}
            className="reason-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
          >
            <span className="reason-icon">{reason.icon}</span>
            <span className="reason-text">{reason.text}</span>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="reasons-closing"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        وألف سبب وسبب لسه جوايا.. بس خلاصتهم كلهم إني بحبك ♥
      </motion.p>
    </section>
  )
}
