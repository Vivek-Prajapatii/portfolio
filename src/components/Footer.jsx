export default function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "2rem 0",
        color: "#7f5af0",
        fontWeight: 600,
        fontSize: "1.1rem",
        background: "rgba(255,255,255,0.5)",
        boxShadow: "0 2px 8px rgba(127,90,240,0.08)",
        marginTop: "3rem",
        borderRadius: "18px",
        backdropFilter: "blur(8px)",
      }}
    >
      © {new Date().getFullYear()} Vivek Prajapati &mdash; Frontend Developer
    </footer>
  );
}
