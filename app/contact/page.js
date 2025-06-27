export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-black px-6 py-33 md:px-20">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 border-b border-black pb-4"> Contact Us</h1>

      <div className="max-w-3xl mx-auto space-y-10">
        <div className="space-y-4 text-lg">
          <p> <strong>Address:</strong> Rashid Building, Saih Al Salam Street, Alisaily, Dubai, UAE </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+971501374524" className="underline">
              971501374524
            </a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:scissorsvipsalon@gmail.com" className="underline"> scissorsvipsalon@gmail.com</a>
          </p>
          <p>
            <strong>Working Hours:</strong> Mon – Sun: 10 a.m to 10 p.m
          </p>
        </div>

        <form className="grid gap-6">
          <div className="grid md:grid-cols-2 gap-4">
            <input  type="text"  placeholder="Your Name" className="border border-black p-3 rounded-md bg-white text-black" />
            <input type="email"placeholder="Your Email" className="border border-black p-3 rounded-md bg-white text-black" />
          </div>
          <textarea  rows={5} placeholder="Your Message"className="border border-black p-3 rounded-md bg-white text-black"
          ></textarea>
          <button type="submit"  className="border border-black px-6 py-3 rounded-md hover:bg-black hover:text-white transition"> Send Message</button>
        </form>
      </div>
    </div>
  );
}
