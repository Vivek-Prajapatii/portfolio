import styles from "../styles/Contact.module.scss";

export default function Contact() {
  return (
    <section className={styles.contact}>
      <h2>Contact</h2>
      <p>Want to work together or have a question? Drop me a message!</p>
      <form className={styles.form}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows={5} required />
        <button type="submit" className="button">
          Send
        </button>
      </form>
    </section>
  );
}
