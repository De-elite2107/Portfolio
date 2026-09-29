export default function SiteFooter({ year }: { year: number }) {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p>&copy; {year} Delight Adediran, trading as De-elite Technologies.</p>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  );
}
