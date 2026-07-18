import { motion } from 'framer-motion'
import './PromiseSection.css'

export default function PromiseSection() {
  return (
    <section className="promise-section">
      <motion.div
        className="promise-block"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >
        <span className="section-tag">وعد</span>
        <p className="promise-text">
          وعد مني ليكي إن مهما حصل، بجد هفضل زي ما انتي عارفاني بحبك،
          وهفضل أحبك، وهفضل جنبك وسندك، وأدلعك وأشرفك قدام الدنيا كلها،
          وأريح قلبك بكل حاجة حلوة في حياتي.
        </p>
      </motion.div>

      <motion.div
        className="poem-block"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        <span className="section-tag">طول العمر</span>
        <p className="poem-text">
          هتفضلي سبب الخير والسعادة والحب والأمان والراحة،
          والبيت الدافي اللي يروحله قلب جوزك وحبيبك بجد ♥<br /><br />
          مهما حصل، هتفضلي أجمل وأغلى حاجة في حياتي،
          وهفضل عايش ليكي وعلشانك يروح قلبي بجد<br /><br />
          هتفضل ضحكتك دايمًا بتفرح قلبي وبتنسيني الدنيا كلها<br />
          وهتفضل كل حاجة منك على قلبي زي العسل ♥<br /><br />
          بحبك، وهفضل أحبك لحد آخر يوم في عمري،
          يا أجمل وأغلى وأهم وأرق وأحن وأشيك بنوتة في الدنيا كلها ♥♥♥
        </p>
      </motion.div>
    </section>
  )
}
