
import FAQChatbot from "./Components/FAQChatbot"
import Footer from "./Components/Footer";
import Navbar from "./Components/navbar";

function Contact() {
  return (
    <div>
      <Navbar/>
      <FAQChatbot faqsPath="/faqs.json" apiKey="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" />
      <Footer/>
    </div>
  );
}

export default Contact;