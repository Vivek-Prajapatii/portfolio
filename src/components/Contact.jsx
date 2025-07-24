import styles from "../styles/Contact.module.scss";

export default function Contact() {
  return (
    <section className={styles.contact}>
      <h2 className={styles.title}>Contact</h2>
      <p className={styles.description}>
        Want to work together or have a question? Drop me a message!
      </p>
      <form className={styles.form} action="#" method="POST">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className={styles.input}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          required
          className={styles.textarea}
        />
        <button type="submit" className={styles.button}>
          Send Message
        </button>
      </form>
    </section>
  );
}
